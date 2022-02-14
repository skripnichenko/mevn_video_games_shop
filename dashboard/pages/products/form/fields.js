export const schema = {
  fields: [
    {
      type: 'input',
      label: 'Game title',
      model: 'title',
      placeholder: 'Enter the game title',
      inputType: 'text',
      styleClasses: 'col-md-6',
    },
    {
      type: 'vueMultiSelect',
      model: 'category',
      label: 'Category',
      styleClasses: 'col-md-6',
      placeholder: 'Add category',
      selectOptions: {
        multiple: false,
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
      type: 'input',
      label: 'Price',
      model: 'price',
      placeholder: 'Enter the game price',
      inputType: 'text',
      styleClasses: 'col-md-6',
    },
    {
      type: 'textArea',
      label: 'Game description',
      model: 'description',
      placeholder: 'Enter the game description',
      hint: 'Max 500 characters',

      rows: 10,
      styleClasses: 'col-md-12',
    },
    {
      type: 'input',
      label: 'Amount',
      model: 'amount',
      placeholder: 'Enter the available amount',
      inputType: 'text',
      styleClasses: 'col-md-6',
    },
    {
      type: 'input',
      label: 'Image',
      model: 'imageUrl',
      placeholder: 'Enter the image url',
      inputType: 'text',
      styleClasses: 'col-md-6',
    },
  ],
}

export const defaultForm = {
  title: '',
  description: '',
  price: 0,
  amount: 0,
  imageUrl: '',
  category: '',
}
