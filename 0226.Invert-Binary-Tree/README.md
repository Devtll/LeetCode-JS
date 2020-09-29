# [226. Invert Binary Tree](https://leetcode-cn.com/problems/invert-binary-tree/)

## 题目

Invert a binary tree.

**Example:**

Input:

```c
     4
   /   \
  2     7
 / \   / \
1   3 6   9
```

Output:

```c
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

**Trivia:**

This problem was inspired by this original tweet by Max Howell:

> Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f\*\*\* off.

## 题目(翻转二叉树)

翻转一棵二叉树。

**示例：**

输入:

```c
     4
   /   \
  2     7
 / \   / \
1   3 6   9
```

输出:

```c
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

**备注：**

这个问题是受到 Max Howell 的 原问题 启发的 ：

> Google: 我们 90％的工程师使用您编写的软件(Homebrew)， 但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。

## 题目大意

"经典"的反转二叉树的问题。

## 解题思路

可以用递归或者迭代来解决
递归：交换左右节点，然后再递归的交换左节点，右节点直到当前节点为 null 时结束递归
迭代：使用队列来完成
