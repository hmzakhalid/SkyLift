import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "lib/dbConnect";
import Flights from "models/Flights";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // validate if it is a Get
    if (req.method !== "GET") {
        return res
            .status(200)
            .json({ error: "This API call only accepts GET methods" });
    }   

    await dbConnect();

    const flights = await Flights.find({});
    return res.status(200).json({ flights });
}