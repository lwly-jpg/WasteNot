import { useState } from "react";
import Header from "../components/Header";
import RecipeCard from "../components/RecipeCard";
import Loading from "../components/Loading";
import styles from "./Home.module.css";

interface Recipe {
  uri: string;
  label: string;
  image: string;
}

const Home = () => {

  const [ingredientsInput, setIngredientsInput] = useState<string>("");
  const [recipeResults, setRecipeResults] = useState<Array<Recipe>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRecipeResults([]);
    setLoading(true);

    const response = await fetch(
      `https://wastenot.onrender.com/recipes?ingredients=${ingredientsInput}`
    );

    if (response.status === 200) {
      const data = await response.json();
      setLoading(false);
      setRecipeResults(data);
    }
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.top_fold}>
          <Header />
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
        </div>
        {loading && (
          <Loading />
        )}
        {recipeResults.length > 0 && (
          <>
            <h2 className={styles.results_header}>Your recipes &#8594;</h2>
            <div className={styles.recipe_results}>
              {recipeResults.map((recipe) => (
                <RecipeCard recipe={recipe} key={recipe.uri} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
