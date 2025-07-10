import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://esdyjfzrbssxxzshioos.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzZHlqZnpyYnNzeHh6c2hpb29zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE2MjAzOTgsImV4cCI6MjA2NzE5NjM5OH0.-zyBLtGXAShfOh-gIjFQlLKoupqkhC38KO7xQO8WWjw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
