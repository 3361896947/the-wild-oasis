import { createClient } from "@supabase/supabase-js";
import { supabaseUrl } from "../utils/constants";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvZnBxemltYWZ1aXd4anJqdHFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg2MzE0MzAsImV4cCI6MjA3NDIwNzQzMH0.UimP5pqOSXWOjABTd6nCS7l3HGqA2jnKr2xlZ4rKSyA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
