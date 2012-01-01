--- 
wordpress_id: 1035
layout: post
title: Mephisto, Multi-Site and Lighttpd
date: "2006-12-28T22:52:00+00:00"
tags: 
- Uncategorized
- rails
- ruby
- mephisto
- lighttpd
wordpress_slug: mephisto-multi-site-and-lighttpd
wordpress_url: http://cubanlinks.org/2006/12/28/mephisto-multi-site-and-lighttpd
---
&raquo; Cross-posted from [http://cubanlinks.org/2006/12/28/mephisto-multi-site-and-lighttpd](http://cubanlinks.org/2006/12/28/mephisto-multi-site-and-lighttpd) &laquo;

<p>After playing around with Lighttpd&#8217;s rewrite abilities, I think I have a set-up that enables Mephisto caching goodness.  The following is how I have chosen to configure Mephisto, so your mileage may vary:</p>


<p>1) Install Mephisto in your home directory (MEPHISTO_HOME).</p>


<p>2) For each domain you want to set-up, use a config like this:</p>


<pre><code>$HTTP["host"] =~ "foo.com" {
  server.document-root = foo_com_docroot
  server.error-handler-404 = "/mephisto/dispatch.fcgi"
  url.rewrite = ( "/$" => "/mephisto/cache/foo.com/index.html", "/(images|stylesheets|javascripts)/mephisto/(.+)$" => "/mephisto/$1/mephisto/$2", "/(images|stylesheets|javascripts)/(.+)$" => "/mephisto/cache/foo.com/$1/$2", "/assets/(.+)$" => "/mephisto/assets/foo.com/$1", "/([.]+)$" => "/mephisto/cache/foo.com/$1.html" )
  fastcgi.server = ( ".fcgi" =>
   ( "localhost" =>
     ( "socket" => "/home/YOU/var/run/lighttpd-fcgi-blog.socket",
       "bin-path" => mephisto_root + "/dispatch.fcgi",
       "bin-environment" => ( "RAILS_ENV" => "production" ),
       "min-procs" => 1, "max-procs" => 2, "idle-timeout" => 60 )
     )
   )
}</code></pre>

<p>3) In the docroot for foo.com (~/domains/foo.com/web/public, etc) create a symlink to your mephisto public folder:</p>


<p>cd ~/domains/foo.com/web/public; ln -s ~/mephisto/public mephisto</p>


<p>That&#8217;s it! I hope I&#8217;m not forgetting anything. Feedback would be appreciated.</p>
