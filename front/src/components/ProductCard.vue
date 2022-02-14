<template>
  <div class="card h-100">
    <router-link class="navbar-brand" :to="linkOpen">
      <img class="card-img-top" :src="imageUrl" alt="" />
    </router-link>
    <div class="card-body">
      <h4 class="card-title">
        <a href="#">{{ title }}</a>
      </h4>
      <h5>{{ price }}$</h5>
      <p class="card-text">{{ description.slice(0, 100) }}...</p>
    </div>
    <div class="card-footer">
      <button class="btn btn-info" @click="$emit('add-to-cart')" v-if="!inCart">
        Add to cart
      </button>
      <button class="btn btn-danger" @click="$emit('add-to-cart')" v-else>
        Delete from cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    id: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: 0,
    },
    imageUrl: {
      type: String,
      default: '',
    },
    inCart: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      default: '',
    },
  },
  computed: {
    linkOpen() {
      return `/products?id=${this.id}`
    },
  },
}
</script>
