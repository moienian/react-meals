import classes from "./Header.module.css";
import mainImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mainImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
}

export default Header;
