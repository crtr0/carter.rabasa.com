--- 
wordpress_id: 2307
layout: post
title: "Twitter2FF: Crowdsourcing Speed and Brains"
date: "2008-12-14T22:27:00+00:00"
tags: 
- Uncategorized
wordpress_slug: twitter2ff-crowdsourcing-speed-and-brains
wordpress_url: http://cubanlinks.org/2008/12/14/twitter2ff-crowdsourcing-speed-and-brains
---
&raquo; Cross-posted from [http://cubanlinks.org/2008/12/14/twitter2ff-crowdsourcing-speed-and-brains](http://cubanlinks.org/2008/12/14/twitter2ff-crowdsourcing-speed-and-brains) &laquo;

There are two glaring problems with <a href="https://twitter2ff.appspot.com">Twitter2FF</a>:
	<ol>
	<li>It relies on Twitter usernames to match FriendFeed nicknames in order to locate un-subscribed FF&#8217;ers</li>
		<li>It makes a ton of real-time <span class="caps">API</span> calls, which can slow performance or kill the app (if Google slaps my wrist)</li>
	</ol>


	<p>So, I implemented some simple <a href="http://code.google.com/appengine/docs/datastore">Datastore</a> routines to cache some data.  <strong>Nothing personally identifying</strong>, just information I use when rendering results (like usernames, profile photo urls, etc). Here are the class definitions:</p>


<pre>
class TwitterUser(db.Model):
  username = db.StringProperty(required=True)
  name = db.StringProperty()
  image_url = db.StringProperty()
  date = db.DateTimeProperty(auto_now_add=True)

class FFUser(db.Model):
  nickname = db.StringProperty(required=True)
  name = db.StringProperty()
  twitter_user = db.ReferenceProperty(TwitterUser)
  date = db.DateTimeProperty(auto_now_add=True)
</pre>

	<p>You&#8217;ll notice that I link Twitter records to FF records with a ReferenceProperty in the FFUser model.  These links can occur (without the need for matching usernames) when a user is <span class="caps">ALREADY</span> subscribed to the same person on both services and the FF profile data provides an explicit link-back to the Twitter account.  As more and more people use Twitter2FF, more information is cached in the database, and this results in a faster experience for everyone (presuming there is a reasonable amount of overlap between friend lists).</p>


	<p>A wonderful side-effect of this process is to discover information about T-FF links, which can then benefit other Twitter2FF users.  I&#8217;ll give you an illustrative example:</p>


	<p><strong>User A:</strong> Follows <a href="http://twitter/dalmaer">dalmaer</a> and subscribes to <a href="http://friendfeed.com/dion">dion</a>.  When he syncs his contact with Twitter2FF, the relationship between these two accounts is persisted.</p>


	<p><strong>User B:</strong> Follows <a href="http://twitter/dalmaer">dalmaer</a>, but doesn&#8217;t know he&#8217;s on FF.  When he goes to sync his contacts, the relationship is pulled from the database (thanks to User A), and he is presented with the option of subscribing to <a href="http://friendfeed.com/dion">dion</a>!</p>


	<p>So, the more people who use <a href="https://twitter2ff.appspot.com">Twitter2FF</a>, the more information there is to better match Twitter and FriendFeed accounts.  Still not a &#8220;perfect&#8221; sync, but a step in the right direction!</p>
