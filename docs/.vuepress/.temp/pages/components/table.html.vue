<template><div><h3 id="cz-coco-table" tabindex="-1"><a class="header-anchor" href="#cz-coco-table" aria-hidden="true">#</a> @cz-coco/table</h3>
<demo customClass="demoblock-custom" sourceCode="&lt;template&gt;
  &lt;sum-table
    border
    :columns=&quot;columns&quot;
    :data=&quot;tableData&quot;
    :pagenation=&quot;pagenation&quot;
    @pagenation-change=&quot;handlePagenationChange&quot;
    @select-change=&quot;handleSelectionChange&quot;
  &gt;
   &lt;template #operation=&quot;scope&quot;&gt;
      &lt;span @click=&quot;removeItem(scope.row)&quot; style=&quot;cursor:pointer;color:#409eff&quot;&gt; 删除 &lt;/span&gt;
    &lt;/template&gt;
  &lt;/sum-table &gt;
&lt;/template&gt;

&lt;script lang=&quot;ts&quot;&gt;
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  setup() {
    const columns = ref([
      {
        type: 'selection',
        width: 60
      },
      {
        label: '媒体ID',
        prop: 'id'
      },
      {
        label: '媒体名称',
        prop: 'appName'
      },
      {
        label: '操作',
        slot: 'operation'
      }
    ])

    const tableData = ref([
      {id: 1, appName: '媒体1'},
      {id: 2, appName: '媒体2'},
      {id: 3, appName: '媒体3'},
      {id: 4, appName: '媒体4'},
      {id: 5, appName: '媒体5'}
    ])
    const pagenation = reactive({
      currentPage: 1,
      pageSize: 10,
      total: 100,
      background: true,
      layout: 'total, sizes, prev, pager, next, jumper'
    })
    const handlePagenationChange = (data) =&gt; {
       console.log(data)
    }

    const handleSelectionChange = (data) =&gt; {
      console.log(data)
    }

    // 单个删除
    const removeItem = (row) =&gt; {
      // 执行删除操作
      console.log('删除', row, row.id)
    }
    return {
      columns,
      tableData,
      pagenation,
      handlePagenationChange,
      handleSelectionChange,
      removeItem
    }
  }
})
&lt;/script&gt;

"><render-demo-0 />
        
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: #ffffff"><code><span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;</span><span style="color: #116329">sum-table</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #0550AE">border</span></span>
<span class="line"><span style="color: #24292F">    :</span><span style="color: #0550AE">columns</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">columns</span><span style="color: #0A3069">&quot;</span></span>
<span class="line"><span style="color: #24292F">    :</span><span style="color: #0550AE">data</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">tableData</span><span style="color: #0A3069">&quot;</span></span>
<span class="line"><span style="color: #24292F">    :</span><span style="color: #0550AE">pagenation</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">pagenation</span><span style="color: #0A3069">&quot;</span></span>
<span class="line"><span style="color: #24292F">    @</span><span style="color: #0550AE">pagenation-change</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">handlePagenationChange</span><span style="color: #0A3069">&quot;</span></span>
<span class="line"><span style="color: #24292F">    @</span><span style="color: #0550AE">select-change</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">handleSelectionChange</span><span style="color: #0A3069">&quot;</span></span>
<span class="line"><span style="color: #24292F">  &gt;</span></span>
<span class="line"><span style="color: #24292F">   &lt;</span><span style="color: #116329">template</span><span style="color: #24292F"> #</span><span style="color: #0550AE">operation</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">scope</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">      &lt;</span><span style="color: #116329">span</span><span style="color: #24292F"> @</span><span style="color: #0550AE">click</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;</span><span style="color: #8250DF">removeItem</span><span style="color: #24292F">(scope.row)</span><span style="color: #0A3069">&quot;</span><span style="color: #24292F"> </span><span style="color: #0550AE">style</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;cursor:pointer;color:#409eff&quot;</span><span style="color: #24292F">&gt; 删除 &lt;/</span><span style="color: #116329">span</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">    &lt;/</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #24292F">  &lt;/</span><span style="color: #116329">sum-table</span><span style="color: #24292F"> &gt;</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">template</span><span style="color: #24292F">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #24292F">&lt;</span><span style="color: #116329">script</span><span style="color: #24292F"> </span><span style="color: #0550AE">lang</span><span style="color: #24292F">=</span><span style="color: #0A3069">&quot;ts&quot;</span><span style="color: #24292F">&gt;</span></span>
<span class="line"><span style="color: #CF222E">import</span><span style="color: #24292F"> { defineComponent, ref, reactive } </span><span style="color: #CF222E">from</span><span style="color: #24292F"> </span><span style="color: #0A3069">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #CF222E">export</span><span style="color: #953800"> </span><span style="color: #CF222E">default</span><span style="color: #953800"> </span><span style="color: #8250DF">defineComponent</span><span style="color: #953800">({</span></span>
<span class="line"><span style="color: #953800">  </span><span style="color: #8250DF">setup</span><span style="color: #953800">() </span><span style="color: #24292F">{</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #CF222E">const</span><span style="color: #24292F"> </span><span style="color: #0550AE">columns</span><span style="color: #24292F"> </span><span style="color: #CF222E">=</span><span style="color: #24292F"> </span><span style="color: #8250DF">ref</span><span style="color: #24292F">([</span></span>
<span class="line"><span style="color: #24292F">      {</span></span>
<span class="line"><span style="color: #24292F">        type: </span><span style="color: #0A3069">&#39;selection&#39;</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">        width: </span><span style="color: #0550AE">60</span></span>
<span class="line"><span style="color: #24292F">      },</span></span>
<span class="line"><span style="color: #24292F">      {</span></span>
<span class="line"><span style="color: #24292F">        label: </span><span style="color: #0A3069">&#39;媒体ID&#39;</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">        prop: </span><span style="color: #0A3069">&#39;id&#39;</span></span>
<span class="line"><span style="color: #24292F">      },</span></span>
<span class="line"><span style="color: #24292F">      {</span></span>
<span class="line"><span style="color: #24292F">        label: </span><span style="color: #0A3069">&#39;媒体名称&#39;</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">        prop: </span><span style="color: #0A3069">&#39;appName&#39;</span></span>
<span class="line"><span style="color: #24292F">      },</span></span>
<span class="line"><span style="color: #24292F">      {</span></span>
<span class="line"><span style="color: #24292F">        label: </span><span style="color: #0A3069">&#39;操作&#39;</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">        slot: </span><span style="color: #0A3069">&#39;operation&#39;</span></span>
<span class="line"><span style="color: #24292F">      }</span></span>
<span class="line"><span style="color: #24292F">    ])</span></span>
<span class="line"></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #CF222E">const</span><span style="color: #24292F"> </span><span style="color: #0550AE">tableData</span><span style="color: #24292F"> </span><span style="color: #CF222E">=</span><span style="color: #24292F"> </span><span style="color: #8250DF">ref</span><span style="color: #24292F">([</span></span>
<span class="line"><span style="color: #24292F">      {id: </span><span style="color: #0550AE">1</span><span style="color: #24292F">, appName: </span><span style="color: #0A3069">&#39;媒体1&#39;</span><span style="color: #24292F">},</span></span>
<span class="line"><span style="color: #24292F">      {id: </span><span style="color: #0550AE">2</span><span style="color: #24292F">, appName: </span><span style="color: #0A3069">&#39;媒体2&#39;</span><span style="color: #24292F">},</span></span>
<span class="line"><span style="color: #24292F">      {id: </span><span style="color: #0550AE">3</span><span style="color: #24292F">, appName: </span><span style="color: #0A3069">&#39;媒体3&#39;</span><span style="color: #24292F">},</span></span>
<span class="line"><span style="color: #24292F">      {id: </span><span style="color: #0550AE">4</span><span style="color: #24292F">, appName: </span><span style="color: #0A3069">&#39;媒体4&#39;</span><span style="color: #24292F">},</span></span>
<span class="line"><span style="color: #24292F">      {id: </span><span style="color: #0550AE">5</span><span style="color: #24292F">, appName: </span><span style="color: #0A3069">&#39;媒体5&#39;</span><span style="color: #24292F">}</span></span>
<span class="line"><span style="color: #24292F">    ])</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #CF222E">const</span><span style="color: #24292F"> </span><span style="color: #0550AE">pagenation</span><span style="color: #24292F"> </span><span style="color: #CF222E">=</span><span style="color: #24292F"> </span><span style="color: #8250DF">reactive</span><span style="color: #24292F">({</span></span>
<span class="line"><span style="color: #24292F">      currentPage: </span><span style="color: #0550AE">1</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">      pageSize: </span><span style="color: #0550AE">10</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">      total: </span><span style="color: #0550AE">100</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">      background: </span><span style="color: #0550AE">true</span><span style="color: #24292F">,</span></span>
<span class="line"><span style="color: #24292F">      layout: </span><span style="color: #0A3069">&#39;total, sizes, prev, pager, next, jumper&#39;</span></span>
<span class="line"><span style="color: #24292F">    })</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #CF222E">const</span><span style="color: #24292F"> </span><span style="color: #8250DF">handlePagenationChange</span><span style="color: #24292F"> </span><span style="color: #CF222E">=</span><span style="color: #24292F"> (</span><span style="color: #953800">data</span><span style="color: #24292F">) </span><span style="color: #CF222E">=&gt;</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">       console.</span><span style="color: #8250DF">log</span><span style="color: #24292F">(data)</span></span>
<span class="line"><span style="color: #24292F">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #CF222E">const</span><span style="color: #24292F"> </span><span style="color: #8250DF">handleSelectionChange</span><span style="color: #24292F"> </span><span style="color: #CF222E">=</span><span style="color: #24292F"> (</span><span style="color: #953800">data</span><span style="color: #24292F">) </span><span style="color: #CF222E">=&gt;</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">      console.</span><span style="color: #8250DF">log</span><span style="color: #24292F">(data)</span></span>
<span class="line"><span style="color: #24292F">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #6E7781">// 单个删除</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #CF222E">const</span><span style="color: #24292F"> </span><span style="color: #8250DF">removeItem</span><span style="color: #24292F"> </span><span style="color: #CF222E">=</span><span style="color: #24292F"> (</span><span style="color: #953800">row</span><span style="color: #24292F">) </span><span style="color: #CF222E">=&gt;</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">      </span><span style="color: #6E7781">// 执行删除操作</span></span>
<span class="line"><span style="color: #24292F">      console.</span><span style="color: #8250DF">log</span><span style="color: #24292F">(</span><span style="color: #0A3069">&#39;删除&#39;</span><span style="color: #24292F">, row, row.id)</span></span>
<span class="line"><span style="color: #24292F">    }</span></span>
<span class="line"><span style="color: #24292F">    </span><span style="color: #CF222E">return</span><span style="color: #24292F"> {</span></span>
<span class="line"><span style="color: #24292F">      columns,</span></span>
<span class="line"><span style="color: #24292F">      tableData,</span></span>
<span class="line"><span style="color: #24292F">      pagenation,</span></span>
<span class="line"><span style="color: #24292F">      handlePagenationChange,</span></span>
<span class="line"><span style="color: #24292F">      handleSelectionChange,</span></span>
<span class="line"><span style="color: #24292F">      removeItem</span></span>
<span class="line"><span style="color: #24292F">    }</span></span>
<span class="line"><span style="color: #24292F">  }</span></span>
<span class="line"><span style="color: #953800">})</span></span>
<span class="line"><span style="color: #24292F">&lt;/</span><span style="color: #116329">script</span><span style="color: #24292F">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo><h3 id="sumtable-attributes" tabindex="-1"><a class="header-anchor" href="#sumtable-attributes" aria-hidden="true">#</a> SumTable Attributes</h3>
<p>属性除继承自 el-table属性外，增加 columns配置，locale 语言配置，默认中文， pagenation 分页属性配置</p>
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
<td>columns</td>
<td>columns 配置</td>
<td>array</td>
<td></td>
<td></td>
</tr>
<tr>
<td>data</td>
<td>显示的数据</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>height</td>
<td>Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。</td>
<td>string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>max-height</td>
<td>Table 的最大高度。合法的值为数字或者单位为 px 的高度。</td>
<td>string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>stripe</td>
<td>是否为斑马纹 table</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>border</td>
<td>是否带有纵向边框</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>size</td>
<td>Table 的尺寸</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>fit</td>
<td>列的宽度是否自撑开</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>show-header</td>
<td>是否显示表头</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>highlight-current-row</td>
<td>是否要高亮当前行</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>current-row-key</td>
<td>当前行的 key，只写属性</td>
<td>string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>row-class-name</td>
<td>行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。</td>
<td>function({ row, rowIndex }) / string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>row-style</td>
<td>行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。</td>
<td>function({ row, rowIndex }) / object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>cell-class-name</td>
<td>单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。</td>
<td>function({ row, column, rowIndex, columnIndex }) / string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>cell-style</td>
<td>单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。</td>
<td>function({ row, column, rowIndex, columnIndex }) / object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>header-row-class-name</td>
<td>表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。</td>
<td>function({ row, rowIndex }) / string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>header-row-style</td>
<td>表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。</td>
<td>function({ row, rowIndex }) / object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>header-cell-class-name</td>
<td>表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。</td>
<td>function({ row, column, rowIndex, columnIndex }) / string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>header-cell-style</td>
<td>表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。</td>
<td>function({ row, column, rowIndex, columnIndex }) / object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>row-key</td>
<td>行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：<code v-pre>user.info.id</code>，但不支持 <code v-pre>user.info[0].id</code>，此种情况请使用 <code v-pre>Function</code>。</td>
<td>function(row) / string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>empty-text</td>
<td>空数据时显示的文本内容，也可以通过 <code v-pre>#empty</code> 设置</td>
<td>string</td>
<td>—</td>
<td>暂无数据</td>
</tr>
<tr>
<td>default-expand-all</td>
<td>是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>expand-row-keys</td>
<td>可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。</td>
<td>array</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>default-sort</td>
<td>默认的排序列的 prop 和顺序。它的 <code v-pre>prop</code> 属性指定默认的排序的列，<code v-pre>order</code> 指定默认排序的顺序</td>
<td>object</td>
<td><code v-pre>order</code>: ascending / descending</td>
<td>如果只指定了 <code v-pre>prop</code>, 没有指定 <code v-pre>order</code>, 则默认顺序是 ascending</td>
</tr>
<tr>
<td>tooltip-effect</td>
<td>tooltip <code v-pre>effect</code> 属性</td>
<td>string</td>
<td>dark / light</td>
<td>dark</td>
</tr>
<tr>
<td>show-summary</td>
<td>是否在表尾显示合计行</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>sum-text</td>
<td>合计行第一列的文本</td>
<td>string</td>
<td>—</td>
<td>合计</td>
</tr>
<tr>
<td>summary-method</td>
<td>自定义的合计计算方法</td>
<td>function({ columns, data })</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>span-method</td>
<td>合并行或列的计算方法</td>
<td>function({ row, column, rowIndex, columnIndex })</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>select-on-indeterminate</td>
<td>在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>indent</td>
<td>展示树形数据时，树节点的缩进</td>
<td>number</td>
<td>—</td>
<td>16</td>
</tr>
<tr>
<td>lazy</td>
<td>是否懒加载子节点数据</td>
<td>boolean</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>load</td>
<td>加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息</td>
<td>function(row, treeNode, resolve)</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>tree-props</td>
<td>渲染嵌套数据的配置选项</td>
<td>object</td>
<td>—</td>
<td>{ hasChildren: 'hasChildren', children: 'children' }</td>
</tr>
<tr>
<td>locale</td>
<td>语言属性</td>
<td>object</td>
<td>—</td>
<td>import zhCn from 'element-plus/lib/locale/lang/zh-cn'</td>
</tr>
<tr>
<td>pagenation</td>
<td>分页属性</td>
<td>object</td>
<td>—</td>
<td>{}</td>
</tr>
</tbody>
</table>
<h3 id="pagenation-attributes" tabindex="-1"><a class="header-anchor" href="#pagenation-attributes" aria-hidden="true">#</a> Pagenation Attributes</h3>
<p>继承自 el-pagenation 属性配置</p>
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
<td>small</td>
<td>是否使用小型分页样式</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>background</td>
<td>是否为分页按钮添加背景色</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>page-size</td>
<td>每页显示条目个数，支持 v-model 双向绑定</td>
<td>number</td>
<td>—</td>
<td>10</td>
</tr>
<tr>
<td>default-page-size</td>
<td>每页显示条目数的初始值；</td>
<td>number</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>total</td>
<td>总条目数</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>page-count</td>
<td>总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性</td>
<td>Number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>pager-count</td>
<td>页码按钮的数量，当总页数超过该值时会折叠</td>
<td>number</td>
<td>大于等于 5 且小于等于 21 的奇数</td>
<td>7</td>
</tr>
<tr>
<td>current-page</td>
<td>当前页数，支持 v-model 双向绑定</td>
<td>number</td>
<td>—</td>
<td>1</td>
</tr>
<tr>
<td>default-current-page</td>
<td>当前页数的初始值</td>
<td>number</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>layout</td>
<td>组件布局，子组件名用逗号分隔</td>
<td>String</td>
<td><code v-pre>sizes</code>, <code v-pre>prev</code>, <code v-pre>pager</code>, <code v-pre>next</code>, <code v-pre>jumper</code>, <code v-pre>-&gt;</code>, <code v-pre>total</code>, <code v-pre>slot</code></td>
<td>'prev, pager, next, jumper, -&gt;, total'</td>
</tr>
<tr>
<td>page-sizes</td>
<td>每页显示个数选择器的选项设置</td>
<td>number[]</td>
<td>—</td>
<td>[10, 20, 30, 40, 50, 100]</td>
</tr>
<tr>
<td>popper-class</td>
<td>每页显示个数选择器的下拉框类名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>prev-text</td>
<td>替代图标显示的上一页文字</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>next-text</td>
<td>替代图标显示的下一页文字</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>hide-on-single-page</td>
<td>只有一页时是否隐藏</td>
<td>boolean</td>
<td>—</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3>
<table>
<thead>
<tr>
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>pagenation-change</td>
<td>pageSize/currentPage 改变时会触发参数变化</td>
<td>pagenation对象</td>
</tr>
<tr>
<td>select-change</td>
<td>选中checkbox时会触发</td>
<td>选中row数组</td>
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

const _hoisted_1 = ["onClick"]

function render(_ctx, _cache) {
  const _component_sum_table = _resolveComponent("sum-table")

  return (_openBlock(), _createBlock(_component_sum_table, {
    border: "",
    columns: _ctx.columns,
    data: _ctx.tableData,
    pagenation: _ctx.pagenation,
    onPagenationChange: _ctx.handlePagenationChange,
    onSelectChange: _ctx.handleSelectionChange
  }, {
    operation: _withCtx((scope) => [
      _createElementVNode("span", {
        onClick: $event => (_ctx.removeItem(scope.row)),
        style: {"cursor":"pointer","color":"#409eff"}
      }, " 删除 ", 8 /* PROPS */, _hoisted_1)
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["columns", "data", "pagenation", "onPagenationChange", "onSelectChange"]))
}
  
    const { defineComponent, ref, reactive } = Vue

const democomponentExport = defineComponent({
  setup() {
    const columns = ref([
      {
        type: 'selection',
        width: 60
      },
      {
        label: '媒体ID',
        prop: 'id'
      },
      {
        label: '媒体名称',
        prop: 'appName'
      },
      {
        label: '操作',
        slot: 'operation'
      }
    ])

    const tableData = ref([
      {id: 1, appName: '媒体1'},
      {id: 2, appName: '媒体2'},
      {id: 3, appName: '媒体3'},
      {id: 4, appName: '媒体4'},
      {id: 5, appName: '媒体5'}
    ])
    const pagenation = reactive({
      currentPage: 1,
      pageSize: 10,
      total: 100,
      background: true,
      layout: 'total, sizes, prev, pager, next, jumper'
    })
    const handlePagenationChange = (data) => {
       console.log(data)
    }

    const handleSelectionChange = (data) => {
      console.log(data)
    }

    // 单个删除
    const removeItem = (row) => {
      // 执行删除操作
      console.log('删除', row, row.id)
    }
    return {
      columns,
      tableData,
      pagenation,
      handlePagenationChange,
      handleSelectionChange,
      removeItem
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
<style lang="scss"></style>