import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

interface Credentials {
    username: string;
    password: string;
}

export default NextAuth({
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        Providers.Credentials({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "test",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },
            async authorize(credentials: Credentials) {
                let isPasswordValid = false;
                const player = await prisma.player.findUnique({
                    where: { name: credentials.username },
                });
                prisma.$disconnect;
                if (player) {
                    isPasswordValid = await bcrypt.compare(
                        credentials.password,
                        player.password,
                    );
                }

                if (isPasswordValid) {
                    return player;
                } else {
                    return false;
                    // throw '/path/to/redirect'
                }
            },
        }),
    ],

    // Optional SQL or MongoDB database to persist users
    database: process.env.DATABASE_URL,
});
