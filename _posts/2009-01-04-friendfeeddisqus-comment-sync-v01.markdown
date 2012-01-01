--- 
wordpress_id: 2335
layout: post
title: FriendFeed/Disqus Comment Sync v0.1
date: "2009-01-04T20:37:41+00:00"
tags: 
- Uncategorized
wordpress_slug: friendfeeddisqus-comment-sync-v01
wordpress_url: http://cubanlinks.org/blog/?p=2335
---
&raquo; Cross-posted from [http://cubanlinks.org/blog/?p=2335](http://cubanlinks.org/blog/?p=2335) &laquo;

I've completed an alpha version of my Friendfeed-to-Disqus Comment Sync.  It is a 100% Javascript client app, but you must download it to your computer in order to run (cross-domain scripting issues prevent hosting).  The app consists of an <a href="/ff2d/index.html">html file</a> and a <a href="/ff2d/prototype-1.6.0.3.js">javascript library</a>.  Here are some immediate issues to note:
<ul>
<li>Comments pulled from FriendFeed and posted to Disqus are done so using a bogus email address.  Email is a required field to post a comment to Disqus, but FriendFeed does not provide emails in its API.  So, the email used is &lt;ff nickname&gt;@bogus_email.com.</li>
<li>Comments pulled from Disqus and posted to FriendFeed are, unfortunately, posted as you.  There is no way around this given their API.  To compensate, the following tag is appended to each comment: "(comment via Disqus by &lt;name&gt;)".  In addition, FF does not allow a timestamp to be associated with a comment, so there could be some minor ordering issues.</li>
</ul>
Feel free to give it a spin and leave any feedback here or on FriendFeed.  I'll just sync it later.  :)
