---
slug: "/log/coding-log-2021-03-03"
date: "2021-03-03"
title: "Coding Log"
---

![gatsbyConf](../images/gatsbyConf2021.jpeg)

I was really looking forward to the second day of the GatsbyConf 2021 but some stuff came up that I couldn't postpone and couldn't login until 7PM. Still, I managed the attend some sessions and I got some really awesome tips and resources from there.

<h3>GatsbyConf 2021, day 2</h3>
<p>I really enjoyed Tamas Piros session about how to build an e-commerce website with Gatsby. I want to include such a website in my portfolio in the coming period so the resources he pointed me to were also very useful. His free courses look apealing, you can find them <a href='https://jamstack.training/courses'> here </a>.

<h3>Today's coding </h3>
<p>I worked some more on the coding log template, I wanted to add images to md posts. The official Gatsby docs recommended to use some npm packages, among them gatsby-image which is deprecated.</p>
<p>When I installed the packages, I ran into some awkward errors. My terminal said that npm was unable to resolve dependency tree but it didn't point to the deprecated package, but to others.</p>
<section>
npm ERR! ERESOLVE unable to resolve dependency tree</br>
npm ERR! While resolving: andra-gh@1.0.0</br>
npm ERR! Found: gatsby@2.32.9</br>
npm ERR! node_modules/gatsby</br>
npm ERR!   gatsby@"^2.30.0" from the root project
npm ERR! Could not resolve dependency:</br>
npm ERR! peer gatsby@"^3.0.0-next.0" from gatsby-remark-images@4.0.0</br>
npm ERR! node_modules/gatsby-remark-images</br>
npm ERR!   gatsby-remark-images@"*" from the root project</br>
npm ERR! Fix the upstream dependency conflict, or retry</br>
npm ERR! this command with --force, or --legacy-peer-deps</br>
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
</section>
<p>It worked with --legacy-peer-deps but at the cost of having to accept an incorrect (and potentially broken) dependency resolution. Needless to say it really bugged me that there was an error in my website so I spent a lot of time debugging and searching the web for a solutuion.</p>
<p>Finally, I decided to uninstal gatsby-image and run an npm audit fix. And guess what, this fixed the dependency tree and the error disapeared. Yeeei! It really bugs me when I waste this much time on an error but I guess I can't avoid this. It's pafrt of the learning journey :)</p>
<p>Happy coding!</p>


