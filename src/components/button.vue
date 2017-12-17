<template>
  <section class="button">
    <h1>button</h1>
    <my-code>
      <div slot="code">
        <my-button type="default" size="big"></my-button>
        <my-button type="danger" size="big"></my-button>
        <my-button type="primary" size="big"></my-button>
        <my-button type="default" size="middle"></my-button>
        <my-button type="danger" size="middle"></my-button>
        <my-button type="primary" size="middle"></my-button>
        <my-button type="default" size="small"></my-button>
        <my-button type="danger" size="small"></my-button>
        <my-button type="primary" size="small"></my-button>
      </div>
      <pre slot="codeText">
<p>&lttemplate&gt
  &ltmy-button type="<span>default</span>" size="<span>big</span>"&gt&lt/my-button&gt
  &ltmy-button type="<span>danger</span>" size="<span>big</span>"&gt&lt/my-button&gt
  &ltmy-button type="<span>primary</span>" size="<span>big</span>"&gt&lt/my-button&gt
  &ltmy-button type="<span>default</span>" size="<span>middle</span>"&gt&lt/my-button&gt
  &ltmy-button type="<span>danger</span>" size="<span>middle</span>"&gt&lt/my-button&gt
  &ltmy-button type="<span>primary</span>" size="<span>middle</span>"&gt&lt/my-button&gt
  &ltmy-button type="<span>default</span>" size="<span>small</span>"&gt&lt/my-button&gt
  &ltmy-button type="<span>danger</span>" size="<span>small</span>"&gt&lt/my-button&gt
  &ltmy-button type="<span>primary</span>" size="<span>small</span>"&gt&lt/my-button&gt
&lt/template&gt
</p>
      </pre>
    </my-code>
  </section>
</template>

<script>
import { button } from 'ski-ui'
console.log(button)

export default {
  components: {
    'my-button': button
  }
}
</script>

<style scoped>
</style>
