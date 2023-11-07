import * as actionTypes from "../actionTypes"

export const addCancelledOrder = (order) =>({
    type: actionTypes.AddOrderToCancelledOrder,
    payload: order
})

export const deleteCancelledOrder = (id)=>({
    type: actionTypes.DeleteCancelledOrder,
    payload: id
})

export const emptyCancelledOrder = () =>({
    type: actionTypes.EmptyCancelledOrder
})

export const deleteCancelledOrderFromDb = (id)=>{

    return function(dispatch){
        window.fetch("http://localhost:9000/cancel/api/deleteCancelledOrder",{
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({orderid:id})
        })
        .then(response =>response.json())
        .then((response) =>{
    
            dispatch(deleteCancelledOrder(id))
            console.log("successfully deleted cancelled order from dm ")
        })
        .catch((err)=>{
            console.log("error while deleting cancelled order from db " + err)
        })
    }
}

export const getCancelledOrderFromDb = (userid) =>{

    console.log("getCancelledOrder is called")

    return function(dispatch){

        window.fetch("http://localhost:9000/cancel/api/getCancelledOrder", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:userid})
        })
        .then(response => response.json())
        .then((response)=>{
            console.log("successfully retrieved " + response )

            dispatch(emptyCancelledOrder())

            if(response){
                for(const item of response){
                    dispatch(addCancelledOrder(item))
                }
            }
        })
        .catch((err)=>{
            console.log("ERROR while retrieving cancelledItem")
        })
    }
    
}

export const addCancelledOrderToDb = (cancelledOrder) =>{

    console.log("addcancelledOrder is called")

    return function(dispatch){

        window.fetch("http://localhost:9000/cancel/api/saveCancelledOrder", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cancelledOrder)
    })
    .then(response => response.json())
    .then((response) =>{
        console.log("successfully added " + response )
        dispatch(addCancelledOrder(response))
    })
    .catch((err) =>{
        console.log("ERROR while adding cancelledItem")
    })
    }

}

