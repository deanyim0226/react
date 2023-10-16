import * as actionTypes from "../actionTypes"

export const addCartToOrder = (item) => ({
    type: actionTypes.AddCartToRecentOrder,
    payload: item
})

export const deleteOrder = (id) =>({
    type: actionTypes.DeleteRecentOrder,
    payload: id
})
export const emptyOrder = () =>({
    type: actionTypes.EmptyOrder
})

export const deleteOrderFromDb = (orderid) =>{
    console.log("delete order from db is called")
    return function(dispatch){

        window.fetch("http://localhost:9000/order/api/delete",{
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({orderid:orderid})
        })
        .then(response =>response.json())
        .then((response) =>{
            //dispatch()
            console.log("successfully deleted order from dm " + response)
        })
        .catch((err)=>{
            console.log("error while deleting order from db " + err)
        })
    }
}

export const getOrderFromDb = (userid) =>{

    return function(dispatch){

        window.fetch("http://localhost:9000/order/api/get",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid})
        })
        .then(response => response.json())
        .then((response) =>{
            console.log("successfully retrieved order from db " + response)
            dispatch(emptyOrder())

            if(response){
                for(const cart of response){
                
                    dispatch(addCartToOrder(cart))
                }
            }

        })
        .catch((err)=>{
            console.log("error while retrieving order from db " + err)
        })
    }
}

export const saveOrderToDb = (order) =>{

    return function(dispatch){
        window.fetch("http://localhost:9000/order/api/save", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)

        })
        .then(response=>response.json())
        .then((response)=>{
            
            console.log("successfully saved order to db ")
            dispatch(addCartToOrder(response))
        })
        .catch((err)=>{
            console.log("error while saving order to db " + err)
        })
    }
}