--- 
wordpress_id: 2343
layout: post
title: RIP FF2Disqus
date: "2009-01-08T23:53:18+00:00"
tags: 
- Uncategorized
wordpress_slug: rip-ff2disqus
wordpress_url: http://cubanlinks.org/blog/?p=2343
---
&raquo; Cross-posted from [http://cubanlinks.org/blog/?p=2343](http://cubanlinks.org/blog/?p=2343) &laquo;

<img class="alignnone size-full wp-image-2344" title="ff2d2" src="http://cubanlinks.org/blog/wp-content/uploads/2009/01/ff2d2.png" alt="ff2d2" width="32" height="32" />

<strong>[UPDATE]:</strong> FF2Disqus is back up, but in limited beta.  Email/Twitter me if you'd like to try it out.

Over this past weekend I wrote an app that attempted to bridge the gap between comments occurring on your blog (old school) with the comments proliferating on FriendFeed (new skool).  It started out as a <a href="http://cubanlinks.org/blog/2009/01/04/friendfeeddisqus-comment-sync-v01/">client-app</a>, matured into <a href="http://cubanlinks.org/blog/2009/01/06/friendfeeddisqus-comment-sync-v02/">a service</a> and was <a href="http://friendfeed.com/e/6c9e7321-7e3d-5eee-eaac-eee569410616/Optimus-Prime-Feels-The-Energy-Crisis/">beset by glitches</a>.  I spent the better part of 2-3 days trying to track down what exactly was going wrong, and now I finally have an answer.

The problem was when I executed Disqus API calls on my computer the results were <strong>DIFFERENT</strong> than when I called those same API's with the exact same parameters on my host (Google's AppEngine).  I will not pretend to have the faintest idea of what is going on.  Someone, somewhere is caching the results of these API calls and passing them back to my service.  You can see for yourself the results of two seperate (but identical) calls to the service "get_thread_posts".  If you do a search for "Mo bugs mo problems", you'll see that comment does show up in my local response, but <strong>DOES NOT</strong> show up the response provided to AppEngine:

<a href="http://cubanlinks.org/blog/wp-content/uploads/2009/01/disqus_response_appengine.txt" target="_blank">Disqus response (appengine)</a>

<a href="http://cubanlinks.org/blog/wp-content/uploads/2009/01/disqus_response_local.txt" target="_blank">Disqus response (local)</a>

...which lead to insane amounts of duplicate comments at random times for random people.  And so ends my quixotic journey to have my comments and eat them too.  If someone from Disqus has some time to look into this, I will provide any information I can.  In the meantime, I apologize for letting down the people who signed-up and got some use out of FF2Disqus.  I think I understand now why it's a bad idea to put things out there that aren't fully baked.

<span style="text-decoration: underline;">Updates</span>
<ul>
<li>Looks like to might be Google's fault <a href="http://groups.google.com/group/google-appengine/browse_thread/thread/dc539459dec9968c/10b849952966f28f?lnk=gst&amp;q=urlfetch+cache#10b849952966f28f">(link #1)</a> <a href="http://groups.google.com/group/google-appengine/browse_thread/thread/ae52ac9100d8f18c/e91fa4c69848d9a7?lnk=gst&amp;q=urlfetch+cache#e91fa4c69848d9a7">(link #2)</a></li>
<li>Ryan Williams points me to a <a href="http://code.google.com/p/googleappengine/issues/detail?id=739&amp;can=1&amp;q=urlfetch&amp;colspec=ID%20Type%20Status%20Priority%20Stars%20Owner%20Summary%20Log%20Component#c5">work-around</a></li>
<li>And... we're back! But super-limited beta.</li>
</ul>
