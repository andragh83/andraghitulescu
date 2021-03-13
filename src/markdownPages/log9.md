---
slug: "/log/coding-log-2021-03-10"
date: "2021-03-10"
title: "Coding Log"
---

![log9img](../images/log9.png)

Treatwell page replica - fixing 'any time' bug and adding a little of the map component functionality

<p>Repo: <a href="https://github.com/andragh83/treatwell-page-replica" target="_blank"> https://github.com/andragh83/treatwell-page-replica </a> </p>
<p>Demo: <a href="https://andragh83.github.io/treatwell-page-replica/" target="_blank"> https://andragh83.github.io/treatwell-page-replica/ </a></p>
<p>Original <a href='https://www.treatwell.co.uk/places/treatment-balayage/offer-type-local/in-west-london-london-uk/'>Treatwell page I'm trying to replicate</a></p>

<p>I started the day reading about redux actions and how they worked. That bug I found yesterday bugged me terribly (see what I did there, haha) so I wanted to fix it and move on.</p>
<p>The problem was that my state object had a property with the value of an object so I designed one separate actions to update separate properties of that object. In the end, I solved it by defining a new action that would update the entire object at one time.</p>
<p>After that, I started working on the Map component.</p>
<p>I wend back to the documentation on the Google developers website and tried to fihure out how to turn that vanilla Js into React.</p>
<p>After bumping my head a little, I searched online to see if there was anything on this and of course I found several blog posts explaining in plain English how to do it. So after undertstanding how things worked, I wrote the basis of my Map component.</p>
<p>And that was my day in a few words.</p>
<p>Happy coding!</p>

