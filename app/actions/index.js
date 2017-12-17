export const selectProduct = product => {
  console.log('SELECT_PRODUCT')
  console.log(product)
  return { type: 'SELECT_PRODUCT', product }
}

export const deselectProduct = product => {
  console.log('DESELECT_PRODUCT')
  console.log(product)
  return { type: 'DESELECT_PRODUCT', product }
}

export const selectService = service => {
  console.log('SELECT_SERVICE')
  console.log(service)
  return { type: 'SELECT_SERVICE', service }
}

export const deselectService = service => {
  console.log('DESELECT_SERVICE')
  console.log(service)
  return { type: 'DESELECT_SERVICE', service }
}
