
import { GoArrowRight } from "react-icons/go";
const Card = ({width , start , para , hover}) => {
  return (
    <div className={`rounded-xl bg-[#3E3E46] p-5 ${width} min-h-[23vmax] flex flex-col justify-between hover:${hover}`}>
        <div className="w-full">
            <div className="flex justify-between item-center w-full">
                <h1>Get in touch</h1>
                <GoArrowRight />
            </div>
            <h1 className="mt-5 text-3xl ">Let get to it together</h1>
        </div>
        <div className="w-full">
            {start && (
                <>
                  <h1 className="text-8xl tracking-tight">Start a project</h1>
                  <button className="mt-5 rounded-full border py-2 px-4 border-zinc-100">Contact us</button>
                </>
            ) }
            {para && (
                <p className="text-sm  font-medium mt-4">Explore what drives our team.</p>
            )}
        </div>
    </div>
  )
}

export default Card