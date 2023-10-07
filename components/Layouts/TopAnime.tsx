import React from 'react'
import Card from '../Fragments/Card'
import getTop from '@/services/getTop';
import {TopTypes} from '@/types/toptypes'



async function AnimeRecomendation() {
  const result:TopTypes[] = await getTop('anime')

  return (
    <div className='container flex flex-col mx-auto py-10 gap-y-10'>
      <div className='text-tersier font-bold text-4xl border-b-4 border-stone-200 border-double'>
        <h1>TOP Anime</h1>
      </div>
      <div className='flex flex-wrap gap-x-2 gap-y-8 justify-between'>
        {result.map((data)=>{
          return (
            <Card 
              key={data.mal_id}
              title={data.title} 
              img={data.images.webp.image_url} 
              alt={data.images.jpg.image_url}
              id={data.mal_id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default AnimeRecomendation