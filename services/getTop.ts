import axios from "axios"


async function geTop (type:string) {
  const mangas = await axios(`https://api.jikan.moe/v4/top/${type}?limit=20`)
  return await mangas.data.data
}

export default geTop