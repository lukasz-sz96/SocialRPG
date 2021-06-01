import React, { useEffect } from "react";
import axios from "axios";

import { Container, Header, Main, Footer, Cards } from "@components";

const Home: React.FC = () => {
    //MOCK
    useEffect(() => {
        const fetch = async () => {
            const newPlayer = await axios.post(
                "http://localhost:3000/api/user/create",
                {
                    data: {
                        name: "TestPlayer",
                        password: "TestPassword",
                        hp: 50,
                    },
                },
            );

            const getPlayer = await axios.get(
                "http://localhost:3000/api/user/get",
                {
                    params: { name: "TestPlayer" },
                },
            );
            console.log(newPlayer);
            console.log(getPlayer);
        };
        fetch();
    }, []);
    return (
        <Container>
            <Header />
            <Main />
            <Cards />
            <Footer />
        </Container>
    );
};

export default Home;
