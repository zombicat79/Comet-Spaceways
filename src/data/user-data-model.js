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
        health: 1, strength: -2, intelligence: 5, wisdom: 5, dexterity: 2, diplomacy: -5, skills: ["sneaking", "abduction"]
    },
    reptilian: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    insectoid: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    cephalopodian: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    polymorphic: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    big_headed_gray: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    amoebian: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    leonian: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    aetherian: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
}

// NATIONALITY & ORIGIN SPECIFIC DATA STRUCTURES

const nationalityVitalsAdjustment = {
    selenyte: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    earthling: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    martian: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    venusian: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    belter: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    jovian: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    saturnian: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    }
}

const originVitalsAdjustment = {
    milky_way: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    other_galaxies: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    other_dimensions: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    }
}

// BUILD SPECIFIC DATA STRUCTURES

const buildVitalsAdjustment = {
    organic: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    cyborg: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    android: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    }
}

// GENDER SPECIFIC DATA STRUCTURES

const genderVitalsAdjustment = {
    male: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    female: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    other: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    }
}

// JOB SPECIFIC DATA STRUCTURES

const jobVitalsAdjustment = {
    astrophysicist: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    ai_psychologist: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    pirate: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    colonist: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    habitat_builder: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    cybersurgeon: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    vr_soldier: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    asteroid_miner: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    invasion: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    colonization: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    exploration: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    invention: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    scientific_research: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    philosophy: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    religion: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
    },
    language_interpretation: {
        health: 10, strength: 10, intelligence: 10, wisdom: 10, dexterity: 10, diplomacy: 10, skills: []
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
        raceVitalsAdjustment[this.race].skills.forEach((skill) => this.skills.push(skill));
    }

    addNationalityFeatures() {
        this.health += nationalityVitalsAdjustment[this.nationality].health;
        this.strength += nationalityVitalsAdjustment[this.nationality].strength;
        this.intelligence += nationalityVitalsAdjustment[this.nationality].intelligence;
        this.wisdom += nationalityVitalsAdjustment[this.nationality].wisdom;
        this.dexterity += nationalityVitalsAdjustment[this.nationality].dexterity;
        this.diplomacy += nationalityVitalsAdjustment[this.nationality].diplomacy;
        nationalityVitalsAdjustment[this.nationality].skills.forEach((skill) => this.skills.push(skill));
    }

    addOriginFeatures() {
        this.health += originVitalsAdjustment[this.origin].health;
        this.strength += originVitalsAdjustment[this.origin].strength;
        this.intelligence += originVitalsAdjustment[this.origin].intelligence;
        this.wisdom += originVitalsAdjustment[this.origin].wisdom;
        this.dexterity += originVitalsAdjustment[this.origin].dexterity;
        this.diplomacy += originVitalsAdjustment[this.origin].diplomacy;
        originVitalsAdjustment[this.origin].skills.forEach((skill) => this.skills.push(skill));
    }

    addBuildFeatures() {
        this.health += buildVitalsAdjustment[this.build].health;
        this.strength += buildVitalsAdjustment[this.build].strength;
        this.intelligence += buildVitalsAdjustment[this.build].intelligence;
        this.wisdom += buildVitalsAdjustment[this.build].wisdom;
        this.dexterity += buildVitalsAdjustment[this.build].dexterity;
        this.diplomacy += buildVitalsAdjustment[this.build].diplomacy;
        buildVitalsAdjustment[this.build].skills.forEach((skill) => this.skills.push(skill));
    }

    addGenderFeatures() {
        this.health += genderVitalsAdjustment[this.gender].health;
        this.strength += genderVitalsAdjustment[this.gender].strength;
        this.intelligence += genderVitalsAdjustment[this.gender].intelligence;
        this.wisdom += genderVitalsAdjustment[this.gender].wisdom;
        this.dexterity += genderVitalsAdjustment[this.gender].dexterity;
        this.diplomacy += genderVitalsAdjustment[this.gender].diplomacy;
        genderVitalsAdjustment[this.gender].skills.forEach((skill) => this.skills.push(skill));
    }

    addJobFeatures() {
        this.health += jobVitalsAdjustment[this.job].health;
        this.strength += jobVitalsAdjustment[this.job].strength;
        this.intelligence += jobVitalsAdjustment[this.job].intelligence;
        this.wisdom += jobVitalsAdjustment[this.job].wisdom;
        this.dexterity += jobVitalsAdjustment[this.job].dexterity;
        this.diplomacy += jobVitalsAdjustment[this.job].diplomacy;
        jobVitalsAdjustment[this.job].skills.forEach((skill) => this.skills.push(skill));
    }
}
