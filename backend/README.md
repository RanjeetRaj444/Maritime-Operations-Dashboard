# Maritime Operations Dashboard Backend

## Overview
This project is a backend service for the Maritime Operations Dashboard, designed to manage and retrieve information about ships. It utilizes Express.js for handling HTTP requests and MongoDB for data storage.

## Project Structure
```
backend
├── controllers
│   └── shipController.js      # Handles requests related to ships
├── models
│   └── shipModel.js           # Defines the schema for ship data
├── routes
│   └── shipRoutes.js          # Sets up routes for ship-related requests
├── app.js                      # Entry point of the backend application
└── README.md                   # Documentation for the project
```

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies**
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your-mongodb-connection-string>
   PORT=5000
   ```

4. **Run the application**
   Start the server with:
   ```bash
   npm start
   ```

5. **Access the API**
   The API will be available at `http://localhost:5000`. You can use tools like Postman or curl to interact with the endpoints.

## API Endpoints

- **GET /ships**: Fetch all ships.
- **GET /ships/:id**: Fetch details of a specific ship by ID.

## Usage
This backend service is designed to be used in conjunction with a frontend application that displays ship data. Ensure that the frontend is configured to communicate with the correct backend URL.

## License
This project is licensed under the MIT License. See the LICENSE file for details.