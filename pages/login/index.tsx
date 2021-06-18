import { Button } from "@components";
import { motion } from "framer-motion";

const Login = () => {
    return (
        <motion.div
            initial={{
                scale: 0.5,
                opacity: 0,
                rotateX: "45deg",
                rotateY: "20deg",
            }}
            animate={{ scale: 1, opacity: 1, rotateX: "0deg", rotateY: "0deg" }}
            transition={{ duration: 0.55 }}
            className="flex h-screen"
        >
            <div className="m-auto p-4 text-white bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg w-full md:w-auto">
                <div className="text-center font-bold text-2xl">
                    <h2>Login</h2>
                </div>
                <div className="bg-white h-px my-3"></div>
                <div>
                    <input
                        type="text"
                        placeholder="Nickname"
                        className="bg-transparent placeholder-blue-200 p-2 w-full"
                    />
                    <br />
                    <input
                        type="text"
                        placeholder="Password"
                        className="bg-transparent my-3 placeholder-blue-200 p-2 w-full"
                    />
                </div>
                <div className="text-center text-xl">
                    <Button>Login</Button>
                    <Button>Register</Button>
                </div>
            </div>
        </motion.div>
    );
};

export default Login;
