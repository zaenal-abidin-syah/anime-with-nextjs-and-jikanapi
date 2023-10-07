import axios from "axios"

// type queryType = string | boolean;

async function search (type:string, query:any=false) {
  const mangas = await axios(`https://api.jikan.moe/v4/${type}?limit=10${query ? '&q='+query : ''}`)

  return await mangas.data.data
}

export default search