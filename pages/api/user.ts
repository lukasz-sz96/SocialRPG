import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const newPlayer = await prisma.player.create({
            ...req.body,
        });
        await prisma.$disconnect;
        return res.status(200).send(newPlayer);
    } else {
        res.status(422).send("req_method_not_supported");
    }
};

export default handler;
