--- 
wordpress_id: 453
layout: post
title: More Hacking
date: "2005-02-16T22:08:21+00:00"
tags: 
- Uncategorized
wordpress_slug: more-hacking
wordpress_url: http://cubanlinks.org/2006/11/30/more-hacking
---
&raquo; Cross-posted from [http://cubanlinks.org/2006/11/30/more-hacking](http://cubanlinks.org/2006/11/30/more-hacking) &laquo;

<p><a href="http://www.thefatguy.com">Some people</a> have requested more information about the hacking of my box. <b>Alert: nerd content ahead!</b></p>
<p>I wish I could say that I knew right away that my box was hacked, but I didn&#8217;t.  I generally don&#8217;t have access to my box from work, and certainly don&#8217;t have all that much free time to monitor it in any case.  The first hints involved degrading performance <a href="/blog">of</a> <a href="/mywiki">my</a> <a href="http://dckickball.org">various</a> <a href="https://mail.cubanlinks.org/mailman/listinfo">sites</a>.  First things were just slow, then things (Tomcat, etc) would just crash.  Eventually I closed my eyes, held my breath, and remotely rebooted my box.  Everything came back up, but the problems seem to persist.</p>
<p>Previous to this, I had recieved numerous emails from cron telling me that certain tasks (cleanup, etc) were failing with errors.  Being lazy, I ignored these errors for a while, hoping they would go away (duh!).  After enough time went by, and they didn&#8217;t go away, I investigated more and discovered my box had been hacked.</p>
<p>After poking around the <code>/etc/cron.daily/</code> directory, I noticed that the <code>logrotate</code> script had been modified.  I opened it up, and sure enough someone had added a line telling cron to send an email (to the hacker) with the contents of a particular file.  I opened up the file (.sniffer) and was horrified to see the keystroke input of every call to <code>su</code>, <code>passwd</code>, and <code>mysql</code>.  Everytime I changed a password or logged-in to something, my keystrokes were being captured and emailed to the hacker.</p>
<p>Needless to say I removed the mailing line from <code>logrotate</code> and changed all my passwords.  However, this file is <b>still</b> being written to, by some process I can&#8217;t seem to identify.  So, my box is still hacked, and likely only a format and re-install will fix it.  I also have no idea how my box was hacked.  I have heard about an <a href="http://jeremy.zawodny.com/blog/archives/004107.html">exploit </a> for a http log analyzer I was using, so I&#8217;ve disabled it.</p>
