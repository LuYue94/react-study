import { ADD_QUANTITY, DEL_QUANTITY } from '../actions/products-actions';

const initialState = {
  products: [
    {
      product: '商品1',
      quantity: 2,
      unitCost: 90,
      id: 1
    },
    {
      product: '商品2',
      quantity: 1,
      unitCost: 66,
      id: 2
    },
    {
      product: '商品3',
      quantity: 1,
      unitCost: 32,
      id: 3
    },
    {
      product: '商品4',
      quantity: 1,
      unitCost: 64,
      id: 4
    },
    {
      product: '商品5',
      quantity: 1,
      unitCost: 9.9,
      id: 5
    }
  ]
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_QUANTITY: {
      state.products.map(item => {
        if (item.id === action.payload.item.id) {
          item.quantity = item.quantity + action.payload.item.quantity
        }
      })
      return state
    }

    case DEL_QUANTITY: {
      state.products.map(item => {
        if (item.id === action.payload.item.id) {
          item.quantity = item.quantity - 1
        }
      })
      return state
    }

    default:
      return state;
  }
}