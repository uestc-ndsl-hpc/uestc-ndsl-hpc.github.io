<template>
  <div style="display: flex; justify-content: center;">
    <img
      :src="src"
      :alt="alt"
      :style="imgStyle"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  width: { type: String, default: '61.8vw' },
  borderRadius: { type: String, default: '16px' },
  boxShadow: { type: String, default: '0 4px 24px rgba(0,0,0,0.15)' }
})
const imgStyle = computed(() => ({
  width: props.width,
  display: 'block',
  borderRadius: props.borderRadius,
  boxShadow: props.boxShadow
}))
</script> 