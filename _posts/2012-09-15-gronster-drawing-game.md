---
layout: portfolio
title: Gronster&#58; A Drawing Game
teaser: This is an application I designed and coded on my own. The idea is that up to three people can share in creating a single drawing without seeing what the other participants have done until the end.
micro-teaser: ux + design + frontend
hero: gronster-hero
hero-caption: "A snapshot of Gronster"
assets: gronster
category: portfolio
tags: [php, code, javascript, design, side-projects]
---

<div class="marginator">
  <p>
    I had the idea for creating an online version of a game that I'd played once or twice on paper — maybe you've played it. You start with a page folded into thirds. The first person draws the head and shoulders, then passes the paper to the second person but keeps the drawing hidden. The second person draws the mid-section and passes it to the last player. No one knows what the others have drawn, so the resulting illustration is a strange mashup. 
  </p>
  <div class="marginalia">
    <p><span class="margin-heading">Exquisite Corpse </span>It turns out that this game has a name — Exquisite Corpse — and was either invented or popularized by Surrealist artists in the 1920s. 
    </p></div>
</div>

###Making A Drawing
You start on an intro page, which shows in simple terms how the game works (the site cookies you, so if you return later you'll go straight to the drawing panel). You can click on the big Get Started button — or you can explore the gallery.

{% assign photo="start" %}
{% assign caption="The Gronster start screen, visible to first-time users." %}
{% include custom/pic_normal %}
