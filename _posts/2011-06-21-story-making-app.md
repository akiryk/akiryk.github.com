---
layout: portfolio
title: Story Making Application
teaser: This is an application I designed and coded on my own. The idea is that up to three people can share in creating a single drawing without seeing what the other participants have done until the end.
micro-teaser: ux + design + frontend
hero: storili-hero
hero-caption: "A snapshot of the story engine"
assets: storili
category: portfolio
tags: [php, code, javascript, design, side-projects]
---

I designed and built this web application for creating (and reading) choose-your-own-adventure 
stories. If you like inventing stories, this application can be addictive — and strange. 
The stories often end up twisting and turning in ridiculous, MadLib style ways.

Once you register, you can create branching stories with as much complexity as you choose. 
And you can read them anywhere — the application is a responsive design, meaning it displays 
well whether on desktop computer, tablet, or mobile phone.

One of the challenges posed to anyone creating a choose-your-own-adventure story is 
that the number of chapters grows exponentially. Every time you create a choice, you need 
two new chapters. It quickly becomes impossible to manage.
 
I've reduced the pain to some extent by letting authors re-use chapters — stories can loop and multiple pathways can lead to the same result. 
In the end, however, creating an endlessly looping and evolving story is part of the fun.

I developed Storili using php (the same programming language that runs WordPress), 
in part because I wanted to increase my expertise in creating content management systems 
for clients. Unlike a regular content management system, however, this branching story 
game had a number of very specific requirements. It needed to accommodate multiple stories, 
each with multiple chapters that might or might not lead to new chapters.

The challenge of branching stories

{% assign photo="exponential" %}
{% assign caption="The Gronster share screen." %}
{% include custom/pic_large %}


My son and a couple of his friends (then in seventh-grade) side-stepped the problem of 
branching chapters. They would give choices at the end of 
each segment, but only one choice actually goes anywhere — the other is just a thought. 
The result is a linear story in which, 
as a reader, you forever encounter options that the narrator opted not to give you, which
 can be funny and weirdly engaging.

Check out the site and create your own story. 

[Check it out](http://storyengine.adamkiryk.com) — or read on...

###Making A Drawing
You start on an intro page, which shows in simple terms how the game works (the site cookies you, so if you return later you'll go straight to the drawing panel). You can click on the big Get Started button — or you can explore the gallery.

{% assign photo="editing" %}
{% assign caption="The Gronster share screen." %}
{% include custom/pic_normal %}

{% vimeo 85163080 500 313 %}

