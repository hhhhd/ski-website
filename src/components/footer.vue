<template>
  <section>
    <h1>footer</h1>
    <p>暂时只有一个 footer，后续继续添加</p>
    <p>属性：</p>
    <ul>
      <li>url
        <ul>
          <li>数组</li>
        </ul>
      </li>
    </ul>
    <ski-code>
      <pre slot="codeText">
&lt<span class="skiblue">template</span>&gt
  &lt<span class="skiblue">ski-footer</span> <span class="red">:url</span>=<span class="blue">"['#', '#', '#', '#']"</span>&gt&lt/<span class="skiblue">ski-footer</span>&gt
&lt/<span class="skiblue">template</span>&gt

&lt<span class="skiblue">script</span>&gt
<span class="skiblue">import</span> {<span class="pink"> footer </span>} <span class="skiblue">from 'ski-ui'</span>

<span class="pink">export default</span> {
  <span class="skiblue">components:</span> {
    <span class="skiblue">skiFooter: footer</span>
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
