export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

export const guestbookEntries: GuestbookEntry[] = [
  {
    id: "1",
    name: "Admin",
    message: "Chào mừng bạn đến với sổ lưu bút (Guestbook)!",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Hùng Trần",
    message: "Web Next.js xịn quá, mong chờ phần Authentication ở Lab sau!",
    createdAt: new Date(Date.now() - 1000000).toISOString(),
  },
  {
    id: "3",
    name: "Hải Lại",
    message: "Bài thực hành này giúp mình ôn tập phần API Route rất dễ hiểu. Cảm ơn nhé.",
    createdAt: new Date(Date.now() - 2000000).toISOString(),
  },
];
