<template>
  <div class="row">
    <div
      v-for="(product, key) in products"
      :key="key"
      class="col-lg-4 col-md-6 mb-4"
    >
      <ProductCard
        :id="product._id"
        :title="product.title"
        :price="product.price"
        :imageUrl="product.imageUrl"
        @add-to-cart="addToCart(product)"
        :description="product.description"
        :inCart="cartItemsIds.includes(product._id)"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Home',
  components: {
    ProductCard: () => import('@/components/ProductCard'),
  },
  mounted() {
    //need to add filter by category
    this.fetchProducts()
  },
  computed: {
    ...mapGetters({
      products: 'products',
      cartItems: 'cartItems',
      category: 'category',
    }),
    cartItemsIds: ({ cartItems }) => cartItems.map(({ _id }) => _id),
  },
  methods: {
    ...mapActions({
      fetchProducts: 'fetchProducts',
      fetchCategory: 'fetchCategory',
    }),
    ...mapMutations({
      addToCart: 'addToCart',
    }),
  },
}
</script>
