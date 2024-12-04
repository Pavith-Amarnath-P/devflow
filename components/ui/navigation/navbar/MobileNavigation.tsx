import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { Button } from "../../button";
import NavLinks from "./NavLinks";

export default function MobileNavigation() {
  const buttonClass =
    "small-medium min-h-[41px] rounded-lg px-4 py-3 shadow-none w-full";
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/icons/hamburger.svg"
          alt="Menu"
          width={36}
          height={36}
          className="invert-colors"
        />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetTitle className="hidden">Navigation</SheetTitle>
        <SheetClose asChild>
          <Link href={ROUTES.HOME} className="flex items-center gap-1">
            <Image
              src="/images/site-logo.svg"
              alt="DevFlow Logo"
              height={23}
              width={23}
            />
            <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900">
              Dev <span className="text-primary-500">Flow</span>
            </p>
          </Link>
        </SheetClose>
        <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <section className="flex flex-col h-full gap-6 pt-16">
              <NavLinks isMobileNav />
            </section>
          </SheetClose>

          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_IN}>
                <Button className={`${buttonClass} btn-secondary`}>
                  <span className="primary-text-gradient">Log In</span>
                </Button>
              </Link>
            </SheetClose>
            <SheetClose>
              <Link href={ROUTES.SIGN_UP}>
                <Button
                  className={`${buttonClass} btn-tertiary light-border-2 text-dark400_light900`}
                >
                  Sign Up
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
