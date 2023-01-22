import styles from "./RecipeCard.module.css";

interface Recipe {
  uri: string;
  label: string;
  image: string;
}

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const getRecipeId = (uri: string) => {
    return uri.replace(
      "http://www.edamam.com/ontologies/edamam.owl#recipe_",
      ""
    );
  };

  return (
    <a href={`/recipe/${getRecipeId(recipe.uri)}`}>
      <div className={styles.recipe_card}>
        <img
          className={styles.recipe_image}
          src={recipe.image}
          alt={recipe.label}
        />
        <h3 className={styles.recipe_label}>{recipe.label}</h3>
      </div>
    </a>
  );
};

export default RecipeCard;
