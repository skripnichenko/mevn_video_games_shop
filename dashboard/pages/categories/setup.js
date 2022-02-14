export const config = {
  name: 'Categories',
  crudName: 'categories',
  singleName: 'Category',
  pageName: 'CategoryPage',
  formName: 'CategoryForm',
  formTitle: 'Category Form',
}

export const columns = [{ key: 'title', name: 'Category Title' }]

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
