"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginSchema } from "@/schemas";
import Button from "@/components/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { useRouter } from "next/navigation";
import { login } from "@/app/login";
import cuid from "cuid";

export default function LoginForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      studentNumber: undefined,
    },
  });

  async function onSubmit({ studentNumber }: z.infer<typeof LoginSchema>) {
    const user = await login(studentNumber);

    if (!user) {
      // This should be a real passId soon. Now not implemented and id is generated.
      router.push(`/register/${cuid()}/${studentNumber}`);
    } else {
      router.push("/home");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-80 flex-col gap-10"
      >
        <FormField
          control={form.control}
          name="studentNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-gray-foreground">
                Studentnummer
              </FormLabel>
              <FormControl>
                <input
                  className="form__field block h-12 w-full p-2 text-lg outline-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className={"mx-auto"} type={"submit"}>
          Login
        </Button>
      </form>
    </Form>
  );
}
