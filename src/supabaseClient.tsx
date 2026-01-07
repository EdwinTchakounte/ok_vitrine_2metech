import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sciqimybabjhxhghexnk.supabase.co';
const supabaseKey = 'sb_publishable_2ycSqtU3lW55_q5zZ39eNA_vWHd1_rH';
export const supabase = createClient(supabaseUrl, supabaseKey);
