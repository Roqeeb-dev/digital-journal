import DashboardSectionHeader from "@/components/DashboardSectionHeader";

export const metadata = {
  title: "Journal | Dashboard",
  description: "Write, edit, and manage your journal entries.",
};

export default function Page() {
  return (
    <main className="p-9 max-w-5xl">
      <DashboardSectionHeader pilltext="Manage" headingText="Journal" />
    </main>
  );
}
