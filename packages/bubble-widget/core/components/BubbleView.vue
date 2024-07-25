<template>
  <div class="view">
    {{ count }}
    <button @click="increment">哇哈</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { BubbleViewProps } from './BubbleView.types'

const props = withDefaults(defineProps<BubbleViewProps>(), {
  defaultValue: 0
})

const count = ref(props.defaultValue)
const increment = () => {
  count.value++
}
</script>
