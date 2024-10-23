
import axios from "axios";
import { Flight, FlightDetails } from "../types/flight";

const BASE_URL = "https://flight-status-mock.core.travelopia.cloud/flights";

export const fetchFlights = async (): Promise<Flight[]> => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const fetchFlightById = async (id: string): Promise<FlightDetails> => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};
