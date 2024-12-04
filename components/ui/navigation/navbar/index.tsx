import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Theme } from "./Theme";
import LogoutForm from "../../forms/LogoutForm";
import { auth } from "@/auth";
import MobileNavigation from "./MobileNavigation";

export default async function NavBar() {
  const session = await auth();
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full p-6 dark:shadow-none px-12 shadow-light-300 gap-5">
      <Link href={"/"} className="flex items-center gap-1">
        <Image
          src="/images/site-logo.svg"
          alt="DevFlow Logo"
          height={23}
          width={23}
        />
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev <span className="text-primary-500">Flow</span>
        </p>
      </Link>
      <p>Global Search</p>
      <div className="flex-between gap-5">
        <Theme />
        <MobileNavigation />
        {session && <LogoutForm />}
      </div>
    </nav>
  );
}
