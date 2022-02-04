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
  const iconID = useSelector((state) => state.weather.weather[0].icon)
 
  const handleInput = (e) => {
    setQuery(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
   await dispatch(fetchLocation(query))

   await dispatch(fetchWeather(latitude, longitude))

  }
  
  return (
   <Container fluid className='main-page'>
     <Row className='d-flex flex-column align-items-center justify-content-center py-5'>
       <Col md={5} className='mx-auto mt-4'>
          <Form onSubmit={handleSubmit}>
              <Form.Control id='location-input' type="search" value={query}  onChange={handleInput} placeholder="Search and press Enter" />
          </Form>
       </Col>
       <Col md={6} className='mx-auto  d-flex align-items-center flex-column my-5'>
            <h2 className='city'>{city}, {country}</h2>
            <h1 className='temperature'>{temperature} K</h1>
            <img  src={`https://openweathermap.org/img/wn/${iconID}@4x.png`} alt='weather icon' />
            <h3 className='weather'>{weather}</h3>
            <p className='description'>{description}</p>       
       </Col>
     </Row>
   </Container>
  )
}

export default MainPage;
