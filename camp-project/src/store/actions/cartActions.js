export const ADD_TO_CART = "ADD_TO_CART" //string olarak ADD_TO_CART yapmamak için bunu yapıyoruz
export const REMOVE_FROM_CART = " REMOVE_FROM_CART"

export function addToCart(product){//bir aksiyon varsa obje dönmeliyiz.
    return{
        type : ADD_TO_CART, //aksiyona verilen isim,tipi,gönderilen aksiyon
        payload: product  //aksiyon ile birlikte stateyi etkilicek olan veriye denir,eklencek silincek olan veri
    }
}

export function removeFromCart(product){//bir aksiyon varsa obje dönmeliyiz.
    return{
        type : REMOVE_FROM_CART, //aksiyona verilen isim,tipi
        payload: product  //aksiyon ile birlikte stateyi etkilicek olan veriye denir.
    }
}