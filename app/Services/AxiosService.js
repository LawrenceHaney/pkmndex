export const sandboxApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/lhaney/pokemon",
  timeout: 10000
})

export const dexApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon?limit=150",
  timeout: 10000})