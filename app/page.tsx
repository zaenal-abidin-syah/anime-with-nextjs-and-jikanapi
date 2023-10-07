import TopAnime from '@/components/Layouts/TopAnime'
import Hero from '@/components/Layouts/Hero'
import TopManga from '@/components/Layouts/TopManga'
// import axios from 'axios'
// import Image from 'next/image'

export default async function Home() {

  return (
    <div>
      <Hero/>
      <TopAnime/>
      <TopManga/>
    </div>
  )
} 