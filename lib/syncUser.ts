import { supabase } from "@/lib/supabase";
import { useAuthStore } from "@/store/useAuthStore";

export async function syncUserToStore() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const { data: profile } = await supabase
      .from("profiles")
      .select("username")
      .eq("id", user.id)
      .single();

    useAuthStore.getState().setUser({
      id: user.id,
      email: user.email || "",
      username: profile?.username || "",
      createdAt: new Date().toISOString(),
    });
  } else {
    useAuthStore.getState().setUser(null);
  }
}
