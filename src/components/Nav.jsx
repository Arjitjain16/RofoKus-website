

const Nav = () => {
  return (
    <div className='max-w-screen-xl mx-auto text-white py-8 flex items-center gap-14'>
        <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
        <div className="flex gap-14 ml-20">
            {['Home', 'Work', 'About','News','Carrer'].map((elem)=>(
                <a key={elem.id} className="flex items-center gap-1" href="">
                    <span className="inline-block h-1 w-1 bg-green-500 rounded-full"></span>
                    {elem}
                </a>
            ))}
        </div>
    </div>
  )
}

export default Nav