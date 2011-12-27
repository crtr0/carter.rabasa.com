---
layout: default
title: Home
---
<h2>Happy Holidays!</h2>
<a href="http://www.flickr.com/photos/cubanlinks/5339186861/" title="WP_000027 by crabasa, on Flickr"><img src="http://farm6.staticflickr.com/5090/5339186861_fd3d1d7bbc_z.jpg" width="480" height="640" alt="WP_000027"></a>
<h2>Recent Posts</h2>
<ul class="posts">
{% for post in site.posts limit:10 %}
<li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>