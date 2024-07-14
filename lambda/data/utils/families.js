const Range = require('./classes/range.js');

let families = {};

/* ======== ======== ======== ======== */

families['Abyss'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Abyssal Apparition'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Acid Etched'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Acid Wash'] = {
    default: new Range(0.00, 0.68), 
    exceptions: {}
};

families['Aerial'] = {
    default: new Range(0.00, 0.60), 
    exceptions: {}
};

families['Afterimage'] = {
    default: new Range(0.02, 0.40), 
    exceptions: {}
};

families['Agent'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Airlock'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Akoben'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {
        Galil_AR: new Range(0.00, 0.75)
    }
};

families['Allure'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Aloha'] = {
    default: new Range(0.00, 0.65), 
    exceptions: {
        SG_553: new Range(0.00, 0.55)
    }
};

families['Amber Slipstream'] = {
    default: new Range(0.00, 0.55), 
    exceptions: {}
};

families['Analog Input'] = {
    default: new Range(0.00, 0.62), 
    exceptions: {}
};

families['Angry Mob'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Antique'] = {
    default: new Range(0.00, 0.30), 
    exceptions: {
        PP_Bizon: new Range(0.00, 0.50)
    }
};

families['Apocalypto'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Aquamarine Revenge'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Arctic Wolf'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {
        AUG: new Range(0.00, 0.70)
    }
};

families['Aristocrat'] = {
    default: new Range(0.00, 0.66), 
    exceptions: {}
};

families['Armor Core'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Asiimov'] = {
    default: new Range(0.18, 1.00), 
    exceptions: {
        P90: new Range(0.00, 0.92), 
        P250: new Range(0.10, 1.00), 
        AK_47: new Range(0.05, 0.70)
    }
};

families['Assault'] = {
    default: new Range(0.00, 0.62), 
    exceptions: {}
};

families['Atheris'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Atlas'] = {
    default: new Range(0.00, 0.81), 
    exceptions: {}
};

families['Atomic Alloy'] = {
    default: new Range(0.00, 0.90), 
    exceptions: {}
};

families['Autotronic'] = {
    default: new Range(0.00, 0.85), 
    exceptions: {}
};

families['Avalanche'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Aztec'] = {
    default: new Range(0.00, 0.75), 
    exceptions: {}
};

families['Azure Zebra'] = {
    default: new Range(0.00, 0.28), 
    exceptions: {}
};

/* -------- -------- */

families['BI83 Spectrum'] = {
    default: new Range(0.00, 0.60), 
    exceptions: {}
};

families['BOOM'] = {
    default: new Range(0.06, 0.28), 
    exceptions: {}
};

families['Balance'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Bamboozle'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['Banana Cannon'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Basilisk'] = {
    default: new Range(0.00, 0.68), 
    exceptions: {}
};

families['Bengal Tiger'] = {
    default: new Range(0.06, 0.80), 
    exceptions: {}
};

families['Big Iron'] = {
    default: new Range(0.00, 0.64), 
    exceptions: {}
};

families['Bioleak'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Black Laminate'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {
        AK_47: new Range(0.06, 0.80)
    }
};

families['Black Limba'] = {
    default: new Range(0.06, 0.80), 
    exceptions: {}
};

families['Black Lotus'] = {
    default: new Range(0.00, 0.90), 
    exceptions: {
        M4A1_S: new Range(0.00, 0.70)
    }
};

families['Black Sand'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {
        Sawed_Off: new Range(0.00, 0.90), 
        G3SG1: new Range(0.00, 0.80)
    }
};

families['Black Tie'] = {
    default: new Range(0.00, 0.75), 
    exceptions: {}
};

families['Blind Spot'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Block-18'] = {
    default: new Range(0.00, 0.67), 
    exceptions: {}
};

families['Blood Tiger'] = {
    default: new Range(0.00, 0.30), 
    exceptions: {}
};

families['Blood in the Water'] = {
    default: new Range(0.06, 0.20), 
    exceptions: {}
};

families['Bloodshot'] = {
    default: new Range(0.14, 0.60), 
    exceptions: {}
};

families['Bloodsport'] = {
    default: new Range(0.00, 0.45), 
    exceptions: {
        MP7: new Range(0.00, 0.65)
    }
};

families['Bloomstick'] = {
    default: new Range(0.06, 0.80), 
    exceptions: {}
};

families['Blue Fissure'] = {
    default: new Range(0.06, 0.58), 
    exceptions: {}
};

families['Blue Laminate'] = {
    default: new Range(0.02, 0.40), 
    exceptions: {}
};

families['Blue Ply'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Blue Steel'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Blue Streak'] = {
    default: new Range(0.06, 0.80), 
    exceptions: {}
};

families['Blue Titanium'] = {
    default: new Range(0.00, 0.04), 
    exceptions: {}
};

families['Blueprint'] = {
    default: new Range(0.00, 0.75), 
    exceptions: {
        USP_S: new Range(0.00, 0.86)
    }
};

families['Bone Forged'] = {
    default: new Range(0.00, 0.60), 
    exceptions: {}
};

families['Bone Pile'] = {
    default: new Range(0.06, 0.34), 
    exceptions: {}
};

families['Boost Protocol'] = {
    default: new Range(0.00, 0.41), 
    exceptions: {}
};

families['Boreal Forest'] = {
    default: new Range(0.06, 0.80), 
    exceptions: {}
};

families['Bratatat'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Briefing'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {
        M4A1_S: new Range(0.00, 0.80)
    }
};

families['Bright Water'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {
        M4A1_S: new Range(0.10, 0.22)
    }
};

families['Bronze Deco'] = {
    default: new Range(0.00, 0.46), 
    exceptions: {}
};

families['Brother'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Buddy'] = {
    default: new Range(0.00, 0.55), 
    exceptions: {}
};

families['Bullet Queen'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Bullet Rain'] = {
    default: new Range(0.02, 0.46), 
    exceptions: {}
};

families['Bunsen Burner'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['Button Masher'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Buzz Kill'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

/* -------- -------- */

families['Caiman'] = {
    default: new Range(0.00, 0.40), 
    exceptions: {}
};

families['Capillary'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {
        AWP: new Range(0.05, 0.70)
    }
};

families['Cardiac'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Carnivore'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Cartel'] = {
    default: new Range(0.00, 0.75), 
    exceptions: {
        Dual_Berettas: new Range(0.00, 1.00)
    }
};

families['Case Hardened'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Cassette'] = {
    default: new Range(0.00, 0.60), 
    exceptions: {}
};

families['Catacombs'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Chameleon'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Chantico\'s Fire'] = {
    default: new Range(0.00, 0.99), 
    exceptions: {}
};

families['Chatterbox'] = {
    default: new Range(0.35, 0.85), 
    exceptions: {}
};

families['Chopper'] = {
    default: new Range(0.00, 0.60), 
    exceptions: {}
};

families['Chromatic Aberration'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {
        AWP: new Range(0.00, 0.70)
    }
};

families['Chrome Cannon'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Circaetus'] = {
    default: new Range(0.00, 0.90), 
    exceptions: {}
};

families['Cirrus'] = {
    default: new Range(0.00, 0.75), 
    exceptions: {}
};

families['Classic Crate'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Clear Polymer'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Cobalt Core'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Cobalt Disruption'] = {
    default: new Range(0.00, 0.20), 
    exceptions: {}
};

families['Cobalt Halftone'] = {
    default: new Range(0.05, 0.45), 
    exceptions: {}
};

families['Cobra Strike'] = {
    default: new Range(0.00, 0.60), 
    exceptions: {}
};

families['Cocoa Rampage'] = {
    default: new Range(0.00, 0.60), 
    exceptions: {}
};

families['Code Red'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Cold Blooded'] = {
    default: new Range(0.00, 0.08), 
    exceptions: {}
};

families['Colony IV'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Commemoration'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Condition Zero'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Connextion'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['Conspiracy'] = {
    default: new Range(0.00, 0.30), 
    exceptions: {}
};

families['Containment Breach'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Contaminant'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Copper Galaxy'] = {
    default: new Range(0.00, 0.20), 
    exceptions: {}
};

families['Corinthian'] = {
    default: new Range(0.00, 0.44), 
    exceptions: {}
};

families['Corporal'] = {
    default: new Range(0.05, 0.75), 
    exceptions: {}
};

families['Cortex'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Corticera'] = {
    default: new Range(0.06, 0.30), 
    exceptions: {}
};

families['Cracked Opal'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Crazy 8'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Crimson Tsunami'] = {
    default: new Range(0.00, 0.55), 
    exceptions: {}
};

families['Crimson Web'] = {
    default: new Range(0.06, 0.80), 
    exceptions: {}
};

families['Crypsis'] = {
    default: new Range(0.00, 0.55), 
    exceptions: {}
};

families['Cut Out'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Cyber Security'] = {
    default: new Range(0.00, 0.98), 
    exceptions: {}
};

families['Cyber Shell'] = {
    default: new Range(0.00, 0.85), 
    exceptions: {}
};

families['Cyberforce'] = {
    default: new Range(0.00, 0.90), 
    exceptions: {}
};

families['Cyrex'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {
        USP_S: new Range(0.00, 0.55), 
        SG_553: new Range(0.00, 1.00)
    }
};

/* -------- -------- */

families['Damascus Steel'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {
        SG_553: new Range(0.00, 1.00)
    }
};

families['Danger Close'] = {
    default: new Range(0.02, 0.80), 
    exceptions: {}
};

families['Dark Sigil'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Dark Water'] = {
    default: new Range(0.10, 0.26), 
    exceptions: {}
};

families['Darkwing'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Dart'] = {
    default: new Range(0.00, 0.46), 
    exceptions: {}
};

families['Dazzle'] = {
    default: new Range(0.10, 0.65), 
    exceptions: {}
};

families['Deadly Poison'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Death Grip'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Death by Kitty'] = {
    default: new Range(0.08, 0.32), 
    exceptions: {}
};

families['Death by Puppy'] = {
    default: new Range(0.00, 0.40), 
    exceptions: {}
};

families['Death\'s Head'] = {
    default: new Range(0.00, 0.51), 
    exceptions: {}
};

families['Decimator'] = {
    default: new Range(0.00, 0.85), 
    exceptions: {
        Tec_9: new Range(0.00, 0.75)
    }
};

families['Decommissioned'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Deep Relief'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Delusion'] = {
    default: new Range(0.06, 0.35), 
    exceptions: {}
};

families['Demeter'] = {
    default: new Range(0.06, 0.80), 
    exceptions: {}
};

families['Desert Strike'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Desert-Strike'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {
        Negev: new Range(0.00, 0.50)
    }
};

families['Desolate Space'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Destroyer'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Devourer'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['Dezastre'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
}

families['Digital Mesh'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['Directive'] = {
    default: new Range(0.06, 1.00), 
    exceptions: {}
};

families['Disco Tech'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Distressed'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Djinn'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Doomkitty'] = {
    default: new Range(0.08, 0.22), 
    exceptions: {}
};

families['Doppler'] = {
    default: new Range(0.00, 0.08), 
    exceptions: {}
};

families['Downtown'] = {
    default: new Range(0.00, 0.65), 
    exceptions: {}
};

families['Dragon King'] = {
    default: new Range(0.00, 0.75), 
    exceptions: {}
};

families['Dragon Tech'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Dragon Tattoo'] = {
    default: new Range(0.00, 0.08), 
    exceptions: {}
};

families['Dragonfire'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Dream Glade'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Drop Me'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Dualing Dragons'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Duality'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['dev_texture'] = {
    default: new Range(0.00, 0.65), 
    exceptions: {}
};

/* -------- -------- */

families['Eco'] = {
    default: new Range(0.10, 0.85), 
    exceptions: {
        CZ75_Auto: new Range(0.00, 1.00)
    }
};

families['Electric Hive'] = {
    default: new Range(0.00, 0.40), 
    exceptions: {}
};

families['Elite 1.6'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Elite Build'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Embargo'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Emerald Dragon'] = {
    default: new Range(0.06, 0.52), 
    exceptions: {}
};

families['Emerald Poison Dart'] = {
    default: new Range(0.00, 0.45), 
    exceptions: {}
};

families['Emphorosaur-S'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['Enforcer'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Ensnared'] = {
    default: new Range(0.00, 0.90), 
    exceptions: {}
};

families['Entombed'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Etch Lord'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Evil Daimyo'] = {
    default: new Range(0.00, 0.52), 
    exceptions: {}
};

families['Exo'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Exoskeleton'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Exposure'] = {
    default: new Range(0.00, 0.55), 
    exceptions: {}
};

families['Eye of Athena'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

/* -------- -------- */

families['Fade'] = {
    default: new Range(0.00, 0.08), 
    exceptions: {
        R8_Revolver: new Range(0.00, 0.40), 
        MP7: new Range(0.00, 0.25)
    }
};

families['Faded Zebra'] = {
    default: new Range(0.06, 0.80), 
    exceptions: {}
};

families['Fairy Tale'] = {
    default: new Range(0.02, 0.90), 
    exceptions: {}
};

families['Featherweight'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Fever Dream'] = {
    default: new Range(0.00, 0.55), 
    exceptions: {
        SSG_08: new Range(0.00, 0.72)
    }
};

families['Fire Elemental'] = {
    default: new Range(0.00, 0.60), 
    exceptions: {}
};

families['Fire Serpent'] = {
    default: new Range(0.06, 0.76), 
    exceptions: {}
};

families['Firefight'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Firestarter'] = {
    default: new Range(0.06, 0.49), 
    exceptions: {}
};

families['Flame Test'] = {
    default: new Range(0.00, 0.65), 
    exceptions: {}
};

families['Flash Out'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Flashback'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {
        USP_S: new Range(0.00, 0.50)
    }
};

families['Fleet Flock'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Flora Carnivora'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Flux'] = {
    default: new Range(0.00, 0.90), 
    exceptions: {}
};

families['Food Chain'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Foresight'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Forest DDPAT'] = {
    default: new Range(0.06, 0.80), 
    exceptions: {}
};

families['Fowl Play'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Fragments'] = {
    default: new Range(0.00, 0.78), 
    exceptions: {}
};

families['Freehand'] = {
    default: new Range(0.00, 0.48), 
    exceptions: {}
};

families['Freight'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Frontside Misty'] = {
    default: new Range(0.02, 0.87), 
    exceptions: {}
};

families['Fubar'] = {
    default: new Range(0.40, 1.00), 
    exceptions: {
        Tec_9: new Range(0.14, 1.00)
    }
};

families['Fuel Injector'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Fuel Rod'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

/* -------- -------- */

families['Gamma Doppler'] = {
    default: new Range(0.00, 0.08), 
    exceptions: {
        Glock_18: new Range(0.00, 0.50)
    }
};

families['Gauss'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Ghost Camo'] = {
    default: new Range(0.00, 0.40), 
    exceptions: {}
};

families['Ghost Crusader'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Gila'] = {
    default: new Range(0.00, 0.30), 
    exceptions: {}
};

families['Gnarled'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Gold Bismuth'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Golden Coil'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Golden Koi'] = {
    default: new Range(0.00, 0.12), 
    exceptions: {}
};

families['Goo'] = {
    default: new Range(0.00, 0.60), 
    exceptions: {}
};

families['Grand Prix'] = {
    default: new Range(0.25, 0.35), 
    exceptions: {}
};

families['Graphite'] = {
    default: new Range(0.00, 0.12), 
    exceptions: {}
};

families['Graven'] = {
    default: new Range(0.06, 0.80), 
    exceptions: {}
};

families['Green Marine'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['Griffin'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['Grim'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['Grinder'] = {
    default: new Range(0.02, 0.25), 
    exceptions: {}
};

families['Grip'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Grotto'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Guardian'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {
        USP_S: new Range(0.00, 0.38)
    }
};

families['Guerrilla'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

/* -------- -------- */

families['Handgun'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Hard Water'] = {
    default: new Range(0.00, 0.45), 
    exceptions: {}
};

families['Harvester'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Head Shot'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Heat'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Heaven Guard'] = {
    default: new Range(0.00, 0.40), 
    exceptions: {
        XM1014: new Range(0.03, 0.50)
    }
};

families['Heavy Metal'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Heirloom'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['Hellfire'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Hemoglobin'] = {
    default: new Range(0.00, 0.20), 
    exceptions: {}
};

families['Hexane'] = {
    default: new Range(0.00, 0.40), 
    exceptions: {}
};

families['Hideout'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['High Roller'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['High Seas'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Highwayman'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Hive'] = {
    default: new Range(0.00, 0.30), 
    exceptions: {}
};

families['Hunter'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Hybrid'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Hydra'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Hyper Beast'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {
        Nova: new Range(0.00, 0.60)
    }
};

families['Hypnotic'] = {
    default: new Range(0.00, 0.08), 
    exceptions: {}
};

/* -------- -------- */

families['Ice Cap'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Ice Coaled'] = {
    default: new Range(0.00, 0.77), 
    exceptions: {}
};

families['Imperial'] = {
    default: new Range(0.00, 0.20), 
    exceptions: {}
};

families['Imperial Dragon'] = {
    default: new Range(0.00, 0.63), 
    exceptions: {}
};

families['Impire'] = {
    default: new Range(0.00, 0.40), 
    exceptions: {}
};

families['Imprint'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['In Living Color'] = {
    default: new Range(0.00, 0.79), 
    exceptions: {}
};

families['Incinegator'] = {
    default: new Range(0.14, 0.65), 
    exceptions: {}
};

families['Inferno'] = {
    default: new Range(0.00, 0.68), 
    exceptions: {}
};

families['Inheritance'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['Insomnia'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Irezumi'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['Iron Clad'] = {
    default: new Range(0.05, 0.80), 
    exceptions: {}
};

families['Ironwork'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Isaac'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Ivory'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

/* -------- -------- */

families['Jaguar'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Jambiya'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Jawbreaker'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Judgement of Anubis'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Jungle Slipstream'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Junk Yard'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Just Smile'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Justice'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

/* -------- -------- */

families['Kami'] = {
    default: new Range(0.00, 0.30), 
    exceptions: {
        Galil_AR: new Range(0.00, 0.60)
    }
};

families['Keeping Tabs'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Kill Confirmed'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Kiss Love'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Kitbash'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['Koi'] = {
    default: new Range(0.00, 0.30), 
    exceptions: {}
};

families['Kumicho Dragon'] = {
    default: new Range(0.00, 0.76), 
    exceptions: {}
};

/* -------- -------- */

families['Labyrinth'] = {
    default: new Range(0.00, 0.40), 
    exceptions: {}
};

families['Lapis Gator'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Last Dive'] = {
    default: new Range(0.00, 0.52), 
    exceptions: {}
};

families['Lead Conduit'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Leaded Glass'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Leet Museo'] = {
    default: new Range(0.00, 0.65), 
    exceptions: {}
};

families['Legion of Anubis'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Lifted Spirits'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Light Box'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Light Rail'] = {
    default: new Range(0.00, 0.90), 
    exceptions: {}
};

families['Lightning Strike'] = {
    default: new Range(0.00, 0.08), 
    exceptions: {}
};

families['Limelight'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Lionfish'] = {
    default: new Range(0.00, 0.55), 
    exceptions: {}
};

families['Liquidation'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Llama Cannon'] = {
    default: new Range(0.03, 0.70), 
    exceptions: {}
};

families['Lore'] = {
    default: new Range(0.00, 0.65), 
    exceptions: {
        Shadow_Daggers: new Range(0.00, 1.00), 
        Bowie_Knife: new Range(0.00, 1.00), 
        Butterfly_Knife: new Range(0.00, 1.00)
    }
};

families['Loudmouth'] = {
    default: new Range(0.14, 0.65), 
    exceptions: {}
};

families['Lumen'] = {
    default: new Range(0.00, 0.77), 
    exceptions: {}
};

/* -------- -------- */

families['Macabre'] = {
    default: new Range(0.00, 0.60), 
    exceptions: {}
};

families['Magma'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Magnesium'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Mainframe 001'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Malachite'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Man-o\'-war'] = {
    default: new Range(0.10, 0.20), 
    exceptions: {}
};

families['Marble Fade'] = {
    default: new Range(0.00, 0.08), 
    exceptions: {}
};

families['Marina'] = {
    default: new Range(0.05, 0.50), 
    exceptions: {}
};

families['Mecha Industries'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {
        FAMAS: new Range(0.00, 0.50), 
        Desert_Eagle: new Range(0.00, 0.60)
    }
};

families['Mehndi'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Melondrama'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Memento'] = {
    default: new Range(0.02, 0.18), 
    exceptions: {
        R8_Revolver: new Range(0.00, 0.80)
    }
};

families['Meow 36'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Metal Flowers'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Mischief'] = {
    default: new Range(0.10, 1.00), 
    exceptions: {}
};

families['Modest Threat'] = {
    default: new Range(0.00, 0.75), 
    exceptions: {}
};

families['Module'] = {
    default: new Range(0.00, 0.35), 
    exceptions: {}
};

families['Momentum'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {
        AUG: new Range(0.05, 1.00)
    }
};

families['Monkey Business'] = {
    default: new Range(0.10, 0.90), 
    exceptions: {}
};

families['Monkeyflage'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Monster Call'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Monster Mashup'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Moonrise'] = {
    default: new Range(0.00, 0.65), 
    exceptions: {
        UMP_45: new Range(0.00, 0.40)
    }
};

families['Morris'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Mortis'] = {
    default: new Range(0.00, 0.64), 
    exceptions: {}
};

families['Motorized'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['Mount Fuji'] = {
    default: new Range(0.00, 0.55), 
    exceptions: {}
};

families['Muertos'] = {
    default: new Range(0.00, 0.60), 
    exceptions: {}
};

families['Murky'] = {
    default: new Range(0.00, 0.25), 
    exceptions: {}
};

/* -------- -------- */

families['Naga'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Nebula Crusader'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Necro Jr.'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Necropos'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Nemesis'] = {
    default: new Range(0.00, 0.32), 
    exceptions: {}
};

families['Neo-Noir'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {
        M4A4: new Range(0.00, 0.90), 
        AWP: new Range(0.00, 0.50), 
        Glock_18: new Range(0.00, 1.00)
    }
};

families['Neon Ply'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Neon Revolution'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['Neon Rider'] = {
    default: new Range(0.00, 0.45), 
    exceptions: {
        AK_47: new Range(0.00, 0.80)
    }
};

families['Neoqueen'] = {
    default: new Range(0.00, 0.60), 
    exceptions: {}
};

families['Neural Net'] = {
    default: new Range(0.00, 0.60), 
    exceptions: {}
};

families['Nevermore'] = {
    default: new Range(0.00, 0.40), 
    exceptions: {}
};

families['Night'] = {
    default: new Range(0.06, 0.80), 
    exceptions: {}
};

families['Night Riot'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['Night Stripe'] = {
    default: new Range(0.06, 0.80), 
    exceptions: {}
};

families['Night Terror'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Nightmare'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Nightshade'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Nightwish'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Nostalgia'] = {
    default: new Range(0.00, 0.57), 
    exceptions: {}
};

/* -------- -------- */

families['O.S.I.P.R.'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Obsidian'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Ocean Drive'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Ocean Foam'] = {
    default: new Range(0.00, 0.12), 
    exceptions: {
        MP7: new Range(0.00, 0.08)
    }
};

families['Oceanic'] = {
    default: new Range(0.00, 0.60), 
    exceptions: {}
};

families['Off World'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {
        P90: new Range(0.00, 0.75)
    }
};

families['Ol\' Rusty'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Olympus'] = {
    default: new Range(0.00, 0.67), 
    exceptions: {}
};

families['Oni Taiji'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Orange Crash'] = {
    default: new Range(0.00, 0.52), 
    exceptions: {}
};

families['Orange DDPAT'] = {
    default: new Range(0.06, 0.80), 
    exceptions: {}
};

families['Orbit Mk01'] = {
    default: new Range(0.00, 0.55), 
    exceptions: {}
};

families['Origami'] = {
    default: new Range(0.00, 0.55), 
    exceptions: {}
};

families['Oscillator'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Osiris'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Outbreak'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Overgrowth'] = {
    default: new Range(0.06, 0.80), 
    exceptions: {}
};

families['Oxide Blaze'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {
        XM1014: new Range(0.00, 0.70), 
        Glock_18: new Range(0.00, 0.85)
    }
};

/* -------- -------- */

families['PAW'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Panther'] = {
    default: new Range(0.00, 0.58), 
    exceptions: {}
};

families['Parallax'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Petroglyph'] = {
    default: new Range(0.00, 0.44), 
    exceptions: {}
};

families['Phantom'] = {
    default: new Range(0.00, 0.60), 
    exceptions: {}
};

families['Phantom Disruptor'] = {
    default: new Range(0.00, 0.65), 
    exceptions: {}
};

families['Phobos'] = {
    default: new Range(0.00, 0.40), 
    exceptions: {}
};

families['Photic Zone'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Pipe Down'] = {
    default: new Range(0.00, 0.90), 
    exceptions: {}
};

families['Plague'] = {
    default: new Range(0.00, 0.76), 
    exceptions: {}
};

families['Plastique'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['Player Two'] = {
    default: new Range(0.00, 0.84), 
    exceptions: {}
};

families['Plume'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['Point Disarray'] = {
    default: new Range(0.00, 0.67), 
    exceptions: {}
};

families['Pole Position'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Poly Mag'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Polymer'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Popdog'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['Poultrygeist'] = {
    default: new Range(0.00, 0.57), 
    exceptions: {}
};

families['Power Loader'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Powercore'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {
        MP7: new Range(0.00, 0.80)
    }
};

families['Praetorian'] = {
    default: new Range(0.00, 0.45), 
    exceptions: {}
};

families['Primal Saber'] = {
    default: new Range(0.00, 0.77), 
    exceptions: {}
};

families['Printstream'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {
        USP_S: new Range(0.00, 0.85)
    }
}

families['Prototype'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Pulse'] = {
    default: new Range(0.00, 0.40), 
    exceptions: {
        SG_553: new Range(0.10, 0.60), 
        P2000: new Range(0.00, 0.60)
    }
};

/* -------- -------- */

families['Quicksilver'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

/* -------- -------- */

families['Rangeen'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Ranger'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Rapid Eye Movement'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Rat Rod'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Re-Entry'] = {
    default: new Range(0.00, 0.43), 
    exceptions: {}
};

families['Re.built'] = {
    default: new Range(0.00, 0.90), 
    exceptions: {}
};

families['Rebel'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Reboot'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Red Astor'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Red FragCam'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Red Laminate'] = {
    default: new Range(0.06, 0.80), 
    exceptions: {}
};

families['Red Python'] = {
    default: new Range(0.08, 0.50), 
    exceptions: {}
};

families['Red Rock'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Redline'] = {
    default: new Range(0.10, 0.40), 
    exceptions: {
        AK_47: new Range(0.10, 0.70)
    }
};

families['Retrobution'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Ricochet'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['Riot'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Ripple'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Rising Skull'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Roadblock'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Rocket Pop'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Roll Cage'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Rose Iron'] = {
    default: new Range(0.00, 0.30), 
    exceptions: {}
};

families['Royal Consorts'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Royal Legion'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Royal Paladin'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['Ruby Poison Dart'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Runic'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Rust Coat'] = {
    default: new Range(0.40, 1.00), 
    exceptions: {
        PP_Bizon: new Range(0.00, 1.00), 
        Sawed_Off: new Range(0.00, 0.80), 
        MAG_7: new Range(0.00, 1.00), 
        Nova: new Range(0.00, 0.80)
    }
};

/* -------- -------- */

families['SWAG-7'] = {
    default: new Range(0.00, 0.92), 
    exceptions: {}
};

families['Sacrifice'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Safari Mesh'] = {
    default: new Range(0.06, 0.80), 
    exceptions: {}
};

families['Sakkaku'] = {
    default: new Range(0.21, 0.79), 
    exceptions: {}
};

families['Sand Scale'] = {
    default: new Range(0.00, 0.45), 
    exceptions: {}
};

families['Sandstorm'] = {
    default: new Range(0.10, 0.60), 
    exceptions: {
        Tec_9: new Range(0.10, 0.70)
    }
};

families['Scaffold'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Scavenger'] = {
    default: new Range(0.00, 0.65), 
    exceptions: {}
};

families['Scorched'] = {
    default: new Range(0.08, 0.80), 
    exceptions: {}
};

families['Scrawl'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Scumbria'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Seasons'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['See Ya Later'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Serenity'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Sergeant'] = {
    default: new Range(0.10, 1.00), 
    exceptions: {}
};

families['Serum'] = {
    default: new Range(0.00, 0.25), 
    exceptions: {}
};

families['Shallow Grave'] = {
    default: new Range(0.00, 0.75), 
    exceptions: {}
};

families['Shapewood'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Shattered'] = {
    default: new Range(0.06, 0.80), 
    exceptions: {}
};

families['Shred'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Signal'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Skull Crusher'] = {
    default: new Range(0.25, 0.80), 
    exceptions: {}
};

families['Skulls'] = {
    default: new Range(0.10, 0.26), 
    exceptions: {}
};

families['Slag'] = {
    default: new Range(0.00, 0.90), 
    exceptions: {}
};

families['Slashed'] = {
    default: new Range(0.15, 0.80), 
    exceptions: {}
};

families['Slate'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Slaughter'] = {
    default: new Range(0.01, 0.26), 
    exceptions: {}
};

families['Slipstream'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Snack Attack'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Snek-9'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Sonar'] = {
    default: new Range(0.00, 0.45), 
    exceptions: {}
};

families['Space Cat'] = {
    default: new Range(0.00, 0.67), 
    exceptions: {}
};

families['Special Delivery'] = {
    default: new Range(0.00, 0.62), 
    exceptions: {}
};

families['Spectre'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Spider Lily'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Spirit Board'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Splash'] = {
    default: new Range(0.06, 0.18), 
    exceptions: {}
};

families['Stained'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Stainless'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['Stalker'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Starlight Protector'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['Steel Disruption'] = {
    default: new Range(0.00, 0.20), 
    exceptions: {}
};

families['Stinger'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Stone Cold'] = {
    default: new Range(0.00, 0.90), 
    exceptions: {}
};

families['Stymphalian'] = {
    default: new Range(0.00, 0.63), 
    exceptions: {}
};

families['Sugar Rush'] = {
    default: new Range(0.00, 0.55), 
    exceptions: {}
};

families['Supernova'] = {
    default: new Range(0.00, 0.40), 
    exceptions: {}
};

families['Survivalist'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Survivor Z'] = {
    default: new Range(0.00, 0.60), 
    exceptions: {}
};

families['Syd Mead'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['System Lock'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

/* -------- -------- */

families['Tacticat'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Tatter'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Teclu Burner'] = {
    default: new Range(0.00, 0.65), 
    exceptions: {}
};

families['Tempest'] = {
    default: new Range(0.06, 0.22), 
    exceptions: {}
};

families['Temukau'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['Terrain'] = {
    default: new Range(0.00, 0.45), 
    exceptions: {}
};

families['The Battlestar'] = {
    default: new Range(0.00, 0.64), 
    exceptions: {}
};

families['The Emperor'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['The Empress'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['The Executioner'] = {
    default: new Range(0.14, 0.85), 
    exceptions: {}
};

families['The Fuschia Is Now'] = {
    default: new Range(0.00, 0.40), 
    exceptions: {}
};

families['The Kraken'] = {
    default: new Range(0.00, 0.40), 
    exceptions: {}
};

families['The Traitor'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Ticket to Hell'] = {
    default: new Range(0.00, 0.76), 
    exceptions: {}
};

families['Tiger Moth'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Tiger Tooth'] = {
    default: new Range(0.00, 0.08), 
    exceptions: {}
};

families['Tigris'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Titanium Bit'] = {
    default: new Range(0.00, 0.20), 
    exceptions: {}
};

families['Tom Cat'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['Tooth Fairy'] = {
    default: new Range(0.00, 0.73), 
    exceptions: {}
};

families['Torn'] = {
    default: new Range(0.00, 0.45), 
    exceptions: {}
};

families['Torque'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {
        USP_S: new Range(0.00, 0.46)
    }
};

families['Toy Soldier'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Toybox'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Traction'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Tranquility'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Tread'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Tread Plate'] = {
    default: new Range(0.00, 0.20), 
    exceptions: {}
};

families['Triarch'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Trigger Discipline'] = {
    default: new Range(0.00, 0.97), 
    exceptions: {}
};

families['Trigon'] = {
    default: new Range(0.08, 0.75), 
    exceptions: {}
};

families['Triqua'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Triumvirate'] = {
    default: new Range(0.00, 0.61), 
    exceptions: {}
};

families['Turbo Peek'] = {
    default: new Range(0.00, 0.60), 
    exceptions: {}
};

families['Turf'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Twist'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

/* -------- -------- */

families['Ultralight'] = {
    default: new Range(0.00, 0.79), 
    exceptions: {}
};

families['Ultraviolet'] = {
    default: new Range(0.06, 0.80), 
    exceptions: {}
};

families['Umbral Rabbit'] = {
    default: new Range(0.00, 0.75), 
    exceptions: {}
};

families['Uncharted'] = {
    default: new Range(0.00, 0.75), 
    exceptions: {}
};

families['Undertow'] = {
    default: new Range(0.00, 0.20), 
    exceptions: {}
};

families['Urban Hazard'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {
        Five_SeveN: new Range(0.00, 0.25), 
        P2000: new Range(0.00, 1.00)
    }
};

families['Urban Masked'] = {
    default: new Range(0.06, 0.80), 
    exceptions: {}
};

families['Urban Shock'] = {
    default: new Range(0.00, 0.47), 
    exceptions: {}
};

/* -------- -------- */

families['Valence'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['Vandal'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

// not required, 'Skin' class will assume 'Vanilla' after failed lookup
families['Vanilla'] = {
    default: new Range(-1.00, -1.00), 
    exceptions: {}
};

families['Vendetta'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Vent Rush'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Ventilator'] = {
    default: new Range(0.00, 0.45), 
    exceptions: {}
};

families['Ventilators'] = {
    default: new Range(0.00, 0.45), 
    exceptions: {}
};

families['Verdigris'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Victoria'] = {
    default: new Range(0.00, 0.75), 
    exceptions: {}
};

families['Violent Daimyo'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Virus'] = {
    default: new Range(0.06, 0.80), 
    exceptions: {}
};

families['Visions'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Vogue'] = {
    default: new Range(0.00, 0.75), 
    exceptions: {}
};

families['Vulcan'] = {
    default: new Range(0.00, 0.90), 
    exceptions: {}
};

/* -------- -------- */

families['Warbird'] = {
    default: new Range(0.05, 0.65), 
    exceptions: {}
};

families['Warhawk'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Wasteland Princess'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Wasteland Rebel'] = {
    default: new Range(0.05, 0.70), 
    exceptions: {
        Glock_18: new Range(0.00, 0.54)
    }
};

families['Watchdog'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Water Elemental'] = {
    default: new Range(0.00, 0.70), 
    exceptions: {}
};

families['Water Sigil'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Wave Spray'] = {
    default: new Range(0.06, 0.80), 
    exceptions: {}
};

families['Weasel'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Whitefish'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Wicked Sick'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Wild Child'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Wild Six'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['Wildfire'] = {
    default: new Range(0.01, 0.70), 
    exceptions: {}
};

families['Windblown'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

families['Wings'] = {
    default: new Range(0.00, 0.14), 
    exceptions: {}
};

families['Wingshot'] = {
    default: new Range(0.00, 0.90), 
    exceptions: {}
};

families['Winterized'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Wood Fired'] = {
    default: new Range(0.00, 0.75), 
    exceptions: {}
};

families['Woodsman'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

families['Worm God'] = {
    default: new Range(0.00, 0.45), 
    exceptions: {}
};

families['Wraiths'] = {
    default: new Range(0.00, 0.80), 
    exceptions: {}
};

/* -------- -------- */

families['X-ray'] = {
    default: new Range(0.00, 0.30), 
    exceptions: {
        AK_47: new Range(0.00, 1.00)
    }
};

families['XOXO'] = {
    default: new Range(0.00, 0.90), 
    exceptions: {}
};

families['Xiangliu'] = {
    default: new Range(0.00, 0.56), 
    exceptions: {}
};

/* -------- -------- */

families['Yellow Jacket'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Yorick'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

/* -------- -------- */

families['ZX Spectron'] = {
    default: new Range(0.00, 1.00), 
    exceptions: {}
};

families['Zander'] = {
    default: new Range(0.05, 1.00), 
    exceptions: {}
};

families['Ziggy'] = {
    default: new Range(0.00, 0.72), 
    exceptions: {}
};

families['Zirka'] = {
    default: new Range(0.06, 0.42), 
    exceptions: {}
};

families['Zombie Offensive'] = {
    default: new Range(0.00, 0.50), 
    exceptions: {}
};

/* ======== ======== ======== ======== */

module.exports = families;