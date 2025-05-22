import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import { useState } from 'react'

function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState)
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout