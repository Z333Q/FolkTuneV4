import { Metadata } from 'next';
import { categories } from '@/lib/data/categories';
import { SongList } from '@/components/explore/song-list';
import SubcategoryHero from '@/components/explore/subcategory-hero';
import { CulturalContext } from '@/components/explore/cultural-context';

// Define types for category, subcategory, and song
type Song = {
  id: string;
  title: string;
  artist?: string;
};

type Subcategory = {
  id: string;
  name: string;
  description?: string;
  image?: string;
  songs?: Song[]; // Optional property
};

type Category = {
  id: string;
  name: string;
  image?: string;
  subcategories: Subcategory[];
};

export async function generateMetadata({ params }: { params: { category: string; subcategory: string } }): Promise<Metadata> {
  const category = categories.find(c => c.id === params.category);
  const subcategory = category?.subcategories.find(s => s.id === params.subcategory);

  if (!category || !subcategory) {
    return {
      title: 'Not Found',
      description: 'The requested folk music category could not be found.'
    };
  }

  return {
    title: `${subcategory.name} - ${category.name} | FolkTune`,
    description: subcategory.description,
    openGraph: {
      title: `${subcategory.name} - Traditional Folk Music`,
      description: subcategory.description,
      images: [subcategory.image || category.image || ''],
    },
  };
}

export function generateStaticParams(): Array<{ category: string; subcategory: string }> {
  const paths: Array<{ category: string; subcategory: string }> = [];
  categories.forEach((category) => {
    category.subcategories.forEach((subcategory) => {
      paths.push({
        category: category.id,
        subcategory: subcategory.id,
      });
    });
  });
  return paths;
}

export default function SubcategoryPage({ params }: { params: { category: string; subcategory: string } }) {
  const category = categories.find(c => c.id === params.category);
  const subcategory = category?.subcategories.find(s => s.id === params.subcategory);

  if (!category || !subcategory) {
    return <div>Category not found</div>;
  }

  // Enforce a fallback for songs
  const songs: Song[] = subcategory.songs || []; // Always ensure songs is an array

  return (
    <div className="min-h-screen">
      <SubcategoryHero category={category} subcategory={subcategory} />
      
      <div className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Songs</h2>
          {/* Pass the fallback songs array */}
          <SongList songs={songs} />
        </section>

        <CulturalContext category={category} subcategory={subcategory} />
      </div>
    </div>
  );
}

