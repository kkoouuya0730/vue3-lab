<script setup lang="ts">
import type { Link } from '@/types/link'

interface Props {
  linkInfo: Link
}

defineProps<Props>()
</script>

<template>
  <PrCard class="card-item">
    <template #header>
      <!-- これで画像表示できるならpublic/までは指定されていることになる -->
      <img
        alt="user header"
        :src="`${linkInfo.urlToImage}`"
        class="link-card-header"
      />
    </template>
    <template #title> {{ linkInfo.title }} </template>
    <template #content>
      <p class="m-0">
        {{ linkInfo.description }}
      </p>
    </template>
  </PrCard>
</template>

<style scoped>
.card-item {
  flex-grow: 1;
}

.link-card-header {
  width: 100%;
}
</style>
