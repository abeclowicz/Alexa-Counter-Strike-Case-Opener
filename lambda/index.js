const Alexa = require('ask-sdk-core');
const AWS = require('aws-sdk');

/* -------- -------- */

const case_utils = require('./utils/case_utils.js');

const [caseExists, openCase] = [
    case_utils.caseExists, 
    case_utils.openCase
];

/* ======== ======== ======== ======== */

const s3SigV4Client = new AWS.S3({
    signatureVersion: 'v4', 
    region: process.env.S3_PERSISTENCE_REGION
});

function getS3PreSignedUrl(s3ObjectKey) {
    const bucketName = process.env.S3_PERSISTENCE_BUCKET;

    const s3PreSignedUrl = s3SigV4Client.getSignedUrl('getObject', {
        Bucket: bucketName, 
        Key: s3ObjectKey, 
        Expires: 60
    });

    return s3PreSignedUrl;
}

/* ======== ======== ======== ======== */

function escape(html) {
    return Promise.resolve(html
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;')
    );
}

/* ======== ======== ======== ======== */

const OpenCaseHandler = {
    async canHandle(handlerInput) {
        const envelope = handlerInput.requestEnvelope;

        if(Alexa.getRequestType(envelope) !== 'IntentRequest' || Alexa.getIntentName(envelope) !== 'openCase') {
            return false;
        }

        /* -------- -------- */

        const slot = Alexa.getSlot(envelope, 'case');
        const resolutions = slot.resolutions.resolutionsPerAuthority[0];

        if('values' in resolutions === false) {
            return false;
        }

        /* -------- -------- */

        return await caseExists(resolutions.values[0].value.id);
    },

    async handle(handlerInput) {
        const slot = Alexa.getSlot(handlerInput.requestEnvelope, 'case');
        const resolutions = slot.resolutions.resolutionsPerAuthority[0];

        /* -------- -------- */

        const result = await openCase(resolutions.values[0].value.id).catch(
            (error) => {
                console.log(error);
                
                return handlerInput.responseBuilder
                    .speak('Sorry, something went wrong.')
                    .getResponse();
            }
        )

        /* -------- -------- */

        const attributes = handlerInput.attributesManager.getSessionAttributes();

        attributes['last_action'] = {
            intent: 'openCase', 
            case_id: resolutions.values[0].value.id, 
            case_name: resolutions.values[0].value.name
        };

        handlerInput.attributesManager.setSessionAttributes(attributes);

        /* -------- -------- */

        const [audio_open_url, audio_drop_url] = [
            getS3PreSignedUrl('Media/case_open.mp3'), 
            getS3PreSignedUrl('Media/case_drop.mp3')
        ];

        /* -------- -------- */

        const output = 
            `Opening ${await escape(resolutions.values[0].value.name)}...` + 
            `<audio src='${await escape(audio_open_url)}'/>` + 
            `<audio src='${await escape(audio_drop_url)}'/>` + 
            `You got ${await escape(result)}. ` + 
            'Would you like to open another one?'
        ;

        return handlerInput.responseBuilder
            .speak(output)
            .withShouldEndSession(false)
            .getResponse();
    }
};

/* ======== ======== ======== ======== */

const QuickOpenCaseHandler = {
    async canHandle(handlerInput) {
        const envelope = handlerInput.requestEnvelope;

        if(Alexa.getRequestType(envelope) !== 'IntentRequest' || Alexa.getIntentName(envelope) !== 'quickOpenCase') {
            return false;
        }

        /* -------- -------- */

        const slot = Alexa.getSlot(envelope, 'case');
        const resolutions = slot.resolutions.resolutionsPerAuthority[0];

        if('values' in resolutions === false) {
            return false;
        }

        /* -------- -------- */

        return await caseExists(resolutions.values[0].value.id);
    },

    async handle(handlerInput) {
        const slot = Alexa.getSlot(handlerInput.requestEnvelope, 'case');
        const resolutions = slot.resolutions.resolutionsPerAuthority[0];

        /* -------- -------- */
        
        const result = await openCase(resolutions.values[0].value.id).catch(
            (error) => {
                console.log(error);
                
                return handlerInput.responseBuilder
                    .speak('Sorry, something went wrong.')
                    .getResponse();
            }
        )

        /* -------- -------- */

        const attributes = handlerInput.attributesManager.getSessionAttributes();

        attributes['last_action'] = {
            intent: 'quickOpenCase', 
            case_id: resolutions.values[0].value.id
        };

        handlerInput.attributesManager.setSessionAttributes(attributes);

        /* -------- -------- */

        const audio_drop_url = getS3PreSignedUrl('Media/case_drop.mp3');

        /* -------- -------- */

        const output = 
            `<audio src='${await escape(audio_drop_url)}'/>` + 
            `You got ${await escape(result)}. ` + 
            'Would you like to open another one?'
        ;

        return handlerInput.responseBuilder
            .speak(output)
            .withShouldEndSession(false)
            .getResponse();
    }
};

/* ======== ======== ======== ======== */

const UnknownCaseHandler = {
    canHandle(handlerInput) {
        const envelope = handlerInput.requestEnvelope;

        if(Alexa.getRequestType(envelope) !== 'IntentRequest') {
            return false;
        }

        /* -------- -------- */

        return ['openCase', 'quickOpenCase'].includes(Alexa.getIntentName(envelope));
    },

    handle(handlerInput) {
        return handlerInput.responseBuilder
            .speak('Sorry, I don\'t know that one. Please try again.')
            .withShouldEndSession(false)
            .getResponse();
    }
};

/* ======== ======== ======== ======== */

const YesIntentHandler = {
    canHandle(handlerInput) {
        const requestEnvelope = handlerInput.requestEnvelope;

        if(Alexa.getRequestType(requestEnvelope) !== 'IntentRequest' || Alexa.getIntentName(requestEnvelope) !== 'AMAZON.YesIntent') {
            return false;
        }
        
        /* -------- -------- */

        const attributes = handlerInput.attributesManager.getSessionAttributes();

        if('last_action' in attributes === false) {
            return false;
        }

        return ['openCase', 'quickOpenCase'].includes(attributes['last_action'].intent);
    }, 

    async handle(handlerInput) {
        const attributes = handlerInput.attributesManager.getSessionAttributes();

        if(attributes['last_action'].intent === 'openCase') {
            const result = await openCase(attributes['last_action'].case_id).catch(
                (error) => {
                    console.log(error);
                    
                    return handlerInput.responseBuilder
                        .speak('Sorry, something went wrong.')
                        .getResponse();
                }
            )
    
            /* -------- -------- */
    
            const [audio_open_url, audio_drop_url] = [
                getS3PreSignedUrl('Media/case_open.mp3'), 
                getS3PreSignedUrl('Media/case_drop.mp3')
            ];
    
            /* -------- -------- */
    
            const output = 
                `Opening ${await escape(attributes['last_action'].case_name)}...` + 
                `<audio src='${await escape(audio_open_url)}'/>` + 
                `<audio src='${await escape(audio_drop_url)}'/>` + 
                `You got ${await escape(result)}. ` + 
                'Would you like to open another one?'
            ;
    
            return handlerInput.responseBuilder
                .speak(output)
                .withShouldEndSession(false)
                .getResponse();
        }
        else {
            const result = await openCase(attributes['last_action'].case_id).catch(
                (error) => {
                    console.log(error);
                    
                    return handlerInput.responseBuilder
                        .speak('Sorry, something went wrong.')
                        .getResponse();
                }
            )
    
            /* -------- -------- */
    
            const audio_drop_url = getS3PreSignedUrl('Media/case_drop.mp3');
    
            /* -------- -------- */
    
            const output = 
                `<audio src='${await escape(audio_drop_url)}'/>` + 
                `You got ${await escape(result)}. ` + 
                'Would you like to open another one?'
            ;
    
            return handlerInput.responseBuilder
                .speak(output)
                .withShouldEndSession(false)
                .getResponse();
        }
    }
};

/* ======== ======== ======== ======== */

const NoIntentHandler = {
    canHandle(handlerInput) {
        const requestEnvelope = handlerInput.requestEnvelope;

        if(Alexa.getRequestType(requestEnvelope) !== 'IntentRequest' || Alexa.getIntentName(requestEnvelope) !== 'AMAZON.NoIntent') {
            return false;
        }
        
        /* -------- -------- */

        const attributes = handlerInput.attributesManager.getSessionAttributes();

        if('last_action' in attributes === false) {
            return false;
        }

        return ['openCase', 'quickOpenCase'].includes(attributes['last_action'].intent);
    }, 

    handle(handlerInput) {
        return handlerInput.responseBuilder.getResponse();
    }
};

/* ======== ======== ======== ======== */

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },

    handle(handlerInput) {
        const output = 'Welcome to Case Opener. What would you like to do?';
        
        return handlerInput.responseBuilder
            .speak(output)
            .withShouldEndSession(false)
            .getResponse();
    }
};

/* ======== ======== ======== ======== */

const HelpIntentHandler = {
    canHandle(handlerInput) {
        const envelope = handlerInput.requestEnvelope;

        return Alexa.getRequestType(envelope) === 'IntentRequest' && Alexa.getIntentName(envelope) === 'AMAZON.HelpIntent';
    }, 

    handle(handlerInput) {
        const output = 
            `You can say 'open' followed by the container name (for example, 'open Chroma Case'). ` + 
            `If you want to speed it up, try saying 'quick open' instead.`
        ;

        return handlerInput.responseBuilder
            .speak(output)
            .withShouldEndSession(false)
            .getResponse();
    }
};

/* ======== ======== ======== ======== */

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        const envelope = handlerInput.requestEnvelope;

        if(Alexa.getRequestType(envelope) !== 'IntentRequest') {
            return false;
        }

        return Alexa.getIntentName(envelope) === 'AMAZON.CancelIntent' || Alexa.getIntentName(envelope) === 'AMAZON.StopIntent';
    },

    handle(handlerInput) {
        return handlerInput.responseBuilder.getResponse();
    }
};

/* ======== ======== ======== ======== */

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        const envelope = handlerInput.requestEnvelope;

        if(Alexa.getRequestType(envelope) !== 'IntentRequest') {
            return false;
        }

        return Alexa.getIntentName(envelope) === 'AMAZON.FallbackIntent';
    },

    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know that.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .withShouldEndSession(false)
            .getResponse();
    }
};

/* ======== ======== ======== ======== */

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },

    handle(handlerInput) {
        return handlerInput.responseBuilder.getResponse();
    }
};

/* ======== ======== ======== ======== */

const ErrorHandler = {
    canHandle() {
        return true;
    },

    handle(handlerInput, error) {
        console.log(`Error: ${JSON.stringify(error, null, 2)}`);

        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        OpenCaseHandler, 
        QuickOpenCaseHandler, 
        UnknownCaseHandler, 

        YesIntentHandler, 
        NoIntentHandler, 

        LaunchRequestHandler, 
        HelpIntentHandler, 

        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler
    )
    .addErrorHandlers(
        ErrorHandler
    )
    .lambda();