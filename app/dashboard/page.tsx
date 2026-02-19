import PillText from "@/components/PillText";
import SectionHeading from "@/components/SectionHeading";
import Dashboxes from "@/components/Dashboxes";

export const metadata = {
  title: "Dashboard | Digital Journal",
  description: "This is the dashboard for adding new content",
};

export default function Dashboard() {
  return (
    <main className="p-9 max-w-4xl">
      <PillText text="Dashboard" />
      <SectionHeading text="Overview" />
      <Dashboxes />

      <section>
        <div></div>
        <div></div>
      </section>
    </main>
  );
}
