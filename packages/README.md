# 开发指南

### 环境要求

- **node v16+**
- **pnpm v7.3.x**

### 开发命令

```bash

pnpm install
# 安装依赖

npm run dev
# 启动开发

npm run build
# 构建组件

npm run docs:dev
# 本地文档测试

npm run docs:build
# 构建文档
```

### 开发组件

添加新组件时，请按照下面的目录结构组织文件

```bash
# 项目结构
cz-coco
└─ packages
   ├─ components       # 组件 template
      ├─ template        # 组件模板 开发新组件拷贝此文件并将template改成开发组件名称即可
   ├─ constants        # 组件全局常量
   └─ cz-coco          # 组件组件注册及打包入入口
   └─ theme-chalk      # 样式文件
   └─ utils            # 全局工具库
   └─ hooks            # hooks 后期需要可以进行编写

# 组件结构
button
  ├─ src                           # 组件源码
  ├─ index.ts                       # 主入口，暴露类型和安装方法
  └─ ....
```

### 开发规范

- 多个单词的文件夹、文件，基于 `kebab-case`（短横线拼接）
- 组件导出以`Cz`开头，例如`CzButton`，组件名和组件文件夹名字保持一致(忽略`cz`)
- `sass`文件变量命名必须以`$cz-`开头，具体参考`button`组件
  - `scss` 文件类名规则 `.[命名空间前缀]-[组件]--[类名]`
- 一个组件一个文件夹

### BEM规范

所有组件类名应均遵循此规范

#### useNamespace库的使用

```csharp
import { useNamespace } from '@cz-coco/utils/helper';
const ns = useNamespace('button')
ns.b() // cz-button
ns.b('overlay') // cz-button-overlay
ns.e('header') // cz-button__header
ns.m('theme-dark') // cz-button--theme-dark
ns.be('header','close') // cz-button-header__close
ns.em('footer','small') // cz-button__footer--small
ns.bm('footer','small') // cz-button-footer--small
ns.bem('footer','btn','primary') // cz-button-footer__btn--primary
ns.is('closeable') // is-closeable
```

## 提交 MR

### Merge Request 规范

- 如果遇到问题，建议保持你的 MR 足够小。保证一个 MR 只解决一个问题或只添加一个功能
- 当新增组件或者修改原有组件时，记得增加或者修改测试代码，保证代码的稳定
- 在 MR 中请添加合适的描述，并关联相关的 Issue

### Merge Request 流程

- `clone` 主仓库，如果已经 `clone` 过，请同步主仓库的最新代码
- 基于 clone 后仓库的 master 分支新建一个分支，比如 `feature/button`
- 在新分支上进行开发，开发完成后，提 `MR` 到主仓库的 `master` 分支
- `MR` 会在 `Review` 通过后被合并到主仓库

### Code Review 规范

- 所有人员均可参与 code review，如无问题，可在 MR 点赞表示通过
