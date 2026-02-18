import PillText from "./PillText";
import { experimentData } from "@/lib/studioData";

export default function CurrentExperiment() {
  return (
    <section className="my-16">
      <PillText text="Currently experimenting with" />

      <article className="mt-6 p-6 rounded-md bg-gradient-to-br from-[#f6f4f1] to-[#ece9e3] border border-secondary-text/10 shadow-sm">
        <div className="flex flex-col gap-4">
          {experimentData.map((e, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <span className="mt-2 h-2 w-2 rounded-full bg-accent shadow-sm" />
              <p className="text-sm leading-relaxed text-secondary-text font-medium">
                {e}
              </p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
