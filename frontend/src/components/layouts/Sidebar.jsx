import { NavLink } from 'react-router-dom'
import { FiHome, FiSearch, FiBarChart2, FiSettings, FiAnchor, FiX } from 'react-icons/fi'
import { useAuth } from '../../contexts/AuthContext'

function Sidebar({ isOpen, toggleSidebar }) {
  const { user } = useAuth()
  
  const navigation = [
    { name: 'Dashboard', icon: FiHome, path: '/' },
    { name: 'Ship Search', icon: FiSearch, path: '/ship-search' },
    { name: 'Analytics', icon: FiBarChart2, path: '/analytics' },
    { name: 'Settings', icon: FiSettings, path: '/settings' }
  ]

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside 
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-primary-900 text-white transition duration-300 ease-in-out lg:translate-x-0 lg:relative lg:z-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-primary-800">
          <div className="flex items-center">
            <FiAnchor className="h-8 w-8 text-secondary-400" />
            <span className="ml-2 text-xl font-bold">Marine Dashboard</span>
          </div>
          <button 
            className="lg:hidden"
            onClick={toggleSidebar}
          >
            <FiX className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-4 border-b border-primary-800">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-secondary-500 flex items-center justify-center text-white font-medium">
              {user?.name.charAt(0)}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{user?.name}</p>
              <p className="text-xs text-primary-300">{user?.role}</p>
            </div>
          </div>
        </div>

        <nav className="mt-4 px-2">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `
                    flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors
                    ${isActive 
                      ? 'bg-primary-800 text-white' 
                      : 'text-primary-300 hover:bg-primary-800 hover:text-white'}
                  `}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar