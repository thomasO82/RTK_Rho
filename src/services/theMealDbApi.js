import axios from 'axios'
const baseUrl = 'https://www.themealdb.com/api/json/v1/1/'
export async function getCategories() {
  const response = await axios.get(baseUrl + 'categories.php')
  return response.data
}
export async function getRecipesBySearch(search) {
  const response = await axios.get(baseUrl + 'search.php', {
    params: {
      s: search,
    },
  })
  return response.data
}
export async function getRecipesByCategory(category) {
  const response = await axios.get(baseUrl + 'filter.php', {
    params: {
      c: category,
    },
  })
  return response.data
}
export async function getRecipeById(id) {
  const response = await axios.get(baseUrl + 'lookup.php', { params: { i: id } })
  return response.data
}
