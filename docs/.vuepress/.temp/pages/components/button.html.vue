<template><div><h1 id="button-按钮" tabindex="-1"><a class="header-anchor" href="#button-按钮" aria-hidden="true">#</a> Button 按钮</h1>
<p>常用的操作按钮。</p>
<h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2>
<p>基础的按钮用法。</p>
<demo customClass="demoblock-custom" sourceCode="&lt;template&gt;
  &lt;el-button type=&quot;primary&quot; @click=&quot;handelMessage&quot;&gt;弹窗测试&lt;/el-button&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot;&gt;
// import { CZMessage } from '@cz-coco/components';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'test',
  setup() {
    const handelMessage = () =&gt; {
      // CZMessage({
      //   type: 'success',
      //   message: '我是测试的'
      // })
    }
    return {
      handelMessage
    }
  }
})
&lt;/script&gt;
"><render-demo-0 />
        <template #description>
          <div>使用<code v-pre>type</code>、<code v-pre>plain</code>、<code v-pre>round</code>和<code v-pre>circle</code>属性来定义 Button 的样式。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: #ffffff"><code><span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">el-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;primary&quot;</span><span style="color: #24292F"> @</span><span style="color: #0550AE">click</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">handelMessage</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">&gt;弹窗测试&lt;/</span><span style="color: #116329">el-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">script</span><span style="color: #24292F"> </span><span style="color: #0550AE">lang</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;ts&quot;</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #6E7781">// import { CZMessage } from &#39;@cz-coco/components&#39;;</span></span>
<span class="line"><span style="color: #CF222E">import</span><span style="color: #24292F"> {defineComponent} </span><span style="color: #CF222E">from</span><span style="color: #24292F"> </span><span style="color: #0A3069">&#39;vue&#39;</span><span style="color: #24292F">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #CF222E">export</span><span style="color: #953800"> </span><span style="color: #CF222E">default</span><span style="color: #953800"> </span><span style="color: #8250DF">defineComponent</span><span style="color: #953800">({</span></span>
<span class="line"><span style="color: #953800">  </span><span style="color: #24292F">name: </span><span style="color: #0A3069">&#39;test&#39;</span><span style="color: #953800">,</span></span>
<span class="line"><span style="color: #953800">  </span><span style="color: #8250DF">setup</span><span style="color: #953800">() </span><span style="color: #24292F">{</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #CF222E">const</span><span style="color: #24292F"> </span><span style="color: #8250DF">handelMessage</span><span style="color: #24292F"> </span><span style="color: #CF222E">=</span><span style="color: #24292F"> () </span><span style="color: #CF222E">=&gt;</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">      </span><span style="color: #6E7781">// CZMessage({</span></span>
<span class="line"><span style="color: #24292F">      </span><span style="color: #6E7781">//   type: &#39;success&#39;,</span></span>
<span class="line"><span style="color: #24292F">      </span><span style="color: #6E7781">//   message: &#39;我是测试的&#39;</span></span>
<span class="line"><span style="color: #24292F">      </span><span style="color: #6E7781">// })</span></span>
<span class="line"><span style="color: #24292F">    }</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #CF222E">return</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">      handelMessage</span></span>
<span class="line"><span style="color: #24292F">    }</span></span>
<span class="line"><span style="color: #24292F">  }</span></span>
<span class="line"><span style="color: #953800">})</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">script</span><span style="color: #24292F">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h2 id="不同尺寸" tabindex="-1"><a class="header-anchor" href="#不同尺寸" aria-hidden="true">#</a> 不同尺寸</h2>
<p>提供三种不同尺寸的按钮。</p>
<demo customClass="demoblock-custom" sourceCode="&lt;template&gt;
  &lt;el-button&gt;默认按钮&lt;/el-button&gt;
  &lt;el-button type=&quot;primary&quot;&gt;主要按钮&lt;/el-button&gt;
  &lt;el-button type=&quot;success&quot;&gt;成功按钮&lt;/el-button&gt;
  &lt;el-button type=&quot;info&quot;&gt;信息按钮&lt;/el-button&gt;
  &lt;el-button type=&quot;warning&quot;&gt;警告按钮&lt;/el-button&gt;
  &lt;el-button type=&quot;danger&quot;&gt;危险按钮&lt;/el-button&gt;
&lt;/template&gt;
"><render-demo-1 />
        
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: #ffffff"><code><span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">el-button</span><span style="color: #24292F">&gt;默认按钮&lt;/</span><span style="color: #116329">el-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">el-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;primary&quot;</span><span style="color: #24292F">&gt;主要按钮&lt;/</span><span style="color: #116329">el-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">el-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;success&quot;</span><span style="color: #24292F">&gt;成功按钮&lt;/</span><span style="color: #116329">el-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">el-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;info&quot;</span><span style="color: #24292F">&gt;信息按钮&lt;/</span><span style="color: #116329">el-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">el-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;warning&quot;</span><span style="color: #24292F">&gt;警告按钮&lt;/</span><span style="color: #116329">el-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">el-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;danger&quot;</span><span style="color: #24292F">&gt;危险按钮&lt;/</span><span style="color: #116329">el-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo></div></template>

<script lang="ts">
      import * as Vue from 'vue'
      
      export default {
        name: 'component-doc',
        components: {
          "render-demo-0": (function() {
    
    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue

function render(_ctx, _cache) {
  const _component_el_button = _resolveComponent("el-button")

  return (_openBlock(), _createBlock(_component_el_button, {
    type: "primary",
    onClick: _ctx.handelMessage
  }, {
    default: _withCtx(() => [
      _createTextVNode("弹窗测试")
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onClick"]))
}
  
    // import { CZMessage } from '@cz-coco/components';
const {defineComponent} = Vue;

const democomponentExport = defineComponent({
  name: 'test',
  setup() {
    const handelMessage = () => {
      // CZMessage({
      //   type: 'success',
      //   message: '我是测试的'
      // })
    }
    return {
      handelMessage
    }
  }
})
    return {
      render,
      ...democomponentExport
    }
  })(),"render-demo-1": (function() {
    
    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

function render(_ctx, _cache) {
  const _component_el_button = _resolveComponent("el-button")

  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createVNode(_component_el_button, null, {
      default: _withCtx(() => [
        _createTextVNode("默认按钮")
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_el_button, { type: "primary" }, {
      default: _withCtx(() => [
        _createTextVNode("主要按钮")
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_el_button, { type: "success" }, {
      default: _withCtx(() => [
        _createTextVNode("成功按钮")
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_el_button, { type: "info" }, {
      default: _withCtx(() => [
        _createTextVNode("信息按钮")
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_el_button, { type: "warning" }, {
      default: _withCtx(() => [
        _createTextVNode("警告按钮")
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_el_button, { type: "danger" }, {
      default: _withCtx(() => [
        _createTextVNode("危险按钮")
      ]),
      _: 1 /* STABLE */
    })
  ], 64 /* STABLE_FRAGMENT */))
}
  
    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),
        }
      }
    </script>

<style lang="scss"></style>