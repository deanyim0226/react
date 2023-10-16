import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {

    let user = useSelector((state)=>state.userReducer.user)
    let navigate = useNavigate()

    
// Part 2 : 
// Hide all the links except : Home, User and About for a user not logged-in
// In Product Component show Save to product section only to a user with name "admin" so that not all users 
// can insert the products to database 

    return(
        <>{ 
            user.email.length >= 1 && user.firstName.length >= 1 && user.lastName.length >= 1? 
            <h1>WELCOME {user.firstName + user.lastName} </h1>
            : <div>
                <h2>WELCOME TO OUR WEBSITE</h2>
                <h3>USER ACCOUNT IS REQUIRED TO USE OUR WEBSITE</h3>
            </div>
            
            }
        </>
    )
}

export default Home
/*
//1. Create a class component and show all the life cycle hooks
export default class Home extends Component{

    //creation life cycle method
    constructor(props){
        super(props)

        this.state = {
            name : "Danel",
            address: "IRVINE",
            count: 0
        }
        
        this.userName = React.createRef();
        this.userAddress = React.createRef();
        this.interval = 1
    }
    

    
    textChange = (evt) =>{
        let target = evt.target
        let value = target.value
        let className = target.className

        if(className === "name"){
            this.setState({
                name : value
            })
        }else if(className === "address"){
            this.setState({
                address : value
            })
        }
    }

    submit = (evt)=>{
        this.setState({
            name: this.userName.current.value,
            address: this.userAddress.current.value
        })
        alert(this.userName.current.value +  this.userAddress.current.value)
    }
    

    //is invoked immediately after a component is mounted
    //good place to setup any subscriptions 
    componentDidMount(){
        document.title = `${this.state.count} times`
        console.log("mounted")
        
        this.interval = setInterval( () =>{
            console.log("mountinng")
        },1000)
    }

    //unsubscribe any subscription here
    //when we go to the different page, it is invoked
    componentWillUnmount(){
        clearInterval(this.interval)
    }

    // is invoked right before the most recently rendered output is committed
    // when should, it will be invoked 
    getSnapshotBeforeUpdate(prevProps,prevState){

        console.log("getSnapshot")
        console.log(prevProps)
        console.log(prevState)
    }
    
    //is invoked immediately after updating occurs
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("did update")
        document.title = ` ${this.state.count} times`
        // console.log("componentdidUpdate")
        // console.log(prevProps)
        // console.log(prevState)
        // console.log(snapshot)
    }

    //is invoked before rendering when new props or state are being received.
    //this is invoked when you make a change
    //rerender will happen when it returns true
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldcomponentUpdate")
    //2. Make a state change, the state should be duplicate and then stop it to call render method to improve efficiency.
        if(this.state.address === nextState.address && this.state.name === nextState.name ){
            return false
        }
        
        return true
    }

    render(){
        console.log("name is " + this.state.name)
        console.log("name is " + this.state.address)
        return(
            <>
            
            <h1>Homepage</h1>
            <p>You clicked {this.state.count} times</p>
            {/*
            <button onClick={ () => this.setState({ count: this.state.count +1})}>click me</button>
            
            <div>
                <label>NAME</label>
                <input type = "text" className="name" value = {this.state.name} onChange={this.textChange}>   
                </input>
            </div>
            <div>
                <label>Address</label>
                <input type = "text" className="address" value = {this.state.address} onChange={this.textChange}>   
                </input>
            </div>
*/
/*
}            
       
            <div>
                <label>NAME</label>
                <input type = "text" className="name" ref = {this.userName} >   
                </input>
            </div>
            <div>
                <label>Address</label>
                <input type = "text" className="address" ref = {this.userAddress} >   
                </input>
            </div>
            <button onClick={this.submit} >Submit</button>
          
            </>
        )
    }

}
*/