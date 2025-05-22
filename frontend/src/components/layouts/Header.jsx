import { useAuth } from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/ThemeContext";
import {
  FiMenu,
  FiMoon,
  FiSun,
  FiBell,
  FiSearch,
  FiLogOut,
} from "react-icons/fi"; // Add FiLogOut

function Header({ toggleSidebar }) {
  const { user, logout } = useAuth(); // Add logout

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm z-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              type="button"
              className="text-gray-500 dark:text-gray-400 lg:hidden"
              onClick={toggleSidebar}
            >
              <FiMenu className="h-6 w-6" />
            </button>
            <div className="ml-4 lg:hidden">
              <span className="text-primary-900 dark:text-primary-100 font-bold">
                Marine Dashboard
              </span>
            </div>
          </div>

          <div className="hidden md:block flex-1 max-w-md mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Quick search..."
                className="input pl-10"
              />
            </div>
          </div>

          <div className="flex items-center">
            <button className="ml-3 p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
              <FiBell className="h-6 w-6" />
            </button>

            <div className="ml-3 relative flex items-center">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center text-white font-medium">
                  {user?.name.charAt(0)}
                </div>
                <span className="ml-2 font-medium text-gray-700 dark:text-gray-300 hidden md:block">
                  {user?.name}
                </span>
              </div>
              <button
                className="ml-3 p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
                onClick={logout}
                title="Logout"
              >
                <FiLogOut className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
