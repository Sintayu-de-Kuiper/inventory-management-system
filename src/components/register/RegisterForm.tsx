"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RegisterSchema } from "@/schemas";
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
import { createUser } from "@/app/register/[passId]/create";
import { useParams, useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();
  const { passId } = useParams();

  const passIdSchema = z.string().min(1, "Pass ID is required");

  if (!passIdSchema.safeParse(passId).success) {
    alert("Pass ID is required");
    router.push("/");
    return;
  }

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      studentNumber: undefined,
      cohort: "",
    },
  });

  async function onSubmit(data: z.infer<typeof RegisterSchema>) {
    alert("hello");

    const response = await createUser({
      ...data,
      passId: passId as string,
    });
    console.log(response);

    if (response.success) {
      alert("User registered successfully!");
      router.push("/home");
    } else {
      alert("User registration failed! Please try again later.");
      router.push("/");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 flex flex-col gap-8"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-gray-foreground">
                Voornaam
              </FormLabel>
              <FormControl>
                <input
                  className="form__field block h-12 p-2 text-lg outline-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-gray-foreground">
                Achternaam
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
        <FormField
          control={form.control}
          name="cohort"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg text-gray-foreground">
                Cohort (2020-2021)
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

        <Button className={"mx-auto mt-20"} type={"submit"}>
          Registeer
        </Button>
      </form>
    </Form>
  );
}
