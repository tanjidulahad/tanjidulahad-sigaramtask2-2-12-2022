import logo from './logo.svg';
import './App.css';
import SingleItem from './components/SingleItem';
import {useState,useEffect} from 'react';

function App() {
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>setProducts(data))
  },[])

  return (
    <div>
      <h1 className='text-center'>Shopping Website</h1>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <h3>Categories</h3>
            <hr />
            <p className='bg-danger rounded text-white'>All Items</p>
          </div>
          <div className="col-8">
            <h3>All Items</h3>
            <hr />
            {
              products.map(product=><SingleItem product={product}></SingleItem>)
            }            
          </div>
          <div className="col-2">
            <h3>My Cart</h3>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
