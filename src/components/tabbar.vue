<template>
  <section>
    <h1>tabbar</h1>
    <my-code>
      <pre slot="codeText">
&lt<span class="skiblue">template</span>&gt
  &lt<span class="skiblue">my-tabbar</span> <span class="red">:boxOne</span>=<span class="white">"[{value: 'text'}, {value: 'text'}, {value: 'text'}]"</span>&gt&lt/<span class="skiblue">my-tabbar</span>&gt
  &lt<span class="skiblue">my-tabbar</span> <span class="red">:boxTwo</span>=<span class="white">"[{value: 'text'}, {value: 'text'}, {value: 'text'}]"</span>&gt&lt/<span class="skiblue">my-tabbar</span>&gt
  &lt<span class="skiblue">my-tabbar</span> <span class="red">:boxThree</span>=<span class="white">"[{value: 'text'}, {value: 'text'}, {value: 'text'}]"</span>&gt&lt/<span class="skiblue">my-tabbar</span>&gt
  &lt<span class="skiblue">my-tabbar</span> <span class="red">:boxFour</span>=<span class="white">"[{value: 'text'}, {value: 'text'}, {value: 'text'}]"</span>&gt&lt/<span class="skiblue">my-tabbar</span>&gt
&lt/<span class="skiblue">template</span>&gt

&lt<span class="skiblue">script</span>&gt
<span class="skiblue">import</span> {<span class="pink"> tabbar </span>} <span class="skiblue">from 'ski-ui'</span>

<span class="pink">export default</span> {
  <span class="skiblue">components:</span> {
    <span class="skiblue">MyTabbar: tabbar</span>
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
