import React, { useEffect } from "react";
import { useSession, signOut } from "next-auth/client";
import { useRouter } from "next/router";

import axios from "axios";

import { ExampleComponent } from "@components";

const Home: React.FC = () => {
    const router = useRouter();
    //MOCK
    // useEffect(() => {
    //     const fetch = async () => {
    //         const newPlayer = await axios.post(
    //             "http://localhost:3000/api/user/create",
    //             {
    //                 data: {
    //                     name: "TestPlayer",
    //                     password: "TestPassword",
    //                     hp: 50,
    //                 },
    //             },
    //         );

    //         const getPlayer = await axios.get(
    //             "http://localhost:3000/api/user/get",
    //             {
    //                 params: { name: "TestPlayer" },
    //             },
    //         );
    //         console.log(newPlayer);
    //         console.log(getPlayer);
    //     };
    //     fetch();
    // }, []);

    const [session, loading] = useSession();

    if (loading) {
        return <h2>Loading session data...</h2>;
    }
    if (session) {
        return (
            <>
                Signed in as {session.user.name} <br />
                <button onClick={() => signOut()}>Sign out</button>
                <ExampleComponent />
            </>
        );
    } else {
        router.push("/login");
        return null;
    }
};

export default Home;
