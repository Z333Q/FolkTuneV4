"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "African Folk Songs",
    description: "Explore the rich rhythms and vocal traditions of Africa, from Griot music to modern African folk fusion.",
    image: "https://images.unsplash.com/photo-1535483102974-fa1e64d0ca86?w=800&auto=format&fit=crop&q=60",
    href: "/explore?category=African%20Folk%20Song%20Categories"
  },
  {
    name: "Asian Folk Songs",
    description: "Discover the diverse musical heritage of Asia, including classical Indian ragas and Japanese folk songs.",
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&auto=format&fit=crop&q=60",
    href: "/explore?category=Asian%20Folk%20Song%20Categories"
  },
  {
    name: "European Folk Songs",
    description: "Experience traditional European folk music, from Celtic ballads to Eastern European folk dances.",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&auto=format&fit=crop&q=60",
    href: "/explore?category=European%20Folk%20Song%20Categories"
  },
  {
    name: "North American Folk Songs",
    description: "Learn Native American songs and traditional folk music from across North America.",
    image: "https://images.unsplash.com/photo-1494791368093-85217fbbf8de?w=800&auto=format&fit=crop&q=60",
    href: "/explore?category=North%20American%20Folk%20Song%20Categories"
  },
  {
    name: "South American Folk Songs",
    description: "Immerse yourself in the vibrant folk traditions of South America, including Andean and Amazonian music.",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&auto=format&fit=crop&q=60",
    href: "/explore?category=South%20American%20Folk%20Song%20Categories"
  },
  {
    name: "Caribbean Folk Music",
    description: "Feel the rhythm of Caribbean folk music, from calypso to traditional island songs.",
    image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&auto=format&fit=crop&q=60",
    href: "/explore?category=Caribbean%20Folk%20Music"
  },
  {
    name: "Oceanian Folk Songs",
    description: "Experience the unique sounds of Pacific Island music and Aboriginal songlines.",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&auto=format&fit=crop&q=60",
    href: "/explore?category=Oceanian%20Folk%20Song%20Categories"
  },
  {
    name: "Religious and Spiritual Chants",
    description: "Explore sacred music from various religious and spiritual traditions around the world.",
    image: "https://images.unsplash.com/photo-1584474263348-08b7c4d5a9b4?w=800&auto=format&fit=crop&q=60",
    href: "/explore?category=Religious%20and%20Spiritual%20Chants"
  },
  {
    name: "Additional Global Folk Songs",
    description: "Discover more unique folk music styles and traditions from across the globe.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&auto=format&fit=crop&q=60",
    href: "/explore?category=Additional%20Global%20Folk%20Song%20Categories"
  }
];

export function CategoriesShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
      {categories.map((category, index) => (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link href={category.href}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
              <div className="relative h-48">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority={index < 6}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-white/90">
                    {category.description}
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}