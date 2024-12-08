import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const categories = [
  "African Folk Song Categories",
  "Asian Folk Song Categories",
  "European Folk Song Categories",
  "North American Folk Song Categories",
  "South American Folk Song Categories",
  "Caribbean Folk Music",
  "Oceanian Folk Song Categories",
  "Religious and Spiritual Chants",
  "Additional Global Folk Song Categories",
];

export function CategoryFilter() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-accent text-sm"
            >
              {category}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}