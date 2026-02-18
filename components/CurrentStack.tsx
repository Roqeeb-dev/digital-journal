import { currentStackData } from "@/lib/studioData";
import PillText from "./PillText";

export default function CurrentStack() {
  return (
    <section className="my-14">
      <PillText text="Current Stack" />

      <div className="flex flex-wrap gap-3 my-6">
        {currentStackData.map((c, idx) => (
          <p
            key={idx}
            className="border border-secondary-text/15 py-2 px-3 text-center font-medium text-sm sm:text-md rounded-md text-secondary-text bg-[#f3f1ed]"
          >
            {c}
          </p>
        ))}
      </div>
    </section>
  );
}
