import { useEffect, useState } from "react";
import { getFilterCategory } from "../config/api";
import { useParams } from "react-router-dom";
import Loader from "../layouts/Loader";
import MealsCategoryItem from "./MealsCategoryItem";

function MealsCategory() {
  const {name} = useParams();
  const [categoris, setCategoris] = useState([]);

  useEffect(() => {
    getFilterCategory(name).then(data => setCategoris(data.meals))
  }, [name])
  console.log(categoris);
  return (
    <div className="container my-5 cards">
      {!categoris.length ? (<Loader />) : (
        categoris.map(item => (
          <MealsCategoryItem key={item.idMeal} {...item} />
        ))
      )}
    </div>
  );
}

export default MealsCategory;