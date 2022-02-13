import React from 'react';
import { connect } from 'react-redux'
import { adjustQty } from '../../Redux/Shopping/shopping-action';
const CartPage = ({ cart,adjustQty }) => {
    return (
        <div className='container'>
            <div className="row">
                <h3>Review Your Order</h3>
                <hr />
                {
                    cart.map(item => <>
                    <div className="col-6 d-flex">
                    <img className='img-fluid w-25' src={item.image} alt="" />
                        <h5>{item.title}</h5>
                        <p>${item.price}</p>
                    </div>
                        <div className="col-1">
                            <div className="border border-danger d-flex justify-content-between px-1">
                                <div onClick={()=>adjustQty(item.id,item.qty-1)}>-</div><div>{item.qty}</div><div onClick={()=>adjustQty(item.id,item.qty+1)}>+</div>
                            </div>
                        </div>
                        <hr />
                    </>)
                }
            </div>

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        adjustQty:(id,value)=>dispatch(adjustQty(id,value))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartPage);