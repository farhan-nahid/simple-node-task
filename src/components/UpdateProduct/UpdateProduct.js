import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const nameRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/product/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);
  console.log(product);

  const handelUpdate = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const quantity = quantityRef.current.value;
    console.log(name, price, quantity);
  };

  return (
    <Container className='mt-5 pt-5 text-center'>
      <h1 className='mt-5 pt-5'>Update Product id: {id}</h1>
      <form
        onSubmit={handelUpdate}
        className='p-5 border rounded shadow mt-5 w-50 mx-auto'
      >
        <input
          placeholder='Product Name'
          className='form-control'
          type='text'
          defaultValue={product.name || ''}
          ref={nameRef}
        />
        <input
          placeholder='Product Price'
          className='form-control my-3'
          type='number'
          defaultValue={product.price || ''}
          ref={priceRef}
        />
        <input
          placeholder='Product Quantity'
          className='form-control my-3'
          type='number'
          defaultValue={product.quantity || ''}
          ref={quantityRef}
        />
        <input
          type='submit'
          value='Update'
          className='btn btn-primary d-block'
        />
      </form>
    </Container>
  );
};

export default UpdateProduct;
