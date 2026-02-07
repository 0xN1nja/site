import { RiTwitterXFill } from "@/components/icons";
import { CalendarDays, Linkedin } from "lucide-react";

export const LinksCard = () => {
  return (
    <div className="flex gap-4 w-full">
      <a
        href="https://www.linkedin.com/in/0xN1nja"
        target="_blank"
        className="hover:scale-95 duration-500 transform-gpu h-36 flex flex-col justify-center items-center rounded-lg text-white bg-[#2867b2] flex-1"
        rel="noreferrer"
      >
        <Linkedin />
        <p className="text-[12px] text-white/90 -rotate-3">(serious stuff)</p>
      </a>
      <a
        href="https://x.com/0xN1nja"
        target="_blank"
        className="hover:scale-95 duration-500 transform-gpu h-36 flex flex-col justify-center items-center rounded-lg text-white bg-[#1c1d1f] flex-1"
        rel="noreferrer"
      >
        <RiTwitterXFill className="text-2xl" />
        <p className="text-[12px] text-white/55 -rotate-3">(share memes)</p>
      </a>
    </div>
  );
};
