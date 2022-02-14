<template>
  <table class="min-w-full">
    <thead>
      <slot name="columns">
        <tr>
          <table-header>#</table-header>
          <table-header v-for="({ name }, index) in columns" :key="index">
            {{ name }}
          </table-header>
          <table-header v-if="actions.length !== 0">Action</table-header>
        </tr>
      </slot>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <slot :row="item">
          <table-cell>{{ index + 1 }}</table-cell>
          <table-cell
            v-for="({ key }, tdIndex) in columns"
            :key="`column-${tdIndex}`"
          >
            {{ item[key] }}
          </table-cell>
          <table-cell
            v-for="({ emit, actionKey, label, color, bg, icon },
            actionIndex) in actions"
            :key="`action-${actionIndex}`"
          >
            <icwt-button
              rounded
              :color="color"
              :bg="bg"
              @click="$emit(emit, { id: item[actionKey] })"
            >
              <icon v-if="icon" :icon="icon" size="16" />
              {{ label }}
            </icwt-button>
          </table-cell>
        </slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'IcwtTable',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
    actions: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    TableHeader: () => import('./components/TableHeader'),
    TableCell: () => import('./components/TableCell'),
    IcwtButton: () => import('@/components/Button'),
    Icon: () => import('@/components/icon/Icon'),
  },
}
</script>
