import React from "react"
import { useState , useRef , useEffect} from "react"
import { connect, useDispatch, useSelector } from "react-redux" //require react UI and mapstateToProps and mapDispatchToProps

import { saveDataToDB } from "../state/product/ProductAction"

//3. Create a product component using functional component and hooks (try using use state to read default values from reducer)
// 	 Create a form to allow user to submit Product Details - name, price, desc, rating
// 	 Create an action method to add the detail to database using a server api
// 	 Server Side - Create product router and api to save the product using productdatamodel


const Product = (props) =>{
//Create a product component using functional component and hooks 
//(try using use state to read default values from reducer)

// UI -> Action -> Reducer -> Store -> State -> UI
/*
Selectors are functions that know how to extract specific pieces of information from a store state value. 
As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data:
*/
    let product = useSelector((state)=> state.productReducer.products)
    /*
    useSelector reads a value from the store state and subscribes to updates
    */
    const [name, setName] = useState(product.name)
    const [price, setPrice] = useState(product.price)
    const [description, setDescription] = useState(product.description)
    const [rating, setRating] = useState(product.rating)

    const [width, setWidth] = useState(window.innerWidth)


    let dispatchToDB = useDispatch()

    /*
    useDispatch returns the store's dispatch method to let you dispatch actions.
    */

    //combination of componentDidMount + componentDidUpdate + componentWillMount 
 

    useEffect( () => {

        console.log(width)
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)

        //to clean up anyeffect can optionally return a function 
        //if it does, react call this function to clean up
        return () =>{
            window.removeEventListener('resize',handleResize)
        };
    })

    const onChange = (e) =>{

        let target = e.target
        let className = target.className
        let value = target.value

        if(className === "name"){
            setName(value)
        }else if(className ==="price"){
            setPrice(value)
        }else if(className === "desc"){
            setDescription(value)
        }else if(className === "rating"){
            setRating(value)
        }
    }

    const submit = (evt) =>{
        
        let productDetails = {
            name,
            price,
            description,
            rating
        }
        
        dispatchToDB(saveDataToDB(productDetails))
        alert("Product is added successfully")
        evt.preventDefault();
    }

    /*
    let productNameRef = useRef(null)
    let productPriceRef = useRef(null)
    let productDescriptionRef = useRef(null)
    let productRatingRef = useRef(null)

    const sendDetails = (e) =>{
        console.log("come on")
        alert(productNameRef.current.value + productPriceRef.current.value + productDescriptionRef.current.value + productRatingRef.current.value)
        e.preventDefault()
    }
    */
    return(

        <>
        {/*controlled way */}
        <section>
            <b>Name</b>
            <input type="text" className="name" value ={name} onChange = {onChange}></input>
            <b>Price</b>
            <input type="text" className="price" value={price} onChange = {onChange} ></input>
            <b>Desciption</b>
            <input type="text" className= "desc" value = {description} onChange = {onChange}></input>
            <b>rating</b>
            <input type="text" className = "rating" value={rating} onChange = {onChange}></input>
            
            <b>windowsize</b>
            {width}
            <button onClick={submit}>submit</button>
        </section>


        {/* uncontrolled way 
        <form action="/product" onSubmit={sendDetails}> 
            <b>Name</b>
            <input type="text" ref = {productNameRef}></input>
            <b>Price</b>
            <input type="text" ref = {productPriceRef}></input>
            <b>Desciption</b>
            <input type="text" ref = {productDescriptionRef}></input>
            <b>rating</b>
            <input type="text" ref = {productRatingRef}></input>
            <button > 
                submit
            </button>
        </form>
        */}
        </>
    )
}

export default Product

