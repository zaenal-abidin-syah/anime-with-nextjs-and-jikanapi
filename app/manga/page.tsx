import axios from 'axios'
import Image from 'next/image'
import search from '@/services/search'
import Search from '@/components/Fragments/Search'
import SearchManga from '@/components/Layouts/SearchManga'

export default async function Manga({
  searchParams,
}:{searchParams:any}) {
  let query :string = searchParams.query
  
  const result = await search('manga', query ?? false)
  console.log(result)
  return (
    <div className='pt-20 w-[60%] flex flex-col mx-auto'>
      {/*<Search/>*/}
      <SearchManga/>
      <div className='py-40 h-[1000vh]'>
        ini adalah halaman manga
      </div>
    </div>
    
  )
}
