<template>
  <section>
    <h1>spinner</h1>
    <p>动画加载</p>
    <p>type(round, snake, roulette, window, wave)</p>
    <ski-code>
      <pre slot="codeText">
&lt<span class="skiblue">template</span>&gt
  &lt<span class="skiblue">ski-spinner</span> <span class="red">type</span>=<span class="blue">"snake"</span>&gt&lt/<span class="skiblue">ski-spinner</span>&gt
  &lt<span class="skiblue">ski-spinner</span> <span class="red">type</span>=<span class="blue">"round"</span>&gt&lt/<span class="skiblue">ski-spinner</span>&gt
  &lt<span class="skiblue">ski-spinner</span> <span class="red">type</span>=<span class="blue">"roulette"</span>&gt&lt/<span class="skiblue">ski-spinner</span>&gt
  &lt<span class="skiblue">ski-spinner</span> <span class="red">type</span>=<span class="blue">"window"</span>&gt&lt/<span class="skiblue">ski-spinner</span>&gt
  &lt<span class="skiblue">ski-spinner</span> <span class="red">type</span>=<span class="blue">"wave"</span>&gt&lt/<span class="skiblue">ski-spinner</span>&gt
&lt/<span class="skiblue">template</span>&gt

&lt<span class="skiblue">script</span>&gt
<span class="skiblue">import</span> {<span class="pink"> spinner </span>} <span class="skiblue">from 'ski-ui'</span>

<span class="pink">export default</span> {
  <span class="skiblue">components:</span> {
    <span class="skiblue">skispinner: spinner</span>
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
