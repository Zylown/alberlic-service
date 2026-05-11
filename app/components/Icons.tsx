type IconProps = {
  name: string;
  className?: string;
};

const iconPaths: Record<string, string[]> = {
  truck: [
    "M3 7.5h11v8H3z",
    "M14 10h3.5l3.5 3.5v2H14z",
    "M6.5 18.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    "M17.5 18.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
  ],
  boxes: [
    "M4 10h7v8H4z",
    "M13 6h7v8h-7z",
    "M7 6h7v4H7z",
    "M7.5 10v8",
    "M16.5 6v8"
  ],
  package: [
    "M4 8l8-4 8 4-8 4z",
    "M4 8v8l8 4 8-4V8",
    "M12 12v8"
  ],
  lift: [
    "M4 17h16",
    "M7 17V5h3",
    "M10 8h7l3 4v5",
    "M8.5 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    "M17.5 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
  ],
  pet: [
    "M8 12c-2 1.2-3 2.7-3 4.2C5 18 6.6 19 9.2 18.2c1.8-.6 3.8-.6 5.6 0C17.4 19 19 18 19 16.2c0-1.5-1-3-3-4.2-1.8-1.1-6.2-1.1-8 0z",
    "M6.5 9.5a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4z",
    "M10 7.5a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6z",
    "M14 7.5a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6z",
    "M17.5 9.5a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4z"
  ],
  car: [
    "M5 14h14l-1.6-5.2A3 3 0 0 0 14.5 7h-5a3 3 0 0 0-2.9 1.8z",
    "M4 14v4h3",
    "M20 14v4h-3",
    "M7.5 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z",
    "M16.5 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
  ],
  clean: [
    "M14 4l6 6",
    "M13 5l6 6-7.5 7.5H5.5V12z",
    "M4 20h16"
  ],
  route: [
    "M5 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    "M19 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
    "M5 6v3a4 4 0 0 0 4 4h6a4 4 0 0 1 4 4v1"
  ],
  phone: [
    "M6.6 3.6l2.3-.5 2.1 4.8-1.5 1.1a11 11 0 0 0 5.5 5.5l1.1-1.5 4.8 2.1-.5 2.3c-.3 1.4-1.6 2.3-3 2A17.4 17.4 0 0 1 4.6 6.6c-.3-1.4.6-2.7 2-3z"
  ],
  shield: [
    "M12 3l7 3v5c0 4.5-2.9 8.3-7 10-4.1-1.7-7-5.5-7-10V6z",
    "M9 12l2 2 4-5"
  ],
  clock: [
    "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z",
    "M12 7v5l3 2"
  ],
  map: [
    "M4 6l5-2 6 2 5-2v14l-5 2-6-2-5 2z",
    "M9 4v14",
    "M15 6v14"
  ]
};

export function Icon({ name, className = "" }: IconProps) {
  const paths = iconPaths[name] ?? iconPaths.truck;

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths.map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  );
}
