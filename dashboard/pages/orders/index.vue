<template>
  <Page :title="config.name">
    <div class="flex">
      <!-- <icwt-button
        tag="nuxt-link"
        icon="icwt-plus"
        :to="`${config.crudName}/form`"
        rounded
      >
        Add {{ config.singleName }}
      </icwt-button> -->
    </div>
    <TablePageWrapper>
      <icwt-table
        :columns="columns"
        :actions="actions"
        :data="items"
        @onEdit="handleEdit"
        @onDelete="handleDelete"
      />
    </TablePageWrapper>
  </Page>
</template>

<script>
// setup
import { columns, actions, config } from './setup'

// Mixins
import { crudMixin } from '@/mixins/crud.mixin'

export default {
  name: config.pageName,
  middleware: 'auth',
  mixins: [crudMixin({ config })],
  components: {
    Page: () => import('@/components/Page'),
    Icon: () => import('@/components/icon/Icon'),
    IcwtButton: () => import('@/components/Button'),
  },
  data: () => ({
    columns,
    actions,
    config,
  }),
  methods: {
    //need to create edit order form 
    handleEdit({ id }) {
      this.$router.push(`/${config.crudName}/form/${id}`)
    },
  },
  mounted() {
    this.fetchItems()
  },
}
</script>
