// File: components/explore/subcategory-hero.tsx

import React from 'react';

// Define types for props
type Subcategory = {
  id: string;
  name: string;
  description?: string;
  image?: string;
};

type Category = {
  id: string;
  name: string;
  image?: string;
};

interface SubcategoryHeroProps {
  category: Category;
  subcategory: Subcategory;
}

export default function SubcategoryHero({ category, subcategory }: SubcategoryHeroProps) {
  return (
    <div className="hero">
      <h1 className="text-4xl font-bold">{subcategory.name}</h1>
      <p>{subcategory.description}</p>
      {subcategory.image && <img src={subcategory.image} alt={subcategory.name} />}
    </div>
  );
}
