import { Fragment, useCallback, useEffect, useState } from "react";

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  const [mealItems, setMealItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMealItems = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/meal");
      if (!response.ok) {
        throw new Error("Unable to get meal items");
      }
      const mealData = await response.json();
      setMealItems(mealData.data);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMealItems();
  }, [fetchMealItems]);

  return (
    <Fragment>
      <MealsSummary />
      {isLoading ? (
        <h1>Loading Menu...</h1>
      ) : error ? (
        <h1>An error occured </h1>
      ) : (
        <AvailableMeals mealItems={mealItems} />
      )}
    </Fragment>
  );
};

export default Meals;
