const links = [
  "M168 230 C 230 220, 250 150, 312 148",
  "M168 250 C 240 250, 260 236, 338 236",
  "M160 300 C 230 330, 270 324, 356 324",
];

const nodes = [
  [312, 148],
  [392, 186],
  [338, 236],
  [430, 258],
  [356, 324],
  [438, 348],
];

export default function AIVisualization() {
  return (
    <figure className="relative">
      <div className="pointer-events-none absolute -left-4 top-10 h-16 w-16 rounded-full bg-cyan/10 blur-2xl" />
      <svg
        viewBox="0 0 520 520"
        className="relative h-auto w-full"
        role="img"
        aria-label="Diagram linking a person with a small network of data points and a calm signal line"
      >
        <rect x="8" y="8" width="504" height="504" rx="36" fill="#102D42" />
        <rect x="8" y="8" width="504" height="504" rx="36" fill="none" stroke="#00B8D9" strokeOpacity="0.35" />
        <g className="scan-band" aria-hidden="true">
          <rect x="28" y="0" width="70" height="520" fill="url(#scan)" />
        </g>
        <defs>
          <linearGradient id="scan" x1="0" x2="1">
            <stop offset="0" stopColor="#00B8D9" stopOpacity="0" />
            <stop offset="0.5" stopColor="#00D6B4" stopOpacity="0.16" />
            <stop offset="1" stopColor="#00B8D9" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M48 84 H180" stroke="#00D6B4" strokeWidth="2" strokeLinecap="round" />
        <text x="48" y="68" fill="#EAF5F8" fontFamily="ui-monospace, monospace" fontSize="12" letterSpacing="1.5">
          PATIENT AND SYSTEM
        </text>
        <g fill="none" stroke="#00B8D9" strokeWidth="1.5" className="flow-line">
          {links.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        <g aria-hidden="true">
          {links.map((d, index) => (
            <circle key={d} r="3.5" fill="#00D6B4" className={`packet packet-${index + 1}`} />
          ))}
        </g>
        <g className="vital-ring" aria-hidden="true">
          <circle cx="128" cy="176" r="34" fill="none" stroke="#00B8D9" strokeOpacity="0.45" strokeWidth="2" />
        </g>
        <circle cx="128" cy="176" r="34" fill="none" stroke="#EAF5F8" strokeWidth="2" />
        <path
          d="M70 318 c 22-52 40-74 58-74 s 36 22 58 74"
          fill="none"
          stroke="#EAF5F8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="128" cy="268" r="4" fill="#00D6B4" className="heart-dot" aria-hidden="true" />
        <g>
          {nodes.map(([x, y], index) => (
            <g key={`${x}-${y}`}>
              <circle
                cx={x}
                cy={y}
                r="5"
                fill="none"
                stroke="#00D6B4"
                strokeWidth="1"
                className="node-ring"
                style={{ animationDelay: `${index * 0.45}s` }}
              />
              <circle cx={x} cy={y} r="5" fill="#EAF5F8" fillOpacity="0.9" />
            </g>
          ))}
        </g>
        <circle cx="338" cy="236" r="11" fill="none" stroke="#00D6B4" strokeWidth="2" className="focus-ring" />
        <path
          d="M56 430 H168 l18-26 16 42 16-16 H464"
          fill="none"
          stroke="#00D6B4"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          className="ecg-line"
        />
      </svg>
      <figcaption className="mt-4 grid gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ice/80 sm:grid-cols-3">
        <span>Person</span>
        <span>Connected data</span>
        <span>Clinician review</span>
      </figcaption>
    </figure>
  );
}
