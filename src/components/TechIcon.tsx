import type { IconType } from "react-icons";
import {
  SiExpo,
  SiExpress,
  SiFirebase,
  SiGooglecloud,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { BsMicrosoft, BsMicrosoftTeams } from "react-icons/bs";
import { PiAppWindow, PiChartBar, PiShareNetwork } from "react-icons/pi";
import { TbApi, TbAutomation, TbBrandMysql, TbBrandReactNative, TbChartDots, TbCode, TbFilter } from "react-icons/tb";

/**
 * Tech name → icon + brand color. `color: undefined` means "use the text color"
 * (for black/white logos like Next.js and Express, so they work in both themes).
 * Simple Icons no longer ships Microsoft logos, so Power Platform tools use
 * generic icons in their brand colors.
 */
const ICONS: Record<string, { Icon: IconType; color?: string }> = {
  React: { Icon: SiReact, color: "#61DAFB" },
  "React Native": { Icon: TbBrandReactNative, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs },
  Expo: { Icon: SiExpo },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  Express: { Icon: SiExpress },
  NestJS: { Icon: SiNestjs, color: "#E0234E" },
  "REST APIs": { Icon: TbApi },
  Firebase: { Icon: SiFirebase, color: "#FFA611" },
  Firestore: { Icon: SiFirebase, color: "#FFA611" },
  "Google Cloud Run": { Icon: SiGooglecloud, color: "#4285F4" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  MySQL: { Icon: TbBrandMysql, color: "#4F8FC0" },
  "Power Apps": { Icon: PiAppWindow, color: "#B85CB6" },
  "Power Automate": { Icon: TbAutomation, color: "#2E7CF6" },
  SharePoint: { Icon: PiShareNetwork, color: "#0A9396" },
  "Power BI": { Icon: PiChartBar, color: "#E8B90C" },
  "Microsoft 365": { Icon: BsMicrosoft },
  Teams: { Icon: BsMicrosoftTeams, color: "#6264A7" },
  "Data Cleaning": { Icon: TbFilter },
  Visualization: { Icon: TbChartDots },
};

const FALLBACK = "fallback";
const slug = (name: string) => `tech-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
const idFor = (name: string) => (name in ICONS ? slug(name) : slug(FALLBACK));

/**
 * Every icon's SVG is defined ONCE here (rendered in the root layout), and each
 * <TechIcon> just references it with <use>. Rendering the react-icons
 * components directly repeated their path data ~90 times in the HTML and RSC
 * payload (~430 KB), which broke link previews on WhatsApp.
 */
export function TechIconSprite() {
  const entries: [string, IconType][] = [
    ...Object.entries(ICONS).map(([name, { Icon }]) => [name, Icon] as [string, IconType]),
    [FALLBACK, TbCode],
  ];
  return (
    <svg aria-hidden width="0" height="0" style={{ position: "absolute", overflow: "hidden" }}>
      {entries.map(([name, Icon]) => (
        <symbol key={name} id={slug(name)}>
          <Icon width="100%" height="100%" />
        </symbol>
      ))}
    </svg>
  );
}

export default function TechIcon({ name, className = "h-3.5 w-3.5" }: { name: string; className?: string }) {
  const color = ICONS[name]?.color;
  return (
    <svg className={`shrink-0 ${className}`} style={color ? { color } : undefined} aria-hidden>
      <use href={`#${idFor(name)}`} />
    </svg>
  );
}
