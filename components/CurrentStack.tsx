import { currentStackData } from "@/lib/studioData";
import PillText from "./PillText";

export default function CurrentStack() {
  return (
    <section className="my-14">
      <PillText text="Current Stack" />

      <div className="flex flex-wrap gap-2.5 mt-5 mb-6">
        {currentStackData.map((c, idx) => (
          <p
            key={idx}
            className="border border-secondary-text/15 py-1.5 px-4 text-center font-medium text-xs sm:text-sm rounded-lg text-secondary-text bg-[#f3f1ed] tracking-wide"
          >
            {c}
          </p>
        ))}
      </div>
    </section>
  );
}
