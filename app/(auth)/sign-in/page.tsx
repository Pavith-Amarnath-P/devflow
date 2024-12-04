"use client";
import { AuthForm } from "@/components/ui/forms/AuthForm";
import { SignInSchema } from "@/lib/validations";

import React from "react";

export default function SignIn() {
  return (
    <AuthForm
      formType="SIGN_IN"
      schema={SignInSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
}
