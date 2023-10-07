import React from "react"

const Navlink = ({children}:{children:React.ReactNode})=>{
  return (
    <header className='fixed top-0 right-0 left-0 z-10 navbar'>
      <nav
      className="relative flex w-full items-center justify-between py-2 text-primary hover:opacity-80 focus:opacity-70 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
      data-te-navbar-ref>
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          {children}
        </div>
      </nav>
    </header>
    
  )
}
export default Navlink