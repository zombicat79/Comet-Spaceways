import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    "https://ilozrrbkaidxapwgguva.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlsb3pycmJrYWlkeGFwd2dndXZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAxMjk3MDcsImV4cCI6MjA3NTcwNTcwN30.MSAvqZ2z1Um8HpdW797pRp82RDxkckNn_XCSA6KZBGU"
);

export default supabase;