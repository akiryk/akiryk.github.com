---
layout: post
title: Curb ramps on the web!
teaser: What makes something accessible? What does it mean to design for everyone? Is it possible to improve accessibility without relying exclusively on screen readers or other special tools?
hero: hero
hero-caption: It's a metaphor.
assets: "2-15-accessibility"
category: blog
tags : [accessibility, UX]
---
I went to a talk the other night by [Aaron Leventhal](https://twitter.com/aaronlev), a guy who's worked on accessibility issues for a long time, and he said some things that got me thinking.

He stressed that what people typically mean by "accessibility" only improves the experience for a fairly small portion of the world. That's because the things that make a site "accessible" — proper, semantic markup, ARIA attributes, and so on — are useful only to the extent that users have special tools, such as screenreaders, to take advantage of them. He suggested the metaphor of a drawbridge, which only works when both sides are in place —  accessible markup on one side and tools on the other. 

In reality, there are millions of people who don't have special tools and would benefit nevertheless if the web were easier to read, easier to navigate, and easier to deal with.

**Universal Design**

{% assign photo="curbcut" %}
{% assign caption ="The curb ramp, or curb cut, is a great example of a feature that's necessary for some people and helpful for everyone."; %}
{% include custom/pic_push %}

Universal design refers to an approach that solves problems for everyone, not only for people with special needs. The curb cut (see example photo) illustrates this perfectly, because it enables people in wheelchairs to get around more easily but also makes life easier for people who are on bicycles, pushing baby-strollers, or simply walking. It doesn't cry out, "hey handicapped people, use me!" It's just there, a universal improvement.

This is a really important feature, because anyone can have reduced abilities for a variety of reasons (see [An Alphabet of Accessibility Issues](https://the-pastry-box-project.net/anne-gibson/2014-july-31)). For example:

* You're standing in a bus, holding a strap with one hand, so you're effectively one-handed;
* You outside in bright sun so your tablet screen looks dim and washed out — your vision is effectively compromised;
* You're in a noisy environment and navigate to a website or app with lots of audio clips — your hearing is effectively impaired for the moment.

Consider these things: movement, sight, hearing, touch, clear-thinking, literacy... Are you designing something that requires any of them? What if any of these things are reduced — for any reason? Are there any "curb cuts" you could design to improve the experience?

Examples on the web are hard to come by. Aaron named the [Readability](https://readability.com/) app and the type-size tool (the feature that lets users increase or decrease font size as needed), but they aren't perfect examples. You have to know about Readability to use it. Same with the type-size tool. You can find it on the New York Times site under the gear icon, but it's more of a special setting than a univeral enhancement. 

{% assign photo="safari" %}
{% assign caption ="The Reader View icon in Safari."; %}
{% include custom/pic_normal%}

The best example I can think of right now is probably the Reader View on Safari, which makes the reading experience much better for everyone. It just sits there, ready for anyone to use, but it isn't the most obvious thing to find — it's nothing like a curb ramp conveniently placed at the end of a crosswalk.

{% assign photo="reader" %}
{% assign caption ="Side by side comparison of a story in regular view and in reader view."; %}
{% include custom/pic_large%}

I'm going to keep thinking about the notion of curb cuts. In the meantime, I think the best practices of *Universal Design* seem to align with good design in general: 

* Good typography, with appropriate line-length, leading, font-size, font color, and font. 
* Good use of white space. Let the content come first: remove all the junk that doesn't pertain to the content people came to your site to read; 
* Good visual structure, with a clear hierarchy of information and a clear flow.
