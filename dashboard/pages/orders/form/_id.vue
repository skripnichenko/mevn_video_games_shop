<template>
  <Page>
    <div class="row">
      <div class="col-md-9">
        <card>
          <CrudForm
            v-if="model"
            :form-schema="schema"
            :form-model="model"
            title="Product title"
            @on-submit="onFormSubmit"
          />
          <p class="text-danger">
            {{ error }}
          </p>
        </card>
      </div>
      <div class="col-md-3"></div>
    </div>
  </Page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import { schema } from './fields'

export default {
  name: 'ProductForm',
  middleware: 'auth',
  components: {
    CrudForm: () => import('@/components/CrudForm'),
    Card: () => import('@/components/Card'),
    Page: () => import('@/components/Page'),
  },
  computed: {
    ...mapGetters({ product: 'products/item', error: 'products/itemError' }),
    isUpdating: ({
      $route: {
        params: { id },
      },
    }) => id !== undefined,
  },
  data: () => ({
    model: {},
    schema,
  }),
  async mounted() {
    if (this.isUpdating) {
      await this.fetchProduct(this.$route.params.id)

      this.model = { ...this.product }
      return
    }

    this.setModel()
  },
  methods: {
    ...mapActions({
      createProduct: 'products/create',
      fetchProduct: 'products/fetchOne',
      updateProduct: 'products/update',
    }),
    setModel() {
      this.model = {
        title: '',
        description: '',
        price: 0,
        amount: 0,
        imageUrl: '',
      }
    },
    async onProductUpdate() {
      await this.updateProduct({
        id: this.$route.params.id,
        payload: this.model,
      })
      this.$router.back()
    },
    async onProductCreate() {
      await this.createProduct(this.model)
      this.$router.back()
    },
    async onFormSubmit() {
      if (this.isUpdating) {
        this.onProductUpdate()
        return
      }
      this.onProductCreate()
    },
  },
}
</script>
