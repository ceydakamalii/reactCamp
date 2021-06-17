import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems: cartItems
}
//cartReducere parametre olarak başlangıç değeri ve aksiyon gönderilir.
export default function cartReducer(state = initialState, { type, payload }) {//gönderilen aksiyona göre sepetin son hali
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(c => c.product.id === payload.id)//başta sepette bu ürün varmı 
            if (product) {
                product.quantity++; // varsa sepetteki ürünün sayısını arttırıyo
                return {
                    ...state   //(spread)içerisinde bulunan elemanları ayırarak yeniden yeni obje oluşturma bu şekilde referans oluşturuyo java,c# taki newleme
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { quantity: 1, product: payload }]
                }

            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(c => c.product.id !== payload.id)
            }
        default:
            return state;
    }
}