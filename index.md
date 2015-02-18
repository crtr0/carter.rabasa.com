---
layout: default
title: Home
---
{% assign first = true %}
{% for post in site.posts limit:10 %}
{%   unless post.moved %}
{%     if first %}
<div id="post" class="markdown-body">
<h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
{{ post.content }}
</div>
<h2>More Posts</h2>
<ul class="posts">
{%     else %}
<li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
{%     endif %}
{%     assign first = false %}
{%   endunless %}
{% endfor %}
</ul>
