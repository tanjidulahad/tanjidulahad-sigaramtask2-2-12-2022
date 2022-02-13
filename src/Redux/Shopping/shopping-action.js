import * as actionTypes from './shopping-types'

export const addToCart=(itemId)=>{
    return{
        type: actionTypes.ADD_TO_CART,
        payload:{
            id: itemId
        }
    }
}

export const removeFromCart=(itemId)=>{
    return{
        type: actionTypes.REMOVE_FROM_CART,
        payload:{
            id:itemId
        }
    }
}

export const adjustQty= (itemID,value)=>{
    return {
        type: actionTypes.ADJUST_QTY,
        payload:{
            id: itemID,
            qty:value
        }
    }
}
