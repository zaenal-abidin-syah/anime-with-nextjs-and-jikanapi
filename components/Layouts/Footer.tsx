// genres
// [character, clubs, magazines, producers, recommendations. reviews, sechedules, users, seaseon, ]
const Footer = () => {
  return (
    <footer className="bg-tersier flex text-primary justify-evenly">
      <div className="flex w-[25%] flex-col gap-y-2 py-2">
        <h2 className="font-semibold border-b-2 border-b-primary">Genres</h2>
        <ul>
          <li>Horror</li>
          <li>Drama</li>
          <li>Psycologi</li>
          <li>Fantasi</li>
          <li>Comedy</li>
          <li>Milf</li>
        </ul>
      </div>
      <div className="flex w-[25%] flex-col gap-y-2 py-2">
      <h2 className="font-semibold border-b-2 border-b-primary">Get More</h2>
        <ul>
          <li>Character</li>
          <li>Produser</li>
          <li>Studios</li>
          <li></li>
          <li>Comedy</li>
          <li>Milf</li>
        </ul>
      </div>
      <div className="flex w-[25%] flex-col gap-y-2 py-2">
        <h2 className="font-semibold border-b-2 border-b-primary">About</h2>
        <ul>
          <li>Services</li>
          <li>Organization</li>
          <li>Referensi</li>
          <li>Partner</li>
          <li>Api</li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer