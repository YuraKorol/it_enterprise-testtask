export default {
  GET_PRODUCTS: '/products',
  GET_STATUSES: '/statuses',
  GET_ORDERS: '/orders',
  ADD_ORDER: '/orders/add',
  DELETE_ORDER: id => `/orders/delete/${id}`,
  UPDATE_ORDER: '/orders/update'
}
