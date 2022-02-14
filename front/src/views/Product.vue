<template>
  <div class="d-flex">
    <div class="w-50">
      <img class="w-100" :src="product.imageUrl" />
    </div>
    <div class="w-50 ml-3">
      <h1>{{ product.title }}</h1>
      <div>{{ product.description }}</div>
      <h4 class="mt-3">Price: ${{ product.price }}</h4>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Product',
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  mounted() {
    this.fetchProduct(this.id)
    this.fetchProducts()
  },
  methods: {
    ...mapActions({
      fetchProduct: 'fetchProduct',
      fetchProducts: 'fetchProducts',
    }),

    // need to activate "add to cart" button
    ...mapMutations({
      addToCart: 'addToCart',
    }),
  },
  computed: {
    ...mapGetters({
      product: 'product',
      products: 'products',
      cartItems: 'cartItems',
    }),
    cartItemsIds: ({ cartItems }) => cartItems.map(({ _id }) => _id),
  },
}
</script>

<style lang="scss">
.product-image-wrapper img {
  width: 100px;
}
</style>
