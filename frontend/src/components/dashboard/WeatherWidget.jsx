import {
  FiSun,
  FiCloud,
  FiCloudRain,
  FiCloudSnow,
  FiWind,
} from "react-icons/fi";

function WeatherWidget({ data }) {
  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "sunny":
        return <FiSun className="h-8 w-8 text-yellow-500" />;
      case "cloudy":
        return <FiCloud className="h-8 w-8 text-gray-500" />;
      case "rainy":
        return <FiCloudRain className="h-8 w-8 text-blue-500" />;
      case "snowy":
        return <FiCloudSnow className="h-8 w-8 text-blue-300" />;
      default:
        return <FiSun className="h-8 w-8 text-yellow-500" />;
    }
  };

  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-4">Weather Conditions</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Current</p>
            <p className="text-lg font-medium">{data.location || "Unknown"}</p>
          </div>
          {getWeatherIcon(data.condition)}
        </div>

        <div className="text-4xl font-bold">
          {data.temperature ? `${data.temperature}°C` : "N/A"}
        </div>

        <div className="flex items-center mt-2">
          <FiWind className="mr-2 text-gray-500" />
          <span>Wind: {data.windSpeed ? `${data.windSpeed} km/h` : "N/A"}</span>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-medium mb-2">Forecast</h3>
          <div className="grid grid-cols-3 gap-2">
            {(data.forecast || []).map((day, index) => (
              <div key={index} className="text-center">
                <p className="text-xs text-gray-500">{day.day}</p>
                <div className="my-1 flex justify-center">
                  {getWeatherIcon(day.condition)}
                </div>
                <p className="text-sm font-medium">{day.temp}°C</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherWidget;
