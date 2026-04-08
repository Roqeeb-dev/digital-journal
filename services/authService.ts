import { supabase } from "@/lib/supabase";
import { User } from "@/types/User";

export async function register(
  email: string,
  password: string,
  username: string,
) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  if (!data.user) {
    throw new Error("User creation failed");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", data.user.id)
    .maybeSingle();

  if (profile) {
    await supabase.from("profiles").update({ username }).eq("id", data.user.id);
  }

  return data;
}

export async function login(email: string, password: string) {
  const { data: authData, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  if (!authData.user) {
    throw new Error("User not found");
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", authData.user.id)
    .single();

  if (profileError) {
    throw new Error(profileError.message);
  }

  return {
    user: {
      id: profile.id,
      username: profile.username,
      email: profile.email,
      avatarUrl: profile.avatar_url ?? null,
      bio: profile.bio ?? null,
      createdAt: profile.created_at,
      updatedAt: profile.updated_at ?? null,
    } as User,
    session: authData.session,
  };
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
}

export async function updateProfile(userId: string, updates: Partial<User>) {
  const { data, error } = await supabase
    .from("profiles")
    .update(updates)
    .eq("id", userId)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
