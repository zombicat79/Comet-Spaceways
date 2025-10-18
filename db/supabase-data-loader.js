import { createClient } from "@supabase/supabase-js";
import dotenv from 'dotenv'

dotenv.config({ path: './../.env' });

const supabase = createClient(
    process.env.SUPABASE_DB_URL,
    process.env.SUPABASE_DB_KEY
);

async function fetchJSONData() {
    const response = await fetch("http://localhost:3000/origins");
    const data = await response.json();
    return data;
}

async function uploadRow(newRow) {
    const { error } = await supabase
        .from('Origins')
        .insert(newRow);

    if (error) {
        console.log(error);
        return;
    }
    
    console.log("Data saved to DB successfully!");
}

async function updateDB() {
    const data = await fetchJSONData();
    data.forEach((el) => uploadRow(el));
}

updateDB()