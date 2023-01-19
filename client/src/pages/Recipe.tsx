import { useEffect, useState } from "react";
import styles from "./Recipe.module.css";

const Recipe = () => {
  interface Recipe {
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
        <h1>Recipe page</h1>
        <div className={styles.top}>
          <div className={styles.image}>Image Grid</div>
          <div className={styles.core_info}>Core Info Grid</div>
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
