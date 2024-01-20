import React from "react";
import {motion} from "framer-motion";
const Debug = () => {
    return (
        <motion.div animate={{
            scale: [1, 1.2, 1, 1],
            rotate: [0, 0, 360],
            borderRadius: ["20%", "20%", "20%", "20%", "20%"],
          }} transition = {{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            loop: Infinity,
            repeatDelay: 1
          }}
          >
        <div className="flex flex-wrap justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg p-10">
                <h1 className="text-2xl font-bold text-gray-800">Debug</h1>
                <p className="mt-1 text-gray-600">This is a debug page</p>
            </div>
        </div>

        </motion.div>
        
    );
};

export default Debug;