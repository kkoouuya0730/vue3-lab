<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue';

const footerLinks = ref([
  {
    id: 0,
    title: 'About',
    links: [
      {
        title: 'Zennについて',
        url: 'https://zenn.dev/'
      },
      {
        title: '運営会社',
        url: 'https://classmethod.jp/'
      },
      {
        title: 'お知らせ・リリース',
        url: 'https://info.zenn.dev/'
      }
    ]
  },
  {
    id: 1,
    title: 'Guides',
    links: [
      {
        title: '使い方',
        url: 'https://zenn.dev/manual'
      },
      {
        title: 'Publication',
        url: 'https://zenn.dev/publications'
      },
      {
        title: 'よくある質問',
        url: 'https://zenn.dev/faq'
      }
    ]
  },
  {
    id: 2,
    title: 'Links',
    links: [
      {
        title: 'Twitter',
        url: 'https://twitter.com/zenn_dev'
      },
      {
        title: 'GitHub',
        url: 'https://github.com/zenn-dev'
      },
      {
        title: 'メディアキット',
        url: 'https://zenn.dev/mediakit'
      }
    ]
  },
  {
    id: 3,
    title: 'Legal',
    links: [
      {
        title: '利用規約',
        url: 'https://zenn.dev/terms'
      },
      {
        title: '運営会社',
        url: 'https://zenn.dev/privacy'
      },
      {
        title: '特商法表記',
        url: 'https://zenn.dev/terms/transaction-law'
      }
    ]
  },
])
</script>

<template>
  <div class="footer-content">
    <div class="footer-title">
      <h2>TEST</h2>
      <p>エンジニアのための<br>情報共有コミュニティ</p>
    </div>
    <div class="footer-items">
      <ul class="footer-links" v-for="footerLink in footerLinks" :key="footerLink.id">
        <h3>{{ footerLink.title }}</h3>
        <li v-for="navi in footerLink.links" :key="navi.title">
          <a :href="navi.url" target="_blank">
            {{ navi.title }}
          </a>
        </li>
      </ul>
    </div>

  </div>
</template>

<style scoped>
.footer-title {
  text-align: left;
}

.footer-title p {
  font-size: 13px;
  color: gray;
}

.footer-content {
  margin: 0 auto;
  padding: 0 30px;
  max-width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
}

.footer-items {
  justify-content: space-around;
  align-items: stretch;
  display: flex;
}

.footer-links {
  list-style: none;
  text-align: left;
  margin-right: 80px;
}

.footer-links h3 {
  margin-bottom: 10px;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  text-decoration: none;
  color: black;
}

.footer-links a:hover {
  text-decoration: underline;

}
</style>