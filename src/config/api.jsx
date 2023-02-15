import { API_URL } from "./config";

const getMealId  = async (mealId) => {
  const response = await fetch(API_URL + 'lookup.php?i' + mealId);
  return await response.json()
}

const getAllCategoris = async () => {
  const response = await fetch(API_URL + 'categories.php')
  return await response.json();
}

const getFilterCategory = async (categoryName) => {
  const response = await fetch(API_URL + 'filter.php?i=' + categoryName)
  return await response.json();
}

export {getMealId, getAllCategoris, getFilterCategory}