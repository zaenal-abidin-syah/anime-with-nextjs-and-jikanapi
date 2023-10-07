'use client'
import { ReactNode, useEffect } from "react"
import Navlink from "../Fragments/Navlink"
import ButtonMenu from "../Elements/ButtonMenu"
import Navmenu from "../Elements/Navmenu"
import {usePathname} from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  
  useEffect(()=>{
    const navbar = document.querySelector('header')
    if(pathname==='/'){
      window.addEventListener('scroll', ()=>{
      
        if(window.scrollY > 500){
          // navbar!.classList.remove('navbar_style')
          navbar!.classList.add('navbar_style')
        }else{
          navbar!.classList.remove('navbar_style')
        }
      })
    }else{
      navbar!.classList.add('navbar_style')
    }
    
  }, [])
 
  return (
    <Navlink>
        <ButtonMenu/>
        <Navmenu/>
    </Navlink>
  )
}

export default Navbar
