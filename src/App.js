import { Route, Routes } from "react-router-dom";
import Home from "./categories/Home";
import MealsCategory from "./categories/MealsCategory";
import MealsList from "./categories/MealsList";
import Footer from "./layouts/Footer";
import Header from "./layouts/Heder";
import NoteFound from "./layouts/NoteFound";

function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mealscategory/:name" element={<MealsCategory />} />
          <Route path="/mealslist/:id" element={<MealsList />} />
          <Route element={<NoteFound />} />
        </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
