import Link from "next/link";
import { projects } from "@/data/projects";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Dự án cá nhân</h1>
        <p className="text-muted-foreground text-lg">
          Những sản phẩm và đồ án tiêu biểu em đã thực hiện trong quá trình học tập.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="group hover:border-primary hover:shadow-lg transition-all flex flex-col h-full">
            <CardHeader className="flex flex-row items-start justify-between space-y-0.5">
              <CardTitle className="text-2xl group-hover:text-primary transition-colors line-clamp-1">{project.title}</CardTitle>
              <Badge variant={project.status === "Hoàn thành" ? "default" : "secondary"}>
                {project.status}
              </Badge>
            </CardHeader>
            <CardContent className="flex-1 space-y-6">
              <p className="text-muted-foreground line-clamp-2" title={project.description}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="outline" className="font-medium">{t}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between mt-auto">
              <Link href={"/projects/" + project.id} className={buttonVariants({ variant: "link", className: "p-0 h-auto font-semibold" })}>Chi tiết &rarr;</Link>
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "ghost", className: "text-muted-foreground hover:text-foreground" })}>Source Code</a>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}