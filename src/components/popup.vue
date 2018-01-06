<template>
  <section>
    <h1>popup</h1>
    <p>三种类型：top，middle，right</p>
    <p>属性：type（top，middle，right） msg（string） show（true || false）</p>
    <ul>
      <li>type
        <ul>
          <li>top</li>
          <li>middle</li>
          <li>right</li>
        </ul>
      </li>
      <li>msg
        <ul>
          <li>String</li>
        </ul>
      </li> 
      <li>show
        <ul>
          <li>true</li>
          <li>false</li>
        </ul>
      </li>
    </ul>
    <ski-code>
      <pre slot="codeText">
&lt<span class="skiblue">template</span>&gt
  &lt<span class="skiblue">ski-popup</span> <span class="red">type</span>=<span class="blue">"top"</span> <span class="red">msg</span>=<span class="blue">"这是一个消息"</span> <span class="red">show</span>=<span class="blue">"true"</span>&gt&lt/<span class="skiblue">ski-popup</span>&gt
  &lt<span class="skiblue">ski-popup</span> <span class="red">type</span>=<span class="blue">"middle"</span> <span class="red">msg</span>=<span class="blue">"这是一个消息"</span> <span class="red">show</span>=<span class="blue">"true"</span>&gt&lt/<span class="skiblue">ski-popup</span>&gt
  &lt<span class="skiblue">ski-popup</span> <span class="red">type</span>=<span class="blue">"right"</span> <span class="red">msg</span>=<span class="blue">"这是一个消息"</span> <span class="red">show</span>=<span class="blue">"true"</span>&gt&lt/<span class="skiblue">ski-popup</span>&gt
&lt/<span class="skiblue">template</span>&gt

&lt<span class="skiblue">script</span>&gt
<span class="skiblue">import</span> {<span class="pink"> popup </span>} <span class="skiblue">from 'ski-ui'</span>

<span class="pink">export default</span> {
  <span class="skiblue">components:</span> {
    <span class="skiblue">skipopup: popup</span>
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
