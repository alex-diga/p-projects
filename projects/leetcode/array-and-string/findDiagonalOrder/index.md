# 练习

[对角线遍历](https://leetcode.cn/leetbook/read/array-and-string/cuxq3/)

给你一个大小为 m x n 的矩阵 mat ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。

## 示例 1

![示例1](https://assets.leetcode.com/uploads/2021/04/10/diag1-grid.jpg)

```text
输入：mat = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,4,7,5,3,6,8,9]
```

## 示例 2

```text
输入：mat = [[1,2],[3,4]]
输出：[1,2,3,4]
```

## 思路

1. 对角线总数为 `m + n - 1`
2. 对角线上的元素, 其下标和为对应对角线条目
3. 对角线条目为 0 或偶数, 则往右上方向遍历, 条目为奇数则沿左下方向遍历
4. 注意行或列达到最大值

## 题目

1. [498. 对角线遍历](https://leetcode.cn/problems/diagonal-traverse/)
