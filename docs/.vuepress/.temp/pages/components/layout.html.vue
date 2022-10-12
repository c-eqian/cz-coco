<template><div><h3 id="cz-coco-layout" tabindex="-1"><a class="header-anchor" href="#cz-coco-layout" aria-hidden="true">#</a> @cz-coco/layout</h3>
<demo customClass="demoblock-custom" sourceCode="&lt;template&gt;
  &lt;sum-layout :settings=&quot;settings&quot; class=&quot;sum-layout&quot;&gt;
     &lt;template #title&gt;
       &lt;div class=&quot;title&quot;&gt;
        &lt;img style=&quot;height: 50px;margin-right: 10px;&quot; src=&quot;data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ0IDQ0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzQwOWVmZjtmaWxsLXJ1bGU6ZXZlbm9kZDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmVsZW1lbnQgcGx1cy1sb2dvLXNtYWxsIOWJr+acrDwvdGl0bGU+PHBhdGggaWQ9ImVsZW1lbnRfcGx1cy1sb2dvLXNtYWxsIiBkYXRhLW5hbWU9ImVsZW1lbnQgcGx1cy1sb2dvLXNtYWxsIiBjbGFzcz0iY2xzLTEiIGQ9Ik0zNy40MSwzMi4zN2MwLDEuNTctLjgzLDEuOTMtLjgzLDEuOTNMMjEuNTEsNDNBMS42OSwxLjY5LDAsMCwxLDIwLDQzUzUuMiwzNC40LDQuNjYsMzRhMS4yOSwxLjI5LDAsMCwxLS41NS0xVjE1LjI0YzAtLjc4LDEtMS4zMywxLTEuMzNMMTkuODYsNS4zNmEyLDIsMCwwLDEsMS43OSwwbDE0LjQ2LDguNDFhMi4wNiwyLjA2LDAsMCwxLDEuMjUsMi4wNlYzMi4zN1ptLTUuOS0xN0wyMS4zNSw5LjVhMS41OSwxLjU5LDAsMCwwLTEuNDEsMEw4LjMzLDE2LjE1cy0uNzcuNDYtLjc2LDEuMDgsMCwxMy45MiwwLDEzLjkyQTEsMSwwLDAsMCw4LDMxLjljLjQzLjMsMTIsNywxMiw3YTEuMzEsMS4zMSwwLDAsMCwxLjE5LDBDMjEuOTEsMzguNSwzMywzMi4xMSwzMywzMi4xMXMuNjUtLjI4LjY1LTEuNTFWMjcuMTNsLTEzLDcuOVYzMmEzLjA1LDMuMDUsMCwwLDEsMS0yLjA3TDMzLjIsMjNhMi40NCwyLjQ0LDAsMCwwLC41NS0xLjQ2VjE4LjQzTDIwLjY0LDI2LjM1di0zLjJhMi4yMiwyLjIyLDAsMCwxLC44My0xLjc5Wk00MS4wNyw0LjIyYS4zOS4zOSwwLDAsMC0uMzctLjQySDM4VjEuMDZjMC0uMTYtLjI2LS4yMi0uNTMtLjIyTDM2LDEuMDhjLS4xOCwwLS4zMS4xMi0uMzEuMjNWMy44SDMzYS40LjQsMCwwLDAtLjM2LjM3djJoM1Y5YzAsLjE2LjI2LjI3LjU0LjIzbDEuNTEtLjI1Yy4xOCwwLC4yOS0uMTMuMjktLjIzVjYuMTRoM1oiLz48L3N2Zz4=&quot;&gt;
        &lt;div&gt;测试标题&lt;/div&gt;
       &lt;/div&gt;
     &lt;/template&gt;
     &lt;template #right&gt;
        &lt;div&gt;admin&lt;/div&gt;
      &lt;/template&gt;
      &lt;template #default&gt;
        &lt;div&gt;container&lt;/div&gt;
      &lt;/template&gt;
  &lt;/sum-layout&gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot;&gt;
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const settings = reactive({
        // 可以用slot插槽或者render渲染函数两种方式，当使用render的时候需要改成 &lt;script lang=&quot;tsx&quot;&gt;
        headerTitle: {
          slot: 'title'
        },
        // headerTitle: () =&gt;
        //        &lt;div class=&quot;title&quot;&gt;
        //           &lt;img
        //             src=&quot;./logo.png&quot;
        //             alt=&quot;header-logo&quot;
        //             /&gt;
        //             &lt;div&gt;测试标题&lt;/div&gt;
        //        &lt;/div&gt;,
        headerRight: {
          slot: 'right'
        },
        // headerRight: () =&gt; &lt;div&gt;admin&lt;/div&gt;,
        menuData: [
          {
            title: '菜单列表', // 标题
            icon: 'el-icon-s-goods', // icon
            auth: 'menu', // 权限
            path: '/menu', // 路径
            children: [ // 子菜单
              {
                title: '数据',
                auth: 'menu/data',
                // path: '/menu/data'
              },
              {
                title: '分析',
                auth: 'menu/analysis',
                // path: '/menu/analysis'
              }
            ]
          }
       ],
       headerStyles: {
         backgroundColor: '#545c64',
         padding: '10px',
         color: '#fff'
       },
       menuProps: {
         backgroundColor: '#f7f6f2',
         textColor: '#333',
         activeTextColor: '#409eff',
         defaultActive: '0-0',
         defaultOpeneds: [0]
       },
       triggerCollapse: true,
       footer: '@copyRight by footer', // 字符串或者render函数
    })
    return {
      settings,
      ...toRefs(settings)
    }
  }
})
&lt;/script&gt;

&lt;style&gt;
.sum-layout {
   min-height: 500px;
}
.title {
  display: flex;
  align-items: center;
}
a:hover {
  text-decoration: none!important;
}
&lt;/style&gt;
"><render-demo-0 />
        
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: #ffffff"><code><span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">sum-layout</span><span style="color: #24292F"> :</span><span style="color: #0550AE">settings</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">settings</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F"> </span><span style="color: #0550AE">class</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;sum-layout&quot;</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">     &lt;</span><span style="color: #116329">template</span><span style="color: #24292F"> #</span><span style="color: #0550AE">title</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">       &lt;</span><span style="color: #116329">div</span><span style="color: #24292F"> </span><span style="color: #0550AE">class</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;title&quot;</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">        &lt;</span><span style="color: #116329">img</span><span style="color: #24292F"> </span><span style="color: #0550AE">style</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;height: 50px;margin-right: 10px;&quot;</span><span style="color: #24292F"> </span><span style="color: #0550AE">src</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ0IDQ0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzQwOWVmZjtmaWxsLXJ1bGU6ZXZlbm9kZDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmVsZW1lbnQgcGx1cy1sb2dvLXNtYWxsIOWJr+acrDwvdGl0bGU+PHBhdGggaWQ9ImVsZW1lbnRfcGx1cy1sb2dvLXNtYWxsIiBkYXRhLW5hbWU9ImVsZW1lbnQgcGx1cy1sb2dvLXNtYWxsIiBjbGFzcz0iY2xzLTEiIGQ9Ik0zNy40MSwzMi4zN2MwLDEuNTctLjgzLDEuOTMtLjgzLDEuOTNMMjEuNTEsNDNBMS42OSwxLjY5LDAsMCwxLDIwLDQzUzUuMiwzNC40LDQuNjYsMzRhMS4yOSwxLjI5LDAsMCwxLS41NS0xVjE1LjI0YzAtLjc4LDEtMS4zMywxLTEuMzNMMTkuODYsNS4zNmEyLDIsMCwwLDEsMS43OSwwbDE0LjQ2LDguNDFhMi4wNiwyLjA2LDAsMCwxLDEuMjUsMi4wNlYzMi4zN1ptLTUuOS0xN0wyMS4zNSw5LjVhMS41OSwxLjU5LDAsMCwwLTEuNDEsMEw4LjMzLDE2LjE1cy0uNzcuNDYtLjc2LDEuMDgsMCwxMy45MiwwLDEzLjkyQTEsMSwwLDAsMCw4LDMxLjljLjQzLjMsMTIsNywxMiw3YTEuMzEsMS4zMSwwLDAsMCwxLjE5LDBDMjEuOTEsMzguNSwzMywzMi4xMSwzMywzMi4xMXMuNjUtLjI4LjY1LTEuNTFWMjcuMTNsLTEzLDcuOVYzMmEzLjA1LDMuMDUsMCwwLDEsMS0yLjA3TDMzLjIsMjNhMi40NCwyLjQ0LDAsMCwwLC41NS0xLjQ2VjE4LjQzTDIwLjY0LDI2LjM1di0zLjJhMi4yMiwyLjIyLDAsMCwxLC44My0xLjc5Wk00MS4wNyw0LjIyYS4zOS4zOSwwLDAsMC0uMzctLjQySDM4VjEuMDZjMC0uMTYtLjI2LS4yMi0uNTMtLjIyTDM2LDEuMDhjLS4xOCwwLS4zMS4xMi0uMzEuMjNWMy44SDMzYS40LjQsMCwwLDAtLjM2LjM3djJoM1Y5YzAsLjE2LjI2LjI3LjU0LjIzbDEuNTEtLjI1Yy4xOCwwLC4yOS0uMTMuMjktLjIzVjYuMTRoM1oiLz48L3N2Zz4=&quot;</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">        &lt;</span><span style="color: #116329">div</span><span style="color: #24292F">&gt;测试标题&lt;/</span><span style="color: #116329">div</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">       &lt;/</span><span style="color: #116329">div</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">     &lt;/</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">     &lt;</span><span style="color: #116329">template</span><span style="color: #24292F"> #</span><span style="color: #0550AE">right</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">        &lt;</span><span style="color: #116329">div</span><span style="color: #24292F">&gt;admin&lt;/</span><span style="color: #116329">div</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">      &lt;/</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">      &lt;</span><span style="color: #116329">template</span><span style="color: #24292F"> #</span><span style="color: #0550AE">default</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">        &lt;</span><span style="color: #116329">div</span><span style="color: #24292F">&gt;container&lt;/</span><span style="color: #116329">div</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">      &lt;/</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;/</span><span style="color: #116329">sum-layout</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">script</span><span style="color: #24292F"> </span><span style="color: #0550AE">lang</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;ts&quot;</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #CF222E">import</span><span style="color: #24292F"> { defineComponent, reactive, toRefs } </span><span style="color: #CF222E">from</span><span style="color: #24292F"> </span><span style="color: #0A3069">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #CF222E">export</span><span style="color: #953800"> </span><span style="color: #CF222E">default</span><span style="color: #953800"> </span><span style="color: #8250DF">defineComponent</span><span style="color: #953800">({</span></span>
<span class="line"><span style="color: #953800">  </span><span style="color: #8250DF">setup</span><span style="color: #953800">() </span><span style="color: #24292F">{</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #CF222E">const</span><span style="color: #24292F"> </span><span style="color: #0550AE">settings</span><span style="color: #24292F"> </span><span style="color: #CF222E">=</span><span style="color: #24292F"> </span><span style="color: #8250DF">reactive</span><span style="color: #24292F">({</span></span>
<span class="line"><span style="color: #24292F">        </span><span style="color: #6E7781">// 可以用slot插槽或者render渲染函数两种方式，当使用render的时候需要改成 &lt;script lang=&quot;tsx&quot;&gt;</span></span>
<span class="line"><span style="color: #24292F">        headerTitle: {</span></span>
<span class="line"><span style="color: #24292F">          slot: </span><span style="color: #0A3069">&#39;title&#39;</span></span>
<span class="line"><span style="color: #24292F">        },</span></span>
<span class="line"><span style="color: #24292F">        </span><span style="color: #6E7781">// headerTitle: () =&gt;</span></span>
<span class="line"><span style="color: #24292F">        </span><span style="color: #6E7781">//        &lt;div class=&quot;title&quot;&gt;</span></span>
<span class="line"><span style="color: #24292F">        </span><span style="color: #6E7781">//           &lt;img</span></span>
<span class="line"><span style="color: #24292F">        </span><span style="color: #6E7781">//             src=&quot;./logo.png&quot;</span></span>
<span class="line"><span style="color: #24292F">        </span><span style="color: #6E7781">//             alt=&quot;header-logo&quot;</span></span>
<span class="line"><span style="color: #24292F">        </span><span style="color: #6E7781">//             /&gt;</span></span>
<span class="line"><span style="color: #24292F">        </span><span style="color: #6E7781">//             &lt;div&gt;测试标题&lt;/div&gt;</span></span>
<span class="line"><span style="color: #24292F">        </span><span style="color: #6E7781">//        &lt;/div&gt;,</span></span>
<span class="line"><span style="color: #24292F">        headerRight: {</span></span>
<span class="line"><span style="color: #24292F">          slot: </span><span style="color: #0A3069">&#39;right&#39;</span></span>
<span class="line"><span style="color: #24292F">        },</span></span>
<span class="line"><span style="color: #24292F">        </span><span style="color: #6E7781">// headerRight: () =&gt; &lt;div&gt;admin&lt;/div&gt;,</span></span>
<span class="line"><span style="color: #24292F">        menuData: [</span></span>
<span class="line"><span style="color: #24292F">          {</span></span>
<span class="line"><span style="color: #24292F">            title: </span><span style="color: #0A3069">&#39;菜单列表&#39;</span><span style="color: #24292F">, </span><span style="color: #6E7781">// 标题</span></span>
<span class="line"><span style="color: #24292F">            icon: </span><span style="color: #0A3069">&#39;el-icon-s-goods&#39;</span><span style="color: #24292F">, </span><span style="color: #6E7781">// icon</span></span>
<span class="line"><span style="color: #24292F">            auth: </span><span style="color: #0A3069">&#39;menu&#39;</span><span style="color: #24292F">, </span><span style="color: #6E7781">// 权限</span></span>
<span class="line"><span style="color: #24292F">            path: </span><span style="color: #0A3069">&#39;/menu&#39;</span><span style="color: #24292F">, </span><span style="color: #6E7781">// 路径</span></span>
<span class="line"><span style="color: #24292F">            children: [ </span><span style="color: #6E7781">// 子菜单</span></span>
<span class="line"><span style="color: #24292F">              {</span></span>
<span class="line"><span style="color: #24292F">                title: </span><span style="color: #0A3069">&#39;数据&#39;</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">                auth: </span><span style="color: #0A3069">&#39;menu/data&#39;</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">                </span><span style="color: #6E7781">// path: &#39;/menu/data&#39;</span></span>
<span class="line"><span style="color: #24292F">              },</span></span>
<span class="line"><span style="color: #24292F">              {</span></span>
<span class="line"><span style="color: #24292F">                title: </span><span style="color: #0A3069">&#39;分析&#39;</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">                auth: </span><span style="color: #0A3069">&#39;menu/analysis&#39;</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">                </span><span style="color: #6E7781">// path: &#39;/menu/analysis&#39;</span></span>
<span class="line"><span style="color: #24292F">              }</span></span>
<span class="line"><span style="color: #24292F">            ]</span></span>
<span class="line"><span style="color: #24292F">          }</span></span>
<span class="line"><span style="color: #24292F">       ],</span></span>
<span class="line"><span style="color: #24292F">       headerStyles: {</span></span>
<span class="line"><span style="color: #24292F">         backgroundColor: </span><span style="color: #0A3069">&#39;#545c64&#39;</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">         padding: </span><span style="color: #0A3069">&#39;10px&#39;</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">         color: </span><span style="color: #0A3069">&#39;#fff&#39;</span></span>
<span class="line"><span style="color: #24292F">       },</span></span>
<span class="line"><span style="color: #24292F">       menuProps: {</span></span>
<span class="line"><span style="color: #24292F">         backgroundColor: </span><span style="color: #0A3069">&#39;#f7f6f2&#39;</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">         textColor: </span><span style="color: #0A3069">&#39;#333&#39;</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">         activeTextColor: </span><span style="color: #0A3069">&#39;#409eff&#39;</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">         defaultActive: </span><span style="color: #0A3069">&#39;0-0&#39;</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">         defaultOpeneds: [</span><span style="color: #0550AE">0</span><span style="color: #24292F">]</span></span>
<span class="line"><span style="color: #24292F">       },</span></span>
<span class="line"><span style="color: #24292F">       triggerCollapse: </span><span style="color: #0550AE">true</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">       footer: </span><span style="color: #0A3069">&#39;@copyRight by footer&#39;</span><span style="color: #24292F">, </span><span style="color: #6E7781">// 字符串或者render函数</span></span>
<span class="line"><span style="color: #24292F">    })</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #CF222E">return</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">      settings,</span></span>
<span class="line"><span style="color: #24292F">      </span><span style="color: #CF222E">...</span><span style="color: #8250DF">toRefs</span><span style="color: #24292F">(settings)</span></span>
<span class="line"><span style="color: #24292F">    }</span></span>
<span class="line"><span style="color: #24292F">  }</span></span>
<span class="line"><span style="color: #953800">})</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">script</span><span style="color: #24292F">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">style</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #0550AE">.sum-layout</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">   </span><span style="color: #0550AE">min-height</span><span style="color: #24292F">: </span><span style="color: #0550AE">500</span><span style="color: #CF222E">px</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #24292F">}</span></span>
<span class="line"><span style="color: #0550AE">.title</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">  </span><span style="color: #0550AE">display</span><span style="color: #24292F">: </span><span style="color: #0550AE">flex</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #24292F">  </span><span style="color: #0550AE">align-items</span><span style="color: #24292F">: </span><span style="color: #0550AE">center</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #24292F">}</span></span>
<span class="line"><span style="color: #116329">a</span><span style="color: #0550AE">:hover</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">  </span><span style="color: #0550AE">text-decoration</span><span style="color: #24292F">: </span><span style="color: #0550AE">none</span><span style="color: #CF222E">!important</span><span style="color: #24292F">;</span></span>
<span class="line"><span style="color: #24292F">}</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">style</span><span style="color: #24292F">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h3 id="sumlayout-attributes" tabindex="-1"><a class="header-anchor" href="#sumlayout-attributes" aria-hidden="true">#</a> SumLayout Attributes</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>settings</td>
<td>布局参数</td>
<td>object</td>
<td>—</td>
<td>{}</td>
</tr>
</tbody>
</table>
<h3 id="settings-attributes" tabindex="-1"><a class="header-anchor" href="#settings-attributes" aria-hidden="true">#</a> Settings Attributes</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>headerTitle</td>
<td>头栏左边内容</td>
<td>string/object/function（如果有rener函数则展示render函数内容，如果是object,{slot: 'title'}则可以使用插槽，否则展示字符串）</td>
<td>—</td>
<td>{}</td>
</tr>
<tr>
<td>headerRight</td>
<td>头栏右边内容</td>
<td>string/object/function（如果有rener函数则展示render函数内容，如果是object,{slot: 'title'}则可以使用插槽，否则展示字符串）</td>
<td>—</td>
<td>{}</td>
</tr>
<tr>
<td>headerStyles</td>
<td>头栏样式</td>
<td>object</td>
<td>—</td>
<td>{}</td>
</tr>
<tr>
<td>menuProps</td>
<td>侧栏属性传递（继承 el-menu 属性）</td>
<td>object</td>
<td>—</td>
<td>{}</td>
</tr>
<tr>
<td>triggerCollapse</td>
<td>是否显示 collapse 图标</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>menuData</td>
<td>菜单数据</td>
<td>array</td>
<td>—</td>
<td>[]</td>
</tr>
<tr>
<td>footer</td>
<td>底部footer</td>
<td>string/object/function（如果有rener函数则展示render函数内容，如果是object,{slot: 'title'}则可以使用插槽，否则展示字符串）</td>
<td>—</td>
<td>{}</td>
</tr>
</tbody>
</table>
<h3 id="menuprops-attributes" tabindex="-1"><a class="header-anchor" href="#menuprops-attributes" aria-hidden="true">#</a> MenuProps Attributes</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>mode</td>
<td>模式</td>
<td>string</td>
<td>horizontal / vertical</td>
<td>vertical</td>
</tr>
<tr>
<td>collapse</td>
<td>是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>background-color</td>
<td>菜单的背景色（仅支持 hex 格式）</td>
<td>string</td>
<td>—</td>
<td>#ffffff</td>
</tr>
<tr>
<td>text-color</td>
<td>菜单的文字颜色（仅支持 hex 格式）</td>
<td>string</td>
<td>—</td>
<td>#303133</td>
</tr>
<tr>
<td>active-text-color</td>
<td>当前激活菜单的文字颜色（仅支持 hex 格式）</td>
<td>string</td>
<td>—</td>
<td>#409EFF</td>
</tr>
<tr>
<td>default-active</td>
<td>当前激活菜单的 index</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>default-openeds</td>
<td>当前打开的 sub-menu 的 index 的数组</td>
<td>Array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>unique-opened</td>
<td>是否只保持一个子菜单的展开</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>menu-trigger</td>
<td>子菜单打开的触发方式(只在 mode 为 horizontal 时有效)</td>
<td>string</td>
<td>hover / click</td>
<td>hover</td>
</tr>
<tr>
<td>router</td>
<td>是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>collapse-transition</td>
<td>是否开启折叠动画</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
</tbody>
</table>
</div></template>

<script lang="ts">
      import * as Vue from 'vue'
      
      export default {
        name: 'component-doc',
        components: {
          "render-demo-0": (function() {
    
    const { createElementVNode: _createElementVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, openBlock: _openBlock, createBlock: _createBlock } = Vue

const _hoisted_1 = /*#__PURE__*/_createElementVNode("div", { class: "title" }, [
  /*#__PURE__*/_createElementVNode("img", {
    style: {"height":"50px","margin-right":"10px"},
    src: "data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ0IDQ0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzQwOWVmZjtmaWxsLXJ1bGU6ZXZlbm9kZDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmVsZW1lbnQgcGx1cy1sb2dvLXNtYWxsIOWJr+acrDwvdGl0bGU+PHBhdGggaWQ9ImVsZW1lbnRfcGx1cy1sb2dvLXNtYWxsIiBkYXRhLW5hbWU9ImVsZW1lbnQgcGx1cy1sb2dvLXNtYWxsIiBjbGFzcz0iY2xzLTEiIGQ9Ik0zNy40MSwzMi4zN2MwLDEuNTctLjgzLDEuOTMtLjgzLDEuOTNMMjEuNTEsNDNBMS42OSwxLjY5LDAsMCwxLDIwLDQzUzUuMiwzNC40LDQuNjYsMzRhMS4yOSwxLjI5LDAsMCwxLS41NS0xVjE1LjI0YzAtLjc4LDEtMS4zMywxLTEuMzNMMTkuODYsNS4zNmEyLDIsMCwwLDEsMS43OSwwbDE0LjQ2LDguNDFhMi4wNiwyLjA2LDAsMCwxLDEuMjUsMi4wNlYzMi4zN1ptLTUuOS0xN0wyMS4zNSw5LjVhMS41OSwxLjU5LDAsMCwwLTEuNDEsMEw4LjMzLDE2LjE1cy0uNzcuNDYtLjc2LDEuMDgsMCwxMy45MiwwLDEzLjkyQTEsMSwwLDAsMCw4LDMxLjljLjQzLjMsMTIsNywxMiw3YTEuMzEsMS4zMSwwLDAsMCwxLjE5LDBDMjEuOTEsMzguNSwzMywzMi4xMSwzMywzMi4xMXMuNjUtLjI4LjY1LTEuNTFWMjcuMTNsLTEzLDcuOVYzMmEzLjA1LDMuMDUsMCwwLDEsMS0yLjA3TDMzLjIsMjNhMi40NCwyLjQ0LDAsMCwwLC41NS0xLjQ2VjE4LjQzTDIwLjY0LDI2LjM1di0zLjJhMi4yMiwyLjIyLDAsMCwxLC44My0xLjc5Wk00MS4wNyw0LjIyYS4zOS4zOSwwLDAsMC0uMzctLjQySDM4VjEuMDZjMC0uMTYtLjI2LS4yMi0uNTMtLjIyTDM2LDEuMDhjLS4xOCwwLS4zMS4xMi0uMzEuMjNWMy44SDMzYS40LjQsMCwwLDAtLjM2LjM3djJoM1Y5YzAsLjE2LjI2LjI3LjU0LjIzbDEuNTEtLjI1Yy4xOCwwLC4yOS0uMTMuMjktLjIzVjYuMTRoM1oiLz48L3N2Zz4="
  }),
  /*#__PURE__*/_createElementVNode("div", null, "测试标题")
], -1 /* HOISTED */)
const _hoisted_2 = /*#__PURE__*/_createElementVNode("div", null, "admin", -1 /* HOISTED */)
const _hoisted_3 = /*#__PURE__*/_createElementVNode("div", null, "container", -1 /* HOISTED */)

function render(_ctx, _cache) {
  const _component_sum_layout = _resolveComponent("sum-layout")

  return (_openBlock(), _createBlock(_component_sum_layout, {
    settings: _ctx.settings,
    class: "sum-layout"
  }, {
    title: _withCtx(() => [
      _hoisted_1
    ]),
    right: _withCtx(() => [
      _hoisted_2
    ]),
    default: _withCtx(() => [
      _hoisted_3
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["settings"]))
}
  
    const { defineComponent, reactive, toRefs } = Vue

const democomponentExport = defineComponent({
  setup() {
    const settings = reactive({
        // 可以用slot插槽或者render渲染函数两种方式，当使用render的时候需要改成 <script lang="tsx">
        headerTitle: {
          slot: 'title'
        },
        // headerTitle: () =>
        //        <div class="title">
        //           <img
        //             src="./logo.png"
        //             alt="header-logo"
        //             />
        //             <div>测试标题</div>
        //        </div>,
        headerRight: {
          slot: 'right'
        },
        // headerRight: () => <div>admin</div>,
        menuData: [
          {
            title: '菜单列表', // 标题
            icon: 'el-icon-s-goods', // icon
            auth: 'menu', // 权限
            path: '/menu', // 路径
            children: [ // 子菜单
              {
                title: '数据',
                auth: 'menu/data',
                // path: '/menu/data'
              },
              {
                title: '分析',
                auth: 'menu/analysis',
                // path: '/menu/analysis'
              }
            ]
          }
       ],
       headerStyles: {
         backgroundColor: '#545c64',
         padding: '10px',
         color: '#fff'
       },
       menuProps: {
         backgroundColor: '#f7f6f2',
         textColor: '#333',
         activeTextColor: '#409eff',
         defaultActive: '0-0',
         defaultOpeneds: [0]
       },
       triggerCollapse: true,
       footer: '@copyRight by footer', // 字符串或者render函数
    })
    return {
      settings,
      ...toRefs(settings)
    }
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
<style lang="scss">.sum-layout {
   min-height: 500px;
}
.title {
  display: flex;
  align-items: center;
}
a:hover {
  text-decoration: none!important;
}</style>