import test from 'node:test'
import assert from 'node:assert/strict'
import { getRecipesBySearch, getRecipeById } from '../src/services/theMealDbApi.js'

test('encode les recherches, transmet le signal et conserve les résultats vides', async () => {
  const original = globalThis.fetch
  const controller = new AbortController()
  globalThis.fetch = async (url, options) => {
    assert.equal(new URL(url).searchParams.get('s'), 'fish & chips')
    assert.equal(options.signal, controller.signal)
    return { ok: true, json: async () => ({ meals: null }) }
  }
  try { assert.deepEqual(await getRecipesBySearch('fish & chips', controller.signal), { meals: null }) }
  finally { globalThis.fetch = original }
})

test('une erreur HTTP ne devient pas un résultat vide', async () => {
  const original = globalThis.fetch
  globalThis.fetch = async () => ({ ok: false, status: 503 })
  try { await assert.rejects(getRecipeById('42'), /503/) }
  finally { globalThis.fetch = original }
})
