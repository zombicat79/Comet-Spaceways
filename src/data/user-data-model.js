// GENERIC DATA STRUCTURES

const userVitalsData = {
    health: 10,
    strength: 10,
    intelligence: 10,
    wisdom: 10,
    dexterity: 10,
    diplomacy: 10,
    skills: []
}

const userProgressData = {
    money: 50,
    inventory: [],
    activeFlight: {
        id: null,
        status: null
    },
    flightHistory: [],
    activeQuest: {
        id: null,
        status: null
    },
    questHistory: []
}

// RACE SPECIFIC DATA STRUCTURES

const raceVitalsAdjustment = {
    green_little_man: {
        health: -5, strength: -4, intelligence: 3, wisdom: 0, dexterity: 2, diplomacy: -1, skills: ["stealthiness", "cooperation", "emotion-suppression"]
    },
    reptilian: {
        health: 6, strength: 8, intelligence: 0, wisdom: 2, dexterity: -2, diplomacy: -3, skills: ["subjugation", "warfare", "resource-extraction"]
    },
    insectoid: {
        health: 4, strength: 5, intelligence: 1, wisdom: 3, dexterity: 6, diplomacy: 0, skills: ["cooperation", "multitasking", "emotion-suppression"]
    },
    cephalopodian: {
        health: 0, strength: 0, intelligence: 5, wisdom: 5, dexterity: 7, diplomacy: 3, skills: ["multitasking", "stealthiness", "navigation"]
    },
    polymorphic: {
        health: 3, strength: 2, intelligence: -2, wisdom: -2, dexterity: 5, diplomacy: -5, skills: ["transmutation", "regeneration", "emotion-suppression"]
    },
    big_headed_gray: {
        health: -2, strength: -4, intelligence: 6, wisdom: 5, dexterity: 2, diplomacy: 2, skills: ["psionics", "subjugation", "superthinking"]
    },
    amoebian: {
        health: 0, strength: 0, intelligence: -5, wisdom: -5, dexterity: 0, diplomacy: -4, skills: ["transversality", "regeneration", "stealthiness"]
    },
    leonian: {
        health: 5, strength: 7, intelligence: 0, wisdom: 2, dexterity: 2, diplomacy: 0, skills: ["warfare", "navigation", "resource-extraction"]
    },
    aetherian: {
        health: -2, strength: -2, intelligence: 7, wisdom: 8, dexterity: 0, diplomacy: 7, skills: ["transversality", "psionics", "self-sustenance"]
    },
}

// NATIONALITY & ORIGIN SPECIFIC DATA STRUCTURES

const nationalityVitalsAdjustment = {
    selenyte: {
        health: 0, strength: -1, intelligence: 0, wisdom: 0, dexterity: 1, diplomacy: 0, skills: ["multitasking"]
    },
    earthling: {
        health: 1, strength: 0, intelligence: 0, wisdom: 0, dexterity: 0, diplomacy: 1, skills: ["subjugation"]
    },
    martian: {
        health: 0, strength: 0, intelligence: 0, wisdom: 0, dexterity: 0, diplomacy: 1, skills: ["multitasking"]
    },
    venusian: {
        health: 0, strength: 0, intelligence: 0, wisdom: 0, dexterity: 0, diplomacy: 0, skills: ["navigation"]
    },
    belter: {
        health: -1, strength: -2, intelligence: 0, wisdom: 0, dexterity: 2, diplomacy: 1, skills: ["resource-extraction"]
    },
    jovian: {
        health: -1, strength: 1, intelligence: 0, wisdom: 1, dexterity: 1, diplomacy: 0, skills: ["self-sustenance"]
    },
    saturnian: {
        health: -1, strength: 1, intelligence: 0, wisdom: 1, dexterity: 1, diplomacy: 0, skills: ["self-sustenance"]
    }
}

const originVitalsAdjustment = {
    milky_way: {
        health: 0, strength: 0, intelligence: 0, wisdom: 0, dexterity: 0, diplomacy: 0, skills: ["communication"]
    },
    other_galaxies: {
        health: 0, strength: 0, intelligence: 0, wisdom: 1, dexterity: 0, diplomacy: 1, skills: ["navigation"]
    },
    other_dimensions: {
        health: 0, strength: 0, intelligence: 0, wisdom: 2, dexterity: 0, diplomacy: -1, skills: ["transversality"]
    }
}

// BUILD SPECIFIC DATA STRUCTURES

const buildVitalsAdjustment = {
    organic: {
        health: 2, strength: 2, intelligence: 3, wisdom: 2, dexterity: 2, diplomacy: 4, skills: ["communication", "resource-extraction", "cooperation"]
    },
    cyborg: {
        health: 2, strength: 5, intelligence: 6, wisdom: 4, dexterity: 3, diplomacy: -3, skills: ["regeneration", "psionics", "superthinking"]
    },
    android: {
        health: 4, strength: 6, intelligence: 6, wisdom: 4, dexterity: 0, diplomacy: -1, skills: ["self-sustenance", "multitasking", "superthinking"]
    }
}

// GENDER SPECIFIC DATA STRUCTURES

const genderVitalsAdjustment = {
    male: {
        health: 0, strength: 1, intelligence: 0, wisdom: 0, dexterity: 1, diplomacy: 0, skills: ["navigation"]
    },
    female: {
        health: 0, strength: 0, intelligence: 1, wisdom: 0, dexterity: 0, diplomacy: 1, skills: ["communication"]
    },
    other: {
        health: 0, strength: 0, intelligence: 0, wisdom: 0, dexterity: 0, diplomacy: 0, skills: []
    }
}

// JOB SPECIFIC DATA STRUCTURES

const jobVitalsAdjustment = {
    astrophysicist: {
        health: 0, strength: 0, intelligence: 3, wisdom: 5, dexterity: 0, diplomacy: 0, skills: ["navigation", "superthinking", "communication"]
    },
    ai_psychologist: {
        health: 0, strength: 0, intelligence: 3, wisdom: 3, dexterity: 0, diplomacy: 3, skills: ["subjugation", "emotion-suppression"]
    },
    pirate: {
        health: 2, strength: 3, intelligence: 0, wisdom: 0, dexterity: 2, diplomacy: -2, skills: ["stealthiness", "warfare", "resource-extraction"]
    },
    colonist: {
        health: 1, strength: 0, intelligence: 0, wisdom: 1, dexterity: 3, diplomacy: 2, skills: ["self-sustenance", "multitasking"]
    },
    habitat_builder: {
        health: 0, strength: 1, intelligence: 1, wisdom: 1, dexterity: 4, diplomacy: 0, skills: ["multitasking", "transmutation"]
    },
    cybersurgeon: {
        health: 1, strength: 0, intelligence: 1, wisdom: 2, dexterity: 4, diplomacy: 1, skills: ["regeneration"]
    },
    vr_soldier: {
        health: 2, strength: 1, intelligence: 1, wisdom: 0, dexterity: 2, diplomacy: 0, skills: ["warfare", "multitasking"]
    },
    asteroid_miner: {
        health: -2, strength: 3, intelligence: 0, wisdom: 0, dexterity: 3, diplomacy: 0, skills: ["resource-extraction", "cooperation"]
    },
    invasion: {
        health: 2, strength: 3, intelligence: 1, wisdom: 0, dexterity: 0, diplomacy: -2, skills: ["subjugation", "warfare", "resource-extraction"]
    },
    colonization: {
        health: 1, strength: 0, intelligence: 1, wisdom: 1, dexterity: 3, diplomacy: 2, skills: ["self-sustenance", "resource-extraction"]
    },
    exploration: {
        health: 0, strength: 0, intelligence: 2, wisdom: 2, dexterity: 1, diplomacy: 3, skills: ["navigation", "communication"]
    },
    invention: {
        health: 0, strength: 0, intelligence: 4, wisdom: 3, dexterity: 4, diplomacy: 0, skills: ["multitasking", "superthinking", "resource-extraction"]
    },
    scientific_research: {
        health: 0, strength: 0, intelligence: 2, wisdom: 4, dexterity: 1, diplomacy: 0, skills: ["superthinking", "transmutation", "transversality"]
    },
    philosophy: {
        health: 0, strength: 0, intelligence: 2, wisdom: 5, dexterity: 0, diplomacy: 2, skills: ["superthinking", "cooperation", "emotion-suppression"]
    },
    religion: {
        health: 0, strength: 0, intelligence: 1, wisdom: 4, dexterity: 0, diplomacy: 4, skills: ["subjugation", "communication"]
    },
    language_interpretation: {
        health: 0, strength: 0, intelligence: 2, wisdom: 2, dexterity: 1, diplomacy: 3, skills: ["communication", "cooperation"]
    }
}

// USER CLASS FOR NEW ACCOUNT CREATION

export default class User {
    constructor(newUserData) {
        this.name = newUserData.name;
        this.surname = newUserData.surname;
        this.race = newUserData.race;
        this.nationality = newUserData.race === 'humanoid' ? newUserData.nationality : null;
        this.origin = newUserData.race === 'humanoid' ? null : newUserData.origin;
        this.build = newUserData.race === 'humanoid' ? newUserData.build : null;
        this.gender = newUserData.race === 'humanoid' ? newUserData.gender : null;
        this.job = newUserData.job;
        this.avatar = newUserData.avatar;
        this.username = newUserData.username;
        this.password = newUserData.password;
        for (let key in userProgressData) {
            this[key] = userProgressData[key];
        }
        for (let key in userVitalsData) {
            this[key] = userVitalsData[key];
        }
    }

    addRaceFeatures() {
        this.health += raceVitalsAdjustment[this.race].health;
        this.strength += raceVitalsAdjustment[this.race].strength;
        this.intelligence += raceVitalsAdjustment[this.race].intelligence;
        this.wisdom += raceVitalsAdjustment[this.race].wisdom;
        this.dexterity += raceVitalsAdjustment[this.race].dexterity;
        this.diplomacy += raceVitalsAdjustment[this.race].diplomacy;
        raceVitalsAdjustment[this.race].skills.forEach((skill) => {
            if (!(this.skills.includes(skill))) this.skills.push(skill);
        });
    }

    addNationalityFeatures() {
        this.health += nationalityVitalsAdjustment[this.nationality].health;
        this.strength += nationalityVitalsAdjustment[this.nationality].strength;
        this.intelligence += nationalityVitalsAdjustment[this.nationality].intelligence;
        this.wisdom += nationalityVitalsAdjustment[this.nationality].wisdom;
        this.dexterity += nationalityVitalsAdjustment[this.nationality].dexterity;
        this.diplomacy += nationalityVitalsAdjustment[this.nationality].diplomacy;
        nationalityVitalsAdjustment[this.nationality].skills.forEach((skill) => {
            if (!(this.skills.includes(skill))) this.skills.push(skill);
        });
    }

    addOriginFeatures() {
        this.health += originVitalsAdjustment[this.origin].health;
        this.strength += originVitalsAdjustment[this.origin].strength;
        this.intelligence += originVitalsAdjustment[this.origin].intelligence;
        this.wisdom += originVitalsAdjustment[this.origin].wisdom;
        this.dexterity += originVitalsAdjustment[this.origin].dexterity;
        this.diplomacy += originVitalsAdjustment[this.origin].diplomacy;
        originVitalsAdjustment[this.origin].skills.forEach((skill) => {
            if (!(this.skills.includes(skill))) this.skills.push(skill);
        });
    }

    addBuildFeatures() {
        this.health += buildVitalsAdjustment[this.build].health;
        this.strength += buildVitalsAdjustment[this.build].strength;
        this.intelligence += buildVitalsAdjustment[this.build].intelligence;
        this.wisdom += buildVitalsAdjustment[this.build].wisdom;
        this.dexterity += buildVitalsAdjustment[this.build].dexterity;
        this.diplomacy += buildVitalsAdjustment[this.build].diplomacy;
        buildVitalsAdjustment[this.build].skills.forEach((skill) => {
            if (!(this.skills.includes(skill))) this.skills.push(skill);
        });
    }

    addGenderFeatures() {
        this.health += genderVitalsAdjustment[this.gender].health;
        this.strength += genderVitalsAdjustment[this.gender].strength;
        this.intelligence += genderVitalsAdjustment[this.gender].intelligence;
        this.wisdom += genderVitalsAdjustment[this.gender].wisdom;
        this.dexterity += genderVitalsAdjustment[this.gender].dexterity;
        this.diplomacy += genderVitalsAdjustment[this.gender].diplomacy;
        genderVitalsAdjustment[this.gender].skills.forEach((skill) => {
            if (!(this.skills.includes(skill))) this.skills.push(skill);
        });
    }

    addJobFeatures() {
        this.health += jobVitalsAdjustment[this.job].health;
        this.strength += jobVitalsAdjustment[this.job].strength;
        this.intelligence += jobVitalsAdjustment[this.job].intelligence;
        this.wisdom += jobVitalsAdjustment[this.job].wisdom;
        this.dexterity += jobVitalsAdjustment[this.job].dexterity;
        this.diplomacy += jobVitalsAdjustment[this.job].diplomacy;
        jobVitalsAdjustment[this.job].skills.forEach((skill) => {
            if (!(this.skills.includes(skill))) this.skills.push(skill);
        });
    }
}
