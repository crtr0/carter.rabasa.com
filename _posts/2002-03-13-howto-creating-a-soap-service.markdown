--- 
wordpress_id: 352
layout: post
title: "Howto: Creating a Soap Service"
date: "2002-03-13T00:29:24+00:00"
tags: 
- Uncategorized
wordpress_slug: howto-creating-a-soap-service
wordpress_url: http://cubanlinks.org/2006/11/30/howto-creating-a-soap-service
---
&raquo; Cross-posted from [http://cubanlinks.org/2006/11/30/howto-creating-a-soap-service](http://cubanlinks.org/2006/11/30/howto-creating-a-soap-service) &laquo;

<p><a href="http://www.w3.org/TR/SOAP/"><span class="caps">SOAP</span></a> (Simple Object Access Protocol) is a protocol used for developing web-services.  A web-service, as its name implies, is a service that is accessible via the internet.  The classic example is the stock quote web-service: you provide it a company symbol, and it responds with the current price of the stock.
<br/><br/>
Web services are powerful in that they have the ability to tie together disparate systems.  It is possible for a <span class="caps">COBOL</span>/Unix machine to communicate with a C#/Intel box so long as both speak <span class="caps">SOAP</span>.
<br/><br/>
I have chosen to use <span class="caps">SOAP</span> internally on cubanlinks.org in order to faciliate communication between code I&#8217;ve written in Java and <span class="caps">PHP</span>.  You might be asking: why not just write your application in one language or the other?  Two reasons:<br/>
<ul>
<li><span class="caps">PHP</span> does some things better than Java, and vice versa. </li>
<li>Re-writing my <span class="caps">PHP</span> code in Java is time-consuming.</li>
</ul><br/>
So, let&#8217;s examine my <span class="caps">SOAP</span> service.  I used Dietrich Ayala&#8217;s <a href="http://dietrich.ganx4.com/soapx4/">soapx4</a> implementation for <span class="caps">PHP</span>.  The version I used had <b>very</b> limited support complex data types, but since then has been much improved.
<br/><br/>
More to come &#8230;.</p>
