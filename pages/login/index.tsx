import { Button } from "@components";
import { motion } from "framer-motion";
import { signIn } from "next-auth/client";
import { getCsrfToken, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Login = ({ csrfToken }) => {
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session[0]) {
            router.push("/");
        }
    }, [session, router]);

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
            <div className="m-auto p-4 text-white bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg w-full md:w-auto shadow-2xl">
                <div className="text-center font-bold text-2xl">
                    <h2>Login</h2>
                </div>
                <div className="bg-white h-px my-3"></div>
                <form method="post" action="/api/auth/callback/credentials">
                    <input
                        name="csrfToken"
                        type="hidden"
                        defaultValue={csrfToken}
                    />
                    <div>
                        <label>
                            Username
                            <input
                                className="bg-transparent placeholder-blue-200 p-2 w-full border-white border-2 border-opacity-50"
                                name="username"
                                type="text"
                            />
                        </label>
                        <br />
                        <label>
                            Password
                            <input
                                className="bg-transparent placeholder-blue-200 p-2 w-full border-white border-2 border-opacity-50"
                                name="password"
                                type="password"
                            />
                        </label>
                    </div>
                    <div className="text-center text-xl">
                        <Button type="submit">Login</Button>
                        <Button>Register</Button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export async function getServerSideProps(context) {
    return {
        props: {
            csrfToken: await getCsrfToken(context),
        },
    };
}

export default Login;
