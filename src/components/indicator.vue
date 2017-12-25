<template>
  <section>
    <h1>indicator</h1>
    <p>暂时只有一个 indicator，后续继续添加</p>
    <p>属性：show(控制显示 true || false) showText(控制文字的显示 true || false) msg(当 showText 为 true 的时候 msg 中的文字就能显示 String)</p>
    <my-code>
      <pre slot="codeText">
&lt<span class="skiblue">template</span>&gt
  &lt<span class="skiblue">my-indicator</span> <span class="red">show</span>=<span class="blue">"true"</span> <span class="red">showText</span>=<span class="blue">"true"</span> <span class="red">msg</span>=<span class="blue">"这是一条消息"</span>&gt&lt/<span class="skiblue">my-indicator</span>&gt
&lt/<span class="skiblue">template</span>&gt

&lt<span class="skiblue">script</span>&gt
<span class="skiblue">import</span> {<span class="pink"> indicator </span>} <span class="skiblue">from 'ski-ui'</span>

<span class="pink">export default</span> {
  <span class="skiblue">components:</span> {
    <span class="skiblue">Myindicator: indicator</span>
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
