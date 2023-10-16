//
//USER
export const SendUserInfoToStore = "USER.SIGNUP"
export const GetUserInfoFromStore = "USER.SIGNIN"
export const UpdateUserInfo = "USER.UPDATE"

//PRODUCT
export const SendProductDetailsToStore = "PRODUCT.ADDPRODUCTTOSTORE"
export const GetProductDetailsFromStore = "PRODUCT.GETPRODUCTFROMSTORE"

//CART
export const AddItemToCart = "CART.ADDITEM"
export const DeleteItemFromCart = "CART.DELETEITEM"
export const UpdateItemFromCart = "CART.UPDATEITEM"
export const EmptyCart = "CART.EMPTYITEM"

//ORDER
export const AddCartToRecentOrder = "ORDER.ADDCART"
export const GetRecentOrder = "ORDER.GETRECENTORDER"
export const DeleteRecentOrder = "ORDER.DELETERECENTORDER"
export const EmptyOrder = "ORDER.EMPTYRECENTORDER"