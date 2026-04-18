import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

async function getPokemons() {
  // Using absolute URL isn't required for Next.js 14+ fetch, but let's fetch directly from PokéAPI
  // to avoid build-time API route issues, or we can use headers.
  // Because it's a Server Component, let's fetch directly from PokeAPI.
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=36", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch pokemons");
  return res.json();
}

export default async function PokemonPage() {
  const data = await getPokemons();

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Pokédex</h1>
        <p className="text-muted-foreground text-lg">Khám phá thế giới Pokémon - Phần 6 Bài tập thực hành.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {data.results.map((pokemon: { name: string; url: string }) => {
          // Extract ID from url string (e.g., https://pokeapi.co/api/v2/pokemon/1/)
          const id = pokemon.url.split("/").filter(Boolean).pop();
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

          return (
            <Link key={pokemon.name} href={`/pokemon/${id}`}>
              <Card className="group hover:border-primary hover:shadow-md transition-all cursor-pointer bg-slate-50/50 flex flex-col items-center p-4 h-full">
                <div className="relative w-24 h-24 mb-4">
                  <Image
                    src={imageUrl}
                    alt={pokemon.name}
                    fill
                    sizes="96px"
                    className="object-contain group-hover:scale-110 transition-transform"
                    unoptimized
                  />
                </div>
                <CardTitle className="text-sm font-semibold capitalize text-center group-hover:text-primary transition-colors">
                  {pokemon.name}
                </CardTitle>
                <Badge variant="secondary" className="mt-2 text-xs">
                  #{id?.padStart(3, "0")}
                </Badge>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
