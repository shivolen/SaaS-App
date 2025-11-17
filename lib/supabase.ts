import { createClient } from "@supabase/supabase-js";


export const createSupabaseClient = () => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl) {
        throw new Error('NEXT_PUBLIC_SUPABASE_URL environment variable is not set. Please add it to your .env.local file.');
    }

    if (!supabaseKey) {
        throw new Error('SUPABASE_SERVICE_ROLE_KEY environment variable is not set. Please add it to your .env.local file.');
    }

    return createClient(supabaseUrl, supabaseKey);
}