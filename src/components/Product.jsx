
import Button from "../components/Button"
const Product = ({name , description}) => {
  return ( 
    <div className="w-full py-10 text-white">
        <div className='max-w-screen-xl mx-auto flex items-center justify-between'>
          <h1 className="text-6xl font-bold">{name}</h1>
          <div className="w-1/3"> 
            <p className="mb-10 text-xl">{description}</p>
            <Button/>
          </div>
        </div>
    </div>
  )
}

export default Product