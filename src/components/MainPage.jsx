import React from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLocation } from '../redux/actions';

const MainPage = () => {
  const [query, setQuery] = useState("")
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)

  const dispatch = useDispatch()
  const state = useSelector((state) => state.location[0])

  const handleInput = (e) => {
    console.log(e.target.value)
    setQuery(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(fetchLocation(query))
    setLatitude(state.lat)
    setLongitude(state.lon)
    console.log(longitude)
  }
  
  return (
   <Container>
     <Row>
       <Col>
          <Form onSubmit={handleSubmit}>
              <Form.Control type="search" value={query}  onChange={handleInput} placeholder="type and press Enter" />
          </Form>
       </Col>
     </Row>
   </Container>
  )
}

export default MainPage;
