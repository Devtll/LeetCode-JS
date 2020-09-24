# [1. Two Sum](https://leetcode-cn.com/problems/two-sum/)

## 题目 (英文)

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

```
Given nums = [2, 7, 11, 15], target = 9

Because nums[0] + nums[1] = 2 + 7 = 9
return [0, 1]
```

## 题目 (两数之和)

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

Example:

```c
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

## 题目大意

在数组中找到 2 个数之和等于给定值的数字，返回 2 个数字在数组中的下标。

## 解题思路

这道题最优解的时间复杂度是 O(n)。

---

`Map` 中的 `Key` 是数组中的元素，`Value` 是数组中元素对应 `Index`
先扫描整个数组，计算 `target` 和数组中元素的差值(diff)，从 `Map` 中查找是否存在该差值
，如果存在就说明已经找到对应的值，直接返回对应的索引，否则将第 `i` 个元素作为 `key`，`i` 作为 `Value`
存入 `Map`
