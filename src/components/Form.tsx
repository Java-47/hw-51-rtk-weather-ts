import { stringify } from 'querystring';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../actionFunctions/fetchWeather';
import { useAppDispatch } from '../store/configureStore';

const Form = () => {
    const dispatch = useAppDispatch();

    const [city, setCity] = useState('');

    const handleClick = () => {
        dispatch(fetchWeather(city));
        setCity('');
    }

    const handleChange = (e:React.FormEvent<HTMLInputElement>) => {

        setCity(e.currentTarget.value);
    }

    return (
        <div>
            <input
                onChange={handleChange}
                type='text'
                placeholder='City'
                value={city}
            />
            <button onClick={handleClick}>Get weather</button>
        </div>
    )

}

export default Form