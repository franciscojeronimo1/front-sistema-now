type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function Logo({ className = "", variant = "light" }: LogoProps) {
  const isDark = variant === "dark";

  return (
    <a
      href="#topo"
      className={`inline-flex items-center gap-2.5 no-underline ${className}`}
      aria-label="Sistema Now — início"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="12" cy="20" r="6" fill="#0F9F8A" />
        <circle cx="28" cy="20" r="6" fill={isDark ? "#F4F6F8" : "#0B1220"} />
        <path
          d="M18 20h4"
          stroke="#0F9F8A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={`font-display text-lg font-bold tracking-tight sm:text-xl ${
          isDark ? "text-paper" : "text-ink"
        }`}
      >
        Sistema <span className="text-accent">Now</span>
      </span>
    </a>
  );
}
