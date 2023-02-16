import { useState, useEffect } from "react";
import { getAllCategoris } from "../config/api";
import Loader from "../layouts/Loader";
import Category from "./Category";
import SearchBar from "../layouts/SearchBar";
import { useLocation, useNavigate } from "react-router-dom";


function Home() {
  const [loading, setLoading] = useState(true)
  const [meals, setMeals] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([])
  const {search} = useLocation();
  const navigate = useNavigate();

  const handlerSearch = (str) => {
    setFilteredCatalog(meals.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())))
    navigate(`/?search=${str}`)
  }

  useEffect(() => {
    getAllCategoris().then(data => {
      setMeals(data.categories)
      setFilteredCatalog(search ? data.categories.filter(item => item.strCategory.toLowerCase().includes(search.split('=')[1].toLocaleLowerCase())) : data.categories)
      setLoading(false)
    })
  }, [search]) 

  if(loading) return <Loader />

  return (
    <div className="container my-5">
      <div className="container my-5">
        <SearchBar  cb={handlerSearch} />
      </div>
      {!meals.length ? <h2>404</h2> : <Category meals={filteredCatalog} />}
    </div>
  );
}

export default Home;