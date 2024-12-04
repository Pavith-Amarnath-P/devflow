"use client";
import { AuthForm } from "@/components/ui/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";
import React from "react";

export default function SignUp() {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{ username: "", name: "", email: "", password: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
}
