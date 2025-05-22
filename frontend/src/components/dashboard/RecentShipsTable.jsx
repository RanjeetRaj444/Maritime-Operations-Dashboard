import { useState } from "react";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

function RecentShipsTable({ ships }) {
  const [sortField, setSortField] = useState("lastUpdate");
  const [sortDirection, setSortDirection] = useState("desc");

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const sortedShips = [...ships].sort((a, b) => {
    if (sortDirection === "asc") {
      return a[sortField] > b[sortField] ? 1 : -1;
    } else {
      return a[sortField] < b[sortField] ? 1 : -1;
    }
  });

  const getStatusClass = (status) => {
    const statusMap = {
      "In Port":
        "bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200",
      "In Transit":
        "bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-200",
      Maintenance:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      Alert: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    };
    return statusMap[status] || "";
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort("name")}
            >
              Ship Name
              {sortField === "name" && (
                <span className="ml-1">
                  {sortDirection === "asc" ? "↑" : "↓"}
                </span>
              )}
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort("imo")}
            >
              IMO
              {sortField === "imo" && (
                <span className="ml-1">
                  {sortDirection === "asc" ? "↑" : "↓"}
                </span>
              )}
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort("type")}
            >
              Type
              {sortField === "type" && (
                <span className="ml-1">
                  {sortDirection === "asc" ? "↑" : "↓"}
                </span>
              )}
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort("status")}
            >
              Status
              {sortField === "status" && (
                <span className="ml-1">
                  {sortDirection === "asc" ? "↑" : "↓"}
                </span>
              )}
            </th>
            <th
              scope="col"
              className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort("lastUpdate")}
            >
              Last Update
              {sortField === "lastUpdate" && (
                <span className="ml-1">
                  {sortDirection === "asc" ? "↑" : "↓"}
                </span>
              )}
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
          {sortedShips.map((ship) => (
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
                <span
                  className={`px-2 py-1 text-xs rounded-full ${getStatusClass(
                    ship.status
                  )}`}
                >
                  {ship.status}
                </span>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400">
                {new Date(ship.lastUpdate).toLocaleString()}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-right">
                <Link
                  to={`/ship-details/${ship.id}`}
                  className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  <FiExternalLink className="inline h-5 w-5" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentShipsTable;
