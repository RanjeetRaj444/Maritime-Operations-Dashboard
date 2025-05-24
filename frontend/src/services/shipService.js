const API_BASE =
  "https://maritime-operations-dashboard-backend.onrender.com/ships";

export async function searchShips(
  searchTerm,
  searchType = "name",
  filters = {}
) {
  const params = new URLSearchParams();

  if (searchTerm) {
    params.append("searchTerm", searchTerm);
    params.append("searchType", searchType);
  }
  if (filters.type) params.append("type", filters.type);
  if (filters.flag) params.append("flag", filters.flag);
  if (filters.status) params.append("status", filters.status);

  const url = `${API_BASE}?${params.toString()}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch ships");
  return await res.json();
}

export async function getShipDetails(id) {
  const res = await fetch(`${API_BASE}/${id}`);
  if (!res.ok) throw new Error("Failed to fetch ship details");
  return await res.json();
}
