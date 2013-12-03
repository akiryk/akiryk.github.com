---
layout: post
title: Responsive Videos in Jekyll
teaser: In creating my first Jekyll site, I held off on using plugins until I felt I really needed them. Well, now I need them. And I learned a few things along the way...
hero: tintin
hero-caption: Tintin illustration, Hergé
assets: book-browsing
category : blog
tags : [jekyll, code, tips-n-tricks]
---

There are a bunch of cool [Jekyll plugins](http://jekyllrb.com/docs/plugins/) out there, but using them can be a bit fussy if you're deploying to GitHub pages since GitHub disables custom plugins. You can do it, but you'll need to generate your site locally — and then push the generated site to Github. Is that a problem? Not for me, although it might be if you had a much bigger site than mine. Anyway, it meant I held off on trying any plugins until such time when I would really need one. That time has come. 

<div class="marginator">
  <p>
    See, I'd like to post a video or several, and I'd like them to handle different viewport sizes well — but I don't want to rely on the <a href="http://fitvidsjs.com/">FitVids plugin</a> since I'm not using jQuery on this site. After exploring a few options, I found a YouTube plugin for Jekyll that seemed pretty good, <a href="https://github.com/ttscoff/JekyllPlugins/tree/master/YouTube">youtube_tag.rb</a> by Brett Terpstra.
  </p>
  <div class="marginalia">
    <p><span class="margin-heading">How To:</span> To learn about generating a static site and hosting it on Github, just read <a href="http://ixti.net/software/2013/01/28/using-jekyll-plugins-on-github-pages.html">this article from ixti.net</a>. Don't worry about how they used octopress; I'm not using octopress and their methods worked for me.
    </p></div>
</div>

This plugin uses the approach described in ["Creating Instrinsic Ratios for Video"](http://alistapart.com/article/creating-intrinsic-ratios-for-video), which I believe is the same approach used by FitVids: it calculates the video's aspect ratio and uses that ratio to set just the right percentage of padding for the video to resize correctly. 

Using the plugin is simple. Once it's in your Jekyll plugins directory, simply put the 'youtube' liquid tag in your post along with the youtube video ID and optional width and height parameters:

    {% raw %} {% youtube uEdRLlqdgA4 640 480 %} {% endraw %}
    
One gotcha: If you use this plugin with rDiscount, the default Jekyll markdown rendering engine, you might run into a problem with the way it plugin injects an inline style tag. The styles don't get rendered and the videos don't end up being resizeable. I found two possible solutions. One is to put the necessary styles in your css and then comment out the offending line:

{% highlight css %}
/* Put these styles in your css */
iframe,
object, 
embed {
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  margin-top:0;
}
{% endhighlight %}

And comment out line 33 from youtube_tag.rb
{% highlight ruby %}
#video = "<style>.bt-video-container iframe,.bt-video-container object,.bt-video-container embed { position:absolute; top:0; left:0; width:100%; height:100%; margin-top:0 } </style>\n"
# Then modify line 34 so that video is simply set to = and not +=:
video = %Q{<div class="bt-video-container" style="position:relative;padding-bottom:#{padding_bottom};padding-top:30px;height:0;overflow:hidden"><iframe width="#{@width}" height="#{@height}" src="http://www.youtube.com/embed/#{@videoid}?rel=0" frameborder="0" allowfullscreen></iframe></div>}
{% endhighlight %}

The other option is to use a different markdown renderer — RedCarpet seems to work fine. You might need to install it; you'll definitely need to tell Jekyll about it. Open the Jekyll config.yml file and add the following:
{% highlight ruby %}
  markdown: redcarpet
{% endhighlight %}

###Vimeo
The youtube_tag plugin is designed for YouTube, but the approach is the same no matter where your video is hosted. I made a version that works with Vimeo by making just a few modifications. See my [gist for a vimeo plugin](https://gist.github.com/akiryk/7750273).

Here are the plugins live in action showing a couple videos I've seen recently on [kottke](http://www.kottke.org). Here are the two liquid tags I used:<br><br>
{% raw %} {% vimeo 80310253 500 281 %} {% endraw %}<br><br>and<br><br>
{% raw %} {% youtube uEdRLlqdgA4 640 480 %} {% endraw %}
{% vimeo 80310253 500 281 %}
{% youtube uEdRLlqdgA4 640 480 %}