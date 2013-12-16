---
layout: post
title: "How I'm Handling Responsive Images With Jekyll"
teaser: "There are a lot of options for handling images on a responsive site and none are perfect — hence the need for baby steps. For me, that means using the picturefill.js polyfill combined with a Jekyll/liquid hack. I know there's got to be a better way, but since I'm not sure what that is just yet, I'll do this."
assets: "random"
category: blog
tags: [jekyll, code, responsive-design]
---
The state of the state regarding responsive image solutions seems to be, at the moment of this writing, that a number of options exist but none are perfect. I could say more about those options, but Chris Coyier already did such a good job in bringing together pluses and minuses in [this spreadsheet](https://docs.google.com/spreadsheet/ccc?key=0Al0lI17fOl9DdDgxTFVoRzFpV3VCdHk2NTBmdVI2OXc#gid=0). And he's got an article that talks [in greater detail](http://css-tricks.com/which-responsive-images-solution-should-you-use/) as well.

Anyway, after considering some of these options, I decided to use the picturefill polyfill method. It works better for me than many of the alternatives do because a) I don't have a server since I'm using Jekyll; b) I don't want to use a 3rd party since I want to control and understand what I'm doing; and c) it gives me a lot of flexibility for art direction. 

Using picturefill is easy. I just pasted a bit of minified javascript in the head of my Jekyll default template, no jQuery required, and whenever I need an image I just insert the following snippet of html. The picturefill.js script identifies the screen size and inserts the appropriate image file between the <span> elements.

{% highlight html %}
<div class="my-picturefill-image">
  <span data-picture data-alt="The image title">
  <span data-src="/assets/images/image-small.jpg"></span>
  <span data-src="/assets/images/image-medium.jpg" data-media="(min-width: 38em)"></span>
  <span data-src="/assets/images/image-large.jpg" data-media="(min-width: 50em)"></span>
  <!-- Fallback content for non-JS browsers. Same img src as the initial, unqualified source element. -->
  <noscript>
    <img src="/assets/images/image-small.jpg">
  </noscript>
  </span>
<div class="caption">The caption for this image</div>
</div>
{% endhighlight %}

<div class="marginator">
   <p>
    Hello! That's kind of a lot of stuff for one image! But that's fine. I can live with that for a while, since it works so well and helps me achieve what I want — I mean, look at all the flexibility inherent in that markup. As long as I'm willing to prepare all the different images required for it to work, it will be fine.
  </p>
  <div class="marginalia">
    <p><span class="margin-heading">And That's Not All:</span> It gets even more complicated if you want to include images for hi-res devices.
    </p></div>
</div>

Obviously, there are some problems with this. A big one for me is that I'll end up copying and pasting the same chunk of markup over and over again. Plenty of opportunities to make a mistake, leave something out, insert an errant character, whatever. 

There's probably a Jekyll plugin out there that would solve my problem. Actually, [there is one](https://github.com/robwierzbowski/jekyll-picture-tag), but using it will take me some time. I need to make sure it does what I want it to do, gives me the flexibility I need, doesn't break other things, whatever. 

###Baby Step Solution
Here's my short term solution that probably won't suit me for long but works for now. Jekyll allows you to separate out pieces of a site (partials) that get used in several places. For example, you can make a bit of markup for a sidebar, call it 'sidebar' and then include it in other templates by saying:
{% highlight ruby %}
{% raw %}{% include partials/sidebar %}{% endraw %}
{% endhighlight %}
<p>I can use that same model for the picturefill markup. Rather than pasting the it over and over again, I can put it in a partial.</p>
{% highlight ruby %}
{% raw %}
{% include partials/picturefill %}
{% endraw %}
{% endhighlight %}
<p>Now I just needed a way to tell the partial what image to use — because otherwise the picturefill partial will only ever display the same image which has been hard-coded into the markup. Enter the 'assign' tag. Jekyll uses something called liquid to handle variables and simple logic when generating markup. It can handle if/else statements, loops, and variables, among other things (not [a lot of other things](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers), actually).</p>
<p>The liquid tag I care about here lets you assign a value to a variable which can be used elsewhere. Thus, when I insert the picturefill partial, I just need to add a second line like this:</p>
{% highlight fancy %}
{% raw %}
{% assign myImage = "flower-image" %}
{% include partials/picturefill %}
{% endraw %}
{% endhighlight %}
<p>I can now make the picturefill markup dynamic by replacing every instance of 'image' with the liquid output markup {{ myImage }}. This allows the picturefill partial to work for all of my posts, even for multiple pictures in the same post. Actually, it's a mite more complicated than that because I've got a caption as well — but that can be handled with one additional variable. </p>
{% highlight fancy %}
{% raw %}
{% assign myImage = "flower-image" %}
{% assign myCaption = "A picture of flowers" %}
{% include partials/picturefill %}
{% endraw %}
{% endhighlight %}
<p>The picturefill markup works with the myImage and myCaption variables like this: </p>
{% highlight html %}
<div class="my-picturefill-image">
  <span data-picture data-alt="{{ myCaption }}">
  <span data-src="/assets/images/{{ myImage }}-small.jpg"></span>
  <span data-src="/assets/images/{{ myImage }}-medium.jpg" data-media="(min-width: 38em)"></span>
  <span data-src="/assets/images/{{ myImage }}-large.jpg" data-media="(min-width: 50em)"></span>
  <!-- Fallback content for non-JS browsers. Same img src as the initial, unqualified source element. -->
  <noscript>
    <img src="/assets/images/{{ myImage }}-small.jpg">
  </noscript>
  </span>
<div class="caption">{{ myCaption }}</div>
</div>
{% endhighlight %}
<p>I'll try it here with an image of some flowers I took last spring:</p>
{% assign photo = 'flowers' %}
{% assign caption = 'A picture of flowers' %}
{% include custom/pic_large %}
