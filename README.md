Project Overview

The Flight Status Tracker is a web application built using React and TypeScript that allows users to view real-time flight statuses. The application displays a table of flights
with information such as flight number, airline, origin, destination, and status. Users can click on a flight to view detailed information, including aircraft type, gate, terminal,
and baggage claim details.

## Installation

To run the application locally, follow these steps:

1. Clone the repository:
   git clone https://github.com/your-username/flight-status-app.git
   cd flight-status-app

2. Install the dependencies:
   npm install

3. Run the application:
   npm run dev

4. Build the application
   npm run build

Project Structure
The project consists of the following main directories and files:

flight-status-app/
│
├── public/
│ ├── index.html  
│ └── favicon.ico  
│
├── src/
│ ├── components/  
│ │ ├── Detail.tsx  
│ │ └── Table.tsx  
│ │
│ ├── services/  
│ │ └── api.ts  
│ │
│ ├── types/  
│ │ └── flight.ts  
│ │
│ ├── App.tsx  
│ ├── index.tsx  
│ ├── App.css  
│ └── index.css  
│
├── .gitignore  
├── package.json  
├── README.md  
└── tsconfig.json

