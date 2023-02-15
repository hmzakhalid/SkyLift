import clientPromise from "utils/mongodb";
import { NextApiRequest, NextApiResponse } from "next";


export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const client = await clientPromise;
        const db = client.db("posts");
        const { title, content } = req.body;

        const post = await db.collection("posts").insertOne({
            title,
            content,
        });

        res.json(post);
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
};