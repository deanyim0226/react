import * as actionTypes from "../actionTypes"

export const saveReview = (reviewInfo) =>{
    
    return {
        type: actionTypes.SaveReview,
        payload: reviewInfo
    }
}

export const getReviews = (something) =>{
    return {
        type: actionTypes.GetReviews,
        payload: something
    }
}

export const emptyReviews = () =>{
    return {
        type: actionTypes.GetReviews
    }
}

export const saveReviewToDb = (reviewInfo) =>{

    return(dispatch) => {
        window.fetch("http://localhost:9000/review/api/saveReview", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
        .then(response => response.json())
        .then((response)=>{
            
            console.log("successfully saved review to the DB " + response)

        })
        .catch((err)=>{
            console.log("there is an error while saving review to the DB" + err)
        })
    }
}

export const getReviewsFromDb = (productId) =>{

    return(dispatch) =>{
        window.fetch("http://localhost:9000/review/api/getReviews", {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id:productId})
        })
        .then(response => response.json())
        .then((response)=>{
            
            dispatch(emptyReviews())
   
            for(const review of response){
                dispatch(saveReview(review))
            }

            console.log("successfully retrieved reviews from the DB " + response)

        })
        .catch((err)=>{
            console.log("there is an error while retrieving reviews from the DB" + err)
        })
        
    }
}