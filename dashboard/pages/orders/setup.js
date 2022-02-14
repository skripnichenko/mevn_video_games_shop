export const config = {
  name: 'Orders',
  crudName: 'orders',
  singleName: 'Order',
  pageName: 'OrderPage',
}

export const columns = [
  { key: 'fullname', name: 'Full Name' },
  { key: 'email', name: 'Email' },
  { key: 'phone', name: 'Phone' },
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
