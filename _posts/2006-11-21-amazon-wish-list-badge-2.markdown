--- 
wordpress_id: 740
layout: post
title: Amazon Wish List Badge
date: "2006-11-21T17:58:10+00:00"
tags: 
- Uncategorized
- amazon
- webservice
- code
wordpress_slug: amazon-wish-list-badge-2
wordpress_url: http://cubanlinks.org/2006/11/30/amazon-wish-list-badge
---
&raquo; Cross-posted from [http://cubanlinks.org/2006/11/30/amazon-wish-list-badge](http://cubanlinks.org/2006/11/30/amazon-wish-list-badge) &laquo;

<p>Remember those Amazon Wish Lists that people used to set-up in the hopes that their friends or family would notice their pressing desire for the latest Red Hot Chili Peppers CD and (in the event of a birthday or Christmas) decide to hook them up? The problem was the wants were hard to publicize. Amazon provided the ability to email your Wish List to people, but how crass is that?</p>


<p><a href="http://cubanlinks.org/blog/articles/2005/11/09/amazon-wish-list-badge">A year ago</a> I wrote some code to take your Wish List and display it on your website. I&#8217;ve made a couple quick tweaks to make it <strong>even easier</strong> for you to add a Wish List badge to your site:</p>


<p>1. <a href="http://amazon.com/gp/registry/search.html?ie=UTF8&#38;type=wishlist">Find your Wish List ID</a></p>


<p>2. Add the following code to your website:</p>


<code>
&lt;style&gt;
ul.awslist { list-style-type: none; }
ul.awslist li { display: inline }
&lt;/style&gt;
&lt;script src="http://cubanlinks.org/wishlist.php?wishListId=[YOUR WISHLIST ID]"&gt;
&lt;/script&gt;
</code>

<p>3. (Optional) Style your Wish List</p>


<p>The UL and LI elements of the Wish List are styled with the class <em>awslist</em>. You can style these elements any way you like to best fit your website.</p>


<p><span class="caps">ENJOY</span>!</p>
