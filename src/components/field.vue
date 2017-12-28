<template>
  <section>
    <h1>field</h1>
    <p>五种类型</p>
    <p>四个属性：type（text, birthday, self, number, verification）msg（String）@getValue（获取输入的值）defaultText（默认文字）</p>
    <my-code>
      <pre slot="codeText">
&lt<span class="skiblue">template</span>&gt
  &lt<span class="skiblue">my-field</span> <span class="red">type</span>=<span class="blue">"text"</span> <span class="red">msg</span>=<span class="blue">"String"</span> <span class="red">defaultText</span>=<span class="blue">"String"</span> <span class="red">@getValue</span>=<span class="blue">"Event"</span>&gt&lt/<span class="skiblue">my-field</span>&gt
&lt/<span class="skiblue">template</span>&gt

&lt<span class="skiblue">script</span>&gt
<span class="skiblue">import</span> {<span class="pink"> field </span>} <span class="skiblue">from 'ski-ui'</span>

<span class="pink">export default</span> {
  <span class="skiblue">components:</span> {
    <span class="skiblue">Myfield: field</span>
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
