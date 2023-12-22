<!-- API通信してlinksのデータを取得する -->
<!-- 取得したデータを加工して子コンポーネントに流すだけ -->
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import LinkCard from '../parts/LinkCard.vue';
import { getRequest } from '@/util/api';
import type { Link, LinkTile } from '../../types/link.d.ts'

interface Props {
  linkTileInfo: LinkTile
}

interface ResponseLink {
  status: string
  totalResults: number
  articles: Link[]
}

const newsLinks = ref<ResponseLink>()

const props = defineProps<Props>()

onMounted(async () => {
  newsLinks.value = await getRequest(
    {
      searchWord: props.linkTileInfo.searchWord,
      from: props.linkTileInfo.from
    }
  )
  newsLinks.value?.articles.splice(
    props.linkTileInfo.displayLinksNum,
    newsLinks.value?.articles.length
  )
})
</script>

<template>
  <div class="links-content">
    <div class="links-header" >
      <p class="pi pi-link" style="font-size: 2.5rem"></p>
      <h2>{{ linkTileInfo.title }}</h2>
    </div>
    <p v-if="!newsLinks">Link is not found</p>
    <ul class="nav-list" v-if="newsLinks">
      <li v-for="link in newsLinks.articles" :key="link.source.id">
        <a :href="link.url" target="_blank">
          <LinkCard :link-info="link" />
        </a>
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
  width: 100%;
}

.nav-list::after {
  content: "";
  width: calc(50% - 10px);
}

.nav-list li {
  width: calc(50% - 10px);
  margin-bottom: 30px;
  display: flex;
  flex: 1 0 auto;
}

.nav-list li a {
  text-decoration: none;
  display: flex;
  flex-grow: 1;
}
</style>