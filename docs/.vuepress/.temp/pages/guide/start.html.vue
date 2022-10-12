<template><div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="shiki" style="background-color: #ffffff"><code><span class="line"><span style="color: #24292F">npm i @cz-coco/layout</span></span>
<span class="line"><span style="color: #6E7781"># or</span></span>
<span class="line"><span style="color: #24292F">yarn add @cz-coco/layout</span></span>
<span class="line"></span>
<span class="line"><span style="color: #24292F">npm i @cz-coco/table</span></span>
<span class="line"><span style="color: #6E7781"># or</span></span>
<span class="line"><span style="color: #24292F">yarn add @cz-coco/table</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="shiki" style="background-color: #ffffff"><code><span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F"> &lt;</span><span style="color: #116329">sum-layout</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">   &lt;</span><span style="color: #116329">sum-table</span><span style="color: #24292F">/&gt;</span></span>
<span class="line"><span style="color: #24292F"> &lt;/</span><span style="color: #116329">sum-layout</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">script</span><span style="color: #24292F"> </span><span style="color: #0550AE">lang</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;ts&quot;</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #CF222E">import</span><span style="color: #24292F"> { defineComponent, toRefs } </span><span style="color: #CF222E">from</span><span style="color: #24292F"> </span><span style="color: #0A3069">&#39;vue&#39;</span></span>
<span class="line"><span style="color: #CF222E">import</span><span style="color: #24292F"> SumLayout </span><span style="color: #CF222E">from</span><span style="color: #24292F"> </span><span style="color: #0A3069">&#39;@cz-coco/layout&#39;</span></span>
<span class="line"><span style="color: #CF222E">import</span><span style="color: #24292F"> SumTable </span><span style="color: #CF222E">from</span><span style="color: #24292F"> </span><span style="color: #0A3069">&#39;@cz-coco/table&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #CF222E">export</span><span style="color: #953800"> </span><span style="color: #CF222E">default</span><span style="color: #953800"> </span><span style="color: #8250DF">defineComponent</span><span style="color: #953800">({</span></span>
<span class="line"><span style="color: #953800">  </span><span style="color: #24292F">name: </span><span style="color: #0A3069">&#39;sum-layout&#39;</span><span style="color: #953800">,</span></span>
<span class="line"><span style="color: #953800">  </span><span style="color: #24292F">components: { SumLayout, SumTable }</span><span style="color: #953800">,</span></span>
<span class="line"><span style="color: #953800">  </span><span style="color: #8250DF">setup</span><span style="color: #953800">() </span><span style="color: #24292F">{}</span></span>
<span class="line"><span style="color: #953800">})</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">script</span><span style="color: #24292F">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
