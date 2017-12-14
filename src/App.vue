<template>
  <div id="app">
    <div class="official">
      <div class="top"></div>
      <div class="content">
        <div class="nav">
          <span v-for="(item, index) in navArr" :key="index" @click="$router.push(`/${item}`)">{{ item }}</span>
        </div>
        <div class="detail">
          <router-view/>
          <span class="footer"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      navArr: ['actionSheet', 'alert', 'badge', 'button', 'checklist', 'field', 'header', 'indicator', 'loading', 'popup', 'prompt', 'range', 'search', 'spinner', 'swipe', 'tabbar', 'tabContainer', 'toast']
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


.official {
  width: 100%;
}

.top {
  height: 10%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
}

.content {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 90%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav {
  width: 30%;
  height: 100%;
  overflow-y: scroll;
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* box-shadow: -5px 5px 100px #999 inset; */
}

.nav span {
  cursor: pointer;
  margin: 10px 0;
}

.nav span:hover {
  color: rgb(85, 158, 248);
}

.detail {
  width: 70%;
  height: 100%;
  overflow-y: scroll;
  /* box-shadow: 5px 5px 100px #999 inset; */
}

.detail p {
  padding: 20px;
}

.detail h1, h2, h3, h4, h5, h6 {
  padding: 20px;
  margin: 0;
}

.section {
  height: 100%;
  width: 100%;
  background: #000;
  overflow-y: scroll;
}
</style>
