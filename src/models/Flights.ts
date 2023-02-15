import mongoose from "mongoose";

const Schema = mongoose.Schema;

const flightsSchema = new Schema({
    airline: {
        type: String,
        required: true,
    },
    airlineimg: {
        type: String,
        required: true,
    },
    flightNumber: {
        type: String,
        required: true,
    },
    departure: {
        type: String,
        required: true,
    },
    arrival: {
        type: String,
        required: true,
    },
    departureTime: {
        type: String,
        required: true,
    },
    arrivalTime: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
});

const Flights = mongoose.models.Flights || mongoose.model("Flights", flightsSchema);
export default Flights;