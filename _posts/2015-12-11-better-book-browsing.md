---
layout: post
title: A better way to browse books online
teaser: Browsing for books is different from buying books. Different from reading books. It's a distinct experience that solves a distinct set of problems. I've been doing a lot of browsing lately — online — and I think the experience is pretty poor. Can it be improved?
hero: hero
hero-caption: An early version of the iBooks store.
assets: book-browsing-npr
category : blog
tags : [ux, design, making-stuff-better]
---
I wrote [a post on this subject](/blog/2014/01/15/whats-wrong-with-browsing/) about a year ago, and wanted to revisit it in light of [NPR's Book Concierge](http://apps.npr.org/best-books-2014/), which does a lot of the things I was looking for back then.

I'm critical of the online book browsing experience in general because it tends to feel too transactional and not enough... well, fun. For example, the image at the top of this post — from an earlier version of the iBooks store — feels dry, repetitive, like the books are just products to be purchased. True, they *are* products. But the experience also matters, and the experience of sorting through them feels flat and uninspired.

Unlike shopping for hardware supplies, shopping for books is in large measure about exploration and discovery. It's fun to see all the different covers, to feel the different textures of paper, to serendipitously find something intresting and new. More than merely products to be purchased, browsing for books is entertaining and educational. 

I did some visual and UX sketches last year that tried to address some of the things I wanted. Following are a few of my explorations with comments about what I liked and what I didn't like.

**A masonry approach:**
{% assign photo="browsing-1" %}
{% assign caption ="A first pass at creating an online browsing experience."; %}
{% include custom/pic_normal %}

The idea is a page full of covers, as many columns as you need — like [flickr](https://www.flickr.com/explore) or [pinterist](https://www.pinterest.com/). It feels colorful, and the layout creates an interesting rhythm that's more lively than your typical arrangement of thumbnails in a rigid grid. Removing the price and buy buttons is appropriate, too, because it lets you focus on the books. I imagine that touching or hovering over a cover would bring up some kind of details panel, probably with a price and way to purchase.

I was a little concerned that this approach could feel static in its own way because every book has the same general scale and importance. However, it's basically the approach taken by NPR, which turns out to be pretty engaging. Sure, everything is the same  size, but as you scroll things happen and hovering brings each book to life.

<hr/>

**In which some books are more equal than others**
{% assign photo="browsing-2" %}
{% assign caption ="A next attempt, in which I tried give a feeling of 'volume' to certain books."; %}
{% include custom/pic_normal %}

This is very much like the previous idea, except it's inspired by the metaphor of a promotions table in a bookshop, where some titles are piled high, some are on their spines, and others are flat, side by side. In this variation, some books are given "volume" — made big — and are like the hero books piled high on a table. The idea is to let people browse at different levels of intensity: your eye can jump from hero to hero, or you can go more slowly looking at each and every volume. 

<hr/>

**The independent bookseller**
{% assign photo="browsing-3" %}
{% assign caption ="This variation aims for the metaphor of browsing randomly through an independent bookstore."; %}
{% include custom/pic_large %}

In the variation above, there's order, but it risks becoming a jumble. The idea is to aim for the exploration and happenstance of browsing randomly through an independent bookstore. 

I imagine that clicking on any of the books in this view would take you to a new view with a new set of books related to the one you clicked on — taking you on an ever-branching path through related books. 

Not for someone who knows what they're looking for but for someone who's content to take their time. 

<hr/>

**The book blog**
{% assign photo="browsing-4" %}
{% assign caption ="Browse a meandering aisle of books, with occasional pauses to look at things that stand out."; %}
{% include custom/pic_large %}

The book blog idea is obviously inspired by the experience of scrolling through a blog, but it also tries to echo the feeling of walking down the aisle of a bookstore. There's order, one book after another, but there's also an interesting rhythm. 

It reflects the metaphor of a meandering aisle, with detours and places to pause, such as a real bookstore might provide with a comfy chair or a table piled high with staff favorites. For example, the collection, "our young adult favorites," or the promotion for *Dr. Sleep, A Novel,* encourage little pauses as you go down the page.

This variation benefits from asking very little of users — just scroll, no need to click or hover unless you really want to. There's much less a sense of exploration or happenstance, but at it's best this idea could provide a nicely curated experience.

<hr/>

**The NPR Books Concierge**
{% assign photo="npr-concierge" %}
{% assign caption ="The NPR Books Concierge. Browse all books at once, or sort them by filter to the left."; %}
{% include custom/pic_large %}

I think this app gets a lot right. It's visual and serendipitous and engaging. Clicking a tag to the left doesn't display anything new, but it changes the arrangement enough that you find things you'd previously overlooked. The instantaneous feedback you get by hovering over a book feels great — it takes advantage of something you can do online that you can't do with a real book.

Also, the curation is excellent, which is critical. When you visit a site like Amazon or Apple's bookstore, it seems as though books are only curated according to their popularity — or, perhaps, based on whether you've purchased a similar book before. You don't get the sense that there's a real book-loving person there. 

I'll be using this as my go-to online book browsing resource for the foreseeable future. 

Check out my earlier post about [what's wrong with online browsing](/blog/2014/01/15/whats-wrong-with-browsing/). And check out [NPR's Book Concierge](http://apps.npr.org/best-books-2014/)