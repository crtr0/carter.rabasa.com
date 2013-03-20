--- 
wordpress_id: 355
layout: post
title: No Tresspassing
date: "2002-03-08T02:51:05+00:00"
tags: 
- Uncategorized
- Constitution
- "2008"
wordpress_slug: no-tresspassing
wordpress_url: http://cubanlinks.org/2006/11/30/no-tresspassing
---
&raquo; Cross-posted from [http://cubanlinks.org/2006/11/30/no-tresspassing](http://cubanlinks.org/2006/11/30/no-tresspassing) &laquo;

<p>I just finished rigging up my site to handle authentication on my <a href="/go/admin/">admin</a> site.  Previously, it had been wide open, but that&#8217;s the beauty of security through obscurity.  :)
<br/><br/>
Anyway, it was a royal pain-in-the-ass to get container-managed authentication working.  When I get a chance, I&#8217;ll post a blow-by-blow account of problems I had and what I did to fix them.  Suffice to say, the <a href="http://jakarta.apache.org/tomcat/tomcat-4.0-doc/realm-howto.html">documentation</a> out there isn&#8217;t entirely correct on all matters.  To this day, I&#8217;m not sure why I couldn&#8217;t put my Realm block in a Context block.  It also doesn&#8217;t help that Tomcat generates a myriad of logfiles that you have to wade through to find what you want (catalina.log ended up be my savior).</p>
