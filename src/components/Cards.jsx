import Card from "./Card"


const Cards = () => {
  return (
   <div className="max-w-screen-xl mx-auto flex gap-1  mt-20 ">
     <Card width={"basis-1/3"} start={false} para={true}/>
     <Card width={"basis-2/3"} start={true} para={false} hover={"bg-violet-600"}/>
   </div>
  )
}

export default Cards