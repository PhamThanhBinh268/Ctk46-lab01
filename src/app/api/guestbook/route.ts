import { NextResponse } from "next/server";
import { guestbookEntries, type GuestbookEntry } from "@/data/guestbook";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limitParam = searchParams.get("limit");

  let entries = [...guestbookEntries];

  if (limitParam) {
    const limit = parseInt(limitParam, 10);
    if (!isNaN(limit) && limit > 0) {
      entries = entries.slice(0, limit);
    }
  }

  return NextResponse.json(entries);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, message } = body;

    // Validation name (2-50 characters)
    if (!name || typeof name !== "string" || name.length < 2 || name.length > 50) {
      return NextResponse.json(
        { error: "Tên không hợp lệ. Vui lòng nhập từ 2 đến 50 ký tự." },
        { status: 400 }
      );
    }

    // Validation message (1-500 characters)
    if (!message || typeof message !== "string" || message.length < 1 || message.length > 500) {
      return NextResponse.json(
        { error: "Lời nhắn không hợp lệ. Vui lòng nhập từ 1 đến 500 ký tự." },
        { status: 400 }
      );
    }

    const newEntry: GuestbookEntry = {
      id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
      name: name.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    // Thêm lời nhắn mới vào đầu mảng
    guestbookEntries.unshift(newEntry);

    return NextResponse.json(newEntry, { status: 201 });
  } catch (error) {
    console.error("guestbook POST error", error);
    return NextResponse.json(
      { error: "Request body không hợp lệ." },
      { status: 400 }
    );
  }
}
