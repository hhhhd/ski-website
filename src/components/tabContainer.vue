<template>
  <section>
    <h1>tabContainer</h1>
    <p>暂时只有一个 tabContainer，后续继续添加</p>
    <p>属性：</p>
    <ul>
      <li>title
        <ul>
          <li>Array(['1', '2', '3'])</li>
        </ul>
      </li>
      <li>value
        <ul>
          <li>number(1~3)</li>
        </ul>
      </li>
    </ul>
    <ski-code>
      <pre slot="codeText">
&lt<span class="skiblue">template</span>&gt
  &lt<span class="skiblue">ski-tabContainer</span> <span class="red">:title</span>=<span class="blue">"['1', '2', '3']"</span> <span class="red">:value</span>=<span class="blue">"1"</span>&gt&lt/<span class="skiblue">ski-tabContainer</span>&gt
&lt/<span class="skiblue">template</span>&gt

&lt<span class="skiblue">script</span>&gt
<span class="skiblue">import</span> {<span class="pink"> tabContainer </span>} <span class="skiblue">from 'ski-ui'</span>

<span class="pink">export default</span> {
  <span class="skiblue">components:</span> {
    <span class="skiblue">skiTabContainer: tabContainer</span>
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
