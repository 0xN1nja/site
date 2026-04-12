import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";

import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import usesImg from "@/public/images/uses/setup.webp";
import homelabImg from "@/public/images/homelab/grafana.webp";

const NavDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger className="font-normal text-base p-0 -mt-1 rounded-full px-3 py-1 bg-transparent hover:bg-black/30 h-auto">
        more
        <ChevronDown className="inline-block h-3 w-3 ml-1" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="flex justify-start pb-0">More</DrawerTitle>
        </DrawerHeader>
        <ul className="text-white grid gap-3 p-4 h-fit grid-cols-2">
          {/* <DrawerClose asChild>
            <ListItem
              title="anime"
              href="/anime"
              className="relative z-10 hover:text-white hover:opacity-80"
            >
              <Image
                className="absolute object-cover inset-0 w-full h-full -z-40 rounded-md  brightness-50"
                src={anime}
                alt="anime"
                placeholder="blur"
              />
            </ListItem>
          </DrawerClose> */}
          <DrawerClose asChild>
            <ListItem
              title="uses"
              href="/uses"
              className="relative z-10 hover:text-white hover:opacity-80"
            >
              <Image
                className="absolute object-cover inset-0 w-full h-full -z-40 rounded-md  brightness-50"
                src={usesImg}
                alt="uses"
                placeholder="blur"
              />
            </ListItem>
          </DrawerClose>

          <DrawerClose asChild>
            <ListItem
              title="homelab"
              href="/homelab"
              className="relative z-10 hover:text-white hover:opacity-80"
            >
              <Image
                className="absolute object-cover inset-0 w-full h-full -z-40 rounded-md  brightness-50"
                src={homelabImg}
                alt="homelab"
                placeholder="blur"
              />
            </ListItem>
          </DrawerClose>
        </ul>

        <DrawerFooter>
          <p className="font-bold py-4">Online</p>
          <Button variant="secondary">
            <a
              href="https://github.com/0xN1nja"
              target="_blank"
              rel="noopener noreferrer"
              className="h-full w-full"
            >
              <Github className="inline-flex mr-1 mb-1" size={15} />
              GitHub
            </a>
          </Button>
          <Button variant="secondary">
            <a
              href="http://x.com/0xN1nja"
              target="_blank"
              rel="noopener noreferrer"
              className="h-full w-full"
            >
              <Twitter className="inline-flex mr-1 mb-1" size={15} />
              Twitter
            </a>
          </Button>
          <Button variant="secondary">
            <a
              href="https://www.linkedin.com/in/0xN1nja"
              rel="noopener noreferrer"
              className="h-full w-full"
            >
              <Linkedin className="inline-flex mr-1 mb-1" size={15} />
              LinkedIn
            </a>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default NavDrawer;

export const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <Link
        href={props.href!}
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground h-16",
          className,
        )}
        {...props}
      >
        <div className="font-medium leading-none ">
          {title} <ArrowUpRight className="inline-flex" size="18" />
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </li>
  );
});
ListItem.displayName = "ListItem";
