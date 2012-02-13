---
layout: post
title: Getting JSON and Curl Enabled in PHP on Joyent Shared Servers
tags: [joyent, php, json, curl, devenv]
published: true
date: 2012-02-10T15:23:47.0
---
After starting at Twilio, I wanted to get a bunch of development environments set up where it would be easy to hack around with the API and put together demos quickly.  One of my hosts is Joyent, whom I love.  I've been using them since they were TextDrive and have never had any problems that weren't self-inflicted.  I have about a dozen domains set-up on their shared hosting service and got to work downloading the [Twilio PHP helper library][] and creating a simple app to use Twilio's [REST API][] to send a text message.

In order to get cracking with the PHP helper library, I needed to get some dependencies working on my shared host, specifically JSON and Curl. The Curl module is neccessary to make the HTTP calls to the Twilio REST API.  The JSON module allows us to deserialize the JSON data we get back from the API.  These modules are not enabled by default, but it's super easy to flip them on.

First, SSH to your host and go into the directory for the domain you'd like to edit. Go ahead an open up the PHP5 configuration file:

	[platt:~/domains/rabasa.com] crabasa$ vi etc/php5/php.ini

Next, look for these two lines and un-comment them by removing the ";":

	extension=curl.so
	extension=json.so

That's it!  It will take a few minutes for the shared instance of Apache to cycle and pick-up the changes, but once it does you're ready to start hitting web service APIs using PHP.

[twilio php helper library]: http://www.twilio.com/docs/libraries
[rest api]: http://www.twilio.com/docs/api/rest

