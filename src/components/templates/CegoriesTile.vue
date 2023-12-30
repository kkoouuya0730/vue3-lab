<!-- API通信してcategoriesのデータを取得する -->
<!-- 取得したデータを加工して子コンポーネントに流すだけ -->
<script setup lang="ts">
import { ref } from 'vue'
import CategoryCard from '../parts/CategoryCard.vue'
import type { CategoryTile } from '../../types/link.d.ts'

interface Props {
  categoryTileInfo: CategoryTile
}

defineProps<Props>()

const categories = ref([
  {
    id: 0,
    category: 'latestLink',
    title: 'Technology',
    icon: 'pi pi-desktop',
    url: 'xxxxxxxxxxxxxxx',
    description:
      'Stay up-to-date with the latest tech news and trends.'
  },
  {
    id: 1,
    category: 'Music',
    title: 'Music',
    icon: 'pi pi-volume-up',
    url: 'xxxxxxxxxxxxxxx',
    description:
      'Discover new music and stay up-to-date with your favorite atrists.'
  },
  {
    id: 2,
    category: 'Education',
    title: 'Education',
    icon: 'pi pi-book',
    url: 'xxxxxxxxxxxxxxx',
    description:
      'Learn something new every day with these educational resources.'
  },
  {
    id: 3,
    category: 'Shopping',
    title: 'Shopping',
    icon: 'pi pi-shopping-cart',
    url: 'xxxxxxxxxxxxxxx',
    description:
      'Find the best deals and discounts on your favorite products.'
  },
  {
    id: 4,
    category: 'Entertainment',
    title: 'Entertainment',
    icon: 'pi pi-thumbs-up',
    url: 'xxxxxxxxxxxxxxx',
    description:
      'Stay up-to-date with the latest movies, TV shows, and more.'
  },
  {
    id: 5,
    category: 'Food',
    title: 'Food',
    icon: 'pi pi-reddit',
    url: 'xxxxxxxxxxxxxxx',
    description:
      'Discover new recipes and cooking tips from around the world.'
  }
])
</script>

<template>
  <div class="category-content">
    <div class="links-header">
      <h2>{{ categoryTileInfo.title }}</h2>
    </div>
    <ul class="nav-list">
      <li v-for="category in categories" :key="category.id">
        <RouterLink
          :to="{
            path: '/link/' + category.category,
            params: { category: category.category }
          }"
          class="nav-category"
        >
          <CategoryCard :category-info="category" />
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.links-header h2 {
  margin-bottom: 25px;
  margin-left: 10px;
}

.links-header {
  display: flex;
}

.nav-list {
  list-style: none;
  padding-left: 0;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: hidden;
}

.nav-list::after {
  content: '';
  width: 30%;
}

.nav-list li {
  width: 30%;
  margin-bottom: 30px;
  margin-right: 10px;
  margin-left: 10px;
  display: flex;
  flex: 1 0 auto;
}

.nav-category {
  text-decoration: none;
  display: flex;
  flex-grow: 1;
}

.nav-category:hover {
  cursor: pointer;
}
</style>
