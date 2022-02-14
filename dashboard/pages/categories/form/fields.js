export const schema = {
  fields: [
    {
      type: 'input',
      label: 'Category Title',
      model: 'title',
      placeholder: 'Enter category title',
      inputType: 'text',
      styleClasses: 'col-md-6',
    },
    {
      type: 'vueMultiSelect',
      model: 'products',
      label: 'Products',
      styleClasses: 'col-md-6',
      placeholder: 'Add products',
      selectOptions: {
        multiple: true,
        key: 'title',
        id: '_id',
        trackBy: 'title',
        label: 'title',
        searchable: true,
        hideSelected: true,
      },
      values: [],
    },
    {
      type: 'textArea',
      label: 'Category description',
      model: 'description',
      placeholder: 'Enter category description',
      hint: 'Max 500 characters',

      rows: 10,
      styleClasses: 'col-md-12',
    },
  ],
}

export const defaultForm = {
  title: '',
  description: '',
  products: [],
}
