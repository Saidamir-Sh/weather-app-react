export const FETCH_LOCATION = 'FETCH_LOCATION'
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





// http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit={limit}&appid={API key}