import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
const Search = () => {
  const router = useRouter();
  useEffect(() => {
    const searchBtn = document.querySelector("#search");
    searchBtn?.addEventListener("click", () => {
      const searchInput = document.querySelector(
        ".searchValue"
      ) as HTMLInputElement | null;
      router.push(`/manga?${searchInput?.value}`);
    });
  }, []);
  return (
    <div className="mb-3">
      <div className="relative mb-4 flex w-full flex-wrap items-stretch">
        <input
          type="search"
          id="searchValue"
          className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search"
        />
        <button
          className="relative z-[2] flex items-center rounded-r bg-tersier px-6 py-2.5 text-xs font-medium uppercase leading-tight text-primary shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
          type="submit"
          id="search"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
};
export default Search;
