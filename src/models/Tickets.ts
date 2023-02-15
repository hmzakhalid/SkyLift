import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    flightId: {
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

    departureDate: {
        type: String,
        required: true,
    },

    arrivalDate: {
        type: String,
        required: true,
    },

    seats: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },

    ticketClass: {
        type: String,
        required: true,
    },
    ticketType: {
        type: String,
        required: true,
    }

});

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
export default Ticket;