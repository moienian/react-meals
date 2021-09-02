import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

function MealItem(props) {
  console.log(props.meal);
  return (
    <div className={classes["meal-item"]}>
      <div className={classes["meal-item-main"]}>
        <h3>{props.meal.name}</h3>
        <p>{props.meal.description}</p>
        <h4>${props.meal.price}</h4>
      </div>
      <MealItemForm />
    </div>
  );
}

export default MealItem;
