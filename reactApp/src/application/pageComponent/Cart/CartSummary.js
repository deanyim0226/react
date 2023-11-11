import React, { useEffect } from "react"


let CartSummary = (props) =>{
    
    let cartSummaryInfo = props.data

    return(
        <>
        <h1 class="align-middle">CART SUMMARY</h1>
        <div>
    
            <table class="table table-bordered" >
                <thead>
             
                    <tr>
                        <th scope="col">Items</th>
                        <th scope="col" >Total</th>
                        <th scope="col">Quantity</th>
                    </tr>
                </thead>
        
                <tbody class="table-group-divider">
            
                    <tr>
                        <td>{cartSummaryInfo.items}</td>
                        <td>${cartSummaryInfo.total } </td>
                        <td>{cartSummaryInfo.qty}</td>
                       
                    </tr>
                </tbody>
            </table>

        </div>
        </>
    )
}


export default React.memo(CartSummary)