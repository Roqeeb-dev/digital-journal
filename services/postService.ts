import { supabase } from "@/lib/supabase";
import type { Post } from "@/types/Post";

export async function getAllPosts() {
  const { data, error } = await supabase
    .from("journals")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function createPost(newPost: Partial<Post>) {
  const { data, error } = await supabase
    .from("journals")
    .insert(newPost)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
