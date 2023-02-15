import { useEffect, useState } from "react";
import { getFilterCategory } from "../config/api";
import { useParams } from "react-router-dom";
import Loader from "../layouts/Loader";
import MealsCategoryItem from "./MealsCategoryItem";
import NoteFound from "../layouts/NoteFound";

function MealsCategory() {
  const {name} = useParams();
  const [categoris, setCategoris] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFilterCategory(name).then(data => {
      setCategoris(data.meals)
      setLoading(false)
    })
    
  }, [name])

  if(loading) return <Loader />

  return (
    <div className="container my-5 cards">
      {!categoris ? (<NoteFound />) : (
        categoris.map(item => (
          <MealsCategoryItem key={item.idMeal} {...item} />
        ))
      )}
    </div>
  );
}

export default MealsCategory;