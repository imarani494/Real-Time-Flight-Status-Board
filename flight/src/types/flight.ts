

export interface Flight {
    id: string;
    flightNumber: string;
    airline: string;
    origin: string;
    destination: string;
    departureTime: string;
    status: string;
  }
  
  export interface FlightDetails extends Flight {
    aircraftType: string;
    gate: string;
    terminal: string;
    baggageClaim: string;
  }
  