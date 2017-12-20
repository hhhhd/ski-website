<template>
    <div class="showcase">
      <div class="show">
        <slot name="code"></slot>
      </div>
      <div v-show="Scode" class="code">
        <slot name="codeText"></slot>
      </div>
      <div class="btm" @click="Scode = !Scode">
          <span class="spanMsg">代码块</span>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      Scode: false
    }
  }
}
</script>

<style scoped>
.showcase {
  width: 90%;
  margin: 0 auto;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(100, 100, 100, 0.2);
  transition: all .3s;
  background: rgb(30, 30, 30);
  color: #fff;
}

.showcase:hover {
  box-shadow: 0px 0px 15px rgba(100, 100, 100, 0.3);
}

.show {
  background: #fff;
  box-shadow: 0px 0px 10px rgba(100, 100, 100, 0.2);
}

.btm {
  background: #fff;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #000;
}

.code {
  padding: 10px;
  /* background: rgba(153, 153, 153, .1) */
}

.code pre {
  margin: 0;
  height: 100%;
  width: 100%;
  overflow-x: scroll
}
</style>
