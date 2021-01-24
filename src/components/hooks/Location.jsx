import React, { useEffect, useState } from "react"

export default () => {

  const [location, setLocation] = useState({})

  useEffect(() => {
    navigator.geolocation.watchPosition(getPosition)

  }, [])

  function getPosition({ coords }) {
    const { latitude, longitude } = coords

    setLocation({latitude, longitude})
  }

  return (
    <div className="container mt-5">
      <h3>Latitude: {location.latitude}</h3>
      <h3>Longitude: {location.longitude}</h3>
    </div>
  )
}