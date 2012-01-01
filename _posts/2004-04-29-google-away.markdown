--- 
wordpress_id: 232
layout: post
title: Google Away
date: "2004-04-29T12:43:07+00:00"
tags: 
- Uncategorized
wordpress_slug: google-away
wordpress_url: http://cubanlinks.org/2006/11/30/google-away
---
&raquo; Cross-posted from [http://cubanlinks.org/2006/11/30/google-away](http://cubanlinks.org/2006/11/30/google-away) &laquo;

<p>I realized shortly after launching the update to my site, that I had broken every link Google had for me.  I&#8217;ll go into the details below, but suffice to say I needed to fix this quick.  After all, Google <a href="http://www.google.com/search?hl=en&#38;ie=UTF-8&#38;oe=UTF-8&#38;q=site%3Acubanlinks.org+the">has indexed over 1,000 pages from my site</a>.</p>


<p>First of, you&#8217;ll notice as you browse that my blog URLs have extensions now (html, xml, etc).  I decided (against conventional wisdom) to add back extensions because I think they make sense: they describe to the user what kind of file is being served.  If the link has <b>.html</b> appended to it, you&#8217;ll be getting an <span class="caps">HTML</span> file.  If the link has <b>.xml</b> appended to it, you&#8217;ll be getting a flavor of <span class="caps">XML</span> (in this case <span class="caps">RSS 2</span>.0).
<br/><br/>
This decision made it possible for me to generate <span class="caps">RSS</span> feeds for 5 different views related to posts:<br/>
<ol>
<li>All posts</li>
<li>Posts for a section</li>
<li>Posts for a year</li>
<li>Posts for a month</li>
<li>Posts for a day</li>
</ol>
Sure, the bottom 3 feeds are somewhat useless, but the architecture is flexible, and I like that.  The next feature I might implement is search, and the current design makes it trivial to convert searches to feeds too.
<br/><br/>
So, the problem I had with Google was converting old links (with no extension) into the new format.  This was accomplished using the Apache module mod_rewrite.  Now, all requests for posts without a suffix will be redirected to the proper <span class="caps">URL</span>.</p>
