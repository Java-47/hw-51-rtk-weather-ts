import { putMessage } from "../reducers/messageReducer"
import { putWeatherInfo } from "../reducers/weatherReducer";
import { AppDispatch } from "../store/configureStore";
import { api_key, base_url } from "../units/constants";


export const fetchWeather = (city:string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(putMessage('Pending...'));
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
            const data = await response.json();
            dispatch(putMessage(null))
            dispatch(putWeatherInfo(data));
        } catch (e) {
            console.log(e);
            dispatch(putMessage('Enter correct city name'));
        }
    }
}

// export const fetchWeather = city => {
//     return dispatch => {
//         dispatch(putMessage('Pending...'));
//         fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
//             .then(response => response.json())
//             .then(data => {
//                 const weatherInfo = {
//                     temp: data.main.temp,
//                     city: data.name,
//                     country: data.sys.country,
//                     pressure: data.main.pressure,
//                     sunset: data.sys.sunset,
//                 }
//                 dispatch(putMessage(null))
//                 dispatch(putWeatherInfo(weatherInfo));
//             })
//             .catch(e => {
//                 console.log(e);
//                 dispatch(putMessage('Enter correct city name'));
//             })
//     }
// }