# [18. 4Sum](https://leetcode-cn.com/problems/4sum/submissions/)

## 题目

Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

```c
Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
```

## 题目(四数之和)

给定一个包含  n 个整数的数组  nums  和一个目标值  target，判断  nums  中是否存在四个元素 a，b，c  和 d ，使得  a + b + c + d  的值与  target  相等？找出所有满足条件且不重复的四元组。

注意：

答案中不可以包含重复的四元组。

示例:

```c
给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

满足要求的四元组集合为：
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
```

## 题目大意

给定一个数组，要求在这个数组中找出 4 个数之和为 0 的所有组合。

## 解题思路

和 15 题 3 数之和思路一致，只需再套一层 for 循环即可，时间复杂度为 O(n^3)
