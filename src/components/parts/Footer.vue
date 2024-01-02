<script setup lang="ts">
import footerMenuItems from '../../data/footerMenuItems.json'

const footerLinks = footerMenuItems.footerMenuItems
</script>

<template>
  <div class="footer-content">
    <div class="footer-title">
      <h2>TEST</h2>
      <p>エンジニアのための<br />情報共有コミュニティ</p>
    </div>
    <div class="footer-items">
      <ul
        class="footer-links"
        v-for="footerLink in footerLinks"
        :key="footerLink.id"
      >
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
