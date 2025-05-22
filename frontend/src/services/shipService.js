const mockShips = [
  {
    id: "1",
    name: "Atlantic Navigator",
    imo: "9876543",
    mmsi: "123456789",
    type: "Container Ship",
    flag: "US",
    built: 2018,
    status: "In Transit",
    owner: "Global Shipping Inc.",
    currentLocation: "North Atlantic Ocean",
    destination: "New York",
    lastUpdate: "2025-04-16T08:30:00Z",
    technical: {
      length: 294.5,
      breadth: 32.2,
      draught: 13.5,
      grossTonnage: 85645,
      netTonnage: 43250,
      deadweight: 95000,
      engineType: "MAN B&W 11G90ME-C10",
      power: 62500,
      speed: 25,
      cargoCapacity: "8500 TEU",
      fuelType: "VLSFO",
    },
    certificates: [
      {
        name: "Safety Management Certificate",
        issuer: "American Bureau of Shipping",
        issuedDate: "2024-01-15T00:00:00Z",
        expiryDate: "2029-01-14T00:00:00Z",
        status: "Valid",
      },
      {
        name: "International Ship Security Certificate",
        issuer: "American Bureau of Shipping",
        issuedDate: "2023-11-20T00:00:00Z",
        expiryDate: "2028-11-19T00:00:00Z",
        status: "Valid",
      },
      {
        name: "International Oil Pollution Prevention Certificate",
        issuer: "American Bureau of Shipping",
        issuedDate: "2024-02-10T00:00:00Z",
        expiryDate: "2029-02-09T00:00:00Z",
        status: "Valid",
      },
    ],
    inspections: [
      {
        date: "2025-01-20T00:00:00Z",
        port: "Rotterdam",
        authority: "Paris MOU",
        deficiencies: 0,
        result: "Pass",
      },
      {
        date: "2024-07-15T00:00:00Z",
        port: "Singapore",
        authority: "Tokyo MOU",
        deficiencies: 2,
        result: "Warning",
      },
    ],
    incidents: [],
    voyageHistory: [
      {
        departure: "Shanghai",
        arrival: "Los Angeles",
        departureDate: "2025-03-01T00:00:00Z",
        arrivalDate: "2025-03-15T00:00:00Z",
        duration: "14 days",
      },
      {
        departure: "Los Angeles",
        arrival: "Panama Canal",
        departureDate: "2025-03-18T00:00:00Z",
        arrivalDate: "2025-03-25T00:00:00Z",
        duration: "7 days",
      },
      {
        departure: "Panama Canal",
        arrival: "At Sea",
        departureDate: "2025-03-26T00:00:00Z",
        arrivalDate: "2025-04-16T00:00:00Z",
        duration: "21 days",
      },
    ],
  },
  {
    id: "2",
    name: "Pacific Explorer",
    imo: "9765432",
    mmsi: "234567891",
    type: "Tanker",
    flag: "PA",
    built: 2016,
    status: "In Port",
    owner: "Oceanic Petroleum Transport",
    currentLocation: "Port of Singapore",
    destination: "Shanghai",
    lastUpdate: "2025-04-16T07:15:00Z",
    technical: {
      length: 274.0,
      breadth: 48.0,
      draught: 15.2,
      grossTonnage: 83562,
      netTonnage: 36547,
      deadweight: 115000,
      engineType: "Wärtsilä 7RT-flex82T",
      power: 31640,
      speed: 16,
      cargoCapacity: "130,000 DWT",
      fuelType: "MGO",
    },
    certificates: [
      {
        name: "Safety Management Certificate",
        issuer: "DNV-GL",
        issuedDate: "2023-06-05T00:00:00Z",
        expiryDate: "2028-06-04T00:00:00Z",
        status: "Valid",
      },
      {
        name: "International Ship Security Certificate",
        issuer: "DNV-GL",
        issuedDate: "2023-05-18T00:00:00Z",
        expiryDate: "2028-05-17T00:00:00Z",
        status: "Valid",
      },
    ],
    inspections: [
      {
        date: "2024-12-10T00:00:00Z",
        port: "Singapore",
        authority: "Tokyo MOU",
        deficiencies: 0,
        result: "Pass",
      },
    ],
    incidents: [],
    voyageHistory: [
      {
        departure: "Kuwait",
        arrival: "Singapore",
        departureDate: "2025-03-20T00:00:00Z",
        arrivalDate: "2025-04-15T00:00:00Z",
        duration: "26 days",
      },
    ],
  },
  {
    id: "3",
    name: "Nordic Prince",
    imo: "9654321",
    mmsi: "345678912",
    type: "Bulk Carrier",
    flag: "LR",
    built: 2020,
    status: "In Transit",
    owner: "Nordic Shipping Ltd.",
    currentLocation: "South Pacific Ocean",
    destination: "Melbourne",
    lastUpdate: "2025-04-16T06:45:00Z",
    technical: {
      length: 229.0,
      breadth: 32.3,
      draught: 14.5,
      grossTonnage: 44000,
      netTonnage: 28000,
      deadweight: 81600,
      engineType: "MAN B&W 6S60ME-C8",
      power: 14280,
      speed: 14.5,
      cargoCapacity: "81,600 DWT",
      fuelType: "VLSFO",
    },
    certificates: [
      {
        name: "Safety Management Certificate",
        issuer: "Lloyd's Register",
        issuedDate: "2024-03-12T00:00:00Z",
        expiryDate: "2029-03-11T00:00:00Z",
        status: "Valid",
      },
    ],
    inspections: [
      {
        date: "2025-02-05T00:00:00Z",
        port: "Vancouver",
        authority: "Paris MOU",
        deficiencies: 1,
        result: "Warning",
      },
    ],
    incidents: [],
    voyageHistory: [
      {
        departure: "Vancouver",
        arrival: "At Sea",
        departureDate: "2025-04-05T00:00:00Z",
        arrivalDate: "2025-04-16T00:00:00Z",
        duration: "11 days",
      },
    ],
  },
  {
    id: "4",
    name: "Mediterranean Queen",
    imo: "9543210",
    mmsi: "456789123",
    type: "Cruise Ship",
    flag: "MH",
    built: 2019,
    status: "In Port",
    owner: "Mediterranean Cruises",
    currentLocation: "Port of Barcelona",
    destination: "Naples",
    lastUpdate: "2025-04-16T05:20:00Z",
    technical: {
      length: 325.0,
      breadth: 47.0,
      draught: 8.8,
      grossTonnage: 142000,
      netTonnage: 84000,
      deadweight: 12500,
      engineType: "Azipod Electric Propulsion",
      power: 40000,
      speed: 22,
      cargoCapacity: "4,900 passengers",
      fuelType: "MGO",
    },
    certificates: [
      {
        name: "Safety Management Certificate",
        issuer: "RINA",
        issuedDate: "2023-10-25T00:00:00Z",
        expiryDate: "2028-10-24T00:00:00Z",
        status: "Valid",
      },
    ],
    inspections: [
      {
        date: "2025-03-18T00:00:00Z",
        port: "Barcelona",
        authority: "Paris MOU",
        deficiencies: 0,
        result: "Pass",
      },
    ],
    incidents: [
      {
        type: "Medical Emergency",
        date: "2024-12-15T00:00:00Z",
        location: "Mediterranean Sea",
        severity: "Low",
        description:
          "Passenger medical evacuation required. Ship diverted to nearest port for medical assistance.",
      },
    ],
    voyageHistory: [
      {
        departure: "Marseille",
        arrival: "Barcelona",
        departureDate: "2025-04-14T00:00:00Z",
        arrivalDate: "2025-04-15T00:00:00Z",
        duration: "1 day",
      },
    ],
  },
  {
    id: "5",
    name: "Arctic Voyager",
    imo: "9432109",
    mmsi: "567891234",
    type: "Tanker",
    flag: "SG",
    built: 2017,
    status: "Alert",
    owner: "Nordic Oil Transport",
    currentLocation: "Norwegian Sea",
    destination: "Oslo",
    lastUpdate: "2025-04-16T04:10:00Z",
    technical: {
      length: 250.0,
      breadth: 46.0,
      draught: 15.0,
      grossTonnage: 76000,
      netTonnage: 38000,
      deadweight: 115000,
      engineType: "Wärtsilä RT-flex96C",
      power: 34000,
      speed: 16.5,
      cargoCapacity: "115,000 DWT",
      fuelType: "VLSFO",
    },
    certificates: [
      {
        name: "Safety Management Certificate",
        issuer: "DNV-GL",
        issuedDate: "2023-04-20T00:00:00Z",
        expiryDate: "2028-04-19T00:00:00Z",
        status: "Valid",
      },
    ],
    inspections: [
      {
        date: "2024-11-30T00:00:00Z",
        port: "Rotterdam",
        authority: "Paris MOU",
        deficiencies: 4,
        result: "Detention",
      },
      {
        date: "2024-12-15T00:00:00Z",
        port: "Rotterdam",
        authority: "Paris MOU",
        deficiencies: 0,
        result: "Pass",
      },
    ],
    incidents: [
      {
        type: "Engine Failure",
        date: "2025-04-15T00:00:00Z",
        location: "Norwegian Sea",
        severity: "High",
        description:
          "Main engine failure reported. Ship operating on auxiliary power. Tug assistance requested. Repairs underway.",
      },
    ],
    voyageHistory: [
      {
        departure: "St. Petersburg",
        arrival: "At Sea",
        departureDate: "2025-04-10T00:00:00Z",
        arrivalDate: "2025-04-16T00:00:00Z",
        duration: "6 days",
      },
    ],
  },
  {
    id: "6",
    name: "Golden Horizon",
    imo: "9321098",
    mmsi: "678912345",
    type: "Container Ship",
    flag: "US",
    built: 2021,
    status: "In Transit",
    owner: "Horizon Shipping Lines",
    currentLocation: "East China Sea",
    destination: "Busan",
    lastUpdate: "2025-04-16T03:45:00Z",
  },
  {
    id: "7",
    name: "Blue Wave",
    imo: "9210987",
    mmsi: "789123456",
    type: "Cruise Ship",
    flag: "PA",
    built: 2015,
    status: "In Port",
    owner: "Blue Ocean Cruises",
    currentLocation: "Port of Miami",
    destination: "Nassau",
    lastUpdate: "2025-04-16T02:30:00Z",
  },
  {
    id: "8",
    name: "Global Trader",
    imo: "9109876",
    mmsi: "891234567",
    type: "Bulk Carrier",
    flag: "LR",
    built: 2014,
    status: "In Transit",
    owner: "Global Bulk Shipping",
    currentLocation: "Indian Ocean",
    destination: "Mumbai",
    lastUpdate: "2025-04-16T01:15:00Z",
  },
  {
    id: "9",
    name: "Emerald Fisher",
    imo: "9098765",
    mmsi: "912345678",
    type: "Fishing Vessel",
    flag: "US",
    built: 2018,
    status: "In Port",
    owner: "Atlantic Fishing Co.",
    currentLocation: "Port of Seattle",
    destination: "Bering Sea",
    lastUpdate: "2025-04-16T00:45:00Z",
  },
  {
    id: "10",
    name: "Caspian Voyager",
    imo: "8987654",
    mmsi: "123987456",
    type: "Tanker",
    flag: "SG",
    built: 2013,
    status: "Maintenance",
    owner: "Caspian Oil Transport",
    currentLocation: "Port of Dubai",
    destination: "N/A",
    lastUpdate: "2025-04-15T23:30:00Z",
  },
];

export async function searchShips(
  searchTerm,
  searchType = "name",
  filters = {}
) {
  await new Promise((resolve) => setTimeout(resolve, 800));
  const term = searchTerm.toLowerCase();
  let results = mockShips.filter((ship) => {
    let matchesSearch = false;

    if (searchType === "name") {
      matchesSearch = ship.name.toLowerCase().includes(term);
    } else if (searchType === "imo") {
      matchesSearch = ship.imo.toLowerCase().includes(term);
    } else if (searchType === "mmsi") {
      matchesSearch = ship.mmsi && ship.mmsi.toLowerCase().includes(term);
    }

    if (!matchesSearch) return false;
    if (
      filters.type &&
      filters.type !== "" &&
      !ship.type.toLowerCase().includes(filters.type.toLowerCase())
    ) {
      return false;
    }

    if (filters.flag && filters.flag !== "" && ship.flag !== filters.flag) {
      return false;
    }

    if (
      filters.status &&
      filters.status !== "" &&
      ship.status !== filters.status
    ) {
      return false;
    }

    return true;
  });
  return results;
}

export async function getShipDetails(id) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const ship = mockShips.find((ship) => ship.id === id);
  return ship || null;
}
