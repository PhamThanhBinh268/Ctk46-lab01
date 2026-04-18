import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";

async function getPokemon(id: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    if (res.status === 404) return null;
    throw new Error("Lỗi khi lấy dữ liệu Pokémon");
  }
  return res.json();
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PokemonDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const data = await getPokemon(resolvedParams.id);

  if (!data) {
    notFound();
  }

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
      <Link href="/pokemon" className={buttonVariants({ variant: "ghost", className: "mb-8 w-max" })}>&larr; Quay lại Pokédex</Link>

      <Card className="overflow-hidden border-2 shadow-lg">
        <div className="bg-slate-50 flex justify-center py-12 border-b">
          <div className="relative w-64 h-64 hover:scale-110 transition-transform duration-300">
            <Image
              src={imageUrl}
              alt={data.name}
              fill
              sizes="256px"
              priority
              className="object-contain drop-shadow-xl"
              unoptimized
            />
          </div>
        </div>

        <CardHeader className="text-center pt-8 bg-white">
          <Badge variant="secondary" className="mx-auto w-max mb-4 text-sm font-mono tracking-wider px-3 py-1">
            N° {String(data.id).padStart(3, "0")}
          </Badge>
          <CardTitle className="text-4xl font-extrabold capitalize text-slate-800">
            {data.name}
          </CardTitle>
        </CardHeader>

        <CardContent className="bg-white p-8 grid md:grid-cols-2 gap-8">
          {/* Thông tin cơ bản */}
          <div className="space-y-6 bg-slate-50/50 p-6 rounded-2xl border">
            <div>
              <h3 className="font-bold text-slate-500 mb-3 text-sm uppercase tracking-widest">Hệ (Types)</h3>
              <div className="flex gap-2">
                {data.types.map((t: any) => (
                  <Badge key={t.type.name} className="capitalize px-3 py-1">
                    {t.type.name}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-slate-500 mb-1 text-sm uppercase tracking-widest">Chiều cao</h3>
                <p className="text-lg font-semibold bg-white p-2 rounded-lg border inline-block min-w-16 text-center shadow-sm">
                  {data.height / 10} m
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-500 mb-1 text-sm uppercase tracking-widest">Cân nặng</h3>
                <p className="text-lg font-semibold bg-white p-2 rounded-lg border inline-block min-w-16 text-center shadow-sm">
                  {data.weight / 10} kg
                </p>
              </div>
            </div>
          </div>

          {/* Chỉ số */}
          <div className="space-y-6 bg-slate-50/50 p-6 rounded-2xl border">
            <h3 className="font-bold text-slate-500 mb-4 text-sm uppercase tracking-widest">Chỉ số cơ bản</h3>
            <div className="space-y-3">
              {data.stats.map((s: any) => (
                <div key={s.stat.name} className="flex items-center justify-between text-sm">
                  <span className="capitalize font-medium text-slate-700 w-32">{s.stat.name.replace('-', ' ')}</span>
                  <div className="flex-1 ml-4 bg-slate-200 rounded-full h-3 overflow-hidden shadow-inner">
                    <div
                      className="bg-blue-500 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${Math.min((s.base_stat / 255) * 100, 100)}%` }}
                    />
                  </div>
                  <span className="font-mono font-bold w-8 text-right text-slate-700 ml-3">{s.base_stat}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
