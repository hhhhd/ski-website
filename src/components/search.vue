<template>
  <section>
    <h1>search</h1>
    <p>没有属性，直接使用</p>
    <p>用 @value 获取到输入的值</p>
    <my-code>
      <pre slot="codeText">
&lt<span class="skiblue">template</span>&gt
  &lt<span class="skiblue">ski-search</span> <span class="red">@value</span>=<span class="blue">"Event"</span>&gt&lt/<span class="skiblue">ski-search</span>&gt
&lt/<span class="skiblue">template</span>&gt

&lt<span class="skiblue">script</span>&gt
<span class="skiblue">import</span> {<span class="pink"> search </span>} <span class="skiblue">from 'ski-ui'</span>

<span class="pink">export default</span> {
  <span class="skiblue">components:</span> {
    <span class="skiblue">skiSearch: search</span>
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
