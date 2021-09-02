import classes from "./MealItemForm.module.css";

function MealItemForm() {
  return (
    <div className={classes["meal-item-form"]}>
      <div className={classes.input}>
        <span>Amount</span>
        <input type="number" min="1" max="5" step="1" />
      </div>
      <button className={classes.btn}>+ Add</button>
    </div>
  );
}

export default MealItemForm;
