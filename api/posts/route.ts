import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";
import { Post } from "@/models/Post";

type NewJournalPayload = Omit<Post, "id" | "created_at" | "updated_at">;

export async function GET() {
  const { data: journals, error } = await supabase
    .from("journals")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(journals);
}

export async function POST(request: Request) {
  const body: NewJournalPayload = await request.json();

  const { data, error } = await supabase.from("journals").insert({
    title: body.title,
    content: body.content,
    excerpt: body.excerpt,
    category: body.category,
    tags: body.tags,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}
