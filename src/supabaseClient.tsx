import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dykyglfbdfsgvkjouyyh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5a3lnbGZiZGZzZ3Zram91eXloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3Nzc4MTIsImV4cCI6MjA2OTM1MzgxMn0.9KYGOwgGPM2-OEmweCNjtoS35ab2R2n_NYRDVnErviY';
export const supabase = createClient(supabaseUrl, supabaseKey);
