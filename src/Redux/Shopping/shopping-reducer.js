import * as actionTypes from './shopping-types'
import product from '../../components/Products/Products'

const INITIAL_STATE={
    products: product,
    cart:[]
}
const shopReducer=(state=INITIAL_STATE, action)=>{
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            //get the items data
            const item=state.products.find(product=>product.id===action.payload.id)
            //if the items alreary in the cart
            const inCart=state.cart.find(item=>item.id===action.payload.id ? true : false)
            return {
                ...state,
                cart: inCart ? state.cart.map(item=>item.id===action.payload.id ? {...item,qty:item.qty+1}:item) : [...state.cart,{...item,qty:1}]
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart:state.cart.filter(item=>item.id !== action.payload.id)
            }
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(item=>item.id===action.payload.id ? {...item,qty: action.payload.qty}: item)
            }
        // case actionTypes.LOAD_CURRENT_ITEM:
        //     return {}
        default:
            return state
    }
}

export default shopReducer;