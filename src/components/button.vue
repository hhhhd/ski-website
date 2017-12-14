<template>
  <section class="button">
    <h1>button</h1>
    <my-code>
      <div slot="codeText">
        <pre>
          <p>asdas</p>
        </pre>
      </div>
    </my-code>
  </section>
</template>

<script>
import MyCode from './showcase.vue'

export default {
  components: {
    MyCode
  }
}
</script>

<style scoped>
.button p {
}
</style>
