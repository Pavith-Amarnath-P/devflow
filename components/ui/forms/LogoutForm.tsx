import React from "react";
import { Button } from "../button";
import { signOut } from "@/auth";
import { ROUTES } from "@/constants/routes";

export default function LogoutForm() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: ROUTES.SIGN_IN });
      }}
    >
      <Button type="submit">Logout</Button>
    </form>
  );
}
