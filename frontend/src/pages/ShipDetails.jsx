import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getShipDetails } from '../services/shipService'
import { FiArrowLeft, FiAnchor, FiFlag, FiCalendar, FiUsers, FiMapPin, FiNavigation, FiAlertCircle } from 'react-icons/fi'

function ShipDetails() {
  const { id } = useParams()
  const [ship, setShip] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('general')

  useEffect(() => {
    const fetchShipDetails = async () => {
      try {
        const details = await getShipDetails(id)
        setShip(details)
      } catch (error) {
        console.error('Error fetching ship details:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchShipDetails()
  }, [id])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  if (!ship) {
    return (
      <div className="card text-center py-8">
        <h2 className="text-xl font-semibold mb-2">Ship Not Found</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">The ship you're looking for could not be found.</p>
        <Link to="/ship-search" className="btn btn-primary">
          <FiArrowLeft className="mr-2 inline" />
          Back to Search
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex items-center justify-between">
        <Link to="/ship-search" className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 flex items-center">
          <FiArrowLeft className="mr-2" />
          Back to Search
        </Link>
        
        <div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium
            ${ship.status === 'In Port' ? 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-200' : 
              ship.status === 'In Transit' ? 'bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-200' :
              ship.status === 'Maintenance' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
              'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
            }`}
          >
            {ship.status}
          </span>
        </div>
      </div>
      
      <div className="card">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold">{ship.name}</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              IMO: {ship.imo} | MMSI: {ship.mmsi}
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated</p>
            <p className="font-medium">{new Date(ship.lastUpdate).toLocaleString()}</p>
          </div>
        </div>
      </div>
      
      <div className="card">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex space-x-6">
            <button
              className={`pb-4 px-1 text-sm font-medium border-b-2 ${
                activeTab === 'general' 
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('general')}
            >
              General Information
            </button>
            <button
              className={`pb-4 px-1 text-sm font-medium border-b-2 ${
                activeTab === 'technical' 
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('technical')}
            >
              Technical Details
            </button>
            <button
              className={`pb-4 px-1 text-sm font-medium border-b-2 ${
                activeTab === 'safety' 
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('safety')}
            >
              Safety Records
            </button>
          </nav>
        </div>
        
        <div className="mt-6">
          {activeTab === 'general' && (
            <div className="animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Ship Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200">
                        <FiAnchor className="h-5 w-5" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Ship Type</p>
                        <p className="font-medium">{ship.type}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-2 rounded-full bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-200">
                        <FiFlag className="h-5 w-5" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Flag</p>
                        <p className="font-medium">{ship.flag}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-2 rounded-full bg-accent-100 dark:bg-accent-900 text-accent-800 dark:text-accent-200">
                        <FiCalendar className="h-5 w-5" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Year Built</p>
                        <p className="font-medium">{ship.built}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-2 rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                        <FiUsers className="h-5 w-5" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Owner/Operator</p>
                        <p className="font-medium">{ship.owner}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Current Status</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="p-2 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200">
                        <FiMapPin className="h-5 w-5" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Current Location</p>
                        <p className="font-medium">{ship.currentLocation}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-2 rounded-full bg-secondary-100 dark:bg-secondary-900 text-secondary-800 dark:text-secondary-200">
                        <FiNavigation className="h-5 w-5" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Destination</p>
                        <p className="font-medium">{ship.destination || 'Not reported'}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="p-2 rounded-full bg-accent-100 dark:bg-accent-900 text-accent-800 dark:text-accent-200">
                        <FiAlertCircle className="h-5 w-5" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Current Status</p>
                        <p className="font-medium">{ship.status}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Recent Voyage History</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Departure
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Arrival
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Departure Date
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Arrival Date
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Duration
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      {(ship.voyageHistory || []).map((voyage, index) => (
                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="font-medium">{voyage.departure}</div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="font-medium">{voyage.arrival}</div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-gray-500 dark:text-gray-400">
                              {new Date(voyage.departureDate).toLocaleDateString()}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-gray-500 dark:text-gray-400">
                              {new Date(voyage.arrivalDate).toLocaleDateString()}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-gray-500 dark:text-gray-400">{voyage.duration}</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'technical' && (
            <div className="animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Dimensions</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-gray-500 dark:text-gray-400">Length Overall</span>
                      <span className="font-medium">{ship.technical?.length || 'N/A'} m</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-gray-500 dark:text-gray-400">Breadth</span>
                      <span className="font-medium">{ship.technical?.breadth || 'N/A'} m</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-gray-500 dark:text-gray-400">Draught</span>
                      <span className="font-medium">{ship.technical?.draught || 'N/A'} m</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-gray-500 dark:text-gray-400">Gross Tonnage</span>
                      <span className="font-medium">{ship.technical?.grossTonnage || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-gray-500 dark:text-gray-400">Net Tonnage</span>
                      <span className="font-medium">{ship.technical?.netTonnage || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-500 dark:text-gray-400">Deadweight</span>
                      <span className="font-medium">{ship.technical?.deadweight || 'N/A'} t</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Propulsion & Capacity</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-gray-500 dark:text-gray-400">Engine Type</span>
                      <span className="font-medium">{ship.technical?.engineType || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-gray-500 dark:text-gray-400">Power</span>
                      <span className="font-medium">{ship.technical?.power || 'N/A'} kW</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-gray-500 dark:text-gray-400">Service Speed</span>
                      <span className="font-medium">{ship.technical?.speed || 'N/A'} knots</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-gray-500 dark:text-gray-400">Cargo Capacity</span>
                      <span className="font-medium">{ship.technical?.cargoCapacity || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-500 dark:text-gray-400">Fuel Type</span>
                      <span className="font-medium">{ship.technical?.fuelType || 'N/A'}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Classification & Certificates</h3>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Certificate
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Issuer
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Issued Date
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Expiry Date
                        </th>
                        <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                      {(ship.certificates || []).map((cert, index) => (
                        <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="font-medium">{cert.name}</div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-gray-500 dark:text-gray-400">{cert.issuer}</div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-gray-500 dark:text-gray-400">
                              {new Date(cert.issuedDate).toLocaleDateString()}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="text-gray-500 dark:text-gray-400">
                              {new Date(cert.expiryDate).toLocaleDateString()}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              cert.status === 'Valid' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                                : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                            }`}>
                              {cert.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'safety' && (
            <div className="animate-fadeIn">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Port State Control Inspections</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Date
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Port
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Authority
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Deficiencies
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Result
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {(ship.inspections || []).map((inspection, index) => (
                          <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                            <td className="px-4 py-4 whitespace-nowrap">
                              <div className="text-gray-500 dark:text-gray-400">
                                {new Date(inspection.date).toLocaleDateString()}
                              </div>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                              <div className="font-medium">{inspection.port}</div>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                              <div className="text-gray-500 dark:text-gray-400">{inspection.authority}</div>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                              <div className="text-gray-500 dark:text-gray-400">{inspection.deficiencies}</div>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap">
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                inspection.result === 'Pass' 
                                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                                  : inspection.result === 'Warning'
                                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                              }`}>
                                {inspection.result}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Incident History</h3>
                  
                  {ship.incidents && ship.incidents.length > 0 ? (
                    <div className="space-y-4">
                      {ship.incidents.map((incident, index) => (
                        <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">{incident.type}</span>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              incident.severity === 'Low' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                                : incident.severity === 'Medium'
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                                : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                            }`}>
                              {incident.severity} Severity
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                            {new Date(incident.date).toLocaleDateString()} - {incident.location}
                          </p>
                          <p className="text-sm">{incident.description}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 dark:text-gray-400">No incidents reported for this vessel.</p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ShipDetails