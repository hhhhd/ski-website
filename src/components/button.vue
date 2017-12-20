<template>
  <section class="button">
    <h1>button</h1>
    <p>按钮分为三种类型，三种大小，通过两个属性进行控制</p>
    <p>属性：'<span class="red">type</span>'&'<span class="red">size</span>'，<span class="red">type</span>:"<span class="blue">default</span> || <span class="blue">danger</span> || <span class="blue">primary</span>" <span class="red">size</span>:"<span class="blue">big</span> || <span class="blue">middle</span> || <span class="blue">small</span>"</p>
    <my-code>
      <div slot="code">
        <!-- <my-button type="default" size="big"></my-button>
        <my-button type="danger" size="big"></my-button>
        <my-button type="primary" size="big"></my-button>
        <my-button type="default" size="middle"></my-button>
        <my-button type="danger" size="middle"></my-button>
        <my-button type="primary" size="middle"></my-button>
        <my-button type="default" size="small"></my-button>
        <my-button type="danger" size="small"></my-button>
        <my-button type="primary" size="small"></my-button> -->
        <my-button type="default" size="big"></my-button>
      </div>
      <pre slot="codeText">
&lt<span class="skiblue">template</span>&gt
  &lt<span class="skiblue">my-button</span> <span class="red">type</span>=<span class="blue">"danger"</span> <span class="red">size</span>=<span class="blue">"big"</span>&gt&lt/<span class="skiblue">my-button</span>&gt
  &lt<span class="skiblue">my-button</span> <span class="red">type</span>=<span class="blue">"danger"</span> <span class="red">size</span>=<span class="blue">"small"</span>&gt&lt/<span class="skiblue">my-button</span>&gt
  &lt<span class="skiblue">my-button</span> <span class="red">type</span>=<span class="blue">"danger"</span> <span class="red">size</span>=<span class="blue">"middle"</span>&gt&lt/<span class="skiblue">my-button</span>&gt
  &lt<span class="skiblue">my-button</span> <span class="red">type</span>=<span class="blue">"default"</span> <span class="red">size</span>=<span class="blue">"big"</span>&gt&lt/<span class="skiblue">my-button</span>&gt
  &lt<span class="skiblue">my-button</span> <span class="red">type</span>=<span class="blue">"default"</span> <span class="red">size</span>=<span class="blue">"small"</span>&gt&lt/<span class="skiblue">my-button</span>&gt
  &lt<span class="skiblue">my-button</span> <span class="red">type</span>=<span class="blue">"default"</span> <span class="red">size</span>=<span class="blue">"middle"</span>&gt&lt/<span class="skiblue">my-button</span>&gt
  &lt<span class="skiblue">my-button</span> <span class="red">type</span>=<span class="blue">"primary"</span> <span class="red">size</span>=<span class="blue">"big"</span>&gt&lt/<span class="skiblue">my-button</span>&gt
  &lt<span class="skiblue">my-button</span> <span class="red">type</span>=<span class="blue">"primary"</span> <span class="red">size</span>=<span class="blue">"small"</span>&gt&lt/<span class="skiblue">my-button</span>&gt
  &lt<span class="skiblue">my-button</span> <span class="red">type</span>=<span class="blue">"primary"</span> <span class="red">size</span>=<span class="blue">"middle"</span>&gt&lt/<span class="skiblue">my-button</span>&gt
&lt/<span class="skiblue">template</span>&gt

&lt<span class="skiblue">script</span>&gt
<span class="skiblue">import</span> <span class="pink">{<span class="pink"> button </span>}</span> <span class="skiblue">from 'ski-ui'</span>

<span class="pink">export default</span> {
  <span class="skiblue">components:</span> {
    <span class="skiblue">MyButton: button</span>
  }
}
&lt/<span class="skiblue">script</span>&gt
      </pre>
    </my-code>
  </section>
</template>

<script>
import { button } from 'ski-ui'

export default {
  components: {
    MyButton: button
  }
}
</script>

<style scoped>
</style>
