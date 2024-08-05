import Product from "./Product"

const Products = () => {
    const products = [
        {name : 'Arqitel',
            description : "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate. ",
            live : true ,
            case : false
        },
        {name : 'Cula',
            description : "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates. ",
            live : true ,
            case : false
        },
        {name : 'Layout Land',
            description : "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow. ",
            live : true ,
            case : false
        },
        {name : 'TTR',
            description : "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design. ",
            live : true ,
            case : false
        },
        {name : 'Maniv',
            description : " A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods. ",
            live : true ,
            case : false
        },
        {name : 'Singularity',
            description : " A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods. ",
            live : true ,
            case : false
        },
        
        
    ]
  return (
    <div className="mt-20">
        {products.map((item, index)=>(
            <Product key={index} name={item.name} description={item.description} />
        ))}
    </div>
  )
}

export default Products