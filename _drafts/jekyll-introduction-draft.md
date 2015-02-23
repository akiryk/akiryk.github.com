---
layout: post
category : lessons
tagline: "Supporting tagline"
tags : [intro, beginner, jekyll, tutorial]
---
{% include JB/setup %}


This is an example of a draft. Read more here: [http://jekyllrb.com/docs/drafts/](http://jekyllrb.com/docs/drafts/)

This is how to insert a link:

[Link text goes here](http://url.goes.here)

------------------------------------------------------------------

Assign quotes:
{% assign quote = "To Begin With, We Make A Comparison With Jonas Avimbi" %}
{% include custom/pull_quote %}

Optionally, include a citation and link:
{% assign quote = "Quote text here..." %}
{% assign quoteSource = "Optional name here" %}
{% assign quoteLink = "Optional url here but don't use without a source" %}
{% include custom/pull_quote %}