import { useEffect, useState } from "react";
import styles from "./Recipe.module.css";

const Recipe = () => {
  interface Recipe {
    label: string;
    images: {
      REGULAR: {
        url: string;
      };
    };
    ingredients: [
      ingredient: {
        text: string;
        foodId: string;
      }
    ];
    url: string;
    source: string;
  }

  const [recipe, setRecipe] = useState<Recipe>();

  useEffect(() => {
    fetch(
      `https://wastenot.onrender.com/recipes/b05aeaf36129e3f55ab6242dc0ffb3b4`
    )
      .then((response) => response.json())
      .then((data) => setRecipe(data.recipe));
  }, []);

  return (
    <div className={styles.recipe_page}>
      {recipe && (
        <div className={styles.main}>
          <div className={styles.top}>
            <img
              className={styles.image}
              src={recipe.images.REGULAR.url}
              alt={recipe.label}
            />
            <h1 className={styles.title}>{recipe.label}</h1>
          </div>
          <div className={styles.ingredients}>
            <h2 className={styles.ingredients_heading}>Ingredients</h2>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient.foodId}>{ingredient.text}</li>
            ))}
          </div>
          <div className={styles.method}>
            <h2>Method & More Info</h2>
            <a href={recipe.url} className={styles.info_button}>Visit {recipe.source}</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipe;
