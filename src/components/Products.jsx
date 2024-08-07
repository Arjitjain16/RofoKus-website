import { motion } from "framer-motion";
import Product from "./Product";
import { useState } from "react";

const Products = () => {
    const products = [
        {name : 'Arqitel', description : "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.", live : true, case : false},
        {name : 'Cula', description : "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.", live : true, case : false},
        {name : 'Yahoo', description : "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.", live : true, case : false},
        {name : 'TTR', description : "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.", live : true, case : false},
        {name : 'Maniv', description : "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.", live : true, case : false},
        {name : 'Singularity', description : "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.", live : true, case : false},
        {name : 'Rain fall', description : "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.", live : true, case : true},
        {name : 'Intenseye', description : "A brand new website for Intenseye just before their $64M Series.", live : true, case : false},
        {name : 'Remind', description : "Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.", live : true, case : true},
    ];

    const [pos, setPos] = useState(0);

    const mover = (count) => {
        setPos(count * 23); // Assuming 23 is the height of each item
    };

    return (
        <div className="mt-28 relative">
            {products.map((item, index) => (
                <Product key={index} val={item} mover={mover} count={index} />
            ))}
            <div className="w-full h-full absolute top-0 pointer-events-none">
                <motion.div initial={{ y: 0 }} animate={{ y: pos + 'rem' }}
                    className="bg-red-300 h-[23rem] w-[32rem] absolute left-[30%] overflow-hidden rounded">
                    <motion.div animate={{y: -pos+`rem`}} className="bg-blue-300 h-full w-full rounded-md ">
                    </motion.div>
                    <motion.div animate={{y: -pos+`rem`}} className="bg-yellow-300 h-full w-full rounded-md "></motion.div>
                    <motion.div animate={{y: -pos+`rem`}} className="bg-pink-300 h-full w-full rounded-md "></motion.div>
                    <motion.div animate={{y: -pos+`rem`}} className="bg-green-300 h-full w-full rounded-md "></ motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Products;
