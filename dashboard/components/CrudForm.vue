<template>
  <div class="p-6 shadow-xl max-w bg-white rounded-lg">
    <form @submit.prevent="validate">
      <vue-form-generator
        :schema="formSchema"
        :model="formModel"
        :options="formOptions"
        ref="form"
        @model-updated="onUpdate"
      />

      <div class="max-w flex justify-center">
        <icwt-button rounded type="submit">Confirm</icwt-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CrudForm',
  components: {
    IcwtButton: () => import('@/components/Button'),
  },
  props: {
    formSchema: {
      type: Object,
      default: () => {},
    },
    formModel: {
      type: Object,
      default: () => {},
    },
    formOptions: {
      type: Object,
      default: () => ({
        validateAsync: true,
      }),
    },
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    async validate() {
      const errors = await this.$refs.form.validate()
      const isValid = errors.length === 0
      if (isValid) {
        this.$emit('on-submit', this.formModel)
      }
    },
    onUpdate(val, field) {
      this.$emit(`on${field}Update`, val)
    },
  },
}
</script>
