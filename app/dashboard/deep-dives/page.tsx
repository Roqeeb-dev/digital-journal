import DashboardSectionHeader from "@/components/DashboardSectionHeader";

export const metadata = {
  title: "Deep-dives | Dashboard",
  description: "Write, edit, and manage your Deep dives entries.",
};

export default function Page() {
  return (
    <main className="p-9 max-w-5xl">
      <DashboardSectionHeader pilltext="Manage" headingText="Deep Dives" />
    </main>
  );
}
