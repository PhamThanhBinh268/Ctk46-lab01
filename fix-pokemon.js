const fs = require('fs');

let text = fs.readFileSync('src/app/pokemon/[id]/page.tsx', 'utf8');

text = text.replace(
  'import { Button } from "@/components/ui/button";',
  'import { buttonVariants } from "@/components/ui/button";'
);

text = text.replace(
  '<Button asChild variant="ghost" className="mb-8">\n        <Link href="/pokemon">&larr; Quay lại Pokédex</Link>\n      </Button>',
  '<Link href="/pokemon" className={buttonVariants({ variant: "ghost", className: "mb-8 w-max" })}>&larr; Quay lại Pokédex</Link>'
);

text = text.replace(
  '<Button asChild variant="ghost" className="mb-8">\r\n        <Link href="/pokemon">&larr; Quay lại Pokédex</Link>\r\n      </Button>',
  '<Link href="/pokemon" className={buttonVariants({ variant: "ghost", className: "mb-8 w-max" })}>&larr; Quay lại Pokédex</Link>'
);

fs.writeFileSync('src/app/pokemon/[id]/page.tsx', text);
