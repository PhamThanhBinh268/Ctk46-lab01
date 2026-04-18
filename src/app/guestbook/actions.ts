"use server";

import { z } from "zod";
import { guestbookEntries, type GuestbookEntry } from "@/data/guestbook";
import { revalidatePath } from "next/cache";

// Dictionary to track last submission time by IP/Identifier
const rateLimitMap = new Map<string, number>();

// Định nghĩa Zod schema validation
const guestbookSchema = z.object({
  name: z
    .string()
    .min(2, "Tên phải có ít nhất 2 ký tự")
    .max(50, "Tên không được vượt quá 50 ký tự"),
  message: z
    .string()
    .min(1, "Lời nhắn không được để trống")
    .max(500, "Lời nhắn không được vượt quá 500 ký tự"),
});

export type ActiveState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

// Server Action xử lý form submit
export async function createGuestbookEntry(
  prevState: ActiveState | null,
  formData: FormData
): Promise<ActiveState> {
  try {
    const rawData = {
      name: formData.get("name")?.toString() || "",
      message: formData.get("message")?.toString() || "",
    };

    // Rate Limiting (1 message per minute per name)
    const now = Date.now();
    const lastSubmitTime = rateLimitMap.get(rawData.name);
    
    if (lastSubmitTime && now - lastSubmitTime < 60000) {
      return {
        success: false,
        message: "Bạn đang gửi quá nhanh, vui lòng đợi 1 phút trước khi gửi lại.",
      };
    }

    // Validate với Zod
    const validatedFields = guestbookSchema.safeParse(rawData);

    if (!validatedFields.success) {
      return {
        success: false,
        message: "Dữ liệu không hợp lệ. Vui lòng kiểm tra lại.",
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    // Tạo lời nhắn mới
    const newEntry: GuestbookEntry = {
      id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
      name: validatedFields.data.name.trim(),
      message: validatedFields.data.message.trim(),
      createdAt: new Date().toISOString(),
    };

    // Lưu vào bộ nhớ tạm
    guestbookEntries.unshift(newEntry);
    
    // Update rate limit record
    rateLimitMap.set(rawData.name, now);

    // Kích hoạt revalidate để cập nhật giao diện (nếu dùng Server components)
    revalidatePath("/guestbook");

    return {
      success: true,
      message: "Đã gửi lời nhắn thành công!",
    };
  } catch (error) {
    console.error("action error:", error);
    return {
      success: false,
      message: "Đã xảy ra lỗi hệ thống, vui lòng thử lại sau.",
    };
  }
}

// Server Action để xóa lời nhắn
export async function deleteGuestbookEntry(id: string) {
  try {
    const index = guestbookEntries.findIndex((entry) => entry.id === id);

    if (index !== -1) {
      guestbookEntries.splice(index, 1);
      revalidatePath("/guestbook");
      return { success: true };
    }
    return { success: false, error: "Lời nhắn không tồn tại." };
  } catch (error) {
    console.error("Xoá thất bại:", error);
    return { success: false, error: "Lỗi hệ thống." guestbookEntries.unshift(newEntry);
    
    // Update rate limit record
    rateLimitMap.set(rawData.name, now);

    // Kích hoạt revalidate để cập nhật giao diện (nếu dùng Server components)
    revalidatePath("/guestbook");

    return {
      success: true,
      message: "Đã gửi lời nhắn thành công!",
    };
  } catch (error) {
    console.error("action error:", error);
    return {
      success: false,
      message: "Đã xảy ra lỗi hệ thống, vui lòng thử lại sau.",
    };
  }
}

// Server Action để xóa lời nhắn
export async function deleteGuestbookEntry(id: string) {
  try {
    const index = guestbookEntries.findIndex((entry) => entry.id === id);

    if (index !== -1) {
      guestbookEntries.splice(index, 1);
      revalidatePath("/guestbook");
      return { success: true };
    }
    return { success: false, error: "Lời nhắn không tồn tại." };
  } catch (error) {
    console.error("Xoá thất bại:", error);
    return { success: false, error: "Lỗi hệ thống." };
  }
}
