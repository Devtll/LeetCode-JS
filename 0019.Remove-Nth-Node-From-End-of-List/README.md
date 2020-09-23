# [19. Remove Nth Node From End of List](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)

## 题目

Given a linked list, remove the n-th node from the end of list and return its head.

Example:

```
Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
```

## 题目(中文)

给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

**示例：**

```c
给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
```

**说明：**
给定的 n 保证是有效的。

**进阶：**
你能尝试使用一趟扫描实现吗？

## 题目大意

删除链表中倒数第 n 个结点。

## 解题思路

这道题主要是利用快慢指针来解题，快指针指向第 n 个节点，当快指针的下一个节点不为空是就同时移动快慢指针，
最后慢指针的下一个节点就是要删除的节点
