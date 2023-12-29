<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue';
import type { MenuItem } from '@/types/menu';
interface Props {
  menuItems: MenuItem[]
  propsRef: string
  propsId: string
}
const menu = ref();

defineProps<Props>()
</script>

<template>
  <div class="card flex justify-content-center">
    <PrMenu ref="menu" :id="propsId" :model="menuItems" :popup="true">
      <template #item="{ item, props }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
      </template>
    </PrMenu>
  </div>
</template>