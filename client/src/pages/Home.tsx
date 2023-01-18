import { useState } from "react";

const Home = () => {
  const [ingredientsInput, setIngredientsInput] = useState<string>("");
  const handleSearch = () => {};

  
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
      </div>
    </>
  );
};

export default Home;
