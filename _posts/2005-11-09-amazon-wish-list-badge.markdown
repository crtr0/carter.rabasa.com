--- 
wordpress_id: 29
layout: post
title: Amazon Wish List Badge
date: "2005-11-09T19:32:00+00:00"
tags: 
- Uncategorized
wordpress_slug: amazon-wish-list-badge
wordpress_url: http://cubanlinks.org/2006/11/30/amazon-wish-list-badge
---
&raquo; Cross-posted from [http://cubanlinks.org/2006/11/30/amazon-wish-list-badge](http://cubanlinks.org/2006/11/30/amazon-wish-list-badge) &laquo;

Over the past day or so, I&#8217;ve cobbled together an Amazon Wish List badge for my blog.  You&#8217;ll see my items listed on the right of this page if you scroll down.  I did this using 3 things:
<ul>
<li><a href="http://www.amazon.com/gp/aws/sdk/103-2194516-4697459?v=2005%2d10%2d05&#38;s=AWSEcommerceService">Amazon Web Services</a></li>
<li><a href="http://cubanlinks.org/wishlist.xsl">A custom <span class="caps"><span class="caps">XSLT</span></span> stylesheet</a></li>
<li>My unique <a href="http://www.amazon.com/gp/registry/33PA3Q33W2G6P">Wish List</a> ID</li>
</ul>
<span class="caps"><span class="caps">AWS</span></span> offers a <a href="http://www.amazon.com/gp/aws/sdk/main.html?s=AWSEcommerceService&#38;v=2005-10-05&#38;p=ApiReference/ListLookupOperation">List Lookup</a> operation.  You can invoke this operation <a href="http://xml-us.amznxslt.com/onca/xml?Service=AWSECommerceService&#38;AWSAccessKeyId=1ZNXWY0K2A9VJT960A02&#38;Operation=ListLookup&#38;ListType=WishList&#38;ListId=33PA3Q33W2G6P&#38;ResponseGroup=Medium">like so</a> by plugging in your Wish List ID and specifying some additional parameters (see the <span class="caps"><span class="caps">API</span></span> for more details).

    <p>What&#8217;s important to note is that you can format the returned data from <span class="caps"><span class="caps">AWS</span></span> by passing a <span class="caps"><span class="caps">URL</span></span> to an <span class="caps"><span class="caps">XSLT</span></span> stylesheet.  In my case, the stylesheet that I wrote outputs Javascript code (I stole this idea from Flickr).  So, to print the Wish List to the browser, I simply embed the following Javascript in my sidebar:</p>

<textarea cols="50"><script type="text/javascript" src="http://xml-us.amznxslt.com/onca/xml?Service=AWSECommerceService&#38;AWSAccessKeyId=1ZNXWY0K2A9VJT960A02&#38;Operation=ListLookup&#38;ListType=WishList&#38;ListId=33PA3Q33W2G6P&#38;ResponseGroup=Medium&#38;Style=http://cubanlinks.org/wishlist.xsl&#38;ContentType=text/html"></script></textarea>

    <p>That&#8217;s it. Just in time for the holidays!</p>
