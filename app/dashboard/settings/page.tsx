import DashboardSectionHeader from "@/components/DashboardSectionHeader";

export const metadata = {
  title: "Settings | Dashboard",
  description: "Manage your dashboard preferences and account configuration.",
};

export default function Page() {
  return (
    <main className="p-9 max-w-5xl">
      <DashboardSectionHeader
        pilltext="Settings"
        headingText="Journal Settings"
      />
    </main>
  );
}
