---
layout: post
title: Readable Body Text
teaser: I just made a new personal website and blog. Here's my design and development process. Are you interested? Cool. Because that's how we roll, or at least how I roll. I roll with a lot of process and text and lorem ipsum dolor sit amet.
category : blog
tags : [process, design, jekyll, typography, development]
---

<p class="intro">The idea is that I have some tips and tricks to talk about that might help other dev/designers make their own sites. A few of the things I've discovered and should write about are:</p>

Using jekyll bootstrap as a basis. Creating a new theme. Sorting posts from portfolio categories: no pagination, but workarounds. Option 1. Just live with it. Option 2. Create a separate page. Handling Navigation: making custom nav list Handling plugins

Here's a pretty darn common scenario: web designer with dev chops (or developer with design chops) wants to make themselves a website that a) features their portfolio of work and b) includes a blog. For this situation, Jekyll might be the perfect solution. It's free, fast, and easy to use — plus, hosting is free if you use github pages.

Using jekyll bootstrap. Copy the themes and make your own.

Dealing with pagination. Pagination only works on posts, not on categories of posts. I handled this by displaying all posts, including portfolio pieces, in my blog. Portfolio pieces are displayed on a portfolio page that doesn't use pagination. It simply looks for all portfolio items with a YAML front matter label of "hightlight: true." It displays only these items. Then I put the full bunch on a different page without pagination. 

Handling plugins. 

