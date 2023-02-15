import axios from "axios";
import { NextPage } from "next";


// const flightsSchema = new Schema({
//     airline: {
//         type: String,
//         required: true,
//     },
//     airlineimg: {
//         type: String,
//         required: true,
//     },
//     flightNumber: {
//         type: String,
//         required: true,
//     },
//     departure: {
//         type: String,
//         required: true,
//     },
//     arrival: {
//         type: String,
//         required: true,
//     },
//     departureTime: {
//         type: String,
//         required: true,
//     },
//     arrivalTime: {
//         type: String,
//         required: true,
//     },
//     price: {
//         type: Number,
//         required: true,
//     }
// });


const UploadFlights: NextPage = () => {

    const DEMO_DATA = [
        {
            airline: "Korean Air",
            airlineimg: "https://www.gstatic.com/flights/airline_logos/70px/KE.png",
            flightNumber: "KE 123",
            departure: "SFO",
            arrival: "LAX",
            departureTime: "10:00 AM",
            arrivalTime: "12:00 PM",
            price: 4100,
        },
        {
            airline: "Singapore Airlines",
            airlineimg: "https://www.gstatic.com/flights/airline_logos/70px/SQ.png",
            flightNumber: "SQ 123",
            departure: "SFO",
            arrival: "LAX",
            departureTime: "10:00 AM",
            arrivalTime: "12:00 PM",
            price: 3380,
        },
        {
            airline: "Philippine Airlines",
            airlineimg: "https://www.gstatic.com/flights/airline_logos/70px/multi.png",
            flightNumber: "PR 123",
            departure: "SFO",
            arrival: "LAX",
            departureTime: "10:00 AM",
            arrivalTime: "12:00 PM",
            price: 2380,
        },
        {   
            airline: "Korean Air",
            airlineimg: "https://www.gstatic.com/flights/airline_logos/70px/KE.png",
            flightNumber: "KE 123",
            departure: "SFO",
            arrival: "LAX",
            departureTime: "10:00 AM",
            arrivalTime: "12:00 PM",
            price: 4100,
        },
        
        {
            airline: "Singapore Airlines",
            airlineimg: "https://www.gstatic.com/flights/airline_logos/70px/SQ.png",
            flightNumber: "SQ 123",
            departure: "SFO",
            arrival: "LAX",
            departureTime: "10:00 AM",
            arrivalTime: "12:00 PM",
            price: 3380,
        },
        {
            airline: "Philippine Airlines",
            airlineimg: "https://www.gstatic.com/flights/airline_logos/70px/multi.png",
            flightNumber: "PR 123",
            departure: "SFO",
            arrival: "LAX",
            departureTime: "10:00 AM",
            arrivalTime: "12:00 PM",
            price: 2380,
        },
        
        {
            airline: "Philippine Airlines",
            airlineimg: "https://www.gstatic.com/flights/airline_logos/70px/multi.png",
            flightNumber: "PR 128",
            departure: "SFO",
            arrival: "LAX",
            departureTime: "12:00 PM",
            arrivalTime: "4:00 PM",
            price: 3380,
        }
    ];

    const uploadFlights = async () => {

        for (let i = 0; i < DEMO_DATA.length; i++) {
            const flight = DEMO_DATA[i];
            const response = await axios.post("http://localhost:3000/api/uploadFlights", flight);
            console.log(response);
        }
        
    }

    return (
        <div>
            <button onClick={uploadFlights}>Upload Flights</button>
        </div>
    );

}

export default UploadFlights;