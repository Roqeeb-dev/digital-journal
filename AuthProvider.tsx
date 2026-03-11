"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { syncUserToStore } from "@/lib/syncUser";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    syncUserToStore();

    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      syncUserToStore();
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return <>{children}</>;
}
