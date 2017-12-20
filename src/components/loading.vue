<template>
  <section>
    <h1>loading</h1>
    <p>暂时只有一个 loading，后续继续添加</p>
    <p>直接使用，没有属性</p>
    <my-code>
      <pre slot="codeText">
&lt<span class="skiblue">template</span>&gt
  &lt<span class="skiblue">my-loading</span>&gt&lt/<span class="skiblue">my-loading</span>&gt
&lt/<span class="skiblue">template</span>&gt

&lt<span class="skiblue">script</span>&gt
<span class="skiblue">import</span> {<span class="pink"> loading </span>} <span class="skiblue">from 'ski-ui'</span>

<span class="pink">export default</span> {
  <span class="skiblue">components:</span> {
    <span class="skiblue">MyLoading: loading</span>
  }
}
&lt/<span class="skiblue">script</span>&gt
      </pre>
    </my-code>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
