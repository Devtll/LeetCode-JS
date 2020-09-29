# [107. Binary Tree Level Order Traversal II](https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/)

## 题目

Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

**For example:**
Given binary tree [3,9,20,null,null,15,7],

```c
    3
   / \
  9  20
    /  \
   15   7
```

return its bottom-up level order traversal as:

```c
[
  [15,7],
  [9,20],
  [3]
]
```

## 题目(二叉树的层次遍历 II)

给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

**示例：**
给定二叉树 [3,9,20,null,null,15,7],

```c
    3
   / \
  9  20
    /  \
   15   7
```

返回其自底向上的层次遍历为:

```c
[
  [15,7],
  [9,20],
  [3]
]
```

## 题目大意

按层序从下到上遍历一颗树。

## 解题思路

这道题和 102 题很像，用一个队列即可实现，最后将数组反转下即可
