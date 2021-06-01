import React, { useEffect } from "react";
import axios from "axios";

import { Container, Header, Main, Footer, Cards } from "@components";

const Home: React.FC = () => {
    useEffect(() => {
        const fetch = async () => {
            const x = await axios.post("http://localhost:3000/api/user", {
                data: {
                    name: "TestPlayer",
                    password: "TestPassword",
                    hp: 50,
                },
            });
            console.log(x);
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
