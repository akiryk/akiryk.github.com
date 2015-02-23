---
layout: post
title: Making a Blog/Portfolio Site with Jekyll
teaser: Are you a web designer developer who's comfortable in the command line and wants to create a new site using Jekyll? Here's a pretty darn common scenario web designer with dev chops (or developer with design chops) wants to make themselves a website that a) features their portfolio of work and b) includes a blog. For this situation, Jekyll might be the perfect solution. It's free, fast, and easy to use plus, hosting is free if you use github pages. Read on. 
category : blog
tags : [development, jekyll, cms]
---
I've just created a personal blog and portfolio site using Jekyll and thought I'd share some of my process — what I've learned, why I did what I did. You get the picture. I'll focus on the technical side of things now and possibly write about my design process later.

I started with jekyll bootstrap (JB) because it's got a [clear tutorial](http://jekyllbootstrap.com/usage/jekyll-quick-start.html) on how to get up and running quickly, it supports modular theming, and it's got good documentation. 

First, let me list out the few goals I had going into this project. I was somewhat flexible with these goals — this project is only for me, after all, and I didn't have a client demanding certain things whether they were easy or hard. But I generally tried to keep to these goals as much as I possibly could.

**The site should:**

1. Display both regular posts and portfolio pieces in a reverse-chron format.
2. Feature a portfolio section that could have it's own visual style and would display only portfolio pieces.
3. Enable different categories of posts to display special information appropriate to their kind — for example, a portfolio post might list my role on the project; a regular blog post might list an author and a publication date.
4. Be responsive, focusing on maintaining a good reading experience at all viewport sizes.
5. Focus on performance as much as possible. I wanted a site that would load quickly, so a guiding principle was to be spare with extra libraries and extra features and to make sure the site didn't load unnecessarily large images (I'm looking at you, responsive goal #5).

Given those goals, I think Jekyll serves very well. It's got goal number 1 down cold, since it's designed first and foremost to be a blogging tool. It's got number 5 down as well, since it's in the nature of a static site generator to be performance-friendly. You could mess it up, obviously, but if you keep the site simple it's going to remain zippy. As for the other goals... sure, it's good for them as well. 

###What I Did



Actually, there's one way in which Jekyll wasn't great for my goals. Because of how it handles pagination, there isn't an out-of-the-box way to handle portfolio and non-portfolio posts separately. 

{% assign quote = "&ldquo;Pagination pages through every post in the posts variable regardless of variables defined in the YAML Front Matter of each. It does not currently allow paging over groups of posts linked by a common tag or category.&rdquo;" %}
{% assign quoteSource = "Jekyll documentation" %}
{% assign quoteLink = "http://jekyllrb.com/docs/pagination/" %}
{% include custom/plain_quote %}

This means that if you want to have pagination — and I do — you can't distinguish between regular blog posts and portfolio posts. It's easy to tell Jekyll to enable pagination for every 10 posts or whatever, but you'll get in trouble if you try to display only portfolio posts. As the paginator counts down, it will include everything in its count, portfolio or not, so you could easily end up with a page that only displayed one or two portfolio pieces — or none. 

{% highlight ruby %}
desc "Generate blog files"
task :generate do
Jekyll::Site.new(Jekyll.configuration({
"source"      => ".",
"destination" => "_site"
})).process
end
{% endhighlight %}

* Using jekyll bootstrap as a basis. Creating a new theme. 

* Sorting posts from portfolio categories: no pagination, but workarounds. Option 1. Just live with it. Option 2. Create a separate page. 

* Handling Navigation: making custom nav list

* Handling plugins

Here's a pretty darn common scenario: web designer with dev chops (or developer with design chops) wants to make themselves a website that a) features their portfolio of work and b) includes a blog. For this situation, Jekyll might be the perfect solution. It's free, fast, and easy to use — plus, hosting is free if you use github pages.

Using jekyll bootstrap. Copy the themes and make your own.

Dealing with pagination. Pagination only works on posts, not on categories of posts. I handled this by displaying all posts, including portfolio pieces, in my blog. Portfolio pieces are displayed on a portfolio page that doesn't use pagination. It simply looks for all portfolio items with a YAML front matter label of "hightlight: true." It displays only these items. Then I put the full bunch on a different page without pagination. 

Handling plugins. 

