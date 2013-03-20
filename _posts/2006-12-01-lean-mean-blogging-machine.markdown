--- 
wordpress_id: 789
layout: post
title: Lean, Mean, Blogging Machine
date: "2006-12-01T23:11:00+00:00"
tags: 
- Uncategorized
- typo
- mephisto
- migration
wordpress_slug: lean-mean-blogging-machine
wordpress_url: http://cubanlinks.org/2006/12/02/lean-mean-blogging-machine
---
&raquo; Cross-posted from [http://cubanlinks.org/2006/12/02/lean-mean-blogging-machine](http://cubanlinks.org/2006/12/02/lean-mean-blogging-machine) &laquo;

<p>This is the inaugural post to cubanlinks.org via the <a href="http://mephisto.stikipad.com">Mephisto</a> blogging application. I realize that many of you could give a rip what I use to serve-up Cubanlinks. However, for the few of you who might want to hear about my process, here you go:</p>


<p>First, I installed Mephisto directly under my home directory on <span class="sponsor"><a href="http://www.shareasale.com/r.cfm?B=69506&#38;U=192330&#38;M=10198">TextDrive</a></span>. I did this with the understanding that I planned on using a single instance of Mephisto to serve up several domains (<a href="http://briancartenuto.com">BrianCartenuto.com</a> and <a href="http://blog.dcksports.com">blog.DCKSports.com</a> among others). I&#8217;m actually incredibly excited about this, given how heavy the overhead of even a single instance of Typo is. I then followed the <a href="http://mephisto.stikipad.com/help/show/HostingMultipleSites">multiple site configuration steps</a>. Note: I have Revision 2517 of Mephisto installed and only needed to follow the very first step (creating the new Site).</p>


<p>Second, I <a href="http://mephisto.stikipad.com/help/show/Converting+Typo+to+Mephisto">imported the data from Typo</a>. This process was pretty straightforward. The migrate process can take awhile, with no real output to the screen, so be patient. A few things here: the taggings for my posts were not imported properly. I&#8217;ve edited the Wiki page myself to address my solution to this problem. Also, all of the posts/sections that I imported were assigned to Site id=1. I actually meant for my incoming data to be associated with Site id=4, so I just had to update the <em>contents</em> and <em>sections</em> table with a <span class="caps">SQL</span> update.</p>


Lastly, I needed to figure out how I was going to handle legacy <span class="caps">URL</span>&#8217;s for Cubanlinks. I decided to do two things:
<ul>
<li>I changed the default Article <span class="caps">URL</span> for Mephisto from /:year/:month/:day/:perm to /articles/:year/:month/:day/:perm</li>
	<li>I added the following redirects to my config/environment.rb file</li>
</ul>


<pre><code>
   Mephisto::Routing.redirect \
     'blog/articles/?/?/?/?' =&gt; 'articles/$1/$2/$3/$4',
     'blog/articles/?/?' =&gt; 'blog/archives/$1/$2',
     'blog/articles/tag/?' =&gt; 'tags/$1',
     'blog/articles' =&gt; 'blog',
     'blog/xml/rss20/feed.xml' =&gt; 'feed/blog/atom.xml',
     'blog/xml/rss' =&gt; 'feed/blog/atom.xml',
     'blog/xml/rss20/comments/feed.xml' =&gt; 'feed/all_comments.xml'
</code></pre>

Mephisto does not support some resources that Typo provides such as:
<ul>
<li>Article listings for a single day</li>
	<li>Article listings for a single year</li>
	<li>Feed for article/comments</li>
</ul>


<p>Well, that&#8217;s about all I can think of off the top of my head. Obviously I have alot of work to do, regarding the design of the site, fixing re-routing old resources/links, etc. I really like what I&#8217;m seeing with Mephisto, to the point that I&#8217;m willing to try and use it as a <span class="caps">CMS</span> for my entire site. We&#8217;ll see how it goes!</p>
