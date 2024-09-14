# MarlDown 入門

## 1〜3 章まで省略

## 4 章 基本の MarkDown

### 見出し

# 見出し 1

## 見出し 2

### 見出し 3

```md
# 見出し 1

## 見出し 2

### 見出し 3
```

### 装飾

**太字**
_イタリック_
**_太イタリック_**

```md
**太字**
_イタリック_
**_太イタリック_**
```

### リンク

[github](https://github.com/)
<https://github.com/>

```md
[github](https://github.com/)
<https://github.com/>
```

### 引用

> 引用

> > 二重引用

```
> 引用

> > 二重引用
```

### 箇条書き

- 箇条書き
- 箇条書き

```
- 箇条書き
- 箇条書き
```

1. 箇条書き
2. 箇条書き

```
1. 箇条書き
2. 箇条書き
```

### 水平線

---

```md
---
```

### コード

`console.log("hello world!");`

```
`console.log("hello world!");`
```

```javascript
const hello = (name) => {
	console.log(`こんにちは${name}さん`);
};

hello('yamada');

// output
// こんにちはyamadaさん
```

````md
/ ```javascript
const hello = (name) => {
	console.log(`こんにちは${name}さん`);
};

hello('yamada');

// output
// こんにちは yamada さん
/ ```
/はトル
````

### アイコンを表示する
