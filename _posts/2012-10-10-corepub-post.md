---
layout: portfolio
title: An Easier Way To Create News Posts
teaser: Post page update.
micro-teaser: npr content management
hero: hero
hero-caption: "Post page"
assets: corepub-post
category: portfolio
tags: [ux, design, front-end, news, npr]
---

Most NPR member stations use a content management system (CMS) based on Drupal to manage their websites. I redesigned key parts of this CMS to make content-creation simpler and more intuitive. I worked with the dev team and one other front-end developer to implement our designs. 

{% assign photo="before-long" %}
{% assign caption="The old post page before redesign." %}
{% include custom/pic_push %}

In the past (see screenshot), key pieces of content needed to be entered throughout a long and unwieldy page. Things that were alike (for example, related content and related programs) were not near one another. The process of saving and publishing was unnecessarily confusing — you clicked a “Save” button, which was clear enough, but had to remember to mark the "publish" checkbox down below or it wouldn’t go live. And scheduling a post for later publication was scary. You could only enter the time and date in a computer-friendly numeric format, and it was hard to tell whether something was scheduled for publication or was simply a draft awaiting approval.

Just a few of the improvements we made: 

* save/publish remains fixed in its position, so it’s always easy to reach; 
* the important stuff that editors handle all the time, like writing text content and inserting images, are near the top and close to one another; 
* we used smart defaults where appropriate — for example, we automatically make the slug the same as the category; editors can change it, but they usually don't.
* scheduling is much simpler — you click in the date field and a date-picker appears — and a label makes it obvious that the post is now scheduled.

A screenshot and brief video below show it in action&hellip;

{% assign photo="new-post" %}
{% assign caption="The new post page after redesign." %}
{% include custom/pic_normal %}

{% youtube http://youtu.be/yNzEbArVz7Y %}

