import {
    DELETE_CART,
    HANDLE_CARTS,
    HANDLE_CARTS_QUANTITY,
    HANDLE_PRODUCTDETAIL,
} from './actionType'

export const baiTapPhoneActions = {
    handleProductDetail: (payload) => {
        return {
            type: HANDLE_PRODUCTDETAIL,
            payload,
        }
    },
    handleCarts: (payload) => {
        return {
            type: HANDLE_CARTS,
            payload,
        }
    },
    handleCartQuantity: (payload) => {
        return {
            type: HANDLE_CARTS_QUANTITY,
            payload,
        }
    },
    deleteCart: (payload) => {
        return {
            type: DELETE_CART,
            payload,
        }
    },
}
