# [20. Valid Parentheses](https://leetcode-cn.com/problems/valid-parentheses/)

## 题目

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

```c
Input: "()"
Output: true

```

Example 2:

```c
Input: "()[]{}"
Output: true

```

Example 3:

```c
Input: "(]"
Output: false
```

Example 4:

```c
Input: "([)]"
Output: false
```

Example 5:

```c
Input: "{[]}"
Output: true
```

## 题目(中文)

给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

1. 左括号必须用相同类型的右括号闭合。
2. 左括号必须以正确的顺序闭合。

注意空字符串可被认为是有效字符串。

示例 1:

```c
Input: "()"
Output: true

```

示例 2:

```c
Input: "()[]{}"
Output: true

```

示例 3:

```c
Input: "(]"
Output: false
```

示例 4:

```c
Input: "([)]"
Output: false
```

示例 5:

```c
Input: "{[]}"
Output: true
```

## 题目大意

括号匹配问题。

## 解题思路

遇到左括号就进栈 push，遇到右括号并且栈顶为与之对应的左括号，就把栈顶元素出栈。最后看栈里面还有没有其他元素，如果为空，即匹配。

需要注意，空字符串是满足括号匹配的，即输出 true。
