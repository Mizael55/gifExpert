import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    // setCategories([...categories, 'HunterXHunter'])
    if (categories.includes(newCategory)) return;
    setCategories((cats) => [newCategory, ...cats]);
  };
  return (
    <>
      <h2>GifExpertApp</h2>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
