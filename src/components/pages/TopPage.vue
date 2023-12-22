<script setup lang="ts">
import LinksTile from '../templates/LinksTile.vue';
import CegoriesTile from '../templates/CegoriesTile.vue'

const DISPLAYLINKSNUM = 10
const SEARCHWORD = 'bitcoin'
const FROM = '2023-11-02'
const LATESTLINKSTITLE = 'Latest Links'
const CATEGORYTIETITLE = 'Browse by Category'

const linksTileProps = {
  category: 'latestLink',
  title: LATESTLINKSTITLE,
  searchWord: SEARCHWORD,
  from: FROM,
  displayLinksNum: DISPLAYLINKSNUM,
  icon: 'pi pi-link'
}

const categoryTileProps = {
  title: CATEGORYTIETITLE
}
</script>

<template>
  <div class="top-page-content">
    <div>
      <CegoriesTile :category-tile-info="categoryTileProps"/>
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