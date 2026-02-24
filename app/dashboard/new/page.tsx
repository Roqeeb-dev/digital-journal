import FormClient from "./FormClient";

export const metadata = {
  title: "New Entry | Dashboard",
  description: "Create a new journal entry.",
};

export default function Page() {
  return (
    <main>
      <FormClient />
    </main>
  );
}
