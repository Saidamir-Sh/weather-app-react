import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchLocation } from '../redux/actions';

const MainPage = () => {
  const [query, setQuery] = useState("")
  const dispatch = useDispatch()
  const state = useSelector((state) => state.location)

  const handleInput = (e) => {
    console.log(e.target.value)
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(fetchLocation(query))
  }
  
  return (
   <Container>
     <Row>
       <Col>
          <Form onSubmit={handleSubmit}>
              <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
       </Col>
     </Row>
   </Container>
  )
}

export default MainPage;
