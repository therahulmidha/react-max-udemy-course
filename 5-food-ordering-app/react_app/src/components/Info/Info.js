import "./Info.css";
import meals from "./meals.jpg";
export const Info = () => {
  return (
    <section className="bg-info">
      <div className="meal-img">
        <img src={meals} alt="" />
      </div>
      <div className="info">
        <h1>Delicious Food, Delivered To You</h1>
        <p>
          Choose your favorite meal from our broad section of available meals
          and enjoy a delicious lunch or dinner at home.
          <br /> All our meals are cooked with high quality ingredients,
          just-in-time and of course by experienced chefs!
        </p>
      </div>
    </section>
  );
};
