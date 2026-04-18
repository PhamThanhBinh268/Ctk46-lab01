import { NextResponse } from "next/server";
import { guestbookEntries } from "@/data/guestbook";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function DELETE(request: Request, { params }: RouteParams) {
  const { id } = await params;
  const index = guestbookEntries.findIndex((entry) => entry.id === id);

  if (index === -1) {
    return NextResponse.json(
      { error: "Không tìm thấy lời nhắn." },
      { status: 404 }
    );
  }

  guestbookEntries.splice(index, 1);

  return NextResponse.json({ success: true, message: "Đã xóa lời nhắn." });
}

export async function PUT(request: Request, { params }: RouteParams) {
  const { id } = await params;

  try {
    const body = await request.json();
    const { message } = body;

    // Validation for message (1-500 characters)
    if (!message || typeof message !== "string" || message.length < 1 || message.length > 500) {
      return NextResponse.json(
        { error: "Lời nhắn không hợp lệ. Vui lòng nhập từ 1 đến 500 ký tự." },
        { status: 400 }
      );
    }

    const index = guestbookEntries.findIndex((entry) => entry.id === id);

    if (index === -1) {
      return NextResponse.json(
        { error: "Không tìm thấy lời nhắn." },
        { status: 404 }
      );
    }

    // Cập nhật nội dung lời nhắn
    guestbookEntries[index].message = message.trim();

    return NextResponse.json(guestbookEntries[index]);
  } catch (error) {
    console.error("guestbook PUT error", error);
    return NextResponse.json(
      { error: "Request body không hợp lệ." },
      { status: 400 }
    );
  }
}
