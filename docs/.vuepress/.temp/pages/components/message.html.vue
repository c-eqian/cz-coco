<template><div><!--
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-16 13:33:29
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-17 12:38:49
-->
<h1 id="message-消息弹窗" tabindex="-1"><a class="header-anchor" href="#message-消息弹窗" aria-hidden="true">#</a> message 消息弹窗</h1>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<demo customClass="demoblock-custom" sourceCode="&lt;template&gt;
  &lt;cz-button type=&quot;primary&quot; @click=&quot;handelMessage&quot; class=&quot;cz-icon cz-icon-success&quot;
    &gt;弹窗测试&lt;/cz-button
  &gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot;&gt;
import { CZMessage } from '@cz-coco/components';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const handelMessage = () =&gt; {
      CZMessage({
        type: 'success',
        message: '我是测试的'
      });
    };
    return {
      handelMessage
    };
  }
});
&lt;/script&gt;
"><render-demo-0 />
        
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: #ffffff"><code><span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">cz-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;primary&quot;</span><span style="color: #24292F"> @</span><span style="color: #0550AE">click</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">handelMessage</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F"> </span><span style="color: #0550AE">class</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;cz-icon cz-icon-success&quot;</span></span>
<span class="line"><span style="color: #24292F">    &gt;弹窗测试&lt;/</span><span style="color: #116329">cz-button</span></span>
<span class="line"><span style="color: #24292F">  &gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">script</span><span style="color: #24292F"> </span><span style="color: #0550AE">lang</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;ts&quot;</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #CF222E">import</span><span style="color: #24292F"> { CZMessage } </span><span style="color: #CF222E">from</span><span style="color: #24292F"> </span><span style="color: #0A3069">&#39;@cz-coco/components&#39;</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #CF222E">import</span><span style="color: #24292F"> { defineComponent } </span><span style="color: #CF222E">from</span><span style="color: #24292F"> </span><span style="color: #0A3069">&#39;vue&#39;</span><span style="color: #24292F">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #CF222E">export</span><span style="color: #953800"> </span><span style="color: #CF222E">default</span><span style="color: #953800"> </span><span style="color: #8250DF">defineComponent</span><span style="color: #953800">({</span></span>
<span class="line"><span style="color: #953800">  </span><span style="color: #8250DF">setup</span><span style="color: #953800">() </span><span style="color: #24292F">{</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #CF222E">const</span><span style="color: #24292F"> </span><span style="color: #8250DF">handelMessage</span><span style="color: #24292F"> </span><span style="color: #CF222E">=</span><span style="color: #24292F"> () </span><span style="color: #CF222E">=&gt;</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">      </span><span style="color: #8250DF">CZMessage</span><span style="color: #24292F">({</span></span>
<span class="line"><span style="color: #24292F">        type: </span><span style="color: #0A3069">&#39;success&#39;</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">        message: </span><span style="color: #0A3069">&#39;我是测试的&#39;</span></span>
<span class="line"><span style="color: #24292F">      });</span></span>
<span class="line"><span style="color: #24292F">    };</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #CF222E">return</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">      handelMessage</span></span>
<span class="line"><span style="color: #24292F">    };</span></span>
<span class="line"><span style="color: #24292F">  }</span></span>
<span class="line"><span style="color: #953800">})</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">script</span><span style="color: #24292F">&gt;</span></span>
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
    
    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue

function render(_ctx, _cache) {
  const _component_cz_button = _resolveComponent("cz-button")

  return (_openBlock(), _createBlock(_component_cz_button, {
    type: "primary",
    onClick: _ctx.handelMessage,
    class: "cz-icon cz-icon-success"
  }, {
    default: _withCtx(() => [
      _createTextVNode("弹窗测试")
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["onClick"]))
}
  
    const { CZMessage } = cz;
const { defineComponent } = Vue;

const democomponentExport = defineComponent({
  setup() {
    const handelMessage = () => {
      CZMessage({
        type: 'success',
        message: '我是测试的'
      });
    };
    return {
      handelMessage
    };
  }
});
    return {
      render,
      ...democomponentExport
    }
  })(),
        }
      }
    </script>

<style lang="scss"></style>