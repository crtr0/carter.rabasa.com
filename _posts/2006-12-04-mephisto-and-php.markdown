--- 
wordpress_id: 791
layout: post
title: Mephisto and PHP
date: "2006-12-04T23:47:00+00:00"
tags: 
- Uncategorized
- mephisto
- textdrive
- php
- lighttpd
wordpress_slug: mephisto-and-php
wordpress_url: http://cubanlinks.org/2006/12/05/mephisto-and-php
---
&raquo; Cross-posted from [http://cubanlinks.org/2006/12/05/mephisto-and-php](http://cubanlinks.org/2006/12/05/mephisto-and-php) &laquo;

<p>I am in the process of converting the content management of several of my domains to <a href="http://mephisto.stikipad.com">Mephisto</a>. I discussed <a href="/articles/2006/12/1/lean-mean-blogging-machine">some of my reasons</a> for this. I&#8217;m loving the switch so far, but I hit a hitch. The document roots (in Lighttpd) of my switched domains are pointing to the Mephisto public directory. This seems ok, but what about non-Mephisto resources? What about those useful <span class="caps">PHP</span> scripts that you&#8217;ve got lying around?</p>


<p>_Don&#8217;t have <span class="caps">PHP</span> enabled? Check-out <a href="http://www.fearoffish.co.uk/2006/5/24/lighttpd-config._">this post on Lighttpd and <span class="caps">PHP</span></a></p>


<p>Well, you can copy them into the mephisto/public folder, but that&#8217;s not very appetizing. I don&#8217;t want to pollute my Mephisto installation with non-Mephisto files. I really want to point my document root back at the default Textdrive directories:</p>


<pre><code>server.document-root = /home/username/domains/domain.com/web/public</code></pre>

<p>So, what&#8217;s a hack like me to do? Well, I created a symlink from the directory above to Mephisto&#8217;s dispatch.fcgi script:</p>


<pre><code>$ ln -s /path/to/mephisto/public/dispatch.fcgi</code></pre>

<p>I tried to define the absolute path to the script in my conf file for Lighttpd, but that didn&#8217;t work. I think <code>server.error-handler-404</code> wants a relative path starting from the defined document root. Hence the symlink. This seems to be working like a charm!</p>


<p><strong>One caveat:</strong> All requests to Mephisto are predicated on the 404 error handler. So, any requests that actually resolve (should you create a file or directory that maps to a Mephisto <span class="caps">URI</span>) won&#8217;t make it. So, be careful what you name your files and directories!</p>


<p><strong>Update</strong>: Didn&#8217;t notice this until I tried to access the admin console. You&#8217;ll need to symlink the <em>images</em>, <em>stylesheets</em>, and <em>javascripts</em> directories.</p>
