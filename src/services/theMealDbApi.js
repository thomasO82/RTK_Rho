const baseUrl = 'https://www.themealdb.com/api/json/v1/1/'

export async function requestMeals(endpoint, params = {}, signal) {
  const response = await fetch(baseUrl + endpoint + '?' + new URLSearchParams(params), { signal })
  if (!response.ok) throw new Error('TheMealDB : erreur HTTP ' + response.status)
  return response.json()
}
export const getCategories = (signal) => requestMeals('categories.php', {}, signal)
export const getRecipesBySearch = (search, signal) => requestMeals('search.php', { s: search }, signal)
export const getRecipesByCategory = (category, signal) => requestMeals('filter.php', { c: category }, signal)
export const getRecipeById = (id, signal) => requestMeals('lookup.php', { i: id }, signal)
