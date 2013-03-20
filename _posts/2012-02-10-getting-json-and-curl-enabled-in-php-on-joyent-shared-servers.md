---
layout: post
title: How to Enable JSON and cURL in PHP on Joyent Shared Servers
tags: [joyent, php, json, curl, devenv]
published: true
date: 2012-02-10T15:23:47.0
---
After starting at Twilio, I wanted to get a bunch of development environments set up where it would be easy to hack around with the API and put together demos quickly.  One of my hosts is [Joyent][], whom I love.  I've been using them since they were TextDrive and have never had any problems that weren't self-inflicted.  I have about a dozen domains set-up on their shared hosting service and got to work downloading the [Twilio PHP helper library][] and creating a simple app to use Twilio's [REST API][] to send a text message.

This is the point at which my productivity came to a screeching halt and I confronted the dreaded [white screen of death][].  PHP was (silently) telling me that something was wrong. In order to get back on track, I needed to configure PHP to show the errors it was encountering.  Luckily, this was pretty simple. I just logged-in to my host and tracked down the PHP initialization file for the domain I was working with.

	[platt:~] crabasa$ cd domains/rabasa.com
	[platt:~/domains/rabasa.com] crabasa$ vi etc/php5/php.ini

Then I looked for the property that control the display of errors and made sure it was set to "On":

	display_errors = On

Awesome, now it's time to hit "reload" and see what's going on.  PHP is quick to tell me:

	Fatal error: Call to undefined function curl_init() in /users/home/crabasa/software/twilio-php/Services/Twilio/TinyHttp.php on line 61

It seems that the PHP helper library has dependencies, in this case cURL. The [cURL module][] is neccessary to make the HTTP calls to the Twilio REST API. This is an easy fix, I just need to edit my php.ini and un-comment the line that includes the cURL extension:

	extension=curl.so

Woo hoo!  I'm home free, right?  Wrong:

	Fatal error: Call to undefined function json_decode() in /users/home/crabasa/software/twilio-php/Services/Twilio.php on line 148

Looks like there's another dependency, this time on JSON.  The [JSON module][] allows us to deserialize the JSON data we get back from the API.  Let's include the JSON extension as well:

	extension=json.so

That's it!  With a couple of tweaks I am now ready to start hitting web service APIs using PHP. W00t!

[twilio php helper library]: http://www.twilio.com/docs/libraries
[rest api]: http://www.twilio.com/docs/api/rest
[curl module]: http://php.net/manual/en/book.curl.php
[json module]: http://php.net/manual/en/book.json.php
[joyent]: http://www.joyentcloud.com
[white screen of death]: http://drupal.org/node/158043
