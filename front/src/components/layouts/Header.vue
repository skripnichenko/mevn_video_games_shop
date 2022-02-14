<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">In Games We Trust</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav_link" v-for="(category, key) in categories" :key="key">
            <router-link class="nav-link" :to="`/category/${category.id}`">{{
              category.title
            }}</router-link>
          </li>
          <li class="nav_link">
            <router-link class="nav-link" to="/cart">
              <font-awesome-icon icon="shopping-cart" />
              {{ cartCount }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MevnHeader',
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
    cartCount: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="css" scoped>
.header {
  border-bottom: 1px solid;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

.nav {
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  width: 100%;
  padding-inline-start: 0;

  /* &_link {
    margin-right: 10px;
    a {
      cursor: pointer;
      text-decoration: none;
      color: black;
      &:hover {
        color: olive;
      }
    }
  } */
}

.nav_link {
  margin-right: 10px;
}

a {
  cursor: pointer;
  text-decoration: none;
  color: black;
}
a:hover {
  color: olive;
}
</style>
