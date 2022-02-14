import { mapActions, mapGetters } from 'vuex'

export const crudMixin = ({ config }) => ({
  components: {
    IcwtTable: () => import('@/components/table/IcwtTable'),
    TablePageWrapper: () => import('@/components/TablePageWrapper'),
  },
  computed: {
    ...mapGetters({
      items: `${config.crudName}/items`,
    }),
  },
  methods: {
    ...mapActions({
      fetchItems: `${config.crudName}/fetchAll`,
      deleteItem: `${config.crudName}/delete`,
    }),
    async handleDelete({ id }) {
      await this.deleteItem(id)
      this.fetchItems()
    },
  },
})
