<template>
  <section>
    <h1>switch</h1>
    <p>开关按钮</p>
    <p>属性：v-model（内传入 true || false）</p>
    <ul>
      <li>v-model
        <ul>
          <li>true</li>
          <li>false</li>
        </ul>
      </li>
    </ul>
    <ski-code>
      <pre slot="codeText">
&lt<span class="skiblue">template</span>&gt
  &lt<span class="skiblue">ski-switch</span>&gt&lt/<span class="skiblue">ski-switch</span>&gt
&lt/<span class="skiblue">template</span>&gt

&lt<span class="skiblue">script</span>&gt
<span class="skiblue">import</span> {<span class="pink"> switch </span>} <span class="skiblue">from 'ski-ui'</span>

<span class="pink">export default</span> {
  <span class="skiblue">components:</span> {
    <span class="skiblue">skiSwitch: switch</span>
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
