<template>
  <section>
    <h1>actionSheet</h1>
    <p>调用相机进行拍照取照片</p>
    <p>属性：show（true || false）</p>
    <ski-code>
      <pre slot="codeText">
&lt<span class="skiblue">template</span>&gt
  &lt<span class="skiblue">ski-actionSheet</span> <span class="red">show</span>=<span class="blue">"true"</span>&gt&lt/<span class="skiblue">ski-actionSheet</span>&gt
&lt/<span class="skiblue">template</span>&gt

&lt<span class="skiblue">script</span>&gt
<span class="skiblue">import</span> {<span class="pink"> actionSheet </span>} <span class="skiblue">from 'ski-ui'</span>

<span class="pink">export default</span> {
  <span class="skiblue">components:</span> {
    <span class="skiblue">ski-ActionSheet: actionSheet</span>
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
