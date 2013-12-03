---
layout: page
title: How To
---

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