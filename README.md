# Lodash Examples

Lodash 是一個第三方套件，裡面還提供了蠻多有用的 utility function。

雖然知道這個套件已經有一段時間了，但仔細想想我實際上有在用的好像只有 `cloneDeep`...。正因為如此才覺得有點太可惜了？於是就花了一點時間整理出一些我覺得實用的 method 跟 example。

總而言之，如果是不清楚 Lodash 有哪些方法可以用、或不知道怎麼用的人，你可以把這份專案當成是一個懶人包，直接試一遍應該就懂了。

## 資料夾結構

這邊有依照不同的用途來做點區分，可以參考下面的資料夾結構：

```text
├── modules/
│   ├── ArrayDemo.js
│   ├── CollectionDemo.js
│   ├── ErrorDemo.js
│   ├── FPDemo.js
│   ├── MathDemo.js
│   ├── ObjectDemo.js
│   ├── StringDemo.js
│   └── UtilityDemo.js
├── index.js
├── package-lock.json
└── package.json
```

- `index.js` 主程式的進入點
- `modules/` 儲存不同種類的範例

## 使用方式

註：Node 版本為 v14.21.2

1\. 安裝依賴項目

```
npm ci
```

2\. 執行主程式

```
node index.js
```
