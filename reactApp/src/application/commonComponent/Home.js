import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {

    let user = useSelector((state)=>state.userReducer.user)
    let navigate = useNavigate()
    let couponList = useSelector((state)=>state.couponReducer)

    
// Part 2 : 
// Hide all the links except : Home, User and About for a user not logged-in
// In Product Component show Save to product section only to a user with name "admin" so that not all users 
// can insert the products to database 
   
    return(
        <>
        <div className="content-wrap" >

        { 
            
            user.email.length >= 1 && user.firstName.length >= 1 && user.lastName.length >= 1? 
 
            <div class="container text-center">
            <h3> WELCOME&nbsp;BACK &nbsp;{user.firstName}&nbsp;{user.lastName} </h3>
                <div class="row g-2">

                    <div class="col-6">
                    <img  src="https://img.freepik.com/free-photo/woman-with-shopping-bags_329181-8871.jpg?t=st=1700373218~exp=1700373818~hmac=0a252609ca986f6454952faa692a120773a2a3513fc19685b91e5a83fb7b519a"/>
                    </div>
                    <div class="col-6">
                    <img  src="https://img.freepik.com/free-photo/woman-holds-fashion-shopping-bag-beauty_1150-13673.jpg?t=st=1700372424~exp=1700373024~hmac=a8ab5733cdf95cea10ee692e6993b98864df3b33d873d64041aaaea7eebfe9fb"/>
                    </div>
                    <div class="col-6">
                    <img   src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg?t=st=1700372424~exp=1700373024~hmac=b166431b9068deb6aeb6bb227283b4a458c6ab4099c87deb7e0dd8b4b2710702"/>
                    </div>
                    <div class="col-6">
                    <img  src="https://img.freepik.com/free-photo/female-friends-out-shopping-together_53876-25041.jpg?t=st=1700372424~exp=1700373024~hmac=f0dacb718af6cb5d13bf5cb81f0fcdc8de7282163951461945f1fd1f60fb7e27"/>
                    </div>
                </div>
            </div>
       
            : 
            
            <div class="container text-center">
                 <h3>WELCOME TO SHOPPING WEBSITE,   USER ACCOUNT IS REQUIRED TO USE OUR WEBSITE</h3>
                <div class="row g-2">
            
                    <div class="col-6">
                    <img src="https://img.freepik.com/free-photo/woman-with-shopping-bags_329181-8871.jpg?t=st=1700373218~exp=1700373818~hmac=0a252609ca986f6454952faa692a120773a2a3513fc19685b91e5a83fb7b519a"/>
                    </div>
                    <div class="col-6">
                    <img src="https://img.freepik.com/free-photo/woman-holds-fashion-shopping-bag-beauty_1150-13673.jpg?t=st=1700372424~exp=1700373024~hmac=a8ab5733cdf95cea10ee692e6993b98864df3b33d873d64041aaaea7eebfe9fb"/>
                    </div>
                    <div class="col-6">
                    <img src="https://img.freepik.com/free-photo/black-friday-elements-assortment_23-2149074075.jpg?t=st=1700372424~exp=1700373024~hmac=b166431b9068deb6aeb6bb227283b4a458c6ab4099c87deb7e0dd8b4b2710702"/>
                    </div>
                    <div class="col-6">
                    <img src="https://img.freepik.com/free-photo/female-friends-out-shopping-together_53876-25041.jpg?t=st=1700372424~exp=1700373024~hmac=f0dacb718af6cb5d13bf5cb81f0fcdc8de7282163951461945f1fd1f60fb7e27"/>
                    </div>
                </div>
            </div>

            }
                    </div>
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