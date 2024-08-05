
import Button from "../components/Button"
const Product = ({val}) => {
  return ( 
    <div className="w-full py-10 text-white">
        <div className='max-w-screen-xl mx-auto flex items-center justify-between'>
          <h1 className="text-6xl font-medium">{val.name}</h1>
          <div className="w-1/3"> 
            <p className="mb-10 text-xl">{val.description}</p>
            <div className="flex flex-row gap-5">
              {val.live && (<Button/>)}
              {val.case && (<Button title="Case Study"/>)}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Product