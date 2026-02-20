import PillText from "@/components/PillText";
import SectionHeading from "@/components/SectionHeading";
import Dashboxes from "@/components/Dashboxes";

export const metadata = {
  title: "Overview | Dashboard",
  description:
    "Your creative command center — manage journal entries, notes, builds, and deep dives.",
};

export default function Dashboard() {
  return (
    <main className="p-9 max-w-4xl">
      <PillText text="Dashboard" />
      <SectionHeading text="Overview" />
      <Dashboxes />
    </main>
  );
}
