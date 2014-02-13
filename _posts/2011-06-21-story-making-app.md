---
layout: portfolio
title: Story Making Application
teaser: This is an application I designed and coded on my own. The idea is that up to three people can share in creating a single drawing without seeing what the other participants have done until the end.
micro-teaser: ux + design + frontend
hero: storili-hero
hero-caption: "A snapshot of Gronster"
assets: storili
category: portfolio
tags: [php, code, javascript, design, side-projects]
---

I designed and built this web application for making and reading choose-your-own-adventure stories. If you like inventing stories, this application can be addictive — and strange. The stories often end up twisting and turning in ridiculous, MadLib style ways.

Once you register, you can create branching stories with as much complexity as you choose. And you can read them anywhere — the application is a responsive design, meaning it displays well whether on desktop computer, tablet, or mobile phone.

I developed Storili using php (the same programming language that runs WordPress), in part because I wanted to increase my expertise in creating content management systems for clients. Unlike a regular content management system, however, this branching story game had a number of very specific requirements. It needed to accommodate multiple stories, each with multiple chapters that might or might not lead to new chapters.

The challenge of branching stories

One of the challenges I struggled with was how to prevent the multiplication of chapters from overwhelming an author. Every time you allow readers to make a choice, you create the need for two new chapters. The number of chapters can therefore grow exponentially, making stories almost impossible to manage. I’ve mitigated this problem to some extent by giving authors the option to re-use chapters — stories can loop and multiple pathways can lead to the same result. In the end, however, creating an endlessly looping and evolving story is part of the fun.

Some seventh graders (my son and his friends) came up with a way to create stories that bypasses the whole branching-chapters problem. They give choices at the end of each segment, but they only flesh out one of them. The result is a linear story in which, as a reader, you forever encounter options that the narrator opted not to give you. They can be very funny or can pique your curiosity, and create a weirdly engaging experience.

Check out the site and create your own story. I’d love to hear from you if you have comments!

<div class="marginator">
  <p>
    I had the idea for creating an online version of a game that I'd played once or twice on paper — maybe you've played it. You start with a page folded into thirds. The first person draws the head and shoulders, then passes the paper to the second person but keeps the drawing hidden. The second person draws the mid-section and passes it to the last player. No one knows what the others have drawn, so the resulting illustration is a strange mashup. 
  </p>
  <div class="marginalia">
    <p><span class="margin-heading">Exquisite Corpse </span>It turns out that this game has a name — Exquisite Corpse — and was either invented or popularized by Surrealists in the 1920s. 
    </p></div>
</div>


[Check it out]((http://gronster.adamkiryk.com) — or read on...

###Making A Drawing
You start on an intro page, which shows in simple terms how the game works (the site cookies you, so if you return later you'll go straight to the drawing panel). You can click on the big Get Started button — or you can explore the gallery.

{% assign photo="start" %}
{% assign caption="The Gronster start screen, visible to first-time users." %}
{% include custom/pic_normal %}

{% vimeo 85163080 500 313 %}

