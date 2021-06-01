import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        const player = await prisma.player.findUnique({
            where: { ...req.query },
        });
        await prisma.$disconnect;
        return res.status(200).send(player);
    } else {
        await prisma.$disconnect;
        res.status(422).send("get_method_not_supported");
    }
};

export default handler;
