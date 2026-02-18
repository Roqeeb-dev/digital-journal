import { currentStackData } from "@/lib/studioData";
import PillText from "./PillText";

export default function CurrentStack() {
  return (
    <section className="my-15">
      <PillText text="Current Stack" />

      <div className="flex items-center space-x-4 my-6">
        {currentStackData.map((c, idx) => (
          <p
            key={idx}
            className="text-sm border border-gray-300 py-2 px-1 w-[200px] text-center text-secondary-text bg-gray-200 font-medium rounded-sm"
          >
            {c}
          </p>
        ))}
      </div>
    </section>
  );
}
