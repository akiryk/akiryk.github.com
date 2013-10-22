---
layout: default
---
{% include JB/setup %}

<ul class="posts">
  {% for post in site.posts %}
    {% if post.category == 'portfolio' %}
      <li class="portfolio-item">
        <h6 class="slug">Portfolio Piece
        {% unless page.tags == empty %}
        / 
          <ul class="agg-tags">
            {% assign tags_list = post.tags %}
            {% include JB/tags_list %}
          </ul>
        {% endunless %}  
      </h6>
    {% else %}
      <li class="blog-item">
    {% endif %}
      {% if post.hero %}
        <a href="{{ BASE_PATH }}{{ post.url }}">
          <img src="{{ site.url }}/assets/images/{{ post.hero }}" title="{{ post.hero-title }}">
        </a>
      {% endif %}
      <h2 class="blog-heading"><a href="{{ BASE_PATH }}{{ post.url }}" class="plain">{{ post.title }}</a></h2>
      <div class="teaser">{{ post.teaser }}</div>

      <span class="agg-title-meta">{{ post.date | date: "%B %d, %Y" }}</span>
    </li>
  {% endfor %}
</ul>

 <a class="navicon-button x">
      <div class="navicon"></div>
    </a>
