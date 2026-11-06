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

export default function TechIcon({ name, className = "h-3.5 w-3.5" }: { name: string; className?: string }) {
  const { Icon, color } = ICONS[name] ?? { Icon: TbCode };
  return <Icon className={`shrink-0 ${className}`} style={color ? { color } : undefined} aria-hidden />;
}
