# [15. 3Sum](https://leetcode-cn.com/problems/3sum/)

## 题目(英文)

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

```c
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

## 题目(中文)

给你一个包含 n 个整数的数组  nums，判断  nums  中是否存在三个元素 a，b，c ，使得  a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意:

答案中不可以包含重复的三元组。

示例:

```c
给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

## 题目大意

给定一个数组，要求在这个数组中找出 3 个数之和为 0 的所有组合

## 解题思路

这道题最优解的时间复杂度是 O(n^2)。
首先要对数组进行从小到大排序，使用 3 指针 i, l ,r 来分别记录当前遍历元素，左边偏移元素，
右边偏移元素，l = i + 1，r = 数组长度 - 1，然后进行比较，移动指针。需要注意的一点是
遍历到相邻元素是相同的需要跳过去重
