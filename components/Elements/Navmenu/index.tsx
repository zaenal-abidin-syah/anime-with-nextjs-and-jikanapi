import React from "react"
import ListMenu from "./ListMenu"

const Navmenu = ()=>{
  return (
    <div
    className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
    id="navbarSupportedContentX"
    data-te-collapse-item>
    <ul
      className="mr-auto flex flex-col lg:flex-row"
      data-te-navbar-nav-ref>
        <ListMenu>Home</ListMenu>
        <ListMenu>Feature</ListMenu>
        <ListMenu>Pricing</ListMenu>
    </ul>
  </div>
  )
}
export default Navmenu