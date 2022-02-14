<template>
  <form-page-wrapper
    :title="config.formTitle"
    :description="config.formDescription"
  >
    <crud-form
      v-if="model"
      :form-schema="schema"
      :form-model="model"
      @on-submit="onFormSubmit"
    />
    <p class="text-danger">
      {{ error }}
    </p>
  </form-page-wrapper>
</template>

<script>
// State
import { mapActions, mapGetters } from 'vuex'

// Setups
import { schema, defaultForm } from './fields'
import { config } from '../setup'

// Mixins
import { relationsMixin } from '@/mixins/relation.mixin'

export default {
  name: config.formName,
  middleware: 'auth',
  mixins: [relationsMixin],
  components: {
    CrudForm: () => import('@/components/CrudForm'),
    Card: () => import('@/components/Card'),
    Page: () => import('@/components/Page'),
    FormPageWrapper: () => import('@/components/FormPageWrapper'),
  },
  computed: {
    ...mapGetters({
      item: `${config.crudName}/item`,
      error: `${config.crudName}/itemError`,
      categories: 'categories/items',
    }),
    isUpdating: ({
      $route: {
        params: { id },
      },
    }) => id !== undefined,
  },
  data: () => ({
    model: {},
    schema,
    config,
  }),
  async mounted() {
    await this.fetchCategories()
    this.setFields({ fieldKey: 'category', values: this.categories })

    if (this.isUpdating) {
      await this.fetchItem(this.$route.params.id)

      this.model = { ...this.item }
      return
    }

    this.setModel()
  },
  methods: {
    ...mapActions({
      // generic
      createItem: `${config.crudName}/create`,
      fetchItem: `${config.crudName}/fetchOne`,
      updateItem: `${config.crudName}/update`,

      // bl
      fetchCategories: 'categories/fetchAll',
    }),
    setModel() {
      this.model = {
        ...defaultForm,
      }
    },
    async onItemUpdate() {
      const updatedModel = {
        ...this.model,
        category: this.model.category.id,
      }
      await this.updateItem({
        id: this.$route.params.id,
        payload: updatedModel,
      })
      this.$router.back()
    },
    async onItemCreate() {
      await this.createItem(this.model)
      this.$router.back()
    },
    async onFormSubmit() {
      if (this.isUpdating) {
        this.onItemUpdate()
        return
      }
      this.onItemCreate()
    },
  },
}
</script>
