<template>
  <div class="all" @scroll="scorllEvent">
    <div v-for="(item, index) in divArr" :key="index" class="grid" :class="{'down': down.indexOf(index) !== -1, 'right': right.indexOf(index) !== -1, 'left': left.indexOf(index) !== -1, 'top': top.indexOf(index) !== -1}"></div>
    <div class="photo"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      divArr: [],
      down: [],
      right: [],
      left: [],
      top: []
    }
  },
  mounted () {
    for (let i = 0; i < 102; i++) {
      this.divArr.push(i)
    }
  },
  methods: {
    show (arr) {
      // this.down.push(arr[0])
      // this.right.push(arr[1])
      // this.top.push(arr[2])
      // this.left.push(arr[3])
      // this.down.push(arr[4])
      // this.right.push(arr[5])
      // this.top.push(arr[6])
      // this.left.push(arr[7])
      // this.down.push(arr[8])
      // this.right.push(arr[9])
      this.left.push(arr[0])
      this.left.push(arr[1])
      this.left.push(arr[5])
      this.left.push(arr[6])
      this.top.push(arr[2])
      this.down.push(arr[7])
      this.right.push(arr[3])
      this.right.push(arr[4])
      this.right.push(arr[8])
      this.right.push(arr[9])
    },
    unshow () {
      this.down = []
      this.right = []
      this.left = []
      this.top = []
    },
    scorllEvent (e) {
      console.log(e.target.scrollTop)
      if (e.target.scrollTop > 500 && e.target.scrollTop < 700) {
        let Sarr = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
        this.show(Sarr)
      } else {
        this.unshow()
      }
    }
  }
}
</script>

<style scoped>
.all {
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden;
}

.grid {
  bottom: 400px;
  right: 400px;
  position: relative;
  z-index: 100;
  background: rgb(0, 0, 0);
  float: left;
  width: 20%;
  height: 200px;
  transition: all 2s;
  box-shadow: 0px 0px 1px #fff inset;
  top: 0;
  left: 0;
}
/* 201.59 */
.photo {
  width: 604.76px;
  height: 400px;
  position: absolute;
  top: 800px;
  left: 403.18px;
  background: url('../assets/ox.jpg') no-repeat center center;
  background-size: 100%;
  background-color: #000;
}

.down {
  top: 400px;
  opacity: 0;
}

.top {
  top: -400px;
  opacity: 0;
}

.right {
  left: 400px;
  opacity: 0;
}

.left {
  left: -400px;
  opacity: 0;
}
</style>

