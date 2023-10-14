import { baseAPI } from "./baseAPI";

export const initialAPIs = [
  {
    name: 'characters',
    url: `${baseAPI}/people/`,
  },
  {
    name: 'planets',
    url: `${baseAPI}/planets/`,
  },
  {
    name: 'films',
    url: `${baseAPI}/films/`,
  },
  {
    name: 'species',
    url: `${baseAPI}/species/`,
  },
  {
    name: 'vehicles',
    url: `${baseAPI}/vehicles/`,
  },
  {
    name: 'starships',
    url: `${baseAPI}/starships/`,
  }
]