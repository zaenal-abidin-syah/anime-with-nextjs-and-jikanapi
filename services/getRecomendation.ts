import axios from "axios"


async function getRecomendation (type:string) {
  const mangas = await axios(`https://api.jikan.moe/v4/recommendations/${type}`)
  return await mangas.data.data
}

export default getRecomendation