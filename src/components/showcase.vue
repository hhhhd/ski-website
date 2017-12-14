<template>
    <div class="showcase">
      <div class="show">
        <slot name="code"></slot>
      </div>
      <transition name="fade">
        <div v-if="Scode" class="code">
          <slot name="codeText"></slot>
        </div>
      </transition>
      <div class="btm" @click="showCode">
          <span class="spanMsg">{{ msg }}</span>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "显示代码",
      Scode: false
    };
  },
  methods: {
    showCode() {
      this.Scode = !this.Scode;
      if (this.Scode) {
        this.msg = "隐藏代码";
      } else {
        this.msg = "显示代码";
      }
    }
  }
};
</script>

<style scoped>
.showcase {
  width: 90%;
  margin: 0 auto;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(100, 100, 100, 0.2);
}

.show {
  height: 50px;
  background: #0f0;
}

.btm {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.code {
  padding: 10px;
  background: rgba(153, 153, 153, .1)
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave {
  opacity: 0;
}
</style>
