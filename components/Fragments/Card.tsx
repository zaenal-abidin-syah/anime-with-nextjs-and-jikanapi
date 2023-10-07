const Card = ({id, img, alt, title}:{id:number, img:string, alt:string, title:string}) => {
  return (
    <div className='w-[20%] rounded-md shadow-md bg-primary'>
      <div className='w-full h-[22rem] rounded-md overflow-hidden'>
        <img className='w-full bg-cover' src={img} alt={alt} />
      </div>
      <h1>Judul {title}</h1>
      <h3>id : {id}</h3>
    </div>
  )
}
export default Card