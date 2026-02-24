import DashClient from "./DashClient";

export const metadata = {
  title: "Overview | Dashboard",
  description:
    "Your creative command center — manage journal entries, notes, builds, and deep dives.",
};

export default function Dashboard() {
  return (
    <main>
      <DashClient />
    </main>
  );
}
