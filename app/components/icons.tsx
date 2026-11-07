import type { ReactNode, SVGProps } from "react";

export type IconName =
  | "air-conditioner"
  | "arrow-right"
  | "arrow-up-right"
  | "building"
  | "calendar"
  | "car"
  | "check"
  | "chevron-down"
  | "clock"
  | "close"
  | "file-text"
  | "freezer"
  | "geyser"
  | "headset"
  | "map-pin"
  | "menu"
  | "message"
  | "microwave"
  | "phone"
  | "refrigerator"
  | "shield-check"
  | "snowflake"
  | "sparkles"
  | "star"
  | "washing-machine"
  | "water-drop"
  | "whatsapp"
  | "wind"
  | "wrench";

const paths: Record<IconName, ReactNode> = {
  "air-conditioner": (
    <>
      <rect x="3" y="4" width="18" height="11" rx="2" />
      <path d="M7 19c.8-1 1.2-1 2 0s1.2 1 2 0M13 19c.8-1 1.2-1 2 0s1.2 1 2 0M7 9h10M7 12h6" />
      <path d="M17 8h.01" />
    </>
  ),
  "arrow-right": (
    <>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </>
  ),
  "arrow-up-right": (
    <>
      <path d="M7 17 17 7M7 7h10v10" />
    </>
  ),
  building: <path d="M5 21V4h9v17M14 9h5v12M8 8h3M8 12h3M8 16h3M3 21h18" />,
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  car: (
    <>
      <path d="M3 13l2-6h14l2 6v5H3v-5Z" />
      <path d="M3 13h18" />
      <circle cx="7.5" cy="16" r=".6" />
      <circle cx="16.5" cy="16" r=".6" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  "chevron-down": <path d="m6 9 6 6 6-6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6 6 18" />,
  "file-text": <path d="M7 3h8l4 4v14H7V3ZM14 3v5h5M10 13h6M10 17h6" />,
  freezer: (
    <>
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M3 11h18M10 14v2M14 14v2" />
    </>
  ),
  geyser: (
    <>
      <rect x="6" y="3" width="12" height="14" rx="3" />
      <path d="M9 20v2M15 20v2M10 9c1-1 1 1 2 0s1 1 2 0" />
    </>
  ),
  headset: (
    <path d="M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v5H5a1 1 0 0 1-1-1v-4ZM20 14h-3v5h2a1 1 0 0 0 1-1v-4Z" />
  ),
  "map-pin": (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  message: <path d="M4 5h16v11H9l-5 4V5Z" />,
  microwave: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <rect x="5" y="8" width="10" height="8" rx="1" />
      <path d="M18 9h.01M18 12h.01M18 15h.01" />
    </>
  ),
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  refrigerator: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M6 10h12M9 6v1.5M9 13v3" />
    </>
  ),
  "shield-check": (
    <>
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  snowflake: (
    <>
      <path d="M12 2v20M4.93 4.93l14.14 14.14M2 12h20M4.93 19.07 19.07 4.93" />
      <path d="m8 4 4 2 4-2M8 20l4-2 4 2M4 8l2 4-2 4M20 8l-2 4 2 4" />
    </>
  ),
  sparkles: (
    <>
      <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" />
      <path d="m19 14 1.1 2.9L23 18l-2.9 1.1L19 22l-1.1-2.9L15 18l2.9-1.1L19 14ZM5 2l.8 2.2L8 5l-2.2.8L5 8l-.8-2.2L2 5l2.2-.8L5 2Z" />
    </>
  ),
  star: (
    <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" />
  ),
  "washing-machine": (
    <>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M4 7h16M7 4.5h.01M10 4.5h.01" />
      <circle cx="12" cy="14.5" r="4.5" />
    </>
  ),
  "water-drop": <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />,
  whatsapp: (
    <>
      <path d="M3 21l1.6-4.8A8.5 8.5 0 1 1 8 19.5L3 21Z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-1.8-1.8l.8-1-1-2L9 9.5Z" />
    </>
  ),
  wind: (
    <>
      <path d="M3 8h12a3 3 0 1 0-3-3M2 12h17a3 3 0 1 1-3 3M4 16h6a3 3 0 1 1-3 3" />
    </>
  ),
  wrench: (
    <>
      <path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L3 18l3 3 5.3-5.3a5 5 0 0 0 6.4-6.4l-3.1 3.1-3-3 3.1-3.1Z" />
    </>
  ),
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
