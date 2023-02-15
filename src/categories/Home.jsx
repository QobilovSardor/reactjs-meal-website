import { useState, useEffect } from "react";
import { getAllCategoris } from "../config/api";
import Loader from "../layouts/Loader";
import Category from "./Category";

function Home() {
  const [loading, setLoading] = useState(true)
  const [meals, setMeals] = useState([]);


  useEffect(() => {
    getAllCategoris().then(data => {
      setMeals(data.categories)
      setLoading(false)
    })
    
  }, []) 

  if(loading) return <Loader />

  return (
    <div className="container my-5">
      {!meals.length ? <h2>404</h2> : <Category meals={meals} />}
    </div>
  );
}

export default Home;