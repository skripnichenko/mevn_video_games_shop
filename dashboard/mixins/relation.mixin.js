export const relationsMixin = {
  methods: {
    setFields({ fieldKey, values = [] }) {
      const foundField = this.schema.fields.find(
        (field) => field.model === fieldKey
      )
      console.log(this.schema.fields, 'fields')
      foundField.values = [...values]
    },
  },
}
