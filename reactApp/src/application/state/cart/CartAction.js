import * as actionTypes from "../actionTypes"

export const addItemToCart = (item) => ({
    type: actionTypes.AddItemToCart,
    payload: item
})

export const deleteItemFromCart = (id) => ({
    type: actionTypes.DeleteItemFromCart,
    payload: id
})

export const emptyCart = () => ({
    type: actionTypes.EmptyCart
})

export const updateItemFromCart = (id,qty) =>({
    type: actionTypes.UpdateItemFromCart,
    payload: {
        id,
        qty: parseInt(qty)
    }
})


export const saveCartToDb = (item,id) => {

    return function(dispatch){
    window.fetch("http://localhost:9000/cart/api/additem", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({userid:id, cart:item})
    })
    .then(response => response.json())
    .then((response) =>{
        console.log("successfully added " + response )
    })
    .catch((err) =>{
        console.log("ERROR while adding Item")
    })
}
}

export const getUserCart = (userid) =>{

    return function(dispatch) {

        window.fetch("http://localhost:9000/cart/api/getUserCart",{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid})})
            .then(response => response.json())
            .then(response =>{

                dispatch(emptyCart())
                if(response){
                    for(const item of response.cart){
                    
                        dispatch(addItemToCart(item))
                    }
                }
            })
    }
}