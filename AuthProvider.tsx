"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useAuthStore } from "@/store/useAuthStore";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    async function loadUser() {
      const { data } = await supabase.auth.getUser();

      if (data.user) {
        setUser({
          id: data.user.id,
          email: data.user.email!,
          username: "",
          createdAt: new Date().toISOString(),
        });
      }
    }

    loadUser();
  }, [setUser]);

  return <>{children}</>;
}
