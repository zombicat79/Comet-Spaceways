import supabase from "../../db/supabase-client";
import Spacepass from "../data/spacepass-data-model";

const baseUrl = import.meta.env.TEST_URL;
const route = import.meta.env.TEST_SPACEPASS_ROUTE;

async function createSpacepass(id, name, surname, avatar, race) {
    const newSpacepass = new Spacepass(id, name, surname, avatar, race)
    newSpacepass.determineAuthority();
    newSpacepass.determineCategory();
    newSpacepass.generatePassNum();
    newSpacepass.generateNamePrint();
    newSpacepass.generateSerial();
    
    const { owner, passNum, issueDate, expiryDate, issuePlace, namePrint, serialNum, category, status } = newSpacepass;
    if (import.meta.env.PROD) {
        // Connection to Supabase
        const { data, error } = await supabase
            .from('Spacepasses')
            .upsert({ owner, passNum, issueDate, expiryDate, issuePlace, namePrint, serialNum, category, status })
            .select()

        if (error) return error;
        return data;
    } else {
        // Connection to MongoDB via API REST)
        const response = await fetch(`${baseUrl}${route}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ owner, passNum, issueDate, expiryDate, issuePlace, namePrint, serialNum, category, status }),
            credentials: 'include'
        });
        const { data } = await response.json();
        return data;
    }
}

async function getSpacepass(passNum) {
    if (import.meta.env.PROD) {
        // Connection to Supabase
        const { data, error } = await supabase
            .from('Spacepasses')
            .select('*')
            .eq('passNum', passNum)
            .maybeSingle()

        if (error) return error;
        return data;
    } else {
        // Connection to MongoDB via API REST)
        const response = await fetch(`${baseUrl}${route}/${passNum}`);
        const { data } = await response.json();
        return data;
    }
}

async function getPassnumFromId(userId) {
    if (import.meta.env.PROD) {
        // Connection to Supabase
        const { data: spacepass, error } = await supabase
            .from('Spacepasses')
            .select('passNum')
            .eq('owner', userId)
            .maybeSingle()

        if (error) return error;
        return spacepass.passNum;
    } else {
        // Connection to MongoDB via API REST)
        const response = await fetch(`${baseUrl}${route}/${userId}`);
        const { data } = await response.json();
        return data;
    }
}

export { createSpacepass, getPassnumFromId, getSpacepass };