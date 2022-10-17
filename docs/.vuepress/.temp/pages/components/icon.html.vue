<template><div><!--
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-14 10:23:03
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-17 13:39:11
-->
<h1 id="icon-图标" tabindex="-1"><a class="header-anchor" href="#icon-图标" aria-hidden="true">#</a> icon 图标</h1>
<h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2>
<p>基础的按钮用法。</p>
<demo customClass="demoblock-custom" sourceCode="&lt;template&gt;
  &lt;div class=&quot;demo-mr&quot;&gt;
    &lt;cz-icon icon=&quot;success&quot;&gt;&lt;/cz-icon&gt;
    &lt;cz-icon icon=&quot;unlock&quot;&gt;&lt;/cz-icon&gt;
    &lt;cz-icon icon=&quot;link&quot;&gt;&lt;/cz-icon&gt;
    &lt;cz-icon icon=&quot;filter&quot;&gt;&lt;/cz-icon&gt;
    &lt;cz-icon icon=&quot;layers&quot;&gt;&lt;/cz-icon&gt;

    &lt;cz-icon icon=&quot;menu&quot;&gt;&lt;/cz-icon&gt;
    &lt;cz-icon icon=&quot;mic&quot;&gt;&lt;/cz-icon&gt;
    &lt;cz-icon icon=&quot;more&quot;&gt;&lt;/cz-icon&gt;
    &lt;cz-icon icon=&quot;operation&quot;&gt;&lt;/cz-icon&gt;
    &lt;cz-icon icon=&quot;search&quot;&gt;&lt;/cz-icon&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;style scoped lang=&quot;scss&quot;&gt;
.demo-mr {
  .cz-icon {
    margin-right: 10px;
    font-size: 30px;
  }
}
&lt;/style&gt;
"><render-demo-0 />
        <template #description>
          <div>使用<code v-pre>icon</code>、<code v-pre>size</code>属性来定义 icon 图标和大小。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: #ffffff"><code><span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">div</span><span style="color: #24292F"> </span><span style="color: #0550AE">class</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;demo-mr&quot;</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-icon</span><span style="color: #24292F"> </span><span style="color: #0550AE">icon</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;success&quot;</span><span style="color: #24292F">&gt;&lt;/</span><span style="color: #116329">cz-icon</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-icon</span><span style="color: #24292F"> </span><span style="color: #0550AE">icon</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;unlock&quot;</span><span style="color: #24292F">&gt;&lt;/</span><span style="color: #116329">cz-icon</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-icon</span><span style="color: #24292F"> </span><span style="color: #0550AE">icon</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;link&quot;</span><span style="color: #24292F">&gt;&lt;/</span><span style="color: #116329">cz-icon</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-icon</span><span style="color: #24292F"> </span><span style="color: #0550AE">icon</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;filter&quot;</span><span style="color: #24292F">&gt;&lt;/</span><span style="color: #116329">cz-icon</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-icon</span><span style="color: #24292F"> </span><span style="color: #0550AE">icon</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;layers&quot;</span><span style="color: #24292F">&gt;&lt;/</span><span style="color: #116329">cz-icon</span><span style="color: #24292F">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-icon</span><span style="color: #24292F"> </span><span style="color: #0550AE">icon</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;menu&quot;</span><span style="color: #24292F">&gt;&lt;/</span><span style="color: #116329">cz-icon</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-icon</span><span style="color: #24292F"> </span><span style="color: #0550AE">icon</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;mic&quot;</span><span style="color: #24292F">&gt;&lt;/</span><span style="color: #116329">cz-icon</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-icon</span><span style="color: #24292F"> </span><span style="color: #0550AE">icon</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;more&quot;</span><span style="color: #24292F">&gt;&lt;/</span><span style="color: #116329">cz-icon</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-icon</span><span style="color: #24292F"> </span><span style="color: #0550AE">icon</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;operation&quot;</span><span style="color: #24292F">&gt;&lt;/</span><span style="color: #116329">cz-icon</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-icon</span><span style="color: #24292F"> </span><span style="color: #0550AE">icon</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;search&quot;</span><span style="color: #24292F">&gt;&lt;/</span><span style="color: #116329">cz-icon</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;/</span><span style="color: #116329">div</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">style</span><span style="color: #24292F"> </span><span style="color: #0550AE">scoped</span><span style="color: #24292F"> </span><span style="color: #0550AE">lang</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;scss&quot;</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #0550AE">.demo-mr</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">  </span><span style="color: #0550AE">.cz-icon</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #0550AE">margin-right</span><span style="color: #24292F">: </span><span style="color: #0550AE">10</span><span style="color: #CF222E">px</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #0550AE">font-size</span><span style="color: #24292F">: </span><span style="color: #0550AE">30</span><span style="color: #CF222E">px</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #24292F">  }</span></span>
<span class="line"><span style="color: #24292F">}</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">style</span><span style="color: #24292F">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h2 id="不同尺寸" tabindex="-1"><a class="header-anchor" href="#不同尺寸" aria-hidden="true">#</a> 不同尺寸</h2>
<p>size 改变图标大小</p>
<demo customClass="demoblock-custom" sourceCode="&lt;template&gt;
  &lt;div class=&quot;demo-mr&quot;&gt;
    &lt;cz-icon icon=&quot;success&quot; :size=&quot;16&quot;&gt;&lt;/cz-icon&gt;
    &lt;cz-icon icon=&quot;success&quot; :size=&quot;32&quot;&gt;&lt;/cz-icon&gt;
    &lt;cz-icon icon=&quot;success&quot; :size=&quot;40&quot;&gt;&lt;/cz-icon&gt;
    &lt;cz-icon icon=&quot;success&quot; :size=&quot;48&quot;&gt;&lt;/cz-icon&gt;
    &lt;cz-icon icon=&quot;success&quot; :size=&quot;52&quot;&gt;&lt;/cz-icon&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;style scoped lang=&quot;scss&quot;&gt;
.demo-mr {
  .cz-icon {
    margin-right: 10px;
  }
}
&lt;/style&gt;
"><render-demo-1 />
        
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: #ffffff"><code><span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">div</span><span style="color: #24292F"> </span><span style="color: #0550AE">class</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;demo-mr&quot;</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-icon</span><span style="color: #24292F"> </span><span style="color: #0550AE">icon</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;success&quot;</span><span style="color: #24292F"> :</span><span style="color: #0550AE">size</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #0550AE">16</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">&gt;&lt;/</span><span style="color: #116329">cz-icon</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-icon</span><span style="color: #24292F"> </span><span style="color: #0550AE">icon</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;success&quot;</span><span style="color: #24292F"> :</span><span style="color: #0550AE">size</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #0550AE">32</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">&gt;&lt;/</span><span style="color: #116329">cz-icon</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-icon</span><span style="color: #24292F"> </span><span style="color: #0550AE">icon</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;success&quot;</span><span style="color: #24292F"> :</span><span style="color: #0550AE">size</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #0550AE">40</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">&gt;&lt;/</span><span style="color: #116329">cz-icon</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-icon</span><span style="color: #24292F"> </span><span style="color: #0550AE">icon</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;success&quot;</span><span style="color: #24292F"> :</span><span style="color: #0550AE">size</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #0550AE">48</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">&gt;&lt;/</span><span style="color: #116329">cz-icon</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-icon</span><span style="color: #24292F"> </span><span style="color: #0550AE">icon</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;success&quot;</span><span style="color: #24292F"> :</span><span style="color: #0550AE">size</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #0550AE">52</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">&gt;&lt;/</span><span style="color: #116329">cz-icon</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;/</span><span style="color: #116329">div</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">style</span><span style="color: #24292F"> </span><span style="color: #0550AE">scoped</span><span style="color: #24292F"> </span><span style="color: #0550AE">lang</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;scss&quot;</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #0550AE">.demo-mr</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">  </span><span style="color: #0550AE">.cz-icon</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #0550AE">margin-right</span><span style="color: #24292F">: </span><span style="color: #0550AE">10</span><span style="color: #CF222E">px</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #24292F">  }</span></span>
<span class="line"><span style="color: #24292F">}</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">style</span><span style="color: #24292F">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h2 id="改变颜色" tabindex="-1"><a class="header-anchor" href="#改变颜色" aria-hidden="true">#</a> 改变颜色</h2>
<p>color 改变图标颜色</p>
<demo customClass="demoblock-custom" sourceCode="&lt;template&gt;
  &lt;div class=&quot;demo-mr&quot;&gt;
    &lt;cz-icon icon=&quot;success&quot; color=&quot;green&quot;&gt;&lt;/cz-icon&gt;
    &lt;cz-icon icon=&quot;success&quot; color=&quot;red&quot;&gt;&lt;/cz-icon&gt;
    &lt;cz-icon icon=&quot;success&quot; color=&quot;blue&quot;&gt;&lt;/cz-icon&gt;
    &lt;cz-icon icon=&quot;success&quot; color=&quot;yellow&quot;&gt;&lt;/cz-icon&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;style scoped lang=&quot;scss&quot;&gt;
.demo-mr {
  .cz-icon {
    margin-right: 10px;
    font-size: 30px;
  }
}
&lt;/style&gt;
"><render-demo-2 />
        
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: #ffffff"><code><span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">div</span><span style="color: #24292F"> </span><span style="color: #0550AE">class</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;demo-mr&quot;</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-icon</span><span style="color: #24292F"> </span><span style="color: #0550AE">icon</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;success&quot;</span><span style="color: #24292F"> </span><span style="color: #0550AE">color</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;green&quot;</span><span style="color: #24292F">&gt;&lt;/</span><span style="color: #116329">cz-icon</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-icon</span><span style="color: #24292F"> </span><span style="color: #0550AE">icon</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;success&quot;</span><span style="color: #24292F"> </span><span style="color: #0550AE">color</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;red&quot;</span><span style="color: #24292F">&gt;&lt;/</span><span style="color: #116329">cz-icon</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-icon</span><span style="color: #24292F"> </span><span style="color: #0550AE">icon</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;success&quot;</span><span style="color: #24292F"> </span><span style="color: #0550AE">color</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;blue&quot;</span><span style="color: #24292F">&gt;&lt;/</span><span style="color: #116329">cz-icon</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-icon</span><span style="color: #24292F"> </span><span style="color: #0550AE">icon</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;success&quot;</span><span style="color: #24292F"> </span><span style="color: #0550AE">color</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;yellow&quot;</span><span style="color: #24292F">&gt;&lt;/</span><span style="color: #116329">cz-icon</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;/</span><span style="color: #116329">div</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">style</span><span style="color: #24292F"> </span><span style="color: #0550AE">scoped</span><span style="color: #24292F"> </span><span style="color: #0550AE">lang</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;scss&quot;</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #0550AE">.demo-mr</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">  </span><span style="color: #0550AE">.cz-icon</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #0550AE">margin-right</span><span style="color: #24292F">: </span><span style="color: #0550AE">10</span><span style="color: #CF222E">px</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #0550AE">font-size</span><span style="color: #24292F">: </span><span style="color: #0550AE">30</span><span style="color: #CF222E">px</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #24292F">  }</span></span>
<span class="line"><span style="color: #24292F">}</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">style</span><span style="color: #24292F">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><br>
<CzMessage /></div></template>

<script lang="ts">
      import * as Vue from 'vue'
      import * as cz from '@cz-coco/components'
      export default {
        name: 'component-doc',
        components: {
          "render-demo-0": (function() {
    
    const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = { class: "demo-mr" }

function render(_ctx, _cache) {
  const _component_cz_icon = _resolveComponent("cz-icon")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_cz_icon, { icon: "success" }),
    _createVNode(_component_cz_icon, { icon: "unlock" }),
    _createVNode(_component_cz_icon, { icon: "link" }),
    _createVNode(_component_cz_icon, { icon: "filter" }),
    _createVNode(_component_cz_icon, { icon: "layers" }),
    _createVNode(_component_cz_icon, { icon: "menu" }),
    _createVNode(_component_cz_icon, { icon: "mic" }),
    _createVNode(_component_cz_icon, { icon: "more" }),
    _createVNode(_component_cz_icon, { icon: "operation" }),
    _createVNode(_component_cz_icon, { icon: "search" })
  ]))
}
  
    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),"render-demo-1": (function() {
    
    const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = { class: "demo-mr" }

function render(_ctx, _cache) {
  const _component_cz_icon = _resolveComponent("cz-icon")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_cz_icon, {
      icon: "success",
      size: 16
    }),
    _createVNode(_component_cz_icon, {
      icon: "success",
      size: 32
    }),
    _createVNode(_component_cz_icon, {
      icon: "success",
      size: 40
    }),
    _createVNode(_component_cz_icon, {
      icon: "success",
      size: 48
    }),
    _createVNode(_component_cz_icon, {
      icon: "success",
      size: 52
    })
  ]))
}
  
    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),"render-demo-2": (function() {
    
    const { resolveComponent: _resolveComponent, createVNode: _createVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = { class: "demo-mr" }

function render(_ctx, _cache) {
  const _component_cz_icon = _resolveComponent("cz-icon")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_cz_icon, {
      icon: "success",
      color: "green"
    }),
    _createVNode(_component_cz_icon, {
      icon: "success",
      color: "red"
    }),
    _createVNode(_component_cz_icon, {
      icon: "success",
      color: "blue"
    }),
    _createVNode(_component_cz_icon, {
      icon: "success",
      color: "yellow"
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
  .cz-icon {
    margin-right: 10px;
    font-size: 30px;
  }
}.demo-mr {
  .cz-icon {
    margin-right: 10px;
  }
}</style>