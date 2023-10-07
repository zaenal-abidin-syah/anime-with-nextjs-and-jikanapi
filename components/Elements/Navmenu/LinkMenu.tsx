import React from "react"

const LinkMenu = ({children}:{children:React.ReactNode}) => {
  return (
    <a
    className="block transition duration-150 ease-in-out hover:opacity-80 focus:opacity-60 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
    href="#!"
    data-te-nav-link-ref
    data-te-ripple-init
    data-te-ripple-color="light"
    >
      {children}
    </a>
  )
}
export default LinkMenu