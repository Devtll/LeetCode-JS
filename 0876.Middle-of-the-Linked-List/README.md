# [876. Middle of the Linked List](https://leetcode-cn.com/problems/middle-of-the-linked-list/)

## 题目

Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

**Example 1:**

```c
Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
```

**Example 2:**

```c
Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])
Since the list has two middle nodes with values 3 and 4, we return the second one.
```

**Note:**

- The number of nodes in the given list will be between 1 and 100.

## 题目(链表的中间结点)

给定一个带有头结点 head 的非空单链表，返回链表的中间结点。

如果有两个中间结点，则返回第二个中间结点。

**示例 1：**

```c
输入: [1,2,3,4,5]
输出: 此列表中的结点 3 (序列化形式：[3,4,5])
返回的结点值为 3 。 (测评系统对该结点序列化表述是 [3,4,5])。
注意，我们返回了一个 ListNode 类型的对象 ans，这样：
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
```

**示例 2：**

```c
输入: [1,2,3,4,5,6]
输出: 此列表中的结点 4 (序列化形式：[4,5,6])
由于该列表有两个中间结点，值分别为 3 和 4，我们返回第二个结点。
```

**提示：**

- 给定链表的结点数介于 1 和 100 之间。

## 题目大意

输出链表中间结点。这题在前面题目中反复出现了很多次了。

如果链表长度是奇数，输出中间结点是中间结点。如果链表长度是双数，输出中间结点是中位数后面的那个结点。

## 解题思路

这道题有一个很简单的做法，用 2 个指针只遍历一次就可以找到中间节点。一个指针每次移动 2 步，另外一个指针每次移动 1 步，当快的指针走到终点的时候，慢的指针就是中间节点。
