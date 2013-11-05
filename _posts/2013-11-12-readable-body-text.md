---
layout: post
title: Readable Body Text
teaser: Pagination only works on posts, not on categories of posts. I handled this by displaying all posts including portfolio plices in my blog. Portfolio pieces are displayed on a portfolio page that doesn't use pagination. It simply looks for all itemms with a YAML front matter label of highlight true. It diesplays only these items. Then I put the full bunch on a different page without paginations.
hero: aldus-codex-hero
hero-caption: Page from the codex.
category : blog
tags : [process, design, jekyll, typography, development]
---

<p class="intro">The idea is that I have some tips and tricks to talk about that might help other dev/designers make their own sites. A few of the things I've discovered and should write about are:</p>

Using jekyll bootstrap as a basis. Creating a new theme. Sorting posts from portfolio categories: no pagination, but workarounds. Option 1. Just live with it. Option 2. Create a separate page. Handling Navigation: making custom nav list Handling plugins

<span data-picture data-alt="A giant stone face at The Bayon temple in Angkor Thom, Cambodia">
  <span data-src="/assets/images/random/small.jpg"></span>
  <span data-src="/assets/images/random/extralarge.jpg" data-media="(min-width: 1000px)"></span>

<!-- Fallback content for non-JS browsers. Same img src as the initial, unqualified source element. -->
<noscript>
  <img src="external/imgs/small.jpg" alt="A giant stone face at The Bayon temple in Angkor Thom, Cambodia">
</noscript>
</span>

Here's a pretty darn common scenario: web designer with dev chops (or developer with design chops) wants to make themselves a website that a) features their portfolio of work and b) includes a blog. For this situation, Jekyll might be the perfect solution. It's free, fast, and easy to use — plus, hosting is free if you use github pages.

Using jekyll bootstrap. Copy the themes and make your own.

Dealing with pagination. Pagination only works on posts, not on categories of posts. I handled this by displaying all posts, including portfolio pieces, in my blog. Portfolio pieces are displayed on a portfolio page that doesn't use pagination. It simply looks for all portfolio items with a YAML front matter label of "hightlight: true." It displays only these items. Then I put the full bunch on a different page without pagination. 

Handling plugins. 

