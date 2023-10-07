const ButtonMenu = () => {
  return (
    <div className="container flex items-center">
      <button
        className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:opacity-80 focus:opacity-60 dark:hover:text-white dark:focus:text-white lg:hidden"
        type="button"
        data-te-collapse-init
        data-te-target="#navbarSupportedContentX"
        aria-controls="navbarSupportedContentX"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="[&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-7 w-7">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </span>
      </button>
    </div>
  )
}
export default ButtonMenu