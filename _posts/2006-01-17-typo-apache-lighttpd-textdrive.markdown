--- 
wordpress_id: 9
layout: post
title: Typo + Apache + Lighttpd @ TextDrive
date: "2006-01-17T19:13:00+00:00"
tags: 
- Uncategorized
wordpress_slug: typo-apache-lighttpd-textdrive
wordpress_url: http://cubanlinks.org/2006/11/30/typo-apache-lighttpd-textdrive
---
&raquo; Cross-posted from [http://cubanlinks.org/2006/11/30/typo-apache-lighttpd-textdrive](http://cubanlinks.org/2006/11/30/typo-apache-lighttpd-textdrive) &laquo;

<p>For all my homies who have had trouble getting Apache, Lighttpd and Typo (on a shared host no less!) deployed in a subdirectory off the document root, here&#8217;s what I had to do:</p>


<ol>
<li><b>Typo:</b> unpack, configure <code>database.yml</code> and make sure to log-in to the database you&#8217;ve configured and execute the <code>schema.mysql.sql</code> script.</li>
<li>Locate your document root (<code>/home/{username}/web/public/</code>) and create a symbolic link to your typo installation&#8217;s public directory (<code>ln -s /home/{username}/typo/public /home{username}/web/public/blog</code>). You don&#8217;t have to name the symbolic link &#8220;blog&#8221;, you can give it any name you like.</li>
<li><b>Lighttpd:</b> Follow these <a href="http://weblog.0x7b.com/articles/2005/09/17/lighttpd-setup-on-textdrive-com">instructions</a> . Now, change the <code>server.error-handler-404</code> so that instead of pointing to <code>"/dispatch.fcgi"</code> it points to <code>"/blog/dispatch.fcgi"</code>.</li>

<li><b>Apache:</b> <a href="http://manuals.textdrive.com/read/chapter/62">Set-up the Apache alias/redirect</a>. However, for the local <span class="caps">URL</span>, specify <code>/blog</code>. For the remote <span class="caps">URL</span>, specify <code>http://yourdomain.name:PORT#/blog/</code>.</li>
</ol>

<p>Once you bounce Apache (by saving your changes) and start-up Lighttpd, you should be good to go. Here are some more <a href="http://weblog.0x7b.com/articles/2005/09/17/lighttpd-setup-on-textdrive-com-part-ii">steps you can take</a> to finalize your set-up.  Let me know if I&#8217;m missing anything.</p>
