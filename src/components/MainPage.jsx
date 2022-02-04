import React from 'react';
import './MainPage.css'
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLocation, fetchWeather } from '../redux/actions';

const MainPage = () => {
  const [query, setQuery] = useState("")
  // const [latitude, setLatitude] = useState(null)
  // const [longitude, setLongitude] = useState(null)

  const dispatch = useDispatch()
  const state = useSelector((state) => state.location[0])

  const latitude = useSelector((state) => state.location[0].lat)
  const longitude = useSelector((state) => state.location[0].lon)

  const temperature = useSelector((state) => state.weather.main.temp)
  const weather = useSelector((state) => state.weather.weather[0].main)
  const description = useSelector((state) => state.weather.weather[0].description)
  const country = useSelector((state) => state.weather.sys.country)
  const city = useSelector((state) => state.weather.name) 
  console.log(temperature)
  console.log(description)
  console.log(country)
  console.log(weather)
  console.log(city)
  const handleInput = (e) => {
    setQuery(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
   await dispatch(fetchLocation(query))

    // setLatitude(state.lat)
    // setLongitude(state.lon)

   await dispatch(fetchWeather(latitude, longitude))

  }
  
  return (
   <Container fluid className='main-page'>
     <Row>
       <Col md={5} className='mx-auto mt-4'>
          <Form onSubmit={handleSubmit}>
              <Form.Control id='location-input' type="search" value={query}  onChange={handleInput} placeholder="Search and press Enter" />
          </Form>
        
          
       </Col>
     </Row>
   </Container>
  )
}

export default MainPage;
