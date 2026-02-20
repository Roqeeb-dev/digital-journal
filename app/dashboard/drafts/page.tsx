import DashboardSectionHeader from "@/components/DashboardSectionHeader";

export const metadata = {
  title: "Drafts | Dashboard",
  description: "Write, edit, and manage your draft entries.",
};

export default function Page() {
  return (
    <main className="p-9 max-w-5xl">
      <DashboardSectionHeader pilltext="Manage" headingText="Drafts" />
    </main>
  );
}
