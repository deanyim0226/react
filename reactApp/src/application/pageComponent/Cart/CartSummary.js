import React, { useEffect } from "react"


let CartSummary = (props) =>{
    
    let cartSummaryInfo = props.data

    return(
        <>
         
            <h2>CART SUMMARY</h2>
            <div>
        
            <table  className="table table-light table-bordered ">
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