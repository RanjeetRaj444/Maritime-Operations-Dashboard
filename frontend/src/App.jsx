import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ShipSearch from "./pages/ShipSearch";
import ShipDetails from "./pages/ShipDetails";
import Login from "./pages/Login";
import MainLayout from "./components/layouts/MainLayout";
import { useTheme } from "./contexts/ThemeContext";
import { useAuth } from "./contexts/AuthContext";
import { useEffect } from "react";

function App() {
  const { darkMode } = useTheme();
  const { isAuthenticated, login } = useAuth();
  // console.log("isAuthenticated", isAuthenticated);
  useEffect(() => {
    // Auto-login for demo purposes
    // if (!isAuthenticated) {
    //   login({
    //     username: "captain_demo",
    //     name: "Captain Demo",
    //     role: "Fleet Manager",
    //   });
    // }
  }, [isAuthenticated, login]);

  return (
    <div className={` min-h-screen`}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="ship-search" element={<ShipSearch />} />
          <Route path="ship-details/:id" element={<ShipDetails />} />
          <Route
            path="*"
            element={
              <div className="text-center text-2xl">404 - Not Found</div>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
