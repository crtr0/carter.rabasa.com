--- 
wordpress_id: 339
layout: post
title: Down for the Count
date: "2002-05-10T01:04:38+00:00"
tags: 
- Uncategorized
wordpress_slug: down-for-the-count
wordpress_url: http://cubanlinks.org/2006/11/30/down-for-the-count
---
&raquo; Cross-posted from [http://cubanlinks.org/2006/11/30/down-for-the-count](http://cubanlinks.org/2006/11/30/down-for-the-count) &laquo;

<p>Anyone who frequents my site has probably noticed that the site seems to <em>go down</em> more than a little bit.  Sometimes I notice it, but other times I&#8217;m notified by someone else.  <b>This sucks</b>, and for a site as (relatively) small and simple as mine, downtime shouldn&#8217;t happen that often.  Unfortunately, Tomcat has been crapping out on me (randomly) from day one, and while I&#8217;ve tried a couple of things to fix this, none have taken.
<br/><br/>
So, now my latest theory: the <a href="http://jakarta.apache.org/tomcat/tomcat-4.0-doc/config/warp.html"><span class="caps">WARP</span> Connector</a> that connects Apache to Tomcat is <em>f&#8217;ed</em>.  Why do I think this?  No great reason, but it&#8217;s time to try something, so I&#8217;ve switched out <span class="caps">WARP</span>, and plugged in <a href="http://jakarta.apache.org/tomcat/tomcat-4.0-doc/config/ajp.html">mod_jk</a> (the <span class="caps">AJP13</span> connector).  We&#8217;ll try this for a week, and see what happens.  Wish me luck.</p>
