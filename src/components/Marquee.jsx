

const Marquee = ({Marqueeimgs}) => {
  return (
    <div className="flex flex-row items-center gap-20 py-7 w-full overflow-hidden">

        {Marqueeimgs.map((link, id) => (
        <img key={id} src={link} alt={`Marquee image ${id}`} className="w-36" />
        ))}

        {Marqueeimgs.map((link, id) => (
        <img key={id} src={link} alt={`Marquee image ${id}`} className="w-36" />
        ))}

        
        
        


    
    </div>
  )
}

export default Marquee