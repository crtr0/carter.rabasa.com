---
layout: default
title: Home
---
<div id="post">
{% assign x = site.posts.first %}
<h1><a href="{{ x.url }}">{{ x.title }}</a></h1>
{{ x.content }}
</div>
<h2>More Posts</h2>
<ul class="posts">
{% for post in site.posts limit:10 %}
<li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
