--- 
wordpress_id: 130
layout: post
title: Spam Via HTTP
date: "2004-07-22T20:13:59+00:00"
tags: 
- Uncategorized
wordpress_slug: spam-via-http
wordpress_url: http://cubanlinks.org/2006/11/30/spam-via-http
---
&raquo; Cross-posted from [http://cubanlinks.org/2006/11/30/spam-via-http](http://cubanlinks.org/2006/11/30/spam-via-http) &laquo;

<p>I suspected this before, but now that I&#8217;m analyzing my <span class="caps">HTTP</span> logs, I can&#8217;t believe how many <span class="caps">SPAM</span> bots are out there trying (in vain) to invoke common <span class="caps">CGI</span> scripts on my website to send <span class="caps">SPAM</span>.  Here is a list of the most common <span class="caps">URI</span>&#8217;s attempted (which all 404)</p><ul><li>/cgi-bin/form.cgi</li><li>/cgi/formonly.cgi</li><li>/cgi-bin/formmail.pl</li><li>/cgi-bin/FormMail.pl</li><li>/cgi-bin/form2mail.cgi</li><li>/cgi/formmail</li><li>/cgi-bin/formmail.cgi</li><li>/cgi-bin/fmail.pl</li>/cgi-bin/contact.pl</li><li>/cgi-bin/mailform.pl</li></ul><p>There are more, but you get the gist.  Mother f&#8217;ers.</p>
