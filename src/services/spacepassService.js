import supabase from "../../db/supabase-client";
import Spacepass from "../data/spacepass-data-model"; 

async function createSpacepass(id, name, surname, avatar, race) {
    const newSpacepass = new Spacepass(id, name, surname, avatar, race)
    newSpacepass.determineAuthority();
    newSpacepass.determineCategory();
    newSpacepass.generatePassNum();
    newSpacepass.generateNamePrint();
    newSpacepass.generateSerial();
    
    if (import.meta.env.PROD) {
        // TO DO
    } else {
        const { owner, passNum, issueDate, expiryDate, issuePlace, namePrint, serialNum, category, status } = newSpacepass;
        const { data, error } = await supabase
            .from('Spacepasses')
            .upsert({ owner, passNum, issueDate, expiryDate, issuePlace, namePrint, serialNum, category, status })
            .select()

        if (error) return error;
        return data;
    }
}

async function getSpacepass(passNum) {
    if (import.meta.env.PROD) {
        // TO DO
    } else {
        const { data, error } = await supabase
            .from('Spacepasses')
            .select('*')
            .eq('passNum', passNum)
            .maybeSingle()

        if (error) return error;
        return data;
    }
}

async function getPassnumFromId(userId) {
    if (import.meta.env.PROD) {
        // TO DO
    } else {
        const { data: spacepass, error } = await supabase
            .from('Spacepasses')
            .select('passNum')
            .eq('owner', userId)
            .maybeSingle()

        if (error) return error;
        return spacepass.passNum;
    }
}

export { createSpacepass, getPassnumFromId, getSpacepass };