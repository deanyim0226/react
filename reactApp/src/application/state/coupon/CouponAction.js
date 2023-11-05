import * as actionType from "../actionTypes"


export const generateCoupon = (obj) => ({

    type: actionType.GenerateCoupon,
    payload: obj
})

export const getCouponFromDb = (id) =>{

    return function(dispatch) {

        window.fetch("http://localhost:9000/coupon/api/get",{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:id})
        })
        .then(response => response.json())
        .then((response) =>{

            console.log("received data from db" + response)
        })
        .catch((err)=>{
            console.log("Error while getting coupon from db ", err)
        })
    }
}

export const saveCouponToDb = (id,info) => {

    return function(dispatch) {
        window.fetch("http://localhost:9000/coupon/api/generate",{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userid:id,coupon:info})
        })
        .then(response => response.json())
        .then((response) =>{
            
            dispatch(generateCoupon(response))
            console.log("successfully added " + response )

        })
        .catch((err) =>{
            console.log("ERROR while adding Item")
        })
    }

}

