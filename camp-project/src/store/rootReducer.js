//tüm stateleri topladığım yer
import {combineReducers} from "redux"
import cartReducer from "./reducers/cartReducer"

const rootReducer = combineReducers({//reducerları birleştirip tek reducer yapar.
    cart: cartReducer
})

export default rootReducer;