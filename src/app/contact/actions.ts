"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Họ và tên phải có ít nhất 2 ký tự"),
  message: z.string().min(10, "Tin nhắn phải có ít nhất 10 ký tự"),
});

export type ContactState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContact(
  prevState: ContactState | null,
  formData: FormData
): Promise<ContactState> {
  // Giả lập thời gian gửi (1.5 giây)
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const rawData = {
    name: formData.get("name")?.toString()?.trim() || "",
    message: formData.get("message")?.toString()?.trim() || "",
  };

  const validated = contactSchema.safeParse(rawData);

  if (!validated.success) {
    return {
      success: false,
      message: "Vui lòng kiểm tra lại thông tin biểu mẫu.",
      errors: validated.error.flatten().fieldErrors,
    };
  }

  return {
    success: true,
    message: "Gửi tin nhắn thành công! Tôi sẽ phản hồi sớm nhất có thể.",
  };
}