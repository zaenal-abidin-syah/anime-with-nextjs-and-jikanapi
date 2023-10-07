import React from "react"
import Navmenu from "."
import LinkMenu from "./LinkMenu"

const ListMenu = ({children}:{children:React.ReactNode}) => {
  return (
    <li className="mb-4 lg:mb-0 lg:pr-2 text-lg font-semibold" data-te-nav-item-ref>
      <LinkMenu>{children}</LinkMenu>
    </li>
  )
}
export default ListMenu