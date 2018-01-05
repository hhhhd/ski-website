<template>
  <section>
    <h1>Alert</h1>
    <p>属性：msg（显示弹出的文字）show(true || false)</p>
    <ski-code>
      <pre slot="codeText">
&lt<span class="skiblue">template</span>&gt
  &lt<span class="skiblue">ski-alert</span> <span class="red">msg</span>=<span class="white">"msg"</span> <span class="red">show</span>=<span class="skiblue">"true"</span>&gt&lt/<span class="skiblue">ski-alert</span>&gt
&lt/<span class="skiblue">template</span>&gt

&lt<span class="skiblue">script</span>&gt
<span class="skiblue">import</span> {<span class="pink"> alert </span>} <span class="skiblue">from 'ski-ui'</span>

<span class="pink">export default</span> {
  <span class="skiblue">components:</span> {
    <span class="skiblue">skiAlert: alert</span>
  }
}
&lt/<span class="skiblue">script</span>&gt
      </pre>
    </ski-code>
  </section>
</template>

<script>
import { alert } from 'ski-ui'

export default {
  components: {
    skiAlert: alert
  }
}
</script>

<style scoped>


</style>
