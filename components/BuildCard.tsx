import { Playfair_Display } from "next/font/google";

export interface BuildCardProps {
  date: string;
  title: string;
  description: string;
  technologies: string[];
  status: "Ongoing" | "Complete";
}

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

const progressStyles = (status: string) => {
  return status === "Ongoing"
    ? "bg-red-50 text-red-700 border border-red-200"
    : "bg-blue-50 text-blue-700 border border-blue-200";
};

export default function BuildCard({
  date,
  title,
  description,
  technologies,
  status,
}: BuildCardProps) {
  return (
    <section className="p-6 rounded-md border border-gray-200 hover:shadow-sm transition-shadow duration-300 my-7">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium tracking-wide text-muted-text uppercase">
          {date}
        </p>

        <p
          className={`text-xs font-medium py-1 px-3 rounded-full ${progressStyles(
            status,
          )}`}
        >
          {status}
        </p>
      </div>

      <p
        className={`${playfair.className} text-2xl leading-tight mt-3 text-primary-text`}
      >
        {title}
      </p>

      <p className="text-secondary-text text-sm leading-relaxed my-5">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-2">
        {technologies.map((t, i) => (
          <p
            key={i}
            className="py-1 px-3 rounded-full bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200"
          >
            {t}
          </p>
        ))}
      </div>
    </section>
  );
}
