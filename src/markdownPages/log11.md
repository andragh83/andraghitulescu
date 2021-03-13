---
slug: "/log/coding-log-2021-03-12"
date: "2021-03-12"
title: "Coding Log"
---

![log9img](../images/log11.png)

Treatwell page replica - Filtering logic, some refactoring and more styling
<p>Repo: <a href="https://github.com/andragh83/treatwell-page-replica" target="_blank"> https://github.com/andragh83/treatwell-page-replica </a> </p>
<p>Demo: <a href="https://andragh83.github.io/treatwell-page-replica/" target="_blank"> https://andragh83.github.io/treatwell-page-replica/ </a></p> 
<p>Original <a href='https://www.treatwell.co.uk/places/treatment-balayage/offer-type-local/in-west-london-london-uk/'>Treatwell page I'm trying to replicate</a></p>

<p>I began the day with a bug fix. I noticed yesterday that my map toggeling which was supposed to be triggered depending on screed width was working weird. I dug a little with the degugger and I realised that it was because of the sticky collapsable input section. It changes size when a user wants to add filters so the program detected a resize in the window and toggled the map even though the width of the screen was the same. Took me a little though...</p>
<p>After fixing the bug, I moved on to adding more styles and images to replicate more the original Treatwell page, I added some dummy data and the filtering methods for displaying the cards based on set filters.</p>
<p>I also tried to replicate the collapsable input effect on scroll but I didn't get that one yet.</p>
<p>That's it for today.</p>
<p>Happy coding!</p>

