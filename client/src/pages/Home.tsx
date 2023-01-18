import { useState } from "react";
import styles from "./Home.module.css";

const Home = () => {
  interface Recipe {
    recipe: {
      uri: string;
      label: string;
      images: {
        SMALL: {
          url: string;
        };
      };
    };
  }

  const [ingredientsInput, setIngredientsInput] = useState<string>("");
  const [recipeResults, setRecipeResults] = useState<any>();

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch(
      `https://wastenot.onrender.com/recipes?ingredients=${ingredientsInput}`
    );

    if (response.status === 200) {
      const data = await response.json();
      setRecipeResults(data.hits);
    }
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.heading}>Random Ingredients? Waste Not...</h1>
          <h2 className={styles.subheading}>
            Discover delicious recipes with your random ingredients and waste
            less food.
          </h2>
        </div>
        <div className={styles.search}>
          <form className={styles.search_bar} onSubmit={handleSearch}>
            <input
              className={styles.search_bar_field}
              type="search"
              value={ingredientsInput}
              onChange={(event) => setIngredientsInput(event.target.value)}
            />
            <button className={styles.search_bar_button}>Search</button>
          </form>
        </div>
        <div className={styles.recipe_results}>
          {recipeResults &&
            recipeResults.map((result: Recipe) => (
              <div className={styles.recipe_card} key={result.recipe.uri}>
                <img
                  className={styles.recipe_image}
                  src={result.recipe.images.SMALL.url}
                  alt={result.recipe.label}
                />
                <h3 className={styles.recipe_label}>{result.recipe.label}</h3>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
