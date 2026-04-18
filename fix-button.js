const fs = require('fs');

const fixAsChild = (file) => {
  if (!fs.existsSync(file)) return;
  let text = fs.readFileSync(file, 'utf8');
  
  if (text.includes('<Button') && !text.includes('buttonVariants')) {
     text = text.replace('import { Button } from "@/components/ui/button";', 'import { Button, buttonVariants } from "@/components/ui/button";');
  }

  // Replace <Button asChild variant="link" className="..."> <Link href="X">Y</Link> </Button>
  // with <Link href="X" className={buttonVariants({ variant: "link", className: "..." })}>Y</Link>
  // Due to varying structures, let's just do simple exact string replacements for these 3 files.

  if(file.includes('blog/page.tsx')) {
    text = text.replace(
      '<Button asChild variant="link" className="p-0 h-auto font-semibold">\n                <Link href={"/blog/" + post.id}>Đọc thêm &rarr;</Link>\n              </Button>',
      '<Link href={"/blog/" + post.id} className={buttonVariants({ variant: "link", className: "p-0 h-auto font-semibold" })}>Đọc thêm &rarr;</Link>'
    );
  }
  
  if(file.includes('projects/page.tsx')) {
    text = text.replace(
      '<Button asChild variant="link" className="p-0 h-auto font-semibold">\n                <Link href={"/projects/" + project.id}>Chi tiết &rarr;</Link>\n              </Button>',
      '<Link href={"/projects/" + project.id} className={buttonVariants({ variant: "link", className: "p-0 h-auto font-semibold" })}>Chi tiết &rarr;</Link>'
    );
    text = text.replace(
      '<Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">\n                  <a href={project.githubUrl} target="_blank" rel="noreferrer">Source Code</a>\n                </Button>',
      '<a href={project.githubUrl} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "ghost", className: "text-muted-foreground hover:text-foreground" })}>Source Code</a>'
    );
  }
  
  if(file.includes('pokemon/[id]/page.tsx')) {
    if (!text.includes('buttonVariants')) {
      text = text.replace('import { Button } from "@/components/ui/button";', 'import { Button, buttonVariants } from "@/components/ui/button";');
    }
    text = text.replace(
      '<Button asChild variant="ghost" className="mb-8">\n        <Link href="/pokemon">&larr; Quay lại Pokédex</Link>\n      </Button>',
      '<Link href="/pokemon" className={buttonVariants({ variant: "ghost", className: "mb-8 w-max" })}>&larr; Quay lại Pokédex</Link>'
    );
  }

  fs.writeFileSync(file, text);
};

fixAsChild('src/app/blog/page.tsx');
fixAsChild('src/app/projects/page.tsx');
fixAsChild('src/app/pokemon/[id]/page.tsx');
