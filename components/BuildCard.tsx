import { Playfair_Display } from "next/font/google";

export interface BuildCardProps {
  date: string;
  title: string;
  description: string;
  technologies: string[];
  status: "Ongoing" | "Complete";
}

const playfair = Playfair_Display({ subsets: ["latin"], weight: "500" });

export default function BuildCard({
  date,
  title,
  description,
  technologies,
  status,
}: BuildCardProps) {
  return (
    <section className="p-6 border border-gray-200 bg-surface">
      <div className="flex items-center justify-between">
        <p>{date}</p>
        <p>{status}</p>
      </div>

      <p className={`${playfair.className} text-2xl my-2`}>{title}</p>

      <p>{description}</p>

      <div>
        {technologies.map((t, i) => (
          <p key={i}>{t}</p>
        ))}
      </div>
    </section>
  );
}
