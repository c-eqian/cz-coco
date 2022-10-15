<template><div><!--
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-14 10:23:03
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-16 00:53:28
-->
<h1 id="button-按钮" tabindex="-1"><a class="header-anchor" href="#button-按钮" aria-hidden="true">#</a> Button 按钮</h1>
<p>常用的操作按钮。</p>
<h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2>
<p>基础的按钮用法。</p>
<demo customClass="demoblock-custom" sourceCode="&lt;template&gt;
  &lt;div class=&quot;demo-mr&quot;&gt;
    &lt;cz-button type=&quot;primary&quot;&gt;primary&lt;/cz-button&gt;
    &lt;cz-button type=&quot;success&quot;&gt;success&lt;/cz-button&gt;
    &lt;cz-button type=&quot;info&quot;&gt;info&lt;/cz-button&gt;
    &lt;cz-button type=&quot;warning&quot;&gt;warning&lt;/cz-button&gt;
    &lt;cz-button type=&quot;danger&quot;&gt;danger&lt;/cz-button&gt;
    &lt;cz-button type=&quot;text&quot;&gt;text&lt;/cz-button&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;style scoped lang=&quot;scss&quot;&gt;
.demo-mr {
  .cz-button {
    margin-right: 10px;
  }
}
&lt;/style&gt;
"><render-demo-0 />
        <template #description>
          <div>使用<code v-pre>type</code>、<code v-pre>plain</code>、<code v-pre>round</code>和<code v-pre>circle</code>属性来定义 Button 的样式。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: #ffffff"><code><span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">div</span><span style="color: #24292F"> </span><span style="color: #0550AE">class</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;demo-mr&quot;</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;primary&quot;</span><span style="color: #24292F">&gt;primary&lt;/</span><span style="color: #116329">cz-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;success&quot;</span><span style="color: #24292F">&gt;success&lt;/</span><span style="color: #116329">cz-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;info&quot;</span><span style="color: #24292F">&gt;info&lt;/</span><span style="color: #116329">cz-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;warning&quot;</span><span style="color: #24292F">&gt;warning&lt;/</span><span style="color: #116329">cz-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;danger&quot;</span><span style="color: #24292F">&gt;danger&lt;/</span><span style="color: #116329">cz-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;text&quot;</span><span style="color: #24292F">&gt;text&lt;/</span><span style="color: #116329">cz-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;/</span><span style="color: #116329">div</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">style</span><span style="color: #24292F"> </span><span style="color: #0550AE">scoped</span><span style="color: #24292F"> </span><span style="color: #0550AE">lang</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;scss&quot;</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #0550AE">.demo-mr</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">  </span><span style="color: #0550AE">.cz-button</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #0550AE">margin-right</span><span style="color: #24292F">: </span><span style="color: #0550AE">10</span><span style="color: #CF222E">px</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #24292F">  }</span></span>
<span class="line"><span style="color: #24292F">}</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">style</span><span style="color: #24292F">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h2 id="不同尺寸" tabindex="-1"><a class="header-anchor" href="#不同尺寸" aria-hidden="true">#</a> 不同尺寸</h2>
<p>提供三种不同尺寸的按钮。</p>
<demo customClass="demoblock-custom" sourceCode="&lt;template&gt;
  &lt;div class=&quot;demo-mr&quot;&gt;
    &lt;cz-button type=&quot;primary&quot;&gt;primary&lt;/cz-button&gt;
    &lt;cz-button type=&quot;success&quot;&gt;success&lt;/cz-button&gt;
    &lt;cz-button type=&quot;info&quot;&gt;info&lt;/cz-button&gt;
    &lt;cz-button type=&quot;warning&quot;&gt;warning&lt;/cz-button&gt;
    &lt;cz-button type=&quot;danger&quot;&gt;danger&lt;/cz-button&gt;
    &lt;cz-button type=&quot;text&quot;&gt;text&lt;/cz-button&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;style scoped lang=&quot;scss&quot;&gt;
.demo-mr {
  .cz-button {
    margin-right: 10px;
  }
}
&lt;/style&gt;
"><render-demo-1 />
        
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: #ffffff"><code><span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">div</span><span style="color: #24292F"> </span><span style="color: #0550AE">class</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;demo-mr&quot;</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;primary&quot;</span><span style="color: #24292F">&gt;primary&lt;/</span><span style="color: #116329">cz-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;success&quot;</span><span style="color: #24292F">&gt;success&lt;/</span><span style="color: #116329">cz-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;info&quot;</span><span style="color: #24292F">&gt;info&lt;/</span><span style="color: #116329">cz-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;warning&quot;</span><span style="color: #24292F">&gt;warning&lt;/</span><span style="color: #116329">cz-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;danger&quot;</span><span style="color: #24292F">&gt;danger&lt;/</span><span style="color: #116329">cz-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;text&quot;</span><span style="color: #24292F">&gt;text&lt;/</span><span style="color: #116329">cz-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;/</span><span style="color: #116329">div</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">style</span><span style="color: #24292F"> </span><span style="color: #0550AE">scoped</span><span style="color: #24292F"> </span><span style="color: #0550AE">lang</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;scss&quot;</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #0550AE">.demo-mr</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">  </span><span style="color: #0550AE">.cz-button</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #0550AE">margin-right</span><span style="color: #24292F">: </span><span style="color: #0550AE">10</span><span style="color: #CF222E">px</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #24292F">  }</span></span>
<span class="line"><span style="color: #24292F">}</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">style</span><span style="color: #24292F">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo></div></template>

<script lang="ts">
      import * as Vue from 'vue'
      
      export default {
        name: 'component-doc',
        components: {
          "render-demo-0": (function() {
    
    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = { class: "demo-mr" }

function render(_ctx, _cache) {
  const _component_cz_button = _resolveComponent("cz-button")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_cz_button, { type: "primary" }, {
      default: _withCtx(() => [
        _createTextVNode("primary")
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cz_button, { type: "success" }, {
      default: _withCtx(() => [
        _createTextVNode("success")
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cz_button, { type: "info" }, {
      default: _withCtx(() => [
        _createTextVNode("info")
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cz_button, { type: "warning" }, {
      default: _withCtx(() => [
        _createTextVNode("warning")
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cz_button, { type: "danger" }, {
      default: _withCtx(() => [
        _createTextVNode("danger")
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cz_button, { type: "text" }, {
      default: _withCtx(() => [
        _createTextVNode("text")
      ]),
      _: 1 /* STABLE */
    })
  ]))
}
  
    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),"render-demo-1": (function() {
    
    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = { class: "demo-mr" }

function render(_ctx, _cache) {
  const _component_cz_button = _resolveComponent("cz-button")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_cz_button, { type: "primary" }, {
      default: _withCtx(() => [
        _createTextVNode("primary")
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cz_button, { type: "success" }, {
      default: _withCtx(() => [
        _createTextVNode("success")
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cz_button, { type: "info" }, {
      default: _withCtx(() => [
        _createTextVNode("info")
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cz_button, { type: "warning" }, {
      default: _withCtx(() => [
        _createTextVNode("warning")
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cz_button, { type: "danger" }, {
      default: _withCtx(() => [
        _createTextVNode("danger")
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cz_button, { type: "text" }, {
      default: _withCtx(() => [
        _createTextVNode("text")
      ]),
      _: 1 /* STABLE */
    })
  ]))
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

<style lang="scss">.demo-mr {
  .cz-button {
    margin-right: 10px;
  }
}</style>