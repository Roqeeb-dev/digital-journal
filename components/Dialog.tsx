import { Check, X } from "lucide-react";

interface Props {
  isOpen: boolean;
  variant: "success" | "error";
  title: string;
  description?: string;
  href?: string;
  onClose: () => void;
}

export default function Dialog({
  isOpen,
  variant,
  title,
  description,
  href,
  onClose,
}: Props) {
  if (!isOpen) return null;

  const isSuccess = variant === "success";

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-5">
        <section className="w-full max-w-sm bg-[#f5f0e8] p-8 shadow-2xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 transition-colors duration-150"
          >
            <X size={16} />
          </button>

          <div
            className={`w-10 h-10 flex items-center justify-center mb-5 ${
              isSuccess
                ? "bg-amber-100 text-amber-700"
                : "bg-red-100 text-red-600"
            }`}
          >
            {isSuccess ? <Check size={18} /> : <X size={18} />}
          </div>

          <p
            className="text-xl text-stone-800 leading-snug mb-2"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {title}
          </p>
          {description && (
            <p className="text-sm text-stone-400 leading-relaxed">
              {description}
            </p>
          )}

          <div className="mt-7 flex items-center gap-3">
            {href && isSuccess && (
              <a
                href={href}
                className="flex-1 py-2.5 text-center text-xs tracking-widest uppercase bg-stone-900 text-[#f5f0e8] hover:bg-amber-800 transition-colors duration-200"
              >
                Continue
              </a>
            )}
            <button
              onClick={onClose}
              className={`py-2.5 text-xs tracking-widest uppercase border border-stone-300 text-stone-500 hover:border-stone-500 hover:text-stone-700 transition-colors duration-200 ${
                href && isSuccess ? "px-5" : "flex-1"
              }`}
            >
              Dismiss
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
