--- 
wordpress_id: 228
layout: post
title: Burning the Midnight Oil
date: "2004-04-27T12:03:11+00:00"
tags: 
- Uncategorized
wordpress_slug: burning-the-midnight-oil
wordpress_url: http://cubanlinks.org/2006/11/30/burning-the-midnight-oil
---
&raquo; Cross-posted from [http://cubanlinks.org/2006/11/30/burning-the-midnight-oil](http://cubanlinks.org/2006/11/30/burning-the-midnight-oil) &laquo;

<p>Since I don&#8217;t have access to my server from work, making any big changes is difficult since I have to get it done before I leave for work the next day.  Sprinkle in going to the gym and eating dinner, and the hours are few and far between.
<br/><br/>
In any case, I think I&#8217;m on my way to locking down my server.  Here&#8217;s a <b>before</b> snapshot:<br/><br/>
<ul>
<li>Apache 1.3 (non-SSL) + <span class="caps">PHP</span> + Tomcat</li>
<li><span class="caps">IMAP</span> (plaintext over port 143)</li>
<li>Sendmail 8.12.8 w/ old conf file</li>
</ul>
Here&#8217;s how things stand <b>now</b>:<br/>
<ul>
<li>Apache 1.3 (non-SSL) + Tomcat (my blog)</li>
<li>Apache 2.0 <span class="caps">SSL</span> (my WebMail)</li>
<li><span class="caps">IMAP</span> (checked over an <span class="caps">SSH</span> tunnel)</li>
<li>Sendmail 8.12.11 w/ new conf file</li>
</ul>
So, I&#8217;m feeling better.  Still needs some work, but I&#8217;m getting there.</p>
