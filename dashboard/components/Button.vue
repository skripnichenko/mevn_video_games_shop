<template>
  <component
    :is="tag"
    :to="to"
    @click="$emit('click')"
    class="group flex items-center justify-center py-2 px-4 relative tracking-wide"
    :class="{
      [`bg-${bg}-600`]: true,
      [`hover:bg-${bg}-500`]: true,
      [`font-${font}`]: true,
      [`text-${color}`]: true,
      'rounded-md': rounded,
    }"
  >
    <span class="flex items-center mr-2">
      <slot name="icon" />
    </span>
    <slot />
  </component>
</template>

<script>
export default {
  name: 'IcwtButton',
  props: {
    tag: {
      type: String,
      default: 'button',
    },
    to: {
      type: String,
      default: '',
    },
    bg: {
      type: String,
      default: 'indigo',
    },
    font: {
      type: String,
      default: 'medium',
    },
    color: {
      type: String,
      default: 'white',
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: null,
    },
  },
  components: {
    Icon: () => import('@/components/icon/Icon'),
  },
  mounted() {
    console.log(this.$slots)
  },
}
</script>
