--- 
wordpress_id: 323
layout: post
title: Tomcat 4.x + Sun JDK 1.3 = CRASH!
date: "2002-04-04T21:29:03+00:00"
tags: 
- Uncategorized
wordpress_slug: tomcat-4-x-sun-jdk-1-3-crash
wordpress_url: http://cubanlinks.org/2006/11/30/tomcat-4-x-sun-jdk-1-3-crash
---
&raquo; Cross-posted from [http://cubanlinks.org/2006/11/30/tomcat-4-x-sun-jdk-1-3-crash](http://cubanlinks.org/2006/11/30/tomcat-4-x-sun-jdk-1-3-crash) &laquo;

<p>I had been experiencing problems with my installation of Tomcat 4.x over the last month or so.  For some reason, it would <b>inexplicably crash</b>, leaving no hint of what had happened in the log files.  It was pretty frustrating, and would obviously cause my site to no longer respond.  In any case, I was looking around on the <a href="http://jakarta.apache.org/tomcat">Tomcat</a> site and found the <em>answer</em>. <br/><br/>
Apparently there is an issue with running Tomcat 4.x on using Sun&#8217;s 1.2.x or 1.3.x <span class="caps">JDK</span>.  There were some proposed fixes, but I found the easiest solution was to upgrade to the 1.4 <span class="caps">JDK</span>.  Hope this helps someone.</p>
