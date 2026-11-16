import { useEffect, useState } from 'react'
import { getCategories, getRecipeById, getRecipesByCategory, getRecipesBySearch } from '../services/theMealDbApi'

function useRequest(fetcher, value, enabled = true) {
  const [result, setResult] = useState(null)
  useEffect(() => {
    if (!enabled) return
    const controller = new AbortController()
    fetcher(value, controller.signal).then(
      (data) => { if (!controller.signal.aborted) setResult({ value, data }) },
      (error) => { if (!controller.signal.aborted) setResult({ value, error }) },
    )
    return () => controller.abort()
  }, [fetcher, value, enabled])
  const current = enabled && result?.value === value ? result : null
  return { data: current?.data, error: current?.error, isError: !!current?.error, isLoading: enabled && !current }
}
const fetchCategories = (_, signal) => getCategories(signal)
export const useGetCategoriesQuery = () => useRequest(fetchCategories, '')
export const useGetRecipesBySearchQuery = (search, enabled = true) => useRequest(getRecipesBySearch, search, enabled)
export const useGetRecipesByCategoryQuery = (category, enabled = true) => useRequest(getRecipesByCategory, category, enabled)
export const useGetRecipeByIdQuery = (id) => useRequest(getRecipeById, id, !!id)
