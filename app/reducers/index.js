import { combineReducers } from 'redux'

const productReducer = (state = {products: [], selectionCost: 0}, action) => {
  const s = Object.assign({}, state)

  if (!s.products) s.products = []

  switch (action.type) {
    case 'SELECT_PRODUCT':
      console.log('reducer: selected product')
      s.products.push({key: action.product.key, cost: action.product.cost})
      s.selectedProductCount = s.products.length
      s.selectionCost = s.selectionCost + action.product.cost
      return s
    case 'DESELECT_PRODUCT':
      console.log('reducer: deselected product')
      s.products.splice(s.products.indexOf(action.product))
      s.selectedProductCount = s.products.length
      s.selectionCost = s.selectionCost - action.product.cost
      return s
    default:
      return state
  }
}

const servicesReducer = (state = {services: []}, action) => {
  const s = Object.assign({}, state)
  if (!s.services) s.services = []

  switch (action.type) {
    case 'SELECT_SERVICE':
      console.log('reducer: selected service')
      s.services.push({key: action.service.key})
      return s
    case 'DESELECT_SERVICE':
      console.log('reducer: deselected service')
      s.services.splice(s.services.indexOf(action.service))
      console.log(s)
      return s
    default:
      return state
  }
}

export default combineReducers({ productReducer, servicesReducer })
