import NoteFound from "../layouts/NoteFound";
import CategoryItem from "./CategoryItem";

function Category({meals = []}) {
  return (
    <div className="container cards">
      {meals.length ? meals.map(item => (
        <CategoryItem key={item.idCategory} {...item}  />
      )): <NoteFound />}
    </div>
  );
}

export default Category;