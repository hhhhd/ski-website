<template>
  <section>
    <h1>field</h1>
    <p>五种类型</p>
    <p>四个属性：type（text, birthday, self, number, verification）msg（String）@getValue（获取输入的值）defaultText（默认文字）</p>
    <ul>
      <li>type
        <ul>
          <li>text</li>
          <li>birthday</li>
          <li>self</li>
          <li>number</li>
          <li>verification</li>
        </ul>
      </li>
      <li>msg
        <ul>
          <li>String</li>
        </ul>
      </li>
      <li>defaultText
        <ul>
          <li>String</li>
        </ul>
      </li>
      <li>@getValue
        <ul>
          <li>fountion</li>
        </ul>
      </li>
    </ul>
    <ski-code>
      <pre slot="codeText">
&lt<span class="skiblue">template</span>&gt
  &lt<span class="skiblue">ski-field</span> <span class="red">type</span>=<span class="blue">"text"</span> <span class="red">msg</span>=<span class="blue">"String"</span> <span class="red">defaultText</span>=<span class="blue">"String"</span> <span class="red">@getValue</span>=<span class="blue">"Event"</span>&gt&lt/<span class="skiblue">ski-field</span>&gt
&lt/<span class="skiblue">template</span>&gt

&lt<span class="skiblue">script</span>&gt
<span class="skiblue">import</span> {<span class="pink"> field </span>} <span class="skiblue">from 'ski-ui'</span>

<span class="pink">export default</span> {
  <span class="skiblue">components:</span> {
    <span class="skiblue">skifield: field</span>
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
