import React from 'react'
import { useSelector } from 'react-redux'
import messageReducer from '../reducers/messageReducer'
import weatherReducer from '../reducers/weatherReducer'
import { RootState } from '../store/configureStore'

const Weather = () => {
  const message = useSelector<RootState, ReturnType<typeof messageReducer>>(state => state.message);
  const info = useSelector<RootState, ReturnType<typeof weatherReducer>>(state => state.weatherInfo);


  return (
    <div className='infoWeath'>
      {!message &&
        <div>
          <p>Location: {info.country}, {info.city}</p>
          <p>Temp: {info.temp}</p>
          <p>Pressure: {info.pressure}</p>
          <p>Sunset: {new Date(info.sunset! * 1000).toLocaleTimeString()}</p>
        </div>}
      <p>{message}</p>
    </div>
  )

}

export default Weather