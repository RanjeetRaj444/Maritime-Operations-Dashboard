import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchShips } from "../services/shipService";
import { FiSearch, FiFilter } from "react-icons/fi";

function ShipSearch() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("name");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    type: "",
    flag: "",
    status: "",
  });

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setLoading(true);
    try {
      const searchResults = await searchShips(searchTerm, searchType, filters);
      setResults(searchResults);
    } catch (error) {
      console.error("Error searching ships:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  const handleViewDetails = (shipId) => {
    navigate(`/ship-details/${shipId}`);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="card">
        <h1 className="text-2xl font-bold mb-6">Ship Search</h1>

        <form onSubmit={handleSearch} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Enter ship name, IMO number, or MMSI..."
                  className="input pl-10"
                  required
                />
              </div>
            </div>

            <div className="w-full md:w-48">
              <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className="input"
              >
                <option value="name">Ship Name</option>
                <option value="imo">IMO Number</option>
                <option value="mmsi">MMSI</option>
              </select>
            </div>

            <button
              type="button"
              onClick={toggleFilters}
              className="btn bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 md:w-auto w-full"
            >
              <FiFilter className="mr-2 inline" />
              Filters
            </button>

            <button
              type="submit"
              className="btn btn-primary md:w-auto w-full"
              disabled={loading}
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>

          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700 animate-slideIn">
              <div>
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Ship Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={filters.type}
                  onChange={handleFilterChange}
                  className="input"
                >
                  <option value="">All Types</option>
                  <option value="container">Container Ship</option>
                  <option value="tanker">Tanker</option>
                  <option value="bulk">Bulk Carrier</option>
                  <option value="cruise">Cruise Ship</option>
                  <option value="fishing">Fishing Vessel</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="flag"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Flag State
                </label>
                <select
                  id="flag"
                  name="flag"
                  value={filters.flag}
                  onChange={handleFilterChange}
                  className="input"
                >
                  <option value="">All Flags</option>
                  <option value="US">United States</option>
                  <option value="PA">Panama</option>
                  <option value="LR">Liberia</option>
                  <option value="MH">Marshall Islands</option>
                  <option value="SG">Singapore</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={filters.status}
                  onChange={handleFilterChange}
                  className="input"
                >
                  <option value="">All Status</option>
                  <option value="In Port">In Port</option>
                  <option value="In Transit">In Transit</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Alert">Alert</option>
                </select>
              </div>
            </div>
          )}
        </form>
      </div>

      {results.length > 0 && (
        <div className="card animate-fadeIn">
          <h2 className="text-xl font-semibold mb-4">Search Results</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                  >
                    Ship Name
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                  >
                    IMO Number
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                  >
                    Flag
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                  >
                    Built
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {results.map((ship) => (
                  <tr
                    key={ship.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900 dark:text-white">
                        {ship.name}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-gray-500 dark:text-gray-400">
                        {ship.imo}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-gray-500 dark:text-gray-400">
                        {ship.type}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-gray-500 dark:text-gray-400">
                          {ship.flag}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-gray-500 dark:text-gray-400">
                        {ship.built}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right">
                      <button
                        onClick={() => handleViewDetails(ship.id)}
                        className="btn btn-primary py-1 px-3 text-sm"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {searchTerm && results.length === 0 && !loading && (
        <div className="card text-center py-8 animate-fadeIn">
          <p className="text-gray-500 dark:text-gray-400">
            No ships found matching your search criteria.
          </p>
        </div>
      )}
    </div>
  );
}

export default ShipSearch;
