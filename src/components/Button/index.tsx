import { motion } from "framer-motion";
import * as React from "react";

interface props {
    disabled?: boolean;
    children: React.ReactNode;
}

export const Button = ({ disabled, children }: props) => {
    return (
        <motion.button
            className={`my-3 mx-2 p-1 ${
                disabled
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-transparent border-gray-300 border-2 border-opacity-80"
            } shadow-md rounded-lg focus:outline-none`}
            initial={{ scale: disabled ? 0.95 : 1 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 1 }}
            transition={{ duration: 0.05 }}
        >
            {children}
        </motion.button>
    );
};
