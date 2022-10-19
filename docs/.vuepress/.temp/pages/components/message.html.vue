<template><div><!--
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-16 13:33:29
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-20 01:28:35
-->
<h1 id="message-消息弹窗" tabindex="-1"><a class="header-anchor" href="#message-消息弹窗" aria-hidden="true">#</a> message 消息弹窗</h1>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<demo customClass="demoblock-custom" sourceCode="&lt;template&gt;
  &lt;cz-button type=&quot;success&quot; @click=&quot;handelMessage('success')&quot;&gt; success &lt;/cz-button&gt;
  &lt;cz-button type=&quot;danger&quot; @click=&quot;handelMessage('error')&quot;&gt; error &lt;/cz-button&gt;
  &lt;cz-button type=&quot;warning&quot; @click=&quot;handelMessage('warning')&quot;&gt; warning &lt;/cz-button&gt;
  &lt;cz-button type=&quot;info&quot; @click=&quot;handelMessage('info')&quot;&gt; info &lt;/cz-button&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot;&gt;
import { CzMessage } from '@cz-coco/components';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const handelMessage = (type: string) =&gt; {
      CzMessage({
        type: type,
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
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">cz-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;success&quot;</span><span style="color: #24292F"> @</span><span style="color: #0550AE">click</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #8250DF">handelMessage</span><span style="color: #24292F">(</span><span style="color: #0A3069">&#39;success&#39;</span><span style="color: #24292F">)</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">&gt; success &lt;/</span><span style="color: #116329">cz-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">cz-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;danger&quot;</span><span style="color: #24292F"> @</span><span style="color: #0550AE">click</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #8250DF">handelMessage</span><span style="color: #24292F">(</span><span style="color: #0A3069">&#39;error&#39;</span><span style="color: #24292F">)</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">&gt; error &lt;/</span><span style="color: #116329">cz-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">cz-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;warning&quot;</span><span style="color: #24292F"> @</span><span style="color: #0550AE">click</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #8250DF">handelMessage</span><span style="color: #24292F">(</span><span style="color: #0A3069">&#39;warning&#39;</span><span style="color: #24292F">)</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">&gt; warning &lt;/</span><span style="color: #116329">cz-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">cz-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;info&quot;</span><span style="color: #24292F"> @</span><span style="color: #0550AE">click</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #8250DF">handelMessage</span><span style="color: #24292F">(</span><span style="color: #0A3069">&#39;info&#39;</span><span style="color: #24292F">)</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">&gt; info &lt;/</span><span style="color: #116329">cz-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">script</span><span style="color: #24292F"> </span><span style="color: #0550AE">lang</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;ts&quot;</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #CF222E">import</span><span style="color: #24292F"> { CzMessage } </span><span style="color: #CF222E">from</span><span style="color: #24292F"> </span><span style="color: #0A3069">&#39;@cz-coco/components&#39;</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #CF222E">import</span><span style="color: #24292F"> { defineComponent } </span><span style="color: #CF222E">from</span><span style="color: #24292F"> </span><span style="color: #0A3069">&#39;vue&#39;</span><span style="color: #24292F">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #CF222E">export</span><span style="color: #953800"> </span><span style="color: #CF222E">default</span><span style="color: #953800"> </span><span style="color: #8250DF">defineComponent</span><span style="color: #953800">({</span></span>
<span class="line"><span style="color: #953800">  </span><span style="color: #8250DF">setup</span><span style="color: #953800">() </span><span style="color: #24292F">{</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #CF222E">const</span><span style="color: #24292F"> </span><span style="color: #8250DF">handelMessage</span><span style="color: #24292F"> </span><span style="color: #CF222E">=</span><span style="color: #24292F"> (</span><span style="color: #953800">type</span><span style="color: #CF222E">:</span><span style="color: #24292F"> </span><span style="color: #0550AE">string</span><span style="color: #24292F">) </span><span style="color: #CF222E">=&gt;</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">      </span><span style="color: #8250DF">CzMessage</span><span style="color: #24292F">({</span></span>
<span class="line"><span style="color: #24292F">        type: type,</span></span>
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
        </template></demo><h3 id="指定属性" tabindex="-1"><a class="header-anchor" href="#指定属性" aria-hidden="true">#</a> 指定属性</h3>
<demo customClass="demoblock-custom" sourceCode="&lt;template&gt;
  &lt;cz-button type=&quot;success&quot; @click=&quot;CzMessage.success('success')&quot;&gt; success &lt;/cz-button&gt;
  &lt;cz-button type=&quot;danger&quot; @click=&quot;CzMessage.error('error')&quot;&gt; error &lt;/cz-button&gt;
  &lt;cz-button type=&quot;warning&quot; @click=&quot;CzMessage.warning('warning')&quot;&gt; warning &lt;/cz-button&gt;
  &lt;cz-button type=&quot;info&quot; @click=&quot;CzMessage.info('info')&quot;&gt; info &lt;/cz-button&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot;&gt;
import { CzMessage } from '@cz-coco/components';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {
      CzMessage
    };
  }
});
&lt;/script&gt;
"><render-demo-1 />
        
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: #ffffff"><code><span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">cz-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;success&quot;</span><span style="color: #24292F"> @</span><span style="color: #0550AE">click</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">CzMessage.</span><span style="color: #8250DF">success</span><span style="color: #24292F">(</span><span style="color: #0A3069">&#39;success&#39;</span><span style="color: #24292F">)</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">&gt; success &lt;/</span><span style="color: #116329">cz-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">cz-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;danger&quot;</span><span style="color: #24292F"> @</span><span style="color: #0550AE">click</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">CzMessage.</span><span style="color: #8250DF">error</span><span style="color: #24292F">(</span><span style="color: #0A3069">&#39;error&#39;</span><span style="color: #24292F">)</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">&gt; error &lt;/</span><span style="color: #116329">cz-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">cz-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;warning&quot;</span><span style="color: #24292F"> @</span><span style="color: #0550AE">click</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">CzMessage.</span><span style="color: #8250DF">warning</span><span style="color: #24292F">(</span><span style="color: #0A3069">&#39;warning&#39;</span><span style="color: #24292F">)</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">&gt; warning &lt;/</span><span style="color: #116329">cz-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">cz-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;info&quot;</span><span style="color: #24292F"> @</span><span style="color: #0550AE">click</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">CzMessage.</span><span style="color: #8250DF">info</span><span style="color: #24292F">(</span><span style="color: #0A3069">&#39;info&#39;</span><span style="color: #24292F">)</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">&gt; info &lt;/</span><span style="color: #116329">cz-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">script</span><span style="color: #24292F"> </span><span style="color: #0550AE">lang</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;ts&quot;</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #CF222E">import</span><span style="color: #24292F"> { CzMessage } </span><span style="color: #CF222E">from</span><span style="color: #24292F"> </span><span style="color: #0A3069">&#39;@cz-coco/components&#39;</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #CF222E">import</span><span style="color: #24292F"> { defineComponent } </span><span style="color: #CF222E">from</span><span style="color: #24292F"> </span><span style="color: #0A3069">&#39;vue&#39;</span><span style="color: #24292F">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #CF222E">export</span><span style="color: #953800"> </span><span style="color: #CF222E">default</span><span style="color: #953800"> </span><span style="color: #8250DF">defineComponent</span><span style="color: #953800">({</span></span>
<span class="line"><span style="color: #953800">  </span><span style="color: #8250DF">setup</span><span style="color: #953800">() </span><span style="color: #24292F">{</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #CF222E">return</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">      CzMessage</span></span>
<span class="line"><span style="color: #24292F">    };</span></span>
<span class="line"><span style="color: #24292F">  }</span></span>
<span class="line"><span style="color: #953800">})</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">script</span><span style="color: #24292F">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h3 id="自定义图标" tabindex="-1"><a class="header-anchor" href="#自定义图标" aria-hidden="true">#</a> 自定义图标</h3>
<demo customClass="demoblock-custom" sourceCode="&lt;template&gt;
  &lt;cz-button type=&quot;success&quot; @click=&quot;handelMessage('success', 'security')&quot;&gt; success &lt;/cz-button&gt;
  &lt;cz-button type=&quot;danger&quot; @click=&quot;handelMessage('error', 'cry')&quot;&gt; error &lt;/cz-button&gt;
  &lt;cz-button type=&quot;warning&quot; @click=&quot;handelMessage('warning', 'good-fill')&quot;&gt; warning &lt;/cz-button&gt;
  &lt;cz-button type=&quot;info&quot; @click=&quot;handelMessage('info', 'camera')&quot;&gt; info &lt;/cz-button&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot;&gt;
import { CzMessage } from '@cz-coco/components';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const handelMessage = (type: string, icon: string) =&gt; {
      CzMessage({
        type: type,
        icon: icon,
        message: '我是测试的'
      });
    };
    return {
      handelMessage
    };
  }
});
&lt;/script&gt;
"><render-demo-2 />
        
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: #ffffff"><code><span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">cz-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;success&quot;</span><span style="color: #24292F"> @</span><span style="color: #0550AE">click</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #8250DF">handelMessage</span><span style="color: #24292F">(</span><span style="color: #0A3069">&#39;success&#39;</span><span style="color: #24292F">, </span><span style="color: #0A3069">&#39;security&#39;</span><span style="color: #24292F">)</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">&gt; success &lt;/</span><span style="color: #116329">cz-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">cz-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;danger&quot;</span><span style="color: #24292F"> @</span><span style="color: #0550AE">click</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #8250DF">handelMessage</span><span style="color: #24292F">(</span><span style="color: #0A3069">&#39;error&#39;</span><span style="color: #24292F">, </span><span style="color: #0A3069">&#39;cry&#39;</span><span style="color: #24292F">)</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">&gt; error &lt;/</span><span style="color: #116329">cz-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">cz-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;warning&quot;</span><span style="color: #24292F"> @</span><span style="color: #0550AE">click</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #8250DF">handelMessage</span><span style="color: #24292F">(</span><span style="color: #0A3069">&#39;warning&#39;</span><span style="color: #24292F">, </span><span style="color: #0A3069">&#39;good-fill&#39;</span><span style="color: #24292F">)</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">&gt; warning &lt;/</span><span style="color: #116329">cz-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">cz-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;info&quot;</span><span style="color: #24292F"> @</span><span style="color: #0550AE">click</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #8250DF">handelMessage</span><span style="color: #24292F">(</span><span style="color: #0A3069">&#39;info&#39;</span><span style="color: #24292F">, </span><span style="color: #0A3069">&#39;camera&#39;</span><span style="color: #24292F">)</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">&gt; info &lt;/</span><span style="color: #116329">cz-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">script</span><span style="color: #24292F"> </span><span style="color: #0550AE">lang</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;ts&quot;</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #CF222E">import</span><span style="color: #24292F"> { CzMessage } </span><span style="color: #CF222E">from</span><span style="color: #24292F"> </span><span style="color: #0A3069">&#39;@cz-coco/components&#39;</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #CF222E">import</span><span style="color: #24292F"> { defineComponent } </span><span style="color: #CF222E">from</span><span style="color: #24292F"> </span><span style="color: #0A3069">&#39;vue&#39;</span><span style="color: #24292F">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #CF222E">export</span><span style="color: #953800"> </span><span style="color: #CF222E">default</span><span style="color: #953800"> </span><span style="color: #8250DF">defineComponent</span><span style="color: #953800">({</span></span>
<span class="line"><span style="color: #953800">  </span><span style="color: #8250DF">setup</span><span style="color: #953800">() </span><span style="color: #24292F">{</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #CF222E">const</span><span style="color: #24292F"> </span><span style="color: #8250DF">handelMessage</span><span style="color: #24292F"> </span><span style="color: #CF222E">=</span><span style="color: #24292F"> (</span><span style="color: #953800">type</span><span style="color: #CF222E">:</span><span style="color: #24292F"> </span><span style="color: #0550AE">string</span><span style="color: #24292F">, </span><span style="color: #953800">icon</span><span style="color: #CF222E">:</span><span style="color: #24292F"> </span><span style="color: #0550AE">string</span><span style="color: #24292F">) </span><span style="color: #CF222E">=&gt;</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">      </span><span style="color: #8250DF">CzMessage</span><span style="color: #24292F">({</span></span>
<span class="line"><span style="color: #24292F">        type: type,</span></span>
<span class="line"><span style="color: #24292F">        icon: icon,</span></span>
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
    
    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

function render(_ctx, _cache) {
  const _component_cz_button = _resolveComponent("cz-button")

  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createVNode(_component_cz_button, {
      type: "success",
      onClick: _cache[0] || (_cache[0] = $event => (_ctx.handelMessage('success')))
    }, {
      default: _withCtx(() => [
        _createTextVNode(" success ")
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cz_button, {
      type: "danger",
      onClick: _cache[1] || (_cache[1] = $event => (_ctx.handelMessage('error')))
    }, {
      default: _withCtx(() => [
        _createTextVNode(" error ")
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cz_button, {
      type: "warning",
      onClick: _cache[2] || (_cache[2] = $event => (_ctx.handelMessage('warning')))
    }, {
      default: _withCtx(() => [
        _createTextVNode(" warning ")
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cz_button, {
      type: "info",
      onClick: _cache[3] || (_cache[3] = $event => (_ctx.handelMessage('info')))
    }, {
      default: _withCtx(() => [
        _createTextVNode(" info ")
      ]),
      _: 1 /* STABLE */
    })
  ], 64 /* STABLE_FRAGMENT */))
}
  
    const { CzMessage } = cz;
const { defineComponent } = Vue;

const democomponentExport = defineComponent({
  setup() {
    const handelMessage = (type: string) => {
      CzMessage({
        type: type,
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
  })(),"render-demo-1": (function() {
    
    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

function render(_ctx, _cache) {
  const _component_cz_button = _resolveComponent("cz-button")

  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createVNode(_component_cz_button, {
      type: "success",
      onClick: _cache[0] || (_cache[0] = $event => (_ctx.CzMessage.success('success')))
    }, {
      default: _withCtx(() => [
        _createTextVNode(" success ")
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cz_button, {
      type: "danger",
      onClick: _cache[1] || (_cache[1] = $event => (_ctx.CzMessage.error('error')))
    }, {
      default: _withCtx(() => [
        _createTextVNode(" error ")
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cz_button, {
      type: "warning",
      onClick: _cache[2] || (_cache[2] = $event => (_ctx.CzMessage.warning('warning')))
    }, {
      default: _withCtx(() => [
        _createTextVNode(" warning ")
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cz_button, {
      type: "info",
      onClick: _cache[3] || (_cache[3] = $event => (_ctx.CzMessage.info('info')))
    }, {
      default: _withCtx(() => [
        _createTextVNode(" info ")
      ]),
      _: 1 /* STABLE */
    })
  ], 64 /* STABLE_FRAGMENT */))
}
  
    const { CzMessage } = cz;
const { defineComponent } = Vue;

const democomponentExport = defineComponent({
  setup() {
    return {
      CzMessage
    };
  }
});
    return {
      render,
      ...democomponentExport
    }
  })(),"render-demo-2": (function() {
    
    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

function render(_ctx, _cache) {
  const _component_cz_button = _resolveComponent("cz-button")

  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createVNode(_component_cz_button, {
      type: "success",
      onClick: _cache[0] || (_cache[0] = $event => (_ctx.handelMessage('success', 'security')))
    }, {
      default: _withCtx(() => [
        _createTextVNode(" success ")
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cz_button, {
      type: "danger",
      onClick: _cache[1] || (_cache[1] = $event => (_ctx.handelMessage('error', 'cry')))
    }, {
      default: _withCtx(() => [
        _createTextVNode(" error ")
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cz_button, {
      type: "warning",
      onClick: _cache[2] || (_cache[2] = $event => (_ctx.handelMessage('warning', 'good-fill')))
    }, {
      default: _withCtx(() => [
        _createTextVNode(" warning ")
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_cz_button, {
      type: "info",
      onClick: _cache[3] || (_cache[3] = $event => (_ctx.handelMessage('info', 'camera')))
    }, {
      default: _withCtx(() => [
        _createTextVNode(" info ")
      ]),
      _: 1 /* STABLE */
    })
  ], 64 /* STABLE_FRAGMENT */))
}
  
    const { CzMessage } = cz;
const { defineComponent } = Vue;

const democomponentExport = defineComponent({
  setup() {
    const handelMessage = (type: string, icon: string) => {
      CzMessage({
        type: type,
        icon: icon,
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