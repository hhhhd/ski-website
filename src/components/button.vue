<template>
  <section class="button">
    <h1>button</h1>
    <my-code>
      <pre slot="codeText">
<p>&lttemplate&gt
  &ltsection&gt
    &lth1&gtbutton&lt/h1&gt
  &lt/sention&gt
&lt/template&gt</p>
      </pre>
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
