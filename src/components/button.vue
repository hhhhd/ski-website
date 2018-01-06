<template>
  <section class="button">
    <h1>button</h1>
    <p>按钮分为三种类型，三种大小，通过两个属性进行控制</p>
    <p>属性：'<span class="red">type</span>'&'<span class="red">size</span>'，<span class="red">type</span>:"<span class="blue">default</span> || <span class="blue">danger</span> || <span class="blue">primary</span>" <span class="red">size</span>:"<span class="blue">big</span> || <span class="blue">middle</span> || <span class="blue">small</span>"</p>
    <ul>
      <li>type
        <ul>
          <li>default</li>
          <li>danger</li>
          <li>primary</li>
        </ul>
      </li>
      <li>size
        <ul>
          <li>big</li>
          <li>small</li>
          <li>middle</li>
        </ul>
      </li>
    </ul>
    <ski-code>
      <div slot="code">
        <ski-button type="default" size="big"></ski-button>
      </div>
      <pre slot="codeText">
&lt<span class="skiblue">template</span>&gt
  &lt<span class="skiblue">ski-button</span> <span class="red">type</span>=<span class="blue">"danger"</span> <span class="red">size</span>=<span class="blue">"big"</span>&gt&lt/<span class="skiblue">ski-button</span>&gt
  &lt<span class="skiblue">ski-button</span> <span class="red">type</span>=<span class="blue">"danger"</span> <span class="red">size</span>=<span class="blue">"small"</span>&gt&lt/<span class="skiblue">ski-button</span>&gt
  &lt<span class="skiblue">ski-button</span> <span class="red">type</span>=<span class="blue">"danger"</span> <span class="red">size</span>=<span class="blue">"middle"</span>&gt&lt/<span class="skiblue">ski-button</span>&gt
  &lt<span class="skiblue">ski-button</span> <span class="red">type</span>=<span class="blue">"default"</span> <span class="red">size</span>=<span class="blue">"big"</span>&gt&lt/<span class="skiblue">ski-button</span>&gt
  &lt<span class="skiblue">ski-button</span> <span class="red">type</span>=<span class="blue">"default"</span> <span class="red">size</span>=<span class="blue">"small"</span>&gt&lt/<span class="skiblue">ski-button</span>&gt
  &lt<span class="skiblue">ski-button</span> <span class="red">type</span>=<span class="blue">"default"</span> <span class="red">size</span>=<span class="blue">"middle"</span>&gt&lt/<span class="skiblue">ski-button</span>&gt
  &lt<span class="skiblue">ski-button</span> <span class="red">type</span>=<span class="blue">"primary"</span> <span class="red">size</span>=<span class="blue">"big"</span>&gt&lt/<span class="skiblue">ski-button</span>&gt
  &lt<span class="skiblue">ski-button</span> <span class="red">type</span>=<span class="blue">"primary"</span> <span class="red">size</span>=<span class="blue">"small"</span>&gt&lt/<span class="skiblue">ski-button</span>&gt
  &lt<span class="skiblue">ski-button</span> <span class="red">type</span>=<span class="blue">"primary"</span> <span class="red">size</span>=<span class="blue">"middle"</span>&gt&lt/<span class="skiblue">ski-button</span>&gt
&lt/<span class="skiblue">template</span>&gt

&lt<span class="skiblue">script</span>&gt
<span class="skiblue">import</span> <span class="pink">{<span class="pink"> button </span>}</span> <span class="skiblue">from 'ski-ui'</span>

<span class="pink">export default</span> {
  <span class="skiblue">components:</span> {
    <span class="skiblue">skiButton: button</span>
  }
}
&lt/<span class="skiblue">script</span>&gt
      </pre>
    </ski-code>
  </section>
</template>

<script>
import { button } from 'ski-ui'

export default {
  components: {
    skiButton: button
  }
}
</script>

<style scoped>
</style>
