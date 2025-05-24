const API_BASE = "https://maritime-operations-dashboard-backend.onrender.com";

export async function fetchDashboardStats() {
  // Fetch all ships from backend
  const res = await fetch(`${API_BASE}/ships`);
  if (!res.ok) throw new Error("Failed to fetch ships");
  const ships = await res.json();

  // Compute stats
  const activeVessels = ships.length;
  const inPort = ships.filter(s => s.status === "In Port").length;
  const inTransit = ships.filter(s => s.status === "In Transit").length;
  const alerts = ships.filter(s => s.status === "Alert").length;

  // Example: compute fleet status for chart
  const fleetStatus = [
    { name: "In Port", value: inPort },
    { name: "In Transit", value: inTransit },
    { name: "Maintenance", value: ships.filter(s => s.status === "Maintenance").length },
    { name: "Alert", value: alerts }
  ];

  // Get 5 most recent ships by lastUpdate
  const recentShips = ships
    .slice()
    .sort((a, b) => new Date(b.lastUpdate) - new Date(a.lastUpdate))
    .slice(0, 5)
    .map(s => ({
      id: s._id,
      name: s.name,
      imo: s.imo,
      type: s.type,
      status: s.status,
      lastUpdate: s.lastUpdate
    }));

  // You can add more logic for trafficData and weatherData if you have APIs for them
  return {
    activeVessels,
    inPort,
    inTransit,
    alerts,
    fleetStatus,
    recentShips,
    // Optionally, keep mock data for trafficData and weatherData if not available from backend
    trafficData: [
      { name: 'Jan', cargo: 65, tanker: 38, passenger: 22 },
      { name: 'Feb', cargo: 59, tanker: 42, passenger: 26 },
      { name: 'Mar', cargo: 80, tanker: 40, passenger: 29 },
      { name: 'Apr', cargo: 81, tanker: 45, passenger: 31 },
      { name: 'May', cargo: 76, tanker: 48, passenger: 28 },
      { name: 'Jun', cargo: 85, tanker: 50, passenger: 32 },
      { name: 'Jul', cargo: 90, tanker: 52, passenger: 35 },
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
  };
}