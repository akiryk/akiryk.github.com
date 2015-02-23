---
layout: page
title: How To
---

Run local jekyll server:
    jekyll server --watch
    use http://localhost:4000/

###How to encode colon in your YML 
Use the entity &#58;

##This is a how-to for making posts in Jekyll

###Add code snippets using Pygments

Use the highlight tag:

{% raw %} {% highlight ruby %} <br>
    # My example code <br>
    @color = 'red' <br>
 {% endhighlight %} {% endraw %}

This results in markup like this:

{% highlight ruby %}
   # My example code
   @color = 'red'
{% endhighlight %}

{% highlight css %}
   /* my example css /*
   .class {
      color: red;
    }
{% endhighlight %}


###Escape liquid syntax

Use the {% raw %} {% raw %}{% my liquid markup goes here %} {% endraw %} command. Don't forget to close with endraw.

###Marginator
Use this:
{% highlight html %}
<div class="marginator">
  <p>
    The paragraph of copy I want to have a piece of marginalia or an aside display next to.
  </p>
  <div class="marginalia">
    <p><span class="margin-heading">An optional heading</span> The aside or piece of marginalia...
    </p></div>
</div>
{% endhighlight %}
Which results in something like this:
<div class="marginator">
  <p>
    The paragraph of copy I want to have a piece of marginalia or an aside display next to.
  </p>
  <div class="marginalia">
    <p><span class="margin-heading">An optional heading</span> The aside or piece of marginalia...
    </p></div>
</div>

###Create a New Post
rake post title="my title"
rake post title="A Title" [date="2012-02-09"] [tags=[tag1,tag2]] [category="category"]

###Insert a standard image
{% raw %} 
![My helpful screenshot]({{ site.url }}/assets/images/fonts/kepler.png)
{% endraw %}

###Insert a small pull left image
{% raw %}
{% assign photo="winesmarts-box1" %}
{% assign caption="Box with cards" %}
{% include custom/pic_pull %}
{% endraw %}

###Pull quote
{% raw %} 
{% assign quote = "To Begin With, We Make A Comparison With Jonas Avimbi" %}
{% include custom/pull_quote %}
{% endraw %}

###Images
There are two kinds of images used in this site and they behave slightly differently. 

* Hero images. The large images at the top of most pages, these tend not to fit within the boundaries of the rest of the site, so special rules apply.
* Regular images. These are all other images, generally those placed within posts. They can be small images that float to the left or right or they can be big images that break the grid.

The images used in this site come in five sizes. Four of those sizes apply to hero images and four to regular images:

* large (both): 1020px wide
* mid-large (only hero images): 940px wide 
* med (both): 636px wide. Note that this is bigger than necessary for images in the flow of a post, but exactly right for images in the hero position.
* small (both): 400px wide
* tiny (only regular images): 200px wide (this size is only used by placed images that float left or right)

**A Note About Hero Images**
Hero images mostly have an aspect ratio of 2.55 (1020/400)
* large: 1020px x 400px is standard, although it can go taller if necessary
* mid-large: 940px wide (2.55 aspect ratio)
* med: 636px wide (2.55 aspect ratio)
* small: 400px wide; same ratio not necessary.

###Picturefill Polyfill Settings
The picturefill markup resides in several files in the includes/custom directory. There is a separate file with slightly distinct markup for each type of image (hero, large, normal, and pull/push). The hero style, for example, uses a large image from 1020px screens and up and a mid-large image from 940px wide and up. The pull/push style uses a tiny image size at small screen sizes. 

