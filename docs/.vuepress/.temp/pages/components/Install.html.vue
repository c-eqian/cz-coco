<template><div><!--
 * @Descripttion:
 * @version:
 * @Author: 十三
 * @Date: 2022-10-15 15:45:07
 * @LastEditors: 十三
 * @LastEditTime: 2022-10-15 15:47:28
-->
<h1 id="安装使用" tabindex="-1"><a class="header-anchor" href="#安装使用" aria-hidden="true">#</a> 安装使用</h1>
<p>本节将介绍如何在项目中使用 cz-coco</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<p>使用 npm 或 yarn 安装</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="shiki" style="background-color: #ffffff"><code><span class="line"><span style="color: #24292f">npm install cz-coco</span></span>
<span class="line"><span style="color: #24292f">yarn add cz-coco</span></span>
<span class="line"><span style="color: #24292f"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="引入-cz-coco" tabindex="-1"><a class="header-anchor" href="#引入-cz-coco" aria-hidden="true">#</a> 引入 cz-coco</h2>
<h3 id="完整引入" tabindex="-1"><a class="header-anchor" href="#完整引入" aria-hidden="true">#</a> 完整引入</h3>
<h4 id="需要注意的是-css-样式文件需要单独引入。" tabindex="-1"><a class="header-anchor" href="#需要注意的是-css-样式文件需要单独引入。" aria-hidden="true">#</a> 需要注意的是 css 样式文件需要单独引入。</h4>
<p>在 main.js 中写入以下内容：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #ffffff"><code><span class="line"><span style="color: #CF222E">import</span><span style="color: #24292F"> { createApp } </span><span style="color: #CF222E">from</span><span style="color: #24292F"> </span><span style="color: #0A3069">&#39;vue&#39;</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #CF222E">import</span><span style="color: #24292F"> App </span><span style="color: #CF222E">from</span><span style="color: #24292F"> </span><span style="color: #0A3069">&#39;./App.vue&#39;</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #6E7781">// 导入组件库</span></span>
<span class="line"><span style="color: #CF222E">import</span><span style="color: #24292F"> CzUi </span><span style="color: #CF222E">from</span><span style="color: #24292F"> </span><span style="color: #0A3069">&#39;cz-coco&#39;</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #CF222E">import</span><span style="color: #24292F"> </span><span style="color: #0A3069">&#39;cz-coco/lib/cz-coco.css&#39;</span><span style="color: #24292F">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #CF222E">const</span><span style="color: #24292F"> </span><span style="color: #0550AE">app</span><span style="color: #24292F"> </span><span style="color: #CF222E">=</span><span style="color: #24292F"> </span><span style="color: #8250DF">createApp</span><span style="color: #24292F">(App);</span></span>
<span class="line"><span style="color: #24292F">app.</span><span style="color: #8250DF">use</span><span style="color: #24292F">(CzUi);</span></span>
<span class="line"><span style="color: #24292F">app.</span><span style="color: #8250DF">mount</span><span style="color: #24292F">(</span><span style="color: #0A3069">&#39;#app&#39;</span><span style="color: #24292F">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br/>
<h2 id="愉快开始" tabindex="-1"><a class="header-anchor" href="#愉快开始" aria-hidden="true">#</a> 愉快开始</h2>
<h4 id="至此-cz-coco-就引入完成并且可以使用了。" tabindex="-1"><a class="header-anchor" href="#至此-cz-coco-就引入完成并且可以使用了。" aria-hidden="true">#</a> 至此 cz-coco 就引入完成并且可以使用了。</h4>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #ffffff"><code><span class="line"><span style="color: #6E7781">&lt;!-- html --&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">cz-button</span><span style="color: #24292F">&gt;默认按钮</span><span style="color: #82071E; font-style: italic">&lt;</span><span style="color: #24292F">/-button&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">cz-button</span><span style="color: #24292F"> </span><span style="color: #0550AE">type</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;primary&quot;</span><span style="color: #24292F">&gt;主要按钮</span><span style="color: #82071E; font-style: italic">&lt;</span><span style="color: #24292F">/-button&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br/>
<h2 id="按需引用" tabindex="-1"><a class="header-anchor" href="#按需引用" aria-hidden="true">#</a> 按需引用</h2>
<h4 id="您可以根据个人需要使用按需引用组件-按需引用时不需要使用-app-use-方法注册。" tabindex="-1"><a class="header-anchor" href="#您可以根据个人需要使用按需引用组件-按需引用时不需要使用-app-use-方法注册。" aria-hidden="true">#</a> 您可以根据个人需要使用按需引用组件，按需引用时不需要使用 <code v-pre>app.use()</code> 方法注册。</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #ffffff"><code><span class="line"><span style="color: #6E7781">/*js*/</span></span>
<span class="line"><span style="color: #CF222E">import</span><span style="color: #24292F"> { CzButton } </span><span style="color: #CF222E">from</span><span style="color: #24292F"> </span><span style="color: #0A3069">&#39;cz-coco&#39;</span><span style="color: #24292F">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br/>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="shiki" style="background-color: #ffffff"><code><span class="line"><span style="color: #6E7781">&lt;!-- html --&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">cz-button</span><span style="color: #24292F">&gt;点击&lt;/</span><span style="color: #116329">cz-button</span><span style="color: #24292F">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br/>
</div></template>


