"use server";
import { z } from "zod";
import { guestbookEntries, type GuestbookEntry } from "@/data/guestbook";
import { revalidatePath } from "next/cache";

const rateLimitMap = new Map<string, number>();

const guestbookSchema = z.object({
  name: z.string().min(2, "Tên phải có ít nhất 2 ký tự").max(50, "Tên không được vượt quá 50 ký tự"),
  message: z.string().min(1, "Lời nhắn không để trống").max(500, "Lời nhắn không vượt quá 500 ký tự"),
});

export type ActiveState = { success: boolean; message: string; errors?: Record<string, string[]>; };

export async function createGuestbookEntry(prevState: ActiveState | null, formData: FormData): Promise<ActiveState> {
  try {
    const rawData = { name: formData.get("name")?.toString() || "", message: formData.get("message")?.toString() || "" };
    const now = Date.now();
    const lastSubmitTime = rateLimitMap.get(rawData.name);
    if (lastSubmitTime && now - lastSubmitTime < 60000) return { success: false, message: "Bạn gửi quá nhanh." };
    const validatedFields = guestbookSchema.safeParse(rawData);
    if (!validatedFields.success) return { success: false, message: "Dữ liệu không hợp lệ.", errors: validatedFields.error.flatten().fieldErrors };
    const newEntry: GuestbookEntry = { id: Date.now().toString() + Math.random().toString(36).substring(2, 9), name: validatedFields.data.name.trim(), message: validatedFields.data.message.trim(), createdAt: new Date().toISOString() };
    guestbookEntries.unshift(newEntry);
    rateLimitMap.set(rawData.name, now);
    revalidatePath("/guestbook");
    return { success: true, message: "Gửi lời nhắn thành công!" };
  } catch (err) {
    return { success: false, message: "Lỗi hệ thống." };
  }
}

export async function deleteGuestbookEntry(id: string) {
  try {
    const index = guestbookEntries.findIndex((entry) => entry.id === id);
    if (index !== -1) { guestbookEntries.splice(index, 1); revalidatePath("/guestbook"); return { success: true }; }
    return { success: false, error: "Không tìm thấy." };
  } catch (err) { return { success: false, error: "Lỗi hệ thống." }; }
}
