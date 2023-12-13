
# Shopping Cart App using react.js, redux, express.js, and MongoDB

## Product Implementation

- Each Product should have general fields, like Name, Description, Rating, Price, Category (New Product Document/ Collection)
In Product component each item when we click to display details should also have a button "Add To Item" on click should add to New Cart
Cart Implementation

- Create New Cart Component using react hooks, functional component
Each Item in this component should be added from Product Component
On Cart Component, Button for save to Checkout should save the cart item to database (New Cart Document/ Collection)
Checkout Component

## Cart Implementation

- Create A functional component and use react hook or using container to read data from store
Show - User Details (Name, address) //We will deliver products to below address kind of message as well
Show Table of cart put up for purchase (you need to re-use the cartlist and cartitem components)
Show the purchase Summary (total qty and total amount)
Show a Button to Proceed to Payment
Integrate this page on CartComponent Button (Go to checkout) -(Go To Checkout From Cart Component)

## Checkout Component

- Create a state using useState to show hide (Make Payment Message)
Upon Clicking on MakePayment button, hide everything and just show the message - "Thankyou for the payment, your items under process!"
Change the header from Checkout Page to Payment Page

## Coupon Component

- Create a component with Name - CouponComponent (Functional Component and Use Hooks)
On the page add a Button - GenerateCoupon
Upon Click Generate a random coupon of - 6 digits (basically a numeric random value)
Dispatch this generated coupon using useDispatch
- Create a Coupon Reducer to have Coupon Value, Use Reducer to update the coupon value (useSelector coupon)
- Create action to pass coupon to reducer, with type and payload
Admin

## RecentOrder Component
- Upon MakePayment Click, save the cart to RecentOrders collection (should have userid, order, dateTime)
- Make API to Save and Fetch from RecentOrders
- Make a component RecentOrders to Show all previous Orders of current user
- Add a button to Cancel (like) we have remove in CartComponent and then save again, 
- order can be cancelled within 2 days after that it should be marked delivered

## CancelledOrder Component

- Save the order to CancelledOrders collection (should have userid, cancelled, dateTime)
- Make API to Save and Fetch from CancelledOrders
- Make a component CancelledOrders to Show all cancelled Orders of current user in Latest First
- Add a button to Buy Again, (also show a message - This offer is much more exciting)
- Upon Adding this should get appended to the existing Cart that is shown in Carts App

## ReOrder Component
- User to reorder from recent orders or from cancelled orders
- A Simple process just add the order to your cart and replace or merge whatever is present in cart

## Review Component

- This should get its reviews from recent orders page
- User should be allowed to give ratings and his comments to each products
- Upon successful submission each product should have a link to show its review 
- When user expands product detail we should also see the button to which will take us to its review
- on recent order page we can show a popup to submit rating or a new page its up to you //can use -> react bootstrap
- user should only be able to give rating once cancel button is gone

## Admin

- Hide all the links except : Home, User and About for a user not logged-in
In Product Component show Save to product section only to a user with name "admin" so that not all users
can insert the products to database

