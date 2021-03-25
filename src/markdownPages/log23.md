---
slug: "/log/coding-log-2021-03-25"
date: "2021-03-25"
title: "Coding Log"
---

Working some more on the Treatwell page replica
<p>Repo: <a href="https://github.com/andragh83/treatwell-page-replica" target="_blank"> https://github.com/andragh83/treatwell-page-replica </a> </p>
<p>Demo: <a href="https://andragh83.github.io/treatwell-page-replica/" target="_blank"> https://andragh83.github.io/treatwell-page-replica/ </a></p> 
<p>Original <a href='https://www.treatwell.co.uk/places/treatment-balayage/offer-type-local/in-west-london-london-uk/'>Treatwell page I'm trying to replicate</a></p>

<p>Today I worked on the integration of the map component into the logic of the web app. I wanted to match the data fetched from the map component to the dummy database I used initially for filtering the displayed cards.</p> 
<p>So I figured in the app there has to be a salon database with information gathered by the app owner, based on info given by the salons when they sign-up and with reviews comming from the customers. That database in my app is a simple file with dummy data I made-up for testing.</p>
<p>Then there is the salons data gathered from the Google Maps Api with their names, locations and other stuff.</p>
<p> My goal today was to display cards only for the found salons on the map that were also in the database and to be able to use data from the database in the infoWindows painted on the map, with the ratings.</p>
<p>Happy coding!</p>

