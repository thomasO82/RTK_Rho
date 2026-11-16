import test from 'node:test'
import assert from 'node:assert/strict'
import axios from 'axios'
import { getRecipesBySearch, getRecipeById } from '../src/services/theMealDbApi.js'

test('Axios reçoit les paramètres de recherche et retourne les données', async () => {
  const original = axios.get
  axios.get = async (url, options) => {
    assert.equal(url, 'https://www.themealdb.com/api/json/v1/1/search.php')
    assert.deepEqual(options, { params: { s: 'fish & chips' } })
    return { data: { meals: null } }
  }
  try { assert.deepEqual(await getRecipesBySearch('fish & chips'), { meals: null }) }
  finally { axios.get = original }
})

test('une erreur Axios reste une erreur', async () => {
  const original = axios.get
  axios.get = async () => { throw new Error('Request failed with status code 503') }
  try { await assert.rejects(getRecipeById('42'), /503/) }
  finally { axios.get = original }
})
