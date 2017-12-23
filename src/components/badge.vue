<template>
  <section>
    <h1>badge</h1>
    <p>四种颜色，三个大小</p>
    <p>属性：type（big，small，middle）color（blue，red，green，yellow）msg（string）</p>
    <my-code>
      <pre slot="codeText">
&lt<span class="skiblue">template</span>&gt
  &lt<span class="skiblue">my-badge</span>&gt <span class="red">type</span>=<span class="blue">"big"</span> <span class="red">color</span>=<span class="blue">"yellow"</span> <span class="red">msg</span>=<span class="blue">"100"</span>&lt/<span class="skiblue">my-badge</span>&gt
  &lt<span class="skiblue">my-badge</span>&gt <span class="red">type</span>=<span class="blue">"big"</span> <span class="red">color</span>=<span class="blue">"blue"</span> <span class="red">msg</span>=<span class="blue">"100"</span>&lt/<span class="skiblue">my-badge</span>&gt
  &lt<span class="skiblue">my-badge</span>&gt <span class="red">type</span>=<span class="blue">"middle"</span> <span class="red">color</span>=<span class="blue">"red"</span> <span class="red">msg</span>=<span class="blue">"100"</span>&lt/<span class="skiblue">my-badge</span>&gt
  &lt<span class="skiblue">my-badge</span>&gt <span class="red">type</span>=<span class="blue">"small"</span> <span class="red">color</span>=<span class="blue">"green"</span> <span class="red">msg</span>=<span class="blue">"100"</span>&lt/<span class="skiblue">my-badge</span>&gt
&lt/<span class="skiblue">template</span>&gt

&lt<span class="skiblue">script</span>&gt
<span class="skiblue">import</span> {<span class="pink"> badge </span>} <span class="skiblue">from 'ski-ui'</span>

<span class="pink">export default</span> {
  <span class="skiblue">components:</span> {
    <span class="skiblue">MyBadge: badge</span>
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
