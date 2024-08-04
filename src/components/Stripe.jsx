
const Stripe = ({elem}) => {
  return (
    <div className="flex  w-[16.66%] border px-10 py-5 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] justify-between items-center">
            <img className="w-32 h-34" src={elem.url} alt="" />
            <span className="text-zinc-100 text-xl">{elem.num}</span>
    </div>
  )
}

export default Stripe