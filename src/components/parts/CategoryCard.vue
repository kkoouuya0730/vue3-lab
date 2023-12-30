<script setup lang="ts">
interface Props {
  categoryInfo: {
    id: number
    title: string
    url: string
    icon: string
    description: string
  }
}

const props = defineProps<Props>()
</script>

<template>
  <PrCard class="card-item">
    <template #header>
      <span
        :class="categoryInfo.icon"
        class="category-card-icon"
      ></span>
    </template>
    <template #title> {{ categoryInfo.title }} </template>
    <template #content>
      <p class="m-0">
        {{ categoryInfo.description }}
      </p>
    </template>
  </PrCard>
</template>

<style scoped>
.card-item {
  flex-grow: 1;
  padding: 20px;
}

.category-card-icon {
  /* margin-top: 20px; */
}
</style>
