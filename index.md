---
layout: page
title: Adam Kiryk
tagline: Web design, user experience, front-end development
---
{% include JB/setup %}

<ul class="posts">
  {% for post in site.posts %}
    <li>
      <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>, <span>{{ post.date | date: "%B %d, %Y" }}</span></li>
  {% endfor %}
</ul>
