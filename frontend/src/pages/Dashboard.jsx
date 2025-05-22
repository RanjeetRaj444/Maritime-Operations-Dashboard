import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatCard from "../components/dashboard/StatCard";
import MarineTrafficChart from "../components/dashboard/MarineTrafficChart";
import FleetStatusChart from "../components/dashboard/FleetStatusChart";
import RecentShipsTable from "../components/dashboard/RecentShipsTable";
import WeatherWidget from "../components/dashboard/WeatherWidget";
import { fetchDashboardStats } from "../services/dashboardService";
import { FiAnchor, FiNavigation2, FiAlertTriangle } from "react-icons/fi";
import { GiCargoShip } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const data = await fetchDashboardStats();
        setStats(data);
      } catch (error) {
        console.error("Error loading dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);
  if (!isAuthenticated) {
    navigate("/login");
  }
  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      <WelcomeCard user={user} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Active Vessels"
          value={stats?.activeVessels || 0}
          change={+5}
          icon={<GiCargoShip className="h-6 w-6" />}
          color="primary"
        />
        <StatCard
          title="In Port"
          value={stats?.inPort || 0}
          change={-2}
          icon={<FiAnchor className="h-6 w-6" />}
          color="secondary"
        />
        <StatCard
          title="In Transit"
          value={stats?.inTransit || 0}
          change={+7}
          icon={<FiNavigation2 className="h-6 w-6" />}
          color="accent"
        />
        <StatCard
          title="Alerts"
          value={stats?.alerts || 0}
          change={-3}
          icon={<FiAlertTriangle className="h-6 w-6" />}
          color="error"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="card h-full">
            <h2 className="text-xl font-semibold mb-4">Marine Traffic</h2>
            <div className="h-80">
              <MarineTrafficChart data={stats?.trafficData || []} />
            </div>
          </div>
        </div>
        <div>
          <div className="card h-full">
            <h2 className="text-xl font-semibold mb-4">Fleet Status</h2>
            <div className="h-80 flex items-center justify-center">
              <FleetStatusChart data={stats?.fleetStatus || []} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Recent Ship Activity</h2>
            <RecentShipsTable ships={stats?.recentShips || []} />
          </div>
        </div>
        <div>
          <WeatherWidget data={stats?.weatherData || {}} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
