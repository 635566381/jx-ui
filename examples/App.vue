<template>
  <div id="app">
    <demo />
    <jx-card
      imgSrc="java.png"
      summary="剑指Java面试-Offer直通车  百度资深面试官授课"
    />
    <br />
    <jx-card
      imgSrc="c.png"
      summary="C语言系统化精讲  重塑你的编程思想 打造坚实的开发基础"
    >
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级 · 528人报名</div>
          <div class="price">￥299.00</div>
        </div>
      </template>
    </jx-card>
    <br />
    <jx-card imgSrc="spring.png" :width="370" :imgHeight="90">
      本路线旨在帮助想快速掌握SpringBoot应用的工程师，全方位多角度带你升级。
      <template v-slot:footer>
        <div class="footer-spring">
          <div class="level">4步骤 · 6门课</div>
          <div class="level">10965收藏</div>
        </div>
      </template>
    </jx-card>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.level {
  color: #9199a1;
  margin-bottom: 8px;
}
.price {
  color: #f01414;
}
.footer-spring {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size: 12px;
}
</style>
