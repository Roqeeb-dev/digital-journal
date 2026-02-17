export default function PillText({ text }: { text: string }) {
  return (
    <p className="uppercase text-secondary-text font-mono text-xs md:text-sm tracking-widest">
      {text}
    </p>
  );
}
