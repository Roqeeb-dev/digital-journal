import NotesClient from "./NotesClient";

export const metadata = {
  title: "Notes | Digital Journal",
  description:
    "Quick thoughts, small discoveries, and things I want to remember.",
};

export default function Notes() {
  return (
    <main>
      <NotesClient />
    </main>
  );
}
