import React from 'react';
import { addToCart } from '../Redux/Shopping/shopping-action';
import {connect} from 'react-redux'

const SingleItem = ({product,addToCart}) => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-2"><img className='img-fluid' src={product.image} alt="" /></div>
                <div className="col-8">
                    <h5>{product.title}</h5>
                    <p>{product.id}</p>
                    <h5>${product.price}</h5>
                    <p>{product.description}</p>
                </div>
                <div className="col-2"><button onClick={()=>addToCart(product.id)} className='border border-danger px-4 rounded bg-white'>Add</button></div>
            </div>
            <hr />
            
        </div>
    );
};

const mapDispatchToProps=dispatch=>{
    return{
        addToCart:(id)=>dispatch(addToCart(id))
    }
}

export default connect(null,mapDispatchToProps)(SingleItem);