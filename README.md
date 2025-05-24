# Marine Dashboard

A modern web application for tracking and managing marine vessels, providing real-time insights into ship locations, status, and maritime operations.

## Features

- **Real-time Ship Tracking**

  - Search vessels by name, IMO number, or MMSI
  - View detailed vessel information and current status
  - Track vessel locations and voyage history

- **Interactive Dashboard**

  - Fleet status overview with real-time statistics
  - Marine traffic visualization with interactive charts
  - Weather conditions and forecasts for major ports
  - Recent ship activity monitoring

- **Comprehensive Ship Details**

  - Technical specifications
  - Safety records and certifications
  - Port state control inspections
  - Incident history
  - Voyage tracking

- **Advanced Search Capabilities**
  - Filter by vessel type
  - Filter by flag state
  - Filter by operational status
  - Sort results by multiple criteria
    ![alt text](<frontend/src/assets/Screenshot 2025-05-24 162644.png>)![alt text](<frontend/src/assets/Screenshot 2025-05-24 162730.png>)![alt text](<frontend/src/assets/Screenshot 2025-05-24 162814.png>)![alt text](<frontend/src/assets/Screenshot 2025-05-24 162622.png>)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/marine-dashboard.git
   ```

2. Navigate to the project directory:

   ```bash
   cd marine-dashboard
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## Technology Stack

- **Frontend Framework**: React 18
- **Routing**: React Router 6
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: React Icons
- **HTTP Client**: Axios

## Project Structure

```
marine-dashboard/
├── src/
│   ├── components/
│   │   ├── dashboard/    # Dashboard-specific components
│   │   └── layouts/      # Layout components
│   ├── contexts/         # React context providers
│   ├── pages/           # Page components
│   ├── services/        # API and data services
│   └── main.jsx         # Application entry point
├── public/              # Static assets
└── package.json         # Project dependencies
```

## Features in Detail

### Dashboard Overview

- Fleet status statistics
- Marine traffic trends
- Weather conditions
- Recent ship activity

### Ship Search

- Search by vessel name
- Search by IMO number
- Search by MMSI
- Advanced filtering options

### Ship Details

- General vessel information
- Technical specifications
- Safety records
- Voyage history
- Real-time status updates

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment Variables

The project uses the following environment variables:

```env
VITE_API_URL=your_api_url
VITE_API_KEY=your_api_key
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Ship data structure inspired by [equasis.org](https://www.equasis.org)
- Weather data integration based on standard maritime weather reporting
- Marine traffic visualization inspired by common maritime tracking systems
