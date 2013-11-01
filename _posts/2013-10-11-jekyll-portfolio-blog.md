---
layout: post
title: Making a Blog/Portfolio Site with Jekyll
teaser: Are you a web designer developer who's comfortable in the command line and wants to create a new site using Jekyll? Here's a pretty darn common scenario web designer with dev chops (or developer with design chops) wants to make themselves a website that a) features their portfolio of work and b) includes a blog. For this situation, Jekyll might be the perfect solution. It's free, fast, and easy to use plus, hosting is free if you use github pages. Read on. 
category : blog
tags : [development, jekyll, cms]
---
{% youtube B4g4zTF5lDo 480 360 %}
The idea is that I have some tips and tricks to talk about that might help other dev/designers make their own sites. A few of the things I've discovered and should write about are:

* Using jekyll bootstrap as a basis. Creating a new theme. 

* Sorting posts from portfolio categories: no pagination, but workarounds. Option 1. Just live with it. Option 2. Create a separate page. 

* Handling Navigation: making custom nav list

* Handling plugins

Here's a pretty darn common scenario: web designer with dev chops (or developer with design chops) wants to make themselves a website that a) features their portfolio of work and b) includes a blog. For this situation, Jekyll might be the perfect solution. It's free, fast, and easy to use — plus, hosting is free if you use github pages.

Using jekyll bootstrap. Copy the themes and make your own.

Dealing with pagination. Pagination only works on posts, not on categories of posts. I handled this by displaying all posts, including portfolio pieces, in my blog. Portfolio pieces are displayed on a portfolio page that doesn't use pagination. It simply looks for all portfolio items with a YAML front matter label of "hightlight: true." It displays only these items. Then I put the full bunch on a different page without pagination. 

Handling plugins. 

