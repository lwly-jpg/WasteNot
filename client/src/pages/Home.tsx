import { useState } from "react";

const Home = () => {

  interface Recipe {
    recipe: {
      uri: string;
      label: string;
    }
  }

  const [ingredientsInput, setIngredientsInput] = useState<string>("");
  const [recipeResults, setRecipeResults] = useState<any>();
  
  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch(`https://wastenot.onrender.com/recipes?ingredients=${ingredientsInput}`)

    if (response.status === 200) {
      const data = await response.json();
      setRecipeResults(data.hits);
    }

    
  };

  
  return (
    <>
      <div className="main">
        <div className="header">
          <h1>Random Ingredients? Waste Not...</h1>
          <h2>
            Discover delicious recipes with your random ingredients and waste
            less food.
          </h2>
        </div>
        <div className="search">
          <form className="search-bar" onSubmit={handleSearch}>
            <input className="search-bar-field" type="search" value={ingredientsInput} onChange={(event) => setIngredientsInput(event.target.value)}/>
            <button className="search-bar-button">Search</button>
          </form>
        </div>
        <div className="recipie-results">
          {recipeResults &&
          recipeResults.map((result: Recipe) => (
            <div className="recipie-card" key={result.recipe.uri}>{result.recipe.label}</div>
          ))
          }
        </div>
      </div>
    </>
  );
};

export default Home;
