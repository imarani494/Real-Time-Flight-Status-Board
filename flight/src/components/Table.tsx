import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table as BootstrapTable, Container, Alert } from "react-bootstrap";
import { fetchFlights } from "../services/api";
import { Flight } from "../types/flight";
import "bootstrap/dist/css/bootstrap.min.css";

const FlightTable: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getFlights = async () => {
      try {
        const data = await fetchFlights();
        setFlights(data);
      } catch (err) {
        setError("Error fetching flights");
      }
    };

    getFlights();

    const intervalId = setInterval(() => {
      getFlights();
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <Container>
      <h2 className="my-4 text-center">Flight Status Board</h2>
      <BootstrapTable striped bordered hover responsive>
        <thead>
          <tr>
            <th>Flight Number</th>
            <th>Airline</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Departure Time</th>
            <th>Status</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.flightNumber}</td>
              <td>{flight.airline}</td>
              <td>{flight.origin}</td>
              <td>{flight.destination}</td>
              <td>{flight.departureTime}</td>
              <td>{flight.status}</td>
              <td>
                <Link to={`/flights/${flight.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </BootstrapTable>
    </Container>
  );
};

export default FlightTable;
