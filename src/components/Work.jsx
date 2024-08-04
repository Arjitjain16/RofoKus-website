
const Work = () => {
  const images = [
    {url : "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png" , top:"35%" , left:"44%" , isActive : true},
    {url : "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png" , top:"38%" , left:"40%" , isActive : true},
    {url : "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png" , top : "35%" , left : "36%" , isActive : false},
    {url : "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png" , top : "49%" , left : "33%" , isActive : false},
    {url : "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png" , top : "43%" , left : "37%" , isActive : false},
    {url : "https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png" , top : "41%" , left : "32%" , isActive : false}
    
  ]
  return (
    <div className="max-w-screen-xl mx-auto relative text-center mt-8">
        <h1 className=" text-[34vw] text-zinc-100 font-medium leading-none tracking-tight select-none">
          Work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map((ele, index) =>(
            ele.isActive && (
              <img key={index} className=" absolute w-64 h-64 rounded-lg" 
              src={ele.url} 
              style={{top:ele.top, left:ele.left,}}
              alt="" 
            />
            )
          ))}
        </div>
    </div>
  )
}

export default Work