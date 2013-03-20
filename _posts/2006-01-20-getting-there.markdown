--- 
wordpress_id: 618
layout: post
title: Getting There...
date: "2006-01-20T19:18:32+00:00"
tags: 
- Uncategorized
- rails
- ruby
wordpress_slug: getting-there
wordpress_url: http://cubanlinks.org/2006/11/30/getting-there
---
&raquo; Cross-posted from [http://cubanlinks.org/2006/11/30/getting-there](http://cubanlinks.org/2006/11/30/getting-there) &laquo;

<p>So, I&#8217;ve just finished importing 610 entries into my blog&#8217;s database. As I mentioned before, I had used a tool called Warrick to scour the caches of various search (Google, Yahoo, etc) and archiving (Internet Archive) services to reconstruct a snapshot of cubanlinks.org.  This process left me with 1029 files scattered throughout 1106 directories.</p>


<p>(Remember, <i>/archives/2003/12/01/some-post/index.html</i> is comprised of 5 directories and 1 file)</p>


<p>So, the next step was to get these static files into the database. I accomplished this by writing a script in Ruby to extract title/date/body information from the page and insert these values into the database using ActiveRecord. Thank god for Typo being kind enough to fill in the other values for me on save (guid, permalink, etc).</p>


<p>It&#8217;s unclear how many posts never got recovered with Warrick in the first place. Eyeballing it, I&#8217;d say I have <b>at least</b> 80% of my posts.  And you know what? I&#8217;ll take that.</p>
