import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:5000/all-products')
      .then((res) => setProducts(res.data));
  }, []);

  const handleDelete = (id) => {
    const wantDelete = window.confirm('Are You Sure?');
    if (wantDelete) {
      axios.delete(`http://localhost:5000/product/${id}`).then((res) => {
        if (res.status === 200) {
          const newProducts = products.filter((pd) => pd._id !== id);
          setProducts(newProducts);
          alert('Product Deleted');
        } else {
          alert('Something Went wrong');
        }
      });
    }
  };

  return (
    <Container className='mt-5 text-center pt-5'>
      <h1 className='mb-5'>This is Manage Product</h1>
      {products.length ? (
        <>
          {products.map((pd) => (
            <Card key={pd._id} className='mt-3 w-50 mx-auto p-2 shadow rounded'>
              <h3>Name: {pd.name}</h3>
              <h3>Price: {pd.price}</h3>
              <h3>Quantity: {pd.quantity}</h3>
              <Button
                variant='success'
                className='mb-2'
                onClick={() => navigate(`/update-product/${pd._id}`)}
              >
                Update
              </Button>
              <Button variant='danger' onClick={() => handleDelete(pd._id)}>
                Delete
              </Button>
            </Card>
          ))}
        </>
      ) : (
        <Spinner animation='border' />
      )}
    </Container>
  );
};

export default ManageProduct;
