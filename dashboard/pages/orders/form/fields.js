export const schema = {
  fields: [
    {
      type: 'input',
      label: 'Category title',
      model: 'title',
      placeholder: 'Enter category title',
      inputType: 'text',
      styleClasses: 'col-md-6',
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
