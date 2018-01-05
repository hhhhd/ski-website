<template>
  <section>
    <h1>header</h1>
    <p>暂时只有一个 header，后续继续添加</p>
    <p>直接使用，没有属性</p>
    <ski-code>
      <pre slot="codeText">
&lt<span class="skiblue">template</span>&gt
  &lt<span class="skiblue">ski-header</span>&gt&lt/<span class="skiblue">ski-header</span>&gt
&lt/<span class="skiblue">template</span>&gt

&lt<span class="skiblue">script</span>&gt
<span class="skiblue">import</span> {<span class="pink"> header </span>} <span class="skiblue">from 'ski-ui'</span>

<span class="pink">export default</span> {
  <span class="skiblue">components:</span> {
    <span class="skiblue">skiheader: header</span>
  }
}
&lt/<span class="skiblue">script</span>&gt
      </pre>
    </ski-code>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
