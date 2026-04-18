export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  status: string;
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "toyscan",
    title: "ToyScan",
    description:
      "Nền tảng hỗ trợ quản lý, nhận diện và theo dõi đồ chơi thông minh",
    longDescription:
      "ToyScan là dự án em tham gia xây dựng nhằm hỗ trợ quản lý dữ liệu sản phẩm và tối ưu trải nghiệm theo dõi thông tin đồ chơi. Em tập trung vào phần phát triển tính năng, tích hợp giao diện và xử lý luồng dữ liệu trong ứng dụng.",
    tech: ["TypeScript", "React", "Next.JS", "GitHub"],
    status: "Hoàn thành",
    githubUrl: "https://github.com/PhamThanhBinh268/ToyScan",
  },
  {
    id: "aea-mobileapp",
    title: "A.E.A Mobile App",
    description: "Ứng dụng hỗ trợ người khiếm thị trong hoạt động hằng ngày",
    longDescription:
      "A.E.A là ứng dụng di động hướng đến hỗ trợ người khiếm thị tiếp cận môi trường xung quanh thuận tiện hơn. Dự án tập trung vào trải nghiệm sử dụng dễ tiếp cận, phản hồi nhanh và tính thực tiễn cho nhu cầu đời sống.",
    tech: ["Mobile App", "Accessibility", "UI/UX", "GitHub"],
    status: "Hoàn thành",
    githubUrl: "https://github.com/lqtdlu/A.E.A-MobileApp",
  },
  {
    id: "game3d-saveoulsoul",
    title: "Game3D_SaveOulSoul",
    description: "Game 3D kinh dị với bối cảnh sinh tồn và giải đố",
    longDescription:
      "Game3D_SaveOulSoul là đồ án game 3D kinh dị nơi người chơi phải tìm đường sinh tồn qua các màn chơi có yếu tố hù dọa, khám phá và giải đố. Em tham gia xây dựng ý tưởng gameplay, tinh chỉnh trải nghiệm và tổ chức mã nguồn dự án.",
    tech: ["Unity", "C#", "3D Game", "Game Design"],
    status: "Hoàn thành",
    githubUrl: "https://github.com/PhamThanhBinh268/Game3D_SaveOulSoul",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
