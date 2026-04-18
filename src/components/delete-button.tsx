"use client";

import { useTransition } from "react";
import { deleteGuestbookEntry } from "@/app/guestbook/actions";

export default function DeleteButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (window.confirm("Bạn có chắc chắn muốn xóa lời nhắn này?")) {
      startTransition(async () => {
        const res = await deleteGuestbookEntry(id);
        if (!res.success) {
          alert(res.error || "Gặp lỗi trong quá trình xóa.");
        }
      });
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isPending}
      className="ml-4 text-sm text-red-600 hover:text-red-800 disabled:text-gray-400 disabled:cursor-not-allowed font-medium px-2 py-1 bg-red-50 hover:bg-red-100 rounded transition"
    >
      {isPending ? "Đang xóa..." : "Xóa"}
    </button>
  );
}
