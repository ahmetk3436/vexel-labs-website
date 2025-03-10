import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pcjqumszmswtwawnkwpd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjanF1bXN6bXN3dHdhd25rd3BkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2MzQwMTQsImV4cCI6MjA1NzIxMDAxNH0.5GYvrL7bXf9CeAOWCNt1oxoh2J0IoxsqutsTFICqReQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
