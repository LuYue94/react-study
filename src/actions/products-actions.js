export const ADD_QUANTITY = 'ADD_QUANTITY';
export const DEL_QUANTITY = 'DEL_QUANTITY';

export function addQuantity(item) {
  return {
    type: ADD_QUANTITY,
    payload: { item }
  }
}


export function delQuantity(item) {
  return {
    type: DEL_QUANTITY,
    payload: { item }
  }
}