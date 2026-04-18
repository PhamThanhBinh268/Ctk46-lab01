"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const initialState: ContactState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, action, isPending] = useActionState(submitContact, initialState);

  return (
    <form action={action} className="mt-12 space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-gray-800 font-bold">
          Họ và tên
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Nhập tên của bạn"
          className={state.errors?.name ? "border-red-500 focus-visible:ring-red-500" : ""}
        />
        {state.errors?.name && (
          <p className="text-red-500 text-sm">{state.errors.name[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-gray-800 font-bold">
          Tin nhắn
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Gửi tin nhắn cho tôi...."
          className={`h-32 resize-none ${state.errors?.message ? "border-red-500 focus-visible:ring-red-500" : ""}`}
        />
        {state.errors?.message && (
          <p className="text-red-500 text-sm">{state.errors.message[0]}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="w-full py-6 text-base font-bold bg-blue-600 hover:bg-blue-700"
      >
        {isPending ? "Đang gửi..." : "Gửi tin nhắn"}
      </Button>

      {state.message && (
        <div className={`p-4 mt-4 rounded-lg font-medium text-sm text-center ${state.success ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
          {state.message}
        </div>
      )}
    </form>
  );
}
