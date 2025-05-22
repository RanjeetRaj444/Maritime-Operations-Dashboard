import { FiArrowUp, FiArrowDown } from "react-icons/fi";

function StatCard({ title, value, change, icon, color }) {
  const getColorClass = () => {
    const colorMap = {
      primary:
        "bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200",
      secondary:
        "bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200",
      accent:
        "bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-200",
      success:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      warning:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      error: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    };
    return colorMap[color] || colorMap.primary;
  };

  const getChangeColor = () => {
    if (change > 0) return "text-success";
    if (change < 0) return "text-error";
    return "text-gray-500 dark:text-gray-400";
  };

  return (
    <div className="card">
      <div className="flex items-center">
        <div className={`p-3 rounded-full ${getColorClass()}`}>{icon}</div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
            {title}
          </h3>
          <div className="flex items-center">
            <p className="text-2xl font-semibold">{value}</p>
            <div className={`ml-2 flex items-center ${getChangeColor()}`}>
              {change > 0 ? (
                <>
                  <FiArrowUp className="h-4 w-4" />
                  <span className="ml-1 text-sm">+{change}</span>
                </>
              ) : change < 0 ? (
                <>
                  <FiArrowDown className="h-4 w-4" />
                  <span className="ml-1 text-sm">{change}</span>
                </>
              ) : (
                <span className="ml-1 text-sm">0</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatCard;
