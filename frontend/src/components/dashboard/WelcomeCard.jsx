import { FiClock } from 'react-icons/fi'

function WelcomeCard({ user }) {
  const currentTime = new Date()
  const hours = currentTime.getHours()
  
  let greeting = 'Good evening'
  if (hours < 12) {
    greeting = 'Good morning'
  } else if (hours < 18) {
    greeting = 'Good afternoon'
  }

  const formatDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    return currentTime.toLocaleDateString(undefined, options)
  }

  return (
    <div className="card bg-gradient-to-r from-primary-900 to-primary-700 text-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">{greeting}, {user?.name}</h1>
          <p className="text-primary-100">
            Welcome back to your marine dashboard. Here's what's happening today.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center">
          <FiClock className="mr-2" />
          <span>{formatDate()}</span>
        </div>
      </div>
    </div>
  )
}

export default WelcomeCard