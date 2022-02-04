export const FETCH_LOCATION = 'FETCH_LOCATION'
export const FETCH_WEATHER = 'FETCH_WEATHER'
export const API_KEY = '7340a641a93f6db8387533e0d1700d93'

export const fetchLocation = (query) => {
    return async (dispatch) => {
        try {
            let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=${1}&appid=${API_KEY}`)
            if(response.ok) {
                const data = await response.json()
                dispatch({
                    type: FETCH_LOCATION,
                    payload: data
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const fetchWeather = (lat, lon) => {
    return async (dispatch) => {
        try {
            let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
            if(response.ok) {
                const data = await response.json()
                console.log(data)
                dispatch({
                    type: FETCH_WEATHER,
                    payload: data
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}





// http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit={limit}&appid={API key}

// http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={API%20key}

// http://api.openweathermap.org/data/2.5/weather?lat=51.5073219&lon=-0.1276474&appid=7340a641a93f6db8387533e0d1700d93