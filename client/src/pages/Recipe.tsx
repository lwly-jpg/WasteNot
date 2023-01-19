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
  }

  const [recipe, setRecipe] = useState<Recipe>();

  useEffect(() => {
    fetch(
      `https://wastenot.onrender.com/recipes/b05aeaf36129e3f55ab6242dc0ffb3b4`
    ).then(
      response => response.json()
    ).then(
      data => setRecipe(data.recipe)
    )

  }, [])
  
  return (
    <div className={styles.recipe_page}>
      {recipe &&
      <div className={styles.main}>
        <div className={styles.top}>
          <div className={styles.image}>
          <img
            className={styles.image}
            src={recipe.images.REGULAR.url}
            alt={recipe.label}
          />
          </div>
          <div className={styles.core_info}>
            <h1>{recipe.label}</h1>
          </div>
        </div>
        <div className={styles.bottom}>
          {recipe.ingredients.map(ingredient => (
            <li key={ingredient.foodId}>{ingredient.text}</li>
          ))}
        </div>
      </div>
       }
    </div>
  )
};

export default Recipe;
