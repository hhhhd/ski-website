<template>
  <section>
    <h1>prompt</h1>
    <p>属性：show(显示 true || false) msg(String)</p>
    <p>可监听事件：@value (再点击确定的时候会获取到输入的值)</p>
    <ul>
      <li>@value
        <ul>
          <li>fountion</li>
        </ul>
      </li>
    </ul>
    <ski-code>
      <pre slot="codeText">
&lt<span class="skiblue">template</span>&gt
  &lt<span class="skiblue">ski-prompt</span> <span class="red">msg</span>=<span class="blue">"String"</span> <span class="red">show</span>=<span class="blue">"true"</span> <span class="red">@value</span>=<span class="blue">"getValue"</span>&gt&lt/<span class="skiblue">ski-prompt</span>&gt
&lt/<span class="skiblue">template</span>&gt

&lt<span class="skiblue">script</span>&gt
<span class="skiblue">import</span> {<span class="pink"> prompt </span>} <span class="skiblue">from 'ski-ui'</span>

<span class="pink">export default</span> {
  <span class="skiblue">components:</span> {
    <span class="skiblue">skiprompt: prompt</span>
  },
  <span class="skiblue">motheds</span>: {
    <span class="skiblue">getValue</span> (v) {
      <span class="skiblue">console</span>.<span class="green">log</span>(v)
    }
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
