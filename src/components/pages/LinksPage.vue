<script setup lang="ts">
import LinksTile from '../templates/LinksTile.vue'
import { useRoute } from 'vue-router'

const DISPLAYLINKSNUM = 30
const FROM = '2023-11-02'

// TODO: 別ファイルに外だし
const propsMap = [
  {
    category: 'latestLink',
    title: 'Latest Links',
    searchWord: 'bitcoin',
    from: FROM,
    displayLinksNum: DISPLAYLINKSNUM,
    icon: 'pi pi-link'
  },
  {
    category: 'technology',
    title: 'Technology',
    searchWord: 'bitcoin',
    from: FROM,
    displayLinksNum: DISPLAYLINKSNUM,
    icon: 'pi pi-desktop'
  },
  {
    category: 'music',
    title: 'Music',
    searchWord: 'bitcoin',
    from: FROM,
    displayLinksNum: DISPLAYLINKSNUM,
    icon: 'pi pi-volume-up'
  },
  {
    category: 'education',
    title: 'Education',
    searchWord: 'bitcoin',
    from: FROM,
    displayLinksNum: DISPLAYLINKSNUM,
    icon: 'pi pi-book'
  },
  {
    category: 'shopping',
    title: 'Shopping',
    searchWord: 'bitcoin',
    from: FROM,
    displayLinksNum: DISPLAYLINKSNUM,
    icon: 'pi pi-shopping-cart'
  },
  {
    category: 'entertainment',
    title: 'Entertainment',
    searchWord: 'bitcoin',
    from: FROM,
    displayLinksNum: DISPLAYLINKSNUM,
    icon: 'pi pi-thumbs-up'
  },
  {
    category: 'food',
    title: 'Food',
    searchWord: 'bitcoin',
    from: FROM,
    displayLinksNum: DISPLAYLINKSNUM,
    icon: 'pi pi-reddit'
  }
]

const route = useRoute()

const param = route.params

const linksTileProps = propsMap.find((item) => {
  return item.category === param.category
})
</script>

<template>
  <div class="top-page-content">
    <p v-if="!linksTileProps">Link is not found</p>
    <div v-else>
      <LinksTile :link-tile-info="linksTileProps" />
    </div>
  </div>
</template>

<style scoped>
.top-page-content {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.top-page-content h1 {
  margin-bottom: 10px;
}
</style>
