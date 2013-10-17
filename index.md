---
layout: home
---
{% include JB/setup %}

<section class="introduction">
  <h1>Readylab is a small creative studio focused on making well-crafted websites and digital experiences.</h1>

  <a href="{{ BASE_PATH }}/about.html" class="cta">Go on, say more...</a>
</section>

<ul class="posts">
  {% for post in site.posts %}
    <li>
      {% if post.hero %}
        <a href="{{ BASE_PATH }}{{ post.url }}">
          <img src="{{ site.url }}/assets/images/{{ post.hero }}" title="{{ post.hero-title }}">
        </a>
      {% endif %}
      {% if post.category == 'portfolio' %}
        <h6 class="slug">Portfolio</h6>
      {% endif %}
      <h3><a href="{{ BASE_PATH }}{{ post.url }}" class="plain">{{ post.title }}</a></h3>
      <div class="teaser">{{ post.teaser }}</div>
      <span>{{ post.date | date: "%B %d, %Y" }}</span>
    </li>
  {% endfor %}
</ul>
