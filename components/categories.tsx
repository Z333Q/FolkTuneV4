import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    name: "European Folk",
    description: "Traditional songs from across Europe",
    image: "https://images.unsplash.com/photo-1516307018167-f4e465d5f29c?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Asian Traditional",
    description: "Ancient melodies from Asia",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "African Rhythms",
    description: "Vibrant songs from Africa",
    image: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=800&auto=format&fit=crop&q=60",
  },
];

export function Categories() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Explore Musical Traditions
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Discover folk songs from different cultures and regions around the world.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {categories.map((category) => (
            <Card key={category.name} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold leading-8">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}