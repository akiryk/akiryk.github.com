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
    <p><span class="margin-heading">Exquisite Corpse </span>It turns out that this game has a name — Exquisite Corpse — and was either invented or popularized by Surrealists in the 1920s. 
    </p></div>
</div>

Anyway, I built this game/app as a side project by myself, using CakePHP and JavaScript. It lets you and some friends create three segments of a drawing (without knowing what the others have done), and it stitches them together into a connected whole. 

[Check it out]((http://gronster.adamkiryk.com) — or read on...

###Making A Drawing
You start on an intro page, which shows in simple terms how the game works (the site cookies you, so if you return later you'll go straight to the drawing panel). You can click on the big Get Started button — or you can explore the gallery.

{% assign photo="start" %}
{% assign caption="The Gronster start screen, visible to first-time users." %}
{% include custom/pic_normal %}

The drawing panel is easy and basic. You simply draw with the defaults or expand the paintbrush or colors menus to see other options — I kept them limited by design since my goal was quick and easy sketching over elaborate illustration. 

{% assign photo="startDrawing" %}
{% assign caption =""; %}
{% include custom/pic_large %}

{% assign photo="drawingPart2" %}
{% assign caption="The drawing panel, with options for changing color, erasing, and drawing with a fatter or thinner line. There aren't a ton of choices because I wanted to keep this simple — no fuss, just draw something and share it." %}
{% include custom/pic_large %}

Once you're satisfied with the drawing, click "Next", and go to the share screen. If you choose to invite a friend, they'll receive an email with a link back to the original drawing. Only, they won't see all of what you drew — they'll only see the very bottom part, beneath the dotted line on the drawing panel, so they can connect their piece with yours. The result may look crazy, but it will be an intentional sort of crazy.

{% assign photo="share" %}
{% assign caption="The Gronster share screen." %}
{% include custom/pic_normal %}

{% assign photo="gallery1" %}
{% assign caption="A couple of strange ones from the gallery. You can see how my application stitches the pieces together so that they can feel like connected, self-contained images. Of course, some users choose to ignore the guidelines, and it still works..." %}
{% include custom/pic_large %}

It's up and running, so check it out at [gronster.adamkiryk.com](http://gronster.adamkiryk.com);