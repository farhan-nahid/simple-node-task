import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container className='mt-5 pt-5'>
      <h1 className='text-danger mt-5 pt-5'>Route Not Found</h1>
    </Container>
  );
};

export default NotFound;
