---
slug: "/log/coding-log-2021-03-22"
date: "2021-03-22"
title: "Coding Log"
---

![codingLog20](../images/log20.png)

Coding practice day

<p>Today I tackled the ThreeSum problem and tried to come up with a solution that Leetcode would accept. Again the problem:</p>
<p style="font-weight: bold">Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.</p>

<p>The solution set must not contain duplicate triplets.</p>

<p style="font-weight: bold">Example 1:</p>

<p>Input: nums = [-1,0,1,2,-1,-4]</p>
<p>Output: [[-1,-1,2],[-1,0,1]]</p>
<p style="font-weight: bold">Example 2:</p>

<p>Input: nums = []</p>
<p>Output: []</p>

<p style="font-weight: bold">Example 3:</p>

<p>Input: nums = [0]</p>
<p>Output: []</p>

<p>Constraints:</p>

<p>0 <= nums.length <= 3000</p>
<p>-105 <= nums[i] <= 105</p>

<p>I thought that I might use the TwoSum solution I did last week but that too contained nested loops so first I re-did that one and made the code more performant. I used hash tables and decreased the Big O to O(n) time and space complexity as opposed to O(nˆ2) I previously had.</p>

<p>You can see my TwoSum updated solution <a href = 'https://github.com/andragh83/codingPractice/blob/master/twoSumIndex.js' target = '_blank'>here</a>.</p>

<p>After this, I customised the solution to fit the ThreeSum problem since I needed the actual numbers returned, not just the indexes, implemented it and it worked. My solution got accepted by Leetcode! Yeeei! I still used some nested loops so the Big O isn't the best but it worked. You can see it <a href = 'https://github.com/andragh83/codingPractice/blob/master/threeSum.js' target = '_blank'>here</a>.</p>
<p>Happy coding!</p>


