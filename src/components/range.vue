<template>
  <section>
    <h1>range</h1>
    <p>两个大小：big、small</p>
    <p>属性：type（big，small）setValue（number）：设定初始值 setStep（number）设置每一步走多大</p>
    <my-code>
      <pre slot="codeText">
&lt<span class="skiblue">template</span>&gt
  &lt<span class="skiblue">my-range</span> <span class="red">type</span>=<span class="blue">"big || small"</span> <span class="red">setValue</span>=<span class="blue">"(number)"</span> <span class="red">setStep</span>=<span class="blue">"(number)"</span>&gt&lt/<span class="skiblue">my-range</span>&gt
&lt/<span class="skiblue">template</span>&gt

&lt<span class="skiblue">script</span>&gt
<span class="skiblue">import</span> {<span class="pink"> range </span>} <span class="skiblue">from 'ski-ui'</span>

<span class="pink">export default</span> {
  <span class="skiblue">components:</span> {
    <span class="skiblue">MyRange: range</span>
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
