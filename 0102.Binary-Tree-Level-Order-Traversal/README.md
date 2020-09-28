# [102. Binary Tree Level Order Traversal](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)

## 题目

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],

```c
    3
   / \
  9  20
    /  \
   15   7
```

return its level order traversal as:

```c
[
  [3],
  [9,20],
  [15,7]
]
```

## 题目(二叉树的层序遍历)

给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

**示例：**
二叉树： [3,9,20,null,null,15,7],

```c
    3
   / \
  9  20
    /  \
   15   7
```

返回其层次遍历结果：

```c
[
  [3],
  [9,20],
  [15,7]
]
```

## 题目大意

按层序从上到下遍历一颗树。

## 解题思路

用一个队列即可实现。
