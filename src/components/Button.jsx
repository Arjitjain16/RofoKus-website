import { CgCornerDownRight } from "react-icons/cg";

const Button = ({title = "Get started"}) => {
  return (
    <div className="bg-[#F1ECFF] text-black w-44 rounded-full py-2 px-4 flex item-center justify-between">
        <span>{title}</span>
        <CgCornerDownRight className="mt-1" />
    </div>
  )
}

export default Button