import request from '../lib/request';

const addProductToOrder = (dispatch, payload) => (
  request.post('orders', payload)
    .then(response => (
      dispatch('updateOrder', response)
    ))
);

const currentOrder = (dispatch, { userID, restaurantID }) => (
  request.get(
    `users/me/restaurants/${restaurantID}/current_order`,
    { uid: userID },
  )
    .then(response => (
      dispatch('updateOrder', response)
    ))
);

const updateProductOrderQuantity = (dispatch, { userID, restaurantID, item, quantity }) => (
  request.put(
    `restaurants/${restaurantID}/orders/${item.orderId}/products/${item.id}/quantity`,
    { quantity },
    { uid: userID },
  )
    .then(response => (
      dispatch('updateOrder', response)
    ))
);

const place = (dispatch, { restaurantId, orderId, userId }) => (
  request.post(
    `users/me/restaurants/${restaurantId}/orders/${orderId}/place`,
    {},
    { uid: userId },
  )
  .then(response => (
    dispatch('updateOrder', response)
  ))
);


export default {
  addProductToOrder,
  currentOrder,
  updateProductOrderQuantity,
  place,
};