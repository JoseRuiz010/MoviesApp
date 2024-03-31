import { AxiosAdapter } from "./Http/axios-.adapter"


export const moviesAdapter = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '92593f81135542b432474ea8835053ff',
    language: 'es'
  }
})