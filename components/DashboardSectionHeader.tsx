import PillText from "./PillText";
import SectionHeading from "./SectionHeading";
import NewEntryButton from "./NewEntryButton";

interface Props {
  pilltext: string;
  headingText: string;
}

export default function DashboardSectionHeader({
  pilltext,
  headingText,
}: Props) {
  return (
    <section>
      <PillText text={pilltext} />

      <div className="flex items-center justify-between">
        <SectionHeading text={headingText} />
        <NewEntryButton />
      </div>
    </section>
  );
}
