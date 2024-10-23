 <!-- Flight Status Tracker -->

<!-- Project Overview -->

The Flight Status Tracker is a web application built using React and TypeScript that allows users to view real-time flight statuses. The application displays a table of flights with information such as flight number, airline, origin, destination, and status. Users can click on a flight to view detailed information, including aircraft type, gate, terminal, and baggage claim details.

<!-- Key Features -->

Flight Status Table A table displaying a list of flights with basic information such as Flight Number, Airline, Origin, Destination, Departure Time, and Status.
Flight Detail Page Detailed information about individual flights, accessible via a clickable link in the table.
Real-time Updates The flight list is refreshed automatically every 10 seconds to provide real-time status updates.
Error HandlingIf any error occurs during the fetching of flight data, the app will display an alert with an appropriate error message.

<!-- Technologies Used -->

- React For building the user interface.
- TypeScript For type-safe development.
- React Router For handling routing and navigation.
- Bootstrap For responsive layout and styling.
- Axios For making HTTP requests to the flight status API.
- Mock API The app fetches data from a mock flight status API provided by `https://flight-status-mock.core.travelopia.cloud`.
