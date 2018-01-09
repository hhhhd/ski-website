<template>
  <section>
    <h1>checklist</h1>
    <p>属性</p>
    <ul>
      <li>getArr
        <ul>
          <li>Array(condition:是否选中 / forbidden:是否禁止改变)</li>
        </ul>
      </li>
    </ul>
    <ski-code>
      <pre slot="codeText">
&lt<span class="skiblue">template</span>&gt
  &lt<span class="skiblue">ski-checklist</span> <span class="red">:getArr</span>=<span class="blue">"[{condition: true, orbidden: false}, {condition: false, forbidden: true}]"</span>&gt&lt/<span class="skiblue">ski-checklist</span>&gt
&lt/<span class="skiblue">template</span>&gt

&lt<span class="skiblue">script</span>&gt
<span class="skiblue">import</span> {<span class="pink"> checklist </span>} <span class="skiblue">from 'ski-ui'</span>

<span class="pink">export default</span> {
  <span class="skiblue">components:</span> {
    <span class="skiblue">skiChecklist: checklist</span>
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
