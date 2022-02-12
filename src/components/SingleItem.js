import React from 'react';

const SingleItem = ({product}) => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-2"><img className='img-fluid' src={product.image} alt="" /></div>
                <div className="col-8">
                    <h5>{product.title}</h5>
                    <h5>{product.price}</h5>
                    <p>{product.description}</p>
                </div>
                <div className="col-2"><button className='border border-danger px-4 rounded bg-white'>Add</button></div>
            </div>
            <hr />
            
        </div>
    );
};

export default SingleItem;