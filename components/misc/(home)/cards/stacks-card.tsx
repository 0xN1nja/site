import {
  Bash,
  CSS,
  DeviconElixir,
  FastAPI,
  HTML,
  IconCloudflare,
  IconFigma,
  IconGit,
  IconMySQL,
  IconNextJS,
  IconNodeJS,
  IconPostgres,
  IconPython,
  IconReactJS,
  IconTailwindcss,
  IconTypescript,
  IconVite,
  Jupyter,
  Linux,
  LogosArchlinux,
  MongoDB,
  NumPy,
  OpenCV,
  Pandas,
  ScikitLearn,
  SkillIconsDocker,
  SkillIconsGolang,
  TensorFlow,
  Vercel,
  Vim,
  VisualStudioCode,
} from "@/components/icons";
import { cn } from "@/lib/utils";
import type React from "react";

type MarqueeProps = {
  children: React.ReactNode;
  direction?: "left" | "up";
  pauseOnHover?: boolean;
  reverse?: boolean;
  fade?: boolean;
  className?: string;
};

const range = (start: number, end: number): number[] =>
  Array.from({ length: end - start }, (_, k) => k + start);

const Marquee = (props: MarqueeProps) => {
  const {
    children,
    direction = "left",
    pauseOnHover = false,
    reverse = false,
    fade = false,
    className,
  } = props;

  const ifToRightOrToBottom = (direction: string) => {
    if (direction === "left") {
      return "to right";
    } else {
      return "to bottom";
    }
  };

  return (
    <div
      className={cn(
        "group flex gap-4 overflow-hidden",
        direction === "left" ? "flex-row" : "flex-col",
        className,
      )}
      data-testid="marquee"
      style={{
        maskImage: fade
          ? `linear-gradient(${
              ifToRightOrToBottom(direction)
              // direction === "left" ? "to right" : "to bottom"
            }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
          : undefined,
        WebkitMaskImage: fade
          ? `linear-gradient(${
              ifToRightOrToBottom(direction)
              // direction === "left" ? "to right" : "to bottom"
            }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
          : undefined,
      }}
    >
      {range(0, 2).map((i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 justify-around gap-4 [--gap:1rem]",
            direction === "left"
              ? "animate-marquee-left flex-row"
              : "animate-marquee-up flex-col",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
            reverse && "direction-reverse",
          )}
          data-testid={`marquee-child-${i + 1}`}
        >
          {children}
        </div>
      ))}
    </div>
  );
};

export const StacksCard = () => {
  return (
    <div className="w-full p-1 flex h-36 flex-col gap-2 overflow-hidden rounded-xl mt-4">
      <Marquee className="" fade pauseOnHover>
        <IconTypescript width="48" height="48" />
        <IconPython width="48" height="48" />
        <IconPostgres width="48" height="48" />
        <FastAPI width="48" height="48" />
        <MongoDB width="48" height="48" />
        <Jupyter width="48" height="48" />
        <HTML width="48" height="48" />
        <CSS width="48" height="48" />
        <Bash width="48" height="48" />
        <OpenCV width="48" height="48" />
        <Linux width="48" height="48" />
        <IconNextJS width="48" height="48" />
        <IconReactJS width="48" height="48" />
        <IconTailwindcss width="48" height="48" />
        <SkillIconsGolang width="48" height="48" />
        <Vim width="48" height="48" />
      </Marquee>
      <Marquee className="mt-2" reverse fade pauseOnHover>
        <DeviconElixir width="48" height="48" />
        <SkillIconsDocker width="48" height="48" />
        <LogosArchlinux width="48" height="48" />
        <IconMySQL width="48" height="48" />
        <IconFigma width="48" height="48" />
        <IconGit width="48" height="48" />
        <ScikitLearn width="48" height="48" />
        <TensorFlow width="48" height="48" />
        <Vercel width="48" height="48" />
        <NumPy width="48" height="48" />
        <Pandas width="48" height="48" />
        <VisualStudioCode width="48" height="48" />
        <IconVite width="48" height="48" />
        <IconCloudflare width="48" height="48" />
        <IconNodeJS width="48" height="48" />
      </Marquee>
    </div>
  );
};
