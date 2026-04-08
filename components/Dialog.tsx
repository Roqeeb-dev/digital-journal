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
        <section className="w-full max-w-sm bg-[#f5f0e8] p-8 rounded-xl shadow-2xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-stone-300 hover:text-stone-600 transition-colors duration-150"
          >
            <X size={15} />
          </button>

          {/* Icon */}
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center mb-6 ${
              isSuccess
                ? "bg-amber-100 text-amber-700"
                : "bg-red-100 text-red-600"
            }`}
          >
            {isSuccess ? (
              <Check size={16} strokeWidth={2.5} />
            ) : (
              <X size={16} strokeWidth={2.5} />
            )}
          </div>

          <p
            className="text-xl text-stone-800 leading-snug mb-2"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {title}
          </p>

          {description && (
            <p className="text-sm text-stone-400 leading-relaxed mt-1">
              {description}
            </p>
          )}

          <div className="mt-8 flex items-center gap-2.5">
            {href && isSuccess && (
              <a
                href={href}
                className="flex-1 py-2.5 text-center text-xs tracking-widest uppercase bg-stone-900 text-[#f5f0e8] hover:bg-amber-800 transition-colors duration-200 rounded-lg"
              >
                Continue
              </a>
            )}
            <button
              onClick={onClose}
              className={`py-2.5 text-xs tracking-widest uppercase border border-stone-200 text-stone-400 hover:border-stone-400 hover:text-stone-600 transition-colors duration-200 rounded-lg ${
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
