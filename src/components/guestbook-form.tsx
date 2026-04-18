"use client";

import { useActionState } from "react";
import { createGuestbookEntry, type ActiveState } from "@/app/guestbook/actions";

const initialState: ActiveState = {
  success: false,
  message: "",
};

export default function GuestbookForm() {
  const [state, action, isPending] = useActionState(createGuestbookEntry, initialState);

  return (
    <form action={action} className="mb-8 space-y-4 bg-gray-50 p-6 rounded-lg border">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Tên của bạn
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="John Doe"
        />
        {state.errors?.name && (
          <p className="text-red-500 text-sm mt-1">{state.errors.name[0]}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Lời nhắn
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Để lại vài lời..."
        />
        {state.errors?.message && (
          <p className="text-red-500 text-sm mt-1">{state.errors.message[0]}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition disabled:bg-blue-300 disabled:cursor-not-allowed"
      >
        {isPending ? "Đang gửi..." : "Gửi lời nhắn"}
      </button>

      {state.message && (
        <p className={`text-sm mt-2 font-medium ${state.success ? "text-green-600" : "text-red-600"}`}>
          {state.message}
        </p>
      )}
    </form>
  );
}
