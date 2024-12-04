"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  DefaultValues,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { z, ZodType } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";

interface AuthFormProps<T extends FieldValues> {
  schema: ZodType<T>;
  formType: "SIGN_IN" | "SIGN_UP";
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean }>;
}

export function AuthForm<T extends FieldValues>({
  formType,
  schema,
  defaultValues,
  onSubmit,
}: AuthFormProps<any>) {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const buttonText = formType === "SIGN_IN" ? "Sign In" : "Sign Up";
  const handleSubmit: SubmitHandler<T> = async () => {
    // TODO authenticate user
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="mt-10 space-y-6"
      >
        {Object.keys(defaultValues).map((field) => (
          <FormField
            key={field}
            control={form.control}
            name={field}
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-2.5">
                <FormLabel className="paragraph-medium text-dark_400_light700">
                  {field.name === "email"
                    ? "Email Address"
                    : field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                </FormLabel>
                <FormControl>
                  <Input
                    className="paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 no-focus min-h-12 rounded-1.5 border"
                    type={field.name === "password" ? "password" : "text"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button
          className="primary-gradient paragraph-medium min-h-12 w-full rounded-2 px-4 py-3 font-inter !text-light-900"
          disabled={form.formState.isSubmitting}
          type="submit"
        >
          {form.formState.isSubmitting
            ? formType === "SIGN_IN"
              ? "Signing in..."
              : "Signin up..."
            : buttonText}
        </Button>
        {formType === "SIGN_IN" ? (
          <p>
            Don&apos;t have an account?{" "}
            <Link
              className="paragraph-semibold primary-text-gradient"
              href={ROUTES.SIGN_UP}
            >
              Sign up
            </Link>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <Link
              className="paragraph-semibold primary-text-gradient"
              href={ROUTES.SIGN_IN}
            >
              Sign in
            </Link>
          </p>
        )}
      </form>
    </Form>
  );
}