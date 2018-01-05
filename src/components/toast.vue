<template>
  <section>
    <h1>toast</h1>
    <p>一共两种（middle，bottom）</p>
    <p>属性：</p>
    <ul>
      <li>type
        <ul>
          <li>middle</li>
          <li>bottom</li>
        </ul> 
      </li>
      <li>msg
        <ul>
          <li>文本</li>
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
  &lt<span class="skiblue">ski-toast</span> <span class="red">type</span>=<span class="blue">"middle"</span> <span class="red">show</span>=<span class="blue">"true"</span> <span class="red">msg</span>=<span class="blue">"text"</span>&gt&lt/<span class="skiblue">ski-toast</span>&gt
&lt/<span class="skiblue">template</span>&gt

&lt<span class="skiblue">script</span>&gt
<span class="skiblue">import</span> {<span class="pink"> toast </span>} <span class="skiblue">from 'ski-ui'</span>

<span class="pink">export default</span> {
  <span class="skiblue">components:</span> {
    <span class="skiblue">skiToast: toast</span>
  }
}
&lt/<span class="skiblue">script</span>&gt
      </pre>
    </ski-code>
  </section>
</template>

<<script>
export default {
}
</script>

<style scoped>
</style>
