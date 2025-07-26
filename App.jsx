






import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

function RecipeCard({ title, description, imageUrl }) {
  return (
    <Card className="rounded-2xl shadow-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}

export default function LowCarbRecipeSite() {
  return (
    <div className="p-6 space-y-6">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Low Carb Viral Recipes</h1>
        <p className="text-lg mt-2">Delicious, Easy, and Keto-Friendly</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <RecipeCard 
          title="Cheesy Cauliflower Bites"
          description="Crispy outside, gooey inside—your new favorite snack!"
          imageUrl="https://example.com/cauliflower-bites.jpg"
        />
        <RecipeCard 
          title="Zucchini Noodles Alfredo"
          description="Creamy and comforting without the carbs."
          imageUrl="https://example.com/zoodles-alfredo.jpg"
        />
        <RecipeCard 
          title="Avocado Chicken Salad"
          description="Protein-packed and refreshing."
          imageUrl="https://example.com/avocado-chicken.jpg"
        />
      </section>
    </div>
  );
}









