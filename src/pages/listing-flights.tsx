import ListingFlightsPage from "containers/ListingFlightsPage/ListingFlightsPage";

export default ListingFlightsPage;

// Flights Table
/**
 * flight_id
 * airline_id
 * price
 * total_seats
 * booked_seats
 * stops
 * time
 * origin = [location_id]
 * destination = [location_id]
 * type = ["One Way", "Two Way"]
 * date_left
 * date_return
 */


// Ticktes Table
/**
 * ticket_id
 * user_id
 * flight_id
 * class = ["Economy, Business, First"]
 * date_booked
 */

// Airlines Table
/**
 * id
 * name
 * logo
 */

// locations
/**
 * id
 * name
 * airport_code
 */

// Query String
// ?from=123&to=321&pickup=15/8/2022&dropoff=16/8/2022&class=economy&type=one-way