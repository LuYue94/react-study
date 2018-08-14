
import { ADD_TO_CART, DELETE_FROM_CART } from '../actions/cart-actions';

const initialState = {
  cart: [
    {
      product: '商品2',
      quantity: 1,
      unitCost: 66,
      id: 2
    },
    {
      product: '商品4',
      quantity: 1,
      unitCost: 64,
      id: 4
    },
  ]
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      let flag = -1
      state.cart.forEach((item, index) => {
        if (item.id === action.payload.item.id) {
          flag = index
        }
      })
      if (flag > -1) {
        state.cart[flag].quantity++
      } else {
        state.cart.push({ ...action.payload.item, 'quantity': 1 })
      }

      return {
        ...state,
        cart: state.cart
      }
    }

    case DELETE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.item.id)
      }
    }

    default:
      return state;
  }
}