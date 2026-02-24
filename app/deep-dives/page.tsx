import DiveClient from "./DiveClient";

export const metadata = {
  title: "Deep Dives | Digital Journal",
  description: "Extended thinking on topics that deserve more than a note.",
};

export default function DeepDives() {
  return (
    <main>
      <DiveClient />
    </main>
  );
}
