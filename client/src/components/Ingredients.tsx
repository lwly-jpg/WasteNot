import styles from "./Ingredients.module.css";

interface Ingredient {
  text: string;
  foodId: string;
}

const Ingredients = ({ ingredients }: { ingredients: Array<Ingredient> }) => {
  return (
    <div className={styles.ingredients}>
      <h2 className={styles.ingredients_heading}>Ingredients</h2>
      {ingredients.map((ingredient) => (
        <li key={ingredient.foodId}>{ingredient.text}</li>
      ))}
    </div>
  );
};

export default Ingredients;
