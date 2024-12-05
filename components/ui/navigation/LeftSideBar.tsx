import React from "react";
import NavLinks from "./navbar/NavLinks";
import { ROUTES } from "@/constants/routes";

import { Button } from "../button";
import Image from "next/image";
import Link from "next/link";

const buttonClass =
  "small-medium min-h-[41px] rounded-lg px-4 py-3 shadow-none w-full";

export default function LeftSideBar() {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky top-0 left-0 h-screen flex flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks />
      </div>
      <div className="flex flex-col gap-3">
        <Button className={`${buttonClass} btn-secondary`} asChild>
          <Link href={ROUTES.SIGN_IN}>
            <Image
              src="/icons/account.svg"
              alt="Account"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
            <span className="text-primary-500 max-lg:hidden">Log In</span>
          </Link>
        </Button>

        <Button
          className={`${buttonClass} btn-tertiary light-border-2 text-dark400_light900`}
          asChild
        >
          <Link href={ROUTES.SIGN_UP}>
            <Image
              src="/icons/sign-up.svg"
              alt="Sign up"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
            <span className="max-lg:hidden">Sign Up</span>
          </Link>
        </Button>
      </div>
    </section>
  );
}
