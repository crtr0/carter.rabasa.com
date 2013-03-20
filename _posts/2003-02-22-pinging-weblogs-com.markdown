--- 
wordpress_id: 521
layout: post
title: Pinging Weblogs.com
date: "2003-02-22T21:12:35+00:00"
tags: 
- Uncategorized
wordpress_slug: pinging-weblogs-com
wordpress_url: http://cubanlinks.org/2006/11/30/pinging-weblogs-com
---
&raquo; Cross-posted from [http://cubanlinks.org/2006/11/30/pinging-weblogs-com](http://cubanlinks.org/2006/11/30/pinging-weblogs-com) &laquo;

<p>I just added a feature that allows my blog to &#8220;ping&#8221; weblogs.com (using <span class="caps">XML</span>-RPC) everytime I add a new post.
<br/><br/>
<i>What is weblogs.com?</i><br/>
&#8220;The core function of Weblogs.Com is a list of weblogs that have changed in the last three hours.&#8221; <a href="http://newhome.weblogs.com/faq#whatIsWeblogscom">More information</a>
<br/><br/>
<i>What is <span class="caps">XML</span>-RPC?</i>
&#8220;It&#8217;s remote procedure calling using <span class="caps">HTTP</span> as the transport and <span class="caps">XML</span> as the encoding. <span class="caps">XML</span>-RPC is designed to be as simple as possible, while allowing complex data structures to be transmitted, processed and returned.&#8221; <a href="http://www.xmlrpc.com/#whatIsXmlrpc">More information</a>
<br/><br/>
<i>How did you implement this?</i><br/>
I used an <a href="http://ws.apache.org/xmlrpc/"><span class="caps">XML</span>-RPC Java library</a> from Apache.  The code ended up looking like this:<br/><br/>
<code>
 XmlRpcClient xmlrpc = new XmlRpcClient(XML_RPC_URL);&lt;br/&gt;
Vector params = new Vector ();&lt;br/&gt;
params.addElement ("Carter's Blog");&lt;br/&gt;
params.addElement ("http://cubanlinks.org");&lt;br/&gt;
Hashtable result = (Hashtable)xmlrpc.execute("weblogUpdates.ping",params);&lt;br/&gt;
</code></p>
