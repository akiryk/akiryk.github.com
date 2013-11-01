---
layout: default
---
{% include JB/setup %}
<div class="pic-hero">
  {% if site.posts[0].heros %}
  <span data-picture data-alt="Image of whatever">
    <span data-src="/assets/images/{{ site.posts[0].hero }}" data-media="(min-width: 880px)"></span>
  </span>
  {% else %} 
  <span data-picture data-alt="Image of whatever">
    <span data-src="/assets/images/random/cassis-large.jpg" data-media="(min-width: 880px)"></span>
  </span>
  {% endif %}
  <div class="caption">Hotel sign, Cassis, France.</div>
</div>
<div class="content-inner content-inner--hero">
<h1 class="latest hidesmall">Latest Posts</h1>

<ul class="vertical-list">
  {% for post in site.posts %}
    {% if post.category == 'portfolio' %}
      <li class="portfolio-post">
        <h6 class="slug">Portfolio Piece</h6>
    {% else %}
      <li class="blog-post">
    {% endif %}
    
    <h2 class="blog-heading"><a href="{{ BASE_PATH }}{{ post.url }}" class="agg-link">{{ post.title }}</a></h2>
    <p class="teaser"><span class="agg-title-meta">{{ post.date | date: "%B %d, %Y" }}</span>{{ post.teaser }}</p>

    </li>
  {% endfor %}
</ul>
</div>