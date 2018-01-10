<template>
  <div id="app">
    <div class="official">
      <div class="open-nav" @click="showNav = !showNav">⍾</div>      
      <div class="top">
        <span class="logo">ski-ui
        </span>
        <ul class="dh">
          <li>关于</li>
          <li @click="$router.push('/actionSheet')">导航</li>
          <li>信息</li>
          <li>反馈</li>
        </ul>
      </div>
      <div class="content">
        <div class="nav" :class="{'nav-true': showNav}">
          <span v-for="(item, index) in navArr" :key="index" @click="$router.push(`/${item}`)">{{ item }}</span>
        </div>
        <div class="detail">
          <transition name="fade">
          <router-view/>
          </transition>
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
      navArr: ['info', 'actionSheet', 'alert', 'badge', 'footer', 'button', 'checklist', 'field', 'header', 'indicator', 'loading', 'popup', 'prompt', 'range', 'search', 'spinner', 'swipe', 'switching', 'tabbar', 'tabContainer', 'toast'],
      showNav: false
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

.logo {
  width: 30%;
  cursor: pointer;
  height: 100%;
  display: flex;
  color: #fff;
  font-size: 40px;
  align-items: center;
  justify-content: center;
  position: relative;
}

.dh {
  list-style: none;
  margin: 0;
  padding: 0;
  width: 70%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dh li {
  float: left;
  padding: 4% 45px;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  transition: all .4s;
}

.dh li:hover {
  background: #fff;
  color: #000;
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
  position: relative;
  left: -30%;
  transition: all 1s;
  opacity: 0;
  background: linear-gradient(to right, #fff, rgb(233, 236, 233))
}

.nav-true {
  left: 0;
  opacity: 1;
}

.open-nav {
  width: 100px;
  height: 80px;
  background: rgb(85, 158, 248);
  z-index: 10;
  position: absolute;
  top: 0px;
  left: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: #fff;
  transition: all .4s;
}

.open-nav:hover {
  background: rgb(44, 122, 216);
}

.nav::-webkit-scrollbar {
  display: none;
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

.detail h1, h2, h3, h4, h5, h6, code, p {
  padding: 20px;
  margin: 0;
}

.detail p {
  line-height: 180%;
}

.section {
  height: 100%;
  width: 100%;
  background: #000;
  overflow-y: scroll;
}

.skiblue {
  color: rgb(85, 158, 248);
}

.blue {
  color: rgb(0, 0, 255)
}

.red {
  color: rgb(255, 0, 0)
}

.pink {
  color: rgb(197, 134, 192)
}

.green {
  color: rgb(38, 127, 153)
}

.white {
  color: #fff;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .6s
}
.fade-enter, .fade-leave {
    opacity: 0
}
</style>
