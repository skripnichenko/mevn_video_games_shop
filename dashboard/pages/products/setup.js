export const config = {
  name: 'Products',
  crudName: 'products',
  singleName: 'Product',
  pageName: 'ProductPage',
  formName: 'ProductForm',
  formTitle: 'Product Title',
  formDescription: 'Product description',
}

export const columns = [
  { key: 'title', name: 'Product Title' },
  { key: 'amount', name: 'Available amount' },
  { key: 'price', name: 'Price' },
]

export const actions = [
  {
    bg: 'yellow',
    color: 'white',
    label: 'Edit',
    emit: 'onEdit',
    actionKey: '_id',
  },
  {
    bg: 'red',
    color: 'white',
    emit: 'onDelete',
    actionKey: '_id',
    icon: 'icwt-delete',
  },
]
