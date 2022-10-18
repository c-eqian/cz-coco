<template><div><!--
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-19 00:30:34
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-19 00:59:20
-->
<h1 id="image-图片" tabindex="-1"><a class="header-anchor" href="#image-图片" aria-hidden="true">#</a> image 图片</h1>
<p>图片容器，保留原生 img 的一些特性</p>
<h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2>
<demo customClass="demoblock-custom" sourceCode="&lt;template&gt;
  &lt;div class=&quot;demo-mr&quot;&gt;
    &lt;cz-image
      src=&quot;https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg&quot;
    &gt;&lt;/cz-image&gt;
    &lt;cz-image
      src=&quot;https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg&quot;
    &gt;&lt;/cz-image&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;style scoped lang=&quot;scss&quot;&gt;
.demo-mr {
  .cz-image {
    margin-right: 50px;
  }
}
&lt;/style&gt;
"><render-demo-0 />
        
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: #ffffff"><code><span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">div</span><span style="color: #24292F"> </span><span style="color: #0550AE">class</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;demo-mr&quot;</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-image</span></span>
<span class="line"><span style="color: #24292F">      </span><span style="color: #0550AE">src</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg&quot;</span></span>
<span class="line"><span style="color: #24292F">    &gt;&lt;/</span><span style="color: #116329">cz-image</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-image</span></span>
<span class="line"><span style="color: #24292F">      </span><span style="color: #0550AE">src</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg&quot;</span></span>
<span class="line"><span style="color: #24292F">    &gt;&lt;/</span><span style="color: #116329">cz-image</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;/</span><span style="color: #116329">div</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">style</span><span style="color: #24292F"> </span><span style="color: #0550AE">scoped</span><span style="color: #24292F"> </span><span style="color: #0550AE">lang</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;scss&quot;</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #0550AE">.demo-mr</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">  </span><span style="color: #0550AE">.cz-image</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #0550AE">margin-right</span><span style="color: #24292F">: </span><span style="color: #0550AE">50</span><span style="color: #CF222E">px</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #24292F">  }</span></span>
<span class="line"><span style="color: #24292F">}</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">style</span><span style="color: #24292F">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h2 id="设置宽高" tabindex="-1"><a class="header-anchor" href="#设置宽高" aria-hidden="true">#</a> 设置宽高</h2>
<p>通过设置<code v-pre>width</code>、<code v-pre>height</code>属性改变大小</p>
<demo customClass="demoblock-custom" sourceCode="&lt;template&gt;
  &lt;div class=&quot;demo-mr&quot;&gt;
    &lt;cz-image :src=&quot;imageList[0]&quot; width=&quot;200&quot; height=&quot;200&quot; /&gt;
  &lt;/div&gt;
  &lt;div class=&quot;demo-mr&quot;&gt;
    &lt;cz-image :src=&quot;imageList[1]&quot; width=&quot;300&quot; height=&quot;300&quot; /&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot; setup&gt;
const imageList = [
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
];
&lt;/script&gt;
&lt;style scoped lang=&quot;scss&quot;&gt;
.demo-mr {
  padding: 30px 0;
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
}
&lt;/style&gt;
"><render-demo-1 />
        
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: #ffffff"><code><span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">div</span><span style="color: #24292F"> </span><span style="color: #0550AE">class</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;demo-mr&quot;</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-image</span><span style="color: #24292F"> :</span><span style="color: #0550AE">src</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">imageList[</span><span style="color: #0550AE">0</span><span style="color: #24292F">]</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F"> </span><span style="color: #0550AE">width</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;200&quot;</span><span style="color: #24292F"> </span><span style="color: #0550AE">height</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;200&quot;</span><span style="color: #24292F"> /&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;/</span><span style="color: #116329">div</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">div</span><span style="color: #24292F"> </span><span style="color: #0550AE">class</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;demo-mr&quot;</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;</span><span style="color: #116329">cz-image</span><span style="color: #24292F"> :</span><span style="color: #0550AE">src</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">imageList[</span><span style="color: #0550AE">1</span><span style="color: #24292F">]</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F"> </span><span style="color: #0550AE">width</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;300&quot;</span><span style="color: #24292F"> </span><span style="color: #0550AE">height</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;300&quot;</span><span style="color: #24292F"> /&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;/</span><span style="color: #116329">div</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">script</span><span style="color: #24292F"> </span><span style="color: #0550AE">lang</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;ts&quot;</span><span style="color: #24292F"> </span><span style="color: #0550AE">setup</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #CF222E">const</span><span style="color: #24292F"> </span><span style="color: #0550AE">imageList</span><span style="color: #24292F"> </span><span style="color: #CF222E">=</span><span style="color: #24292F"> [</span></span>
<span class="line"><span style="color: #24292F">  </span><span style="color: #0A3069">&#39;https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg&#39;</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">  </span><span style="color: #0A3069">&#39;https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg&#39;</span></span>
<span class="line"><span style="color: #24292F">];</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">script</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">style</span><span style="color: #24292F"> </span><span style="color: #0550AE">scoped</span><span style="color: #24292F"> </span><span style="color: #0550AE">lang</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;scss&quot;</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #0550AE">.demo-mr</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">  </span><span style="color: #0550AE">padding</span><span style="color: #24292F">: </span><span style="color: #0550AE">30</span><span style="color: #CF222E">px</span><span style="color: #24292F"> </span><span style="color: #0550AE">0</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #24292F">  </span><span style="color: #0550AE">text-align</span><span style="color: #24292F">: </span><span style="color: #0550AE">center</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #24292F">  </span><span style="color: #0550AE">display</span><span style="color: #24292F">: </span><span style="color: #0550AE">inline-block</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #24292F">  </span><span style="color: #0550AE">box-sizing</span><span style="color: #24292F">: </span><span style="color: #0550AE">border-box</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #24292F">  </span><span style="color: #0550AE">vertical-align</span><span style="color: #24292F">: </span><span style="color: #0550AE">top</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #24292F">}</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">style</span><span style="color: #24292F">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo></div></template>

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
  const _component_cz_image = _resolveComponent("cz-image")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode(_component_cz_image, { src: "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg" }),
    _createVNode(_component_cz_image, { src: "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg" })
  ]))
}
  
    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),"render-demo-1": (function() {
    
    const { resolveComponent: _resolveComponent, createVNode: _createVNode, createElementVNode: _createElementVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = { class: "demo-mr" }
const _hoisted_2 = { class: "demo-mr" }

function render(_ctx, _cache) {
  const _component_cz_image = _resolveComponent("cz-image")

  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createElementVNode("div", _hoisted_1, [
      _createVNode(_component_cz_image, {
        src: _ctx.imageList[0],
        width: "200",
        height: "200"
      }, null, 8 /* PROPS */, ["src"])
    ]),
    _createElementVNode("div", _hoisted_2, [
      _createVNode(_component_cz_image, {
        src: _ctx.imageList[1],
        width: "300",
        height: "300"
      }, null, 8 /* PROPS */, ["src"])
    ])
  ], 64 /* STABLE_FRAGMENT */))
}
  
    const { defineComponent: _defineComponent } = Vue

const democomponentExport = /*#__PURE__*/_defineComponent({
  setup(__props, { expose }) {
  expose();

const imageList = [
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
];

const __returned__ = { imageList }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

})
    return {
      render,
      ...democomponentExport
    }
  })(),
        }
      }
    </script>

<style lang="scss">.demo-mr {
  .cz-image {
    margin-right: 50px;
  }
}.demo-mr {
  padding: 30px 0;
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
  vertical-align: top;
}</style>