import Spacepass from "../data/spacepass-data-model";

async function createSpacepass(name, surname, avatar, race) {
    const newSpacepass = new Spacepass(name, surname, avatar, race)
    newSpacepass.determineAuthority();
    newSpacepass.determineCategory();
    newSpacepass.generatePassNum();
    newSpacepass.generateNamePrint();
    newSpacepass.generateSerial();
    return newSpacepass;
}

export { createSpacepass };