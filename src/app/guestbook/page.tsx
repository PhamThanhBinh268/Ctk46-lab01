import { guestbookEntries } from "@/data/guestbook";
import GuestbookForm from "@/components/guestbook-form";
import DeleteButton from "@/components/delete-button";
import Link from "next/link";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function GuestbookPage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  const currentPage = Number(resolvedParams.page) || 1;
  const ITEMS_PER_PAGE = 5;

  const totalItems = guestbookEntries.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  // Fallback valid page limits
  const validPage = Math.max(1, Math.min(currentPage, totalPages || 1));

  const startIndex = (validPage - 1) * ITEMS_PER_PAGE;
  const currentEntries = guestbookEntries.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-lg shadow-sm border mt-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Lưu bút (Guestbook)</h1>

      {/* Form thêm lời nhắn - Client Component */}
      <GuestbookForm />

      {/* Hiển thị danh sách lời nhắn */}
      <div className="space-y-4">
        {guestbookEntries.length === 0 && (
          <p className="text-gray-500">Chưa có lời nhắn nào. Hãy là người đầu tiên!</p>
        )}

        {currentEntries.map((entry) => (
          <div key={entry.id} className="p-4 border rounded-lg hover:shadow-sm transition bg-white flex justify-between items-start">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">{entry.name}</h3>
              <p className="text-xs text-gray-500 mb-2">
                {new Date(entry.createdAt).toLocaleString("vi-VN")}
              </p>
              <p className="text-gray-700 whitespace-pre-wrap">{entry.message}</p>
            </div>
            
            {/* Nút xóa gọi Action Delete (Client Component) */}
            <DeleteButton id={entry.id} />
          </div>
        ))}
      </div>

      {/* Điều hướng phân trang (Dùng links trên Server Component) */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8 pt-4 border-t">
          {validPage > 1 ? (
            <Link
              href={`/guestbook?page=${validPage - 1}`}
              className="px-4 py-2 border rounded-md hover:bg-gray-50 transition font-medium text-sm text-gray-700"
            >
              Trang trước
            </Link>
          ) : (
            <span className="px-4 py-2 border rounded-md opacity-50 cursor-not-allowed font-medium text-sm text-gray-700">
              Trang trước
            </span>
          )}

          <span className="text-sm text-gray-600 font-medium">
            Trang {validPage} / {totalPages}
          </span>

          {validPage < totalPages ? (
            <Link
              href={`/guestbook?page=${validPage + 1}`}
              className="px-4 py-2 border rounded-md hover:bg-gray-50 transition font-medium text-sm text-gray-700"
            >
              Trang sau
            </Link>
          ) : (
            <span className="px-4 py-2 border rounded-md opacity-50 cursor-not-allowed font-medium text-sm text-gray-700">
              Trang sau
            </span>
          )}
        </div>
      )}
    </div>
  );
}
