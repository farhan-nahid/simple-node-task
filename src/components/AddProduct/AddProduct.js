import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios.post('http://localhost:5000/add-products', data).then((res) => {
      if (res.status === 200) {
        reset();
        alert('Product Added In Our Database');
      } else {
        alert('Something Went wrong!!. Please try again later');
      }
    });
  };

  return (
    <Container className='mt-5 pt-5 text-center'>
      <h1>This is Add Product</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='p-5 border rounded shadow mt-5 w-50 mx-auto'
      >
        <input
          placeholder='Product Name'
          {...register('name', { required: true })}
          className='form-control'
          type='text'
        />
        {errors.name && (
          <span className='text-danger'>This field is required</span>
        )}
        <input
          placeholder='Product Price'
          {...register('price', { required: true })}
          className='form-control my-3'
          type='number'
        />
        {errors.price && (
          <span className='text-danger'>This field is required</span>
        )}
        <input
          placeholder='Product Quantity'
          {...register('quantity', { required: true })}
          className='form-control my-3'
          type='number'
        />
        {errors.quantity && (
          <span className='text-danger'>This field is required</span>
        )}

        <input type='submit' className='btn btn-primary d-block' />
      </form>
    </Container>
  );
};

export default AddProduct;
