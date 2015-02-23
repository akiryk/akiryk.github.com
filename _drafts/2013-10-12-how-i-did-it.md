---
layout: post
title: How I Did It
teaser: I just made a new personal website and blog. Here's my design and development process. Here&rsquo;s the process I used. I started by creating loose mockups for my home page and post pages. I didn't mean to use these as pixel-perfect comps against which I would build; rather, I wanted to have a sense of style direction and a basic layout I could test out with Jekyll to see if it would work. 
category : blog
tags : [process, design, jekyll, typography, development]
---

Here's how to get Jekyll plugins to work if you're on github.

This tutorial explains how to do it
[http://ixti.net/software/2013/01/28/using-jekyll-plugins-on-github-pages.html](http://ixti.net/software/2013/01/28/using-jekyll-plugins-on-github-pages.html)

This tutorial is great, but I spent a little while figuring out exactly how to apply it to my situation. For example, I'm not using Octopress and I wasn't concerned with making project pages for now. Also, I was unfamiliar with creating rake files, which the tutorial assumes you already know something about.

Where to put the rake file commands. Just put them in the file called RakeFile.

Useful crash cource in liquid:
https://github.com/Shopify/liquid/wiki/Liquid-for-Designers

1. save the rake file into a directory called _rake and give it the name publish.rake. 
2. 