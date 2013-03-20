--- 
wordpress_id: 2088
layout: post
title: Styling Your FriendFeed Badge
date: "2008-05-05T05:29:00+00:00"
tags: 
- Uncategorized
wordpress_slug: styling-your-friendfeed-badge
wordpress_url: http://cubanlinks.org/2008/05/05/styling-your-friendfeed-badge
---
&raquo; Cross-posted from [http://cubanlinks.org/2008/05/05/styling-your-friendfeed-badge](http://cubanlinks.org/2008/05/05/styling-your-friendfeed-badge) &laquo;

<p>Hey Eddie, did you know you can use <span class="caps">CSS</span> style you FriendFeed badge?  You sure can!  Here&#8217;s the styling I use:</p>


<pre>
&lt;style&gt;
/* Friend Feed CSS */
div.friendfeed{
font-family: Arial,Verdana;
background: transparent;
}

.friendfeed .feed .entry .likes, .friendfeed .header{
    display:none;
}

.friendfeed div.feed{
    border:0px;
background: transparent;
    padding: 10px 10px 0px 3px;
    *padding: 10px 3px 0px 3px;
    _padding: 10px 3px 0px 3px;
}

.friendfeed .feed .entry{
    margin-bottom:12px;
    font-size:12px;
}
&lt;/style&gt;
</pre>
