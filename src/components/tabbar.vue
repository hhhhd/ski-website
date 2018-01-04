<template>
  <section>
    <h1>tabbar</h1>
    <p>属性：通过 :boxOne, :boxTwo, :boxThree, :boxFour控制每个页面的内容</p>
    <p>书写格式：:boxOne="[{value: adasd}, {value: adasd}, {value: adasd}, {value: adasd}]"</p>
    <p>数组里每一个 json 对象表示一格内容满，内容还有 value</p>
    <my-code>
      <pre slot="codeText">
&lt<span class="skiblue">template</span>&gt
  &lt<span class="skiblue">ski-tabbar</span> <span class="red">:boxOne</span>=<span class="white">"[{value: 'text'}, {value: 'text'}, {value: 'text'}]"</span>&gt&lt/<span class="skiblue">ski-tabbar</span>&gt
  &lt<span class="skiblue">ski-tabbar</span> <span class="red">:boxTwo</span>=<span class="white">"[{value: 'text'}, {value: 'text'}, {value: 'text'}]"</span>&gt&lt/<span class="skiblue">ski-tabbar</span>&gt
  &lt<span class="skiblue">ski-tabbar</span> <span class="red">:boxThree</span>=<span class="white">"[{value: 'text'}, {value: 'text'}, {value: 'text'}]"</span>&gt&lt/<span class="skiblue">ski-tabbar</span>&gt
  &lt<span class="skiblue">ski-tabbar</span> <span class="red">:boxFour</span>=<span class="white">"[{value: 'text'}, {value: 'text'}, {value: 'text'}]"</span>&gt&lt/<span class="skiblue">ski-tabbar</span>&gt
&lt/<span class="skiblue">template</span>&gt

&lt<span class="skiblue">script</span>&gt
<span class="skiblue">import</span> {<span class="pink"> tabbar </span>} <span class="skiblue">from 'ski-ui'</span>

<span class="pink">export default</span> {
  <span class="skiblue">components:</span> {
    <span class="skiblue">skiTabbar: tabbar</span>
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
