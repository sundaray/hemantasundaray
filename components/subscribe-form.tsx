"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { createSubscriber } from "@/lib/create-subscriber";
import { subscribeSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

export type FormData = z.infer<typeof subscribeSchema>;

export function SubscribeForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(subscribeSchema) });

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const router = useRouter();
  const { toast } = useToast();

  async function onSubmit(data: FormData) {
    await createSubscriber({
      data,
      setIsLoading,
      reset,
      toast,
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
      <div className="grid gap-1">
        <Input
          type="email"
          placeholder="name@example.com"
          autoComplete="email"
          disabled={isLoading}
          {...register("email")}
        />
        {errors.email && (
          <p className="px-1 text-xs text-red-600 animate-in fade-in-0 slide-in-from-left-1">
            {errors.email.message}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading && (
          <Icons.loaderCircle className="mr-2 size-4 animate-spin" />
        )}
        Subscribe
      </Button>
    </form>
  );
}
