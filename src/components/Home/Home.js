import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SingleItem from '../SingleItem';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

const Home = ({ products, cart }) => {
    const [totalPrice,setTotalPrice]=useState(0)
    const [totalItems,setTotalItems]=useState(0)
    useEffect(()=>{
      let totalpri=0;
      let totalitm=0;
      cart.forEach(item => {
        totalitm=totalitm+item.qty;
      totalpri=totalpri+item.price*item.qty
      });
      setTotalPrice(totalpri);
      setTotalItems(totalitm)
    },[cart,totalPrice,totalPrice])
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
          <div className="col-6">
            <h3>All Items</h3>
            <hr />
            {
              products.map(product => <SingleItem product={product}></SingleItem>)
            }
          </div>
          <div className="col-4">
            <h3>My Cart</h3>
            <hr />
            {
              cart.map(item => <Cart product={item}></Cart>)
            }
            <div>
              <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
            </div>
            <div className='text-center bg-danger text-white'>
              {cart.length ? <Link to='/cart'>Checkout</Link>:<p></p>}
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
      products: state.shop.products,
      cart: state.shop.cart
    }
  }

export default connect(mapStateToProps)(Home);