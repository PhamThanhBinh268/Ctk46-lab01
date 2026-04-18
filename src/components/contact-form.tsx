"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/contact/actions";

const initialState: ContactState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, action, isPending] = useActionState(submitContact, initialState);

  return (
    <form action={action} className="mt-12 space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">
          Họ và tên
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none transition-colors ${
            state.errors?.name ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
          }`}
          placeholder="Nhập tên của bạn"
        />
        {state.errors?.name && (
          <p className="text-red-500 text-sm mt-1">{state.errors.name[0]}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">
          Tin nhắn
        </label>
        <textarea
          id="message"
          name="message"
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none transition-colors h-32 ${
            state.errors?.message ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
          }`}
          placeholder="Gửi tin nhắn cho tôi...."
        ></textarea>
        {state.errors?.message && (
          <p className="text-red-500 text-sm mt-1">{state.errors.message[0]}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed flex justify-center items-center gap-2"
      >
        {isPending ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Đang gửi...
          </>
        ) : (
          "Gửi tin nhắn"
        )}
      </button>

      {state.message && (
        <div className={`p-4 mt-4 rounded-lg font-medium text-sm text-center ${state.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
          {state.message}
        </div>
      )}
    </form>
  );
}