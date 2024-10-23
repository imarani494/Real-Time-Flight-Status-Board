import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card,  Alert, Spinner } from "react-bootstrap";
import { fetchFlightById } from "../services/api";
import { FlightDetails } from "../types/flight";
import "bootstrap/dist/css/bootstrap.min.css";

const Detail: React.FC = () => {
  const { id } = useParams<{ id?: string }>(); 
  const [flight, setFlight] = useState<FlightDetails | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getFlight = async () => {
      if (!id) {
        setError("Flight ID is missing");
        return;
      }
      try {
        const data = await fetchFlightById(id);
        setFlight(data);
      } catch (err: any) {
        setError("Error fetching flight details");
      }
    };

    getFlight();
  }, [id]);

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  if (!flight) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <div className="my-4 detail">
      <Card className="flight-detail-card">
        <Card.Header as="h2">Flight Details</Card.Header>
        <Card.Body>
          <Card.Text>
            <strong>Flight Number:</strong> {flight.flightNumber}
          </Card.Text>
          <Card.Text>
            <strong>Airline:</strong> {flight.airline}
          </Card.Text>
          <Card.Text>
            <strong>Origin:</strong> {flight.origin}
          </Card.Text>
          <Card.Text>
            <strong>Destination:</strong> {flight.destination}
          </Card.Text>
          <Card.Text>
            <strong>Departure Time:</strong> {flight.departureTime}
          </Card.Text>
          <Card.Text>
            <strong>Status:</strong> {flight.status}
          </Card.Text>
          <Card.Text>
            <strong>Aircraft Type:</strong> {flight.aircraftType}
          </Card.Text>
          <Card.Text>
            <strong>Gate:</strong> {flight.gate}
          </Card.Text>
          <Card.Text>
            <strong>Terminal:</strong> {flight.terminal}
          </Card.Text>
          <Card.Text>
            <strong>Baggage Claim:</strong> {flight.baggageClaim}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Detail;
