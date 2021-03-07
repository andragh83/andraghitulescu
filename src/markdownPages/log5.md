---
slug: "/log/coding-log-2021-03-06"
date: "2021-03-06"
title: "Coding Log"
---

Today I continued to work on my new React project. As I said yesterday, I'm trying to replicate a small part of an existing website. A really really small part. It's

<h3>The Treatwell website.</h3>
<p>I really like it's overal design, the UI and the UX.</p>
<p><a href='https://www.treatwell.co.uk/places/treatment-balayage/offer-type-local/in-west-london-london-uk/'>This</a> is the part I'm trying to replicate.</p>
<p>You can check out the repo at https://github.com/andragh83/treatwell-page-replica</p>
<p>My mini project has the following elements:</p>
<ul>
    <li>a navbar</li>
    <li>a sticky banner with an input form with a single field that onClick unfolds into several fields:
        <ul>
            <li>a radio input field with pre-defined options</li>
            <li>locations form which takes account of current location and lets the user choose a designated area (wirthin 0.2 miles, 0.5 miles etc)</li>
            <li>date fields with pre-defined options (buttons) and a calendar picker</li>
            <li>time fields with pre-defined options in a drop-down lists</li>
        </ul>
    </li>
    <li>a card with:
        <ul>
            <li>pictures</li>
            <li>title</li>
            <li>text</li>
            <li>toggle quick view</li>
            <li>cta button</li>
        </ul>
    </li>
    <li>a map using the Google map API which is connected to the input form and has customised markers showing the rating of the marked place</li>
    <li>a footer with links and social media icon links</li>
</ul>
<p>I'm not sure how I'm going to use the Google map API since it seems to be available only with bulling infos and I have to check out their payment plans and see if it's worth making a study project with paid elements.</p>
<p>Up until today I've build the navbar with dummy links, about 3/4 of the input form, I've added the Google maps API but it's not working properly since I haven't set-up billing infos.</p>
<p> I'm hoping to finish a first draft of the project by the end of the weekend.</p>
<p>Happy coding!</p>

