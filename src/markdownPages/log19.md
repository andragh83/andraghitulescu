---
slug: "/log/coding-log-2021-03-20"
date: "2021-03-20"
title: "Coding Log"
---

![codingLog19](../images/log19.png)

Family day today so just one coding challenge from LeetCode

<p style="font-weight: bold"> Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.</p>

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

<p>My solution is bellow but it wasn't accepted because it exceeded the time limit. It passed 315 / 318 test cases. It has a high Big O because it has 4 loops and I think this is the reason it wasn't accepted.</p>
<section>
<p>var threeSum = function(nums) {</p>
<p>_let result = [];</p>
<p>__nums.map((num, index) => {</p>
<p>___for (let i=1; i < nums.length; i++) {</p>
<p>____for (let j=2; j < nums.length; j++) {</p>
<p>_____if (num + nums[i] + nums[j] === 0 && index !== i && index !==j && i !==j ) {</p>
<p>______let outcome = [num, nums[i], nums[j]]</p>
<p>______let sortOutcome = outcome.sort(function(a, b) {return a - b});</p> 
<p>______let check = false; </p>
<p>______result.forEach( item => { if (item[0] === sortOutcome[0] && item[1] === sortOutcome[1] && item[2] === sortOutcome[2]) {check = true}});</p>                    
<p>_______if (!check) {</p>
<p>________result.push(sortOutcome);</p>
<p>_______}</p>
<p>______}</p>
<p>_____}</p>
<p> ___}</p>
<p>__})</p>
<p>__return result;</p>
<p>};</p>
</section>
<p>Happy coding!</p>


