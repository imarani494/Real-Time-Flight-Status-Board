Project Overview

The Flight Status Tracker is a web application built using React and TypeScript that allows users to view real-time flight statuses. The application displays a table of flights with information such as flight number, airline, origin, destination, and status. Users can click on a flight to view detailed information, including aircraft type, gate, terminal, and baggage claim details.

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

Key Features

Flight Status Table A table displaying a list of flights with basic information such as Flight Number, Airline, Origin, Destination, Departure Time, and Status.
Flight Detail Page Detailed information about individual flights, accessible via a clickable link in the table.
Real-time Updates The flight list is refreshed automatically every 10 seconds to provide real-time status updates.
Error HandlingIf any error occurs during the fetching of flight data, the app will display an alert with an appropriate error message.

Technologies Used

- React For building the user interface.
- TypeScript For type-safe development.
- React Router For handling routing and navigation.
- Bootstrap For responsive layout and styling.
- Axios For making HTTP requests to the flight status API.
- Mock API The app fetches data from a mock flight status API provided by `https://flight-status-mock.core.travelopia.cloud`.

Conclusion
The Flight Status Application is a user-friendly interface for checking the status of flights. It utilizes React for the frontend, React Router for navigation, and Axios for API interactions. The application features:

A flight status board that displays a list of flights with their details.
A detailed view for each flight, showing specific information retrieved from the API.
Error handling and loading states to enhance user experience.
This project can be further enhanced by integrating more features such as user authentication, advanced filtering, and sorting of flights, or even incorporating WebSocket for real-time flight updates.
