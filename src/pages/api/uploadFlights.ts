import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "lib/dbConnect";
import Flights from "models/Flights";


interface ResponseData {
    error?: string;
    msg?: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    // validate if it is a POST
    if (req.method !== "POST") {
        return res
            .status(200)
            .json({ error: "This API call only accepts POST methods" });
    }

    // get and validate body variables
    const { airline, airlineimg, flightNumber, departure, arrival, departureTime, arrivalTime, price } = req.body;

    await dbConnect();

    const flight = await Flights.create({
        airline,
        airlineimg,
        flightNumber,
        departure,
        arrival,
        departureTime,
        arrivalTime,
        price
    });

    return res.status(200).json({ msg: "Flight added successfully" });
}
