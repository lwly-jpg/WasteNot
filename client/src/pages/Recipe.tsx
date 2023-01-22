import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Ingredients from "../components/Ingredients";
import styles from "./Recipe.module.css";

const Recipe = () => {
  interface Recipe {
    label: string;
    image: string;
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
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://wastenot.onrender.com/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data));
  }, [id]);

  return (
    <div>
      {recipe && (
        <div className={styles.main}>
          <div className={styles.top}>
            <img
              className={styles.image}
              src={recipe.image}
              alt={recipe.label}
            />
            <h1 className={styles.title}>{recipe.label}</h1>
          </div>
          <Ingredients ingredients={recipe.ingredients} />
          <div className={styles.method}>
            <h2>Method & More Info</h2>
            <a href={recipe.url} className={styles.info_button}>
              Visit {recipe.source}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipe;
