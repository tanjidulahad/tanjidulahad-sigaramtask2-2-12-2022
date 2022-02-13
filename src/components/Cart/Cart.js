import React from 'react';
import { adjustQty } from '../../Redux/Shopping/shopping-action';
import { connect } from 'react-redux'

const Cart = ({product,adjustQty}) => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-9">
                    <h5>{product.title}</h5>
                    <p>${product.price}</p>
                </div>
                <div className="col-3">
                    <div className="border border-danger d-flex justify-content-between px-1">
                    <div onClick={()=>adjustQty(product.id,product.qty-1)}>-</div><div>{product.qty}</div><div onClick={()=>adjustQty(product.id,product.qty+1)}>+</div>
                    </div>                    
                </div>
            </div>
            
        </div>
    );
};

const mapDispatchToProps=dispatch=>{
    return{
        adjustQty:(id,value)=>dispatch(adjustQty(id,value))
    }
}
export default connect(null,mapDispatchToProps)(Cart);