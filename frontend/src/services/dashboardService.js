// Mock dashboard data service

export async function fetchDashboardStats() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800))
  
  // Mock dashboard data
  return {
    activeVessels: 156,
    inPort: 78,
    inTransit: 68,
    alerts: 4,
    
    trafficData: [
      { name: 'Jan', cargo: 65, tanker: 38, passenger: 22 },
      { name: 'Feb', cargo: 59, tanker: 42, passenger: 26 },
      { name: 'Mar', cargo: 80, tanker: 40, passenger: 29 },
      { name: 'Apr', cargo: 81, tanker: 45, passenger: 31 },
      { name: 'May', cargo: 76, tanker: 48, passenger: 28 },
      { name: 'Jun', cargo: 85, tanker: 50, passenger: 32 },
      { name: 'Jul', cargo: 90, tanker: 52, passenger: 35 },
    ],
    
    fleetStatus: [
      { name: 'In Port', value: 78 },
      { name: 'In Transit', value: 68 },
      { name: 'Maintenance', value: 6 },
      { name: 'Alert', value: 4 }
    ],
    
    recentShips: [
      {
        id: '1',
        name: 'Atlantic Navigator',
        imo: '9876543',
        type: 'Container Ship',
        status: 'In Transit',
        lastUpdate: '2025-04-16T08:30:00Z'
      },
      {
        id: '2',
        name: 'Pacific Explorer',
        imo: '9765432',
        type: 'Tanker',
        status: 'In Port',
        lastUpdate: '2025-04-16T07:15:00Z'
      },
      {
        id: '3',
        name: 'Nordic Prince',
        imo: '9654321',
        type: 'Bulk Carrier',
        status: 'In Transit',
        lastUpdate: '2025-04-16T06:45:00Z'
      },
      {
        id: '4',
        name: 'Mediterranean Queen',
        imo: '9543210',
        type: 'Cruise Ship',
        status: 'In Port',
        lastUpdate: '2025-04-16T05:20:00Z'
      },
      {
        id: '5',
        name: 'Arctic Voyager',
        imo: '9432109',
        type: 'Tanker',
        status: 'Alert',
        lastUpdate: '2025-04-16T04:10:00Z'
      }
    ],
    
    weatherData: {
      location: 'Port of Rotterdam',
      condition: 'cloudy',
      temperature: 12,
      windSpeed: 18,
      forecast: [
        { day: 'Thu', condition: 'rainy', temp: 10 },
        { day: 'Fri', condition: 'cloudy', temp: 13 },
        { day: 'Sat', condition: 'sunny', temp: 15 }
      ]
    }
  }
}