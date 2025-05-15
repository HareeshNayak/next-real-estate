import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gjsffgozbvkjobvnwwhe.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY; // ⬅️ this should be your anon public key
const supabase = createClient(supabaseUrl, supabaseKey);
