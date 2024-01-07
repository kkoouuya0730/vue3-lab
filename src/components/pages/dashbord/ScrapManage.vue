<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

import scrapTabMenu from '../../../data/scrapTabMenu.json'
import { supabase } from '@/supabase'

import type { Scrap } from '@/types/scrap'

const scraps = ref<Scrap[]>([])

onMounted(() => {
  getScraps()
})

const getScraps = async () => {
  try {
    const { data, error, status } = await supabase
      .from('scraps')
      .select('*')
    if (error && status !== 406) throw error

    if (data) {
      scraps.value = data
    }
  } catch (error: any) {
    alert(error.message)
  }
}

const TABMENUS = scrapTabMenu.tabMenus

// 0~3の4つしか取れないようにする
type ActiveIndexRange = 0 | 1 | 2 | 3
const activeTabIndex = ref<ActiveIndexRange>(0)

// TODO tabの数が増えたらcaseも増やすことになってしまう
const filterdScraps = computed(() => {
  return scraps.value.filter((scrap: Scrap) => {
    switch (activeTabIndex.value) {
      case 0:
        return scrap
      case 1:
        if (!scrap.closed && !scrap.archived) return scrap
        break
      case 2:
        if (scrap.closed) return scrap
        break
      case 3:
        if (scrap.archived) return scrap
        break
      default:
        scrap
    }
  })
})

// TODO 下の関数と共通化
const converToStatus = (scrap: Scrap) => {
  if (scrap.closed) return 'Closed'
  if (scrap.archived) return 'Archived'
  return 'Open'
}

const convertToSeverity = (scrap: Scrap) => {
  if (scrap.closed) return 'warning'
  if (scrap.archived) return 'danger'
  return 'info'
}

const createHref = (scrap: Scrap) => {
  if (scrap.path) return `https://zenn.dev${scrap.path}`
}
</script>

<template>
  <div class="scrap-manage-container">
    <div class="view-title-container">
      <h1>スクラップの管理</h1>
      <p>新規作成</p>
    </div>
    <span class="margin-span"></span>
    <PrInputText class="pr-input-text"></PrInputText>
    <span class="margin-span"></span>
    <div>
      <PrTabMenu
        :model="TABMENUS"
        v-model:activeIndex="activeTabIndex"
        class="tab-menu"
      />
      <div>
        <ul class="artciles">
          <li
            v-for="scrap in filterdScraps"
            :key="scrap.id"
            class="artcile-list"
          >
            <h3>
              <a
                :href="createHref(scrap)"
                class="ScrapItem_title__1WIrp"
                target="_blank"
              >
                {{ scrap.title }}
              </a>
            </h3>
            <div class="scrap-footer">
              <PrTag
                :severity="convertToSeverity(scrap)"
                :value="converToStatus(scrap)"
                style="color: white; margin-right: 10px"
                rounded
              />
              <span class="pi pi-comment">{{
                scrap.comments_count
              }}</span>
            </div>
            <hr style="border: solid thin gainsboro" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style>
.ScrapItem_title__1WIrp {
  text-decoration: none;
  color: black;
}

.artciles {
  list-style: none;
  margin-top: 20px;
}
.artcile-list {
  margin-top: 30px;
}

.view-title-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.margin-span {
  height: 20px;
  display: block;
}

.pr-input-text {
  width: 100%;
}

.scrap-footer {
  display: flex;
  margin: 10px 0;
}
</style>
