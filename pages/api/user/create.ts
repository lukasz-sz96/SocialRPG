import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const doesAlreadyExist = await prisma.player.findUnique({
            where: { name: req.body.data.name },
        });
        if (!doesAlreadyExist) {
            const newPlayer = await prisma.player.create({
                ...req.body,
            });
            return res.status(201).send(newPlayer);
        }
        return res.status(200).send(false);
    } else {
        res.status(422).send("req_method_not_supported");
    }
};

export default handler;
