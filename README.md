# 前端代码规范建议

## 组件和文件夹创建
### 问题描述：

一个业务下有多个小的模块（十几个）

每个模块可能会使用2-5个只在模块内部组件

再加上css文件

导致一个业务

文件夹下有30+个文件

业务下的components文件夹下有50-60组件文件

- 看起来不是很美观
- 找文件和文件对应组件的时候不是方便

### 改进方法：

在业务文件夹下创建模块文件夹，模块内部（创建components文件夹）只在模块内使用的组件放到模块内的components下

```
views
    live
        assistant
            components
                table.jsx
                drawer.jsx
            index.jsx
            index.less
        class
            components
                table.jsx
                drawer.jsx
            index.jsx
            index.less
```

## 代码内部
### 问题描述：

----
`问题1：`其他人开发或修改之前写的组件的时候，也需要打印自己的console.log，但是由于前开发有大量的console.log没有删除
导致在控制台找不到或者找很久才找到自己想要的console.log，再操作页面的时候，继续有console.log输出，把开发
自己写的console.log顶上去，给调试造成困扰。

`解决办法：`console.log在提交代码之前，手动删掉或者注释掉自己调试时候写的console.log;
如果这个console.log非常重要不能删掉，则：console.log('描述内容', xxx)

----

`问题2：`在二次开发或者修复问题的时候，有可能会删掉或者注释掉之前写的一些代码，但是没有删干净，
导致有很多没有使用的引用和没有引用的使用留在组件内，导致出现报错提示。

`解决办法：`删掉（注释掉）没有使用的引用和没有引用的使用

----

`问题3：`同一个项目下有tsx和jsx不同的文件创建

----

`问题4：`不同项目的项目的目录结构差异较大。

例如kuaicai-school-admin的接口文件夹交services，封装请求在utils/request.js

而kuaicai-live-h5的接口文件夹叫api，封装请求api/utils/index.js下

`解决办法：`1.在gitlab创建模板项目（react、vue），新建项目的时候从模板项目copy。2.以某一个工程为模板项目，
新建项目的时候从该项目copy。

----

`问题5：`css引用和使用的方式，有的项目是使用less，className="xxx"；有的项目是style.module.styl，className={styles.pptBox}

## js代码规范
https://github.com/BingKui/javascript-zh#table-of-contents

1.解构：
```
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// good
function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
```
2.不必要的三目
```
// bad
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;

// good
const foo = a || b;
const bar = !!c;
const baz = !c;
```

## 注释
方法前使用多行注释，特别复杂的逻辑，建议打一些注释，方便其他人修改的时候或者很长时间后再修改此处时，能快速理解代码。

```
// bad
// make() returns a new element
// based on the passed in tag name
//
// @param {String} tag
// @return {Element} element
function make(tag) {
  // ...
  return element;
}

// good
/**
 * make() returns a new element
 * based on the passed-in tag name
 * @param {String} tag
 * @return {Element} element
 */
function make(tag) {
  // ...
  return element;
}
```
