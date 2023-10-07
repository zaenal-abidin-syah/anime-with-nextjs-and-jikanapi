import React, {Children, ReactNode, ReactText} from 'react'
interface props {
  children?:React.ReactNode
}

function HeroFragment({children}:props) {
  return (
    <div>
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        style={{
          backgroundPosition: '50%',
          backgroundImage: "url('./anime.jpg')",
          height: '80vh'
        }}>
        {children}
      </div>
    </div>
  )
}


export default HeroFragment