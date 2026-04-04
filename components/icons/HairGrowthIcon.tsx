/** Hair follicle glyph — uses currentColor like Lucide icons (matches primary green on cards) */
export default function HairGrowthIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden
    >
      <rect
        x="6"
        y="42"
        width="52"
        height="16"
        rx="1"
        fill="currentColor"
        fillOpacity={0.22}
      />
      <line
        x1="8"
        y1="48"
        x2="56"
        y2="48"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeOpacity={0.5}
      />
      <circle cx="22" cy="50" r="5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M22 45 Q20 28 24 10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="42" cy="50" r="5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M42 45 Q44 28 40 10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
