---
layout: post
title: Using WinJS.xhr to POST
tags: [win8, winjs, twilio, rest]
published: true
date: 2012-03-05T14:28:47.0
---
In the process of building a [Windows 8][] [Twilio][] app, I ran head first into an issue using [WinJS.xhr][] to send POST requests.  The official documentation is pretty thin, so I thought I'd write-up how to accomplish this here.

Using WinJS.xhr in general is quite nice.  It abstracts away all the nonesense of [XMLHttpRequest][] and provides a simple interface that uses [Promises][] to handle the asynchronous responses.  Here's a simple example that uses the Twilio REST API to retrieve a list of SMS messages from a user's account:

	WinJS.xhr({
	  user: accountSid, password: authKey, 
	  url: "https://api.twilio.com/2010-04-01/Accounts/" + accountSid + "/SMS/Messages.json"
	}).then(
	  function (success) {
	    console.log(JSON.parse(success.responseText));
	  },
	  function (error) {
	    console.log(JSON.parse(error.responseText));
	  }
	);

Obviously, the example would be much shorter if I wasn't using HTTP BASIC auth and had defined some named functions for the callback.  But hey, pretty simple!  Anyway, what if you want to do a POST?  We'll here's what *won't* work:

	WinJS.xhr({
	  type: "post", user: accountSid, password: authKey, 
	  url: "https://api.twilio.com/2010-04-01/Accounts/" + accountSid + "/Calls.json",
	  data: dataString
	}).then(success, error);

You'll notice I defined `type: "post"` to indicate that I want to POST.  But, it turns out this is not enough.  The answer to getting this to work is to manually set the response header.  Here's some code that *does* work:

	WinJS.xhr({
	  type: "post", user: accountSid, password: authKey, 
	  url: "https://api.twilio.com/2010-04-01/Accounts/" + accountSid + "/Calls.json",
	  headers: { "Content-type": "application/x-www-form-urlencoded" },
	  data: dataStr
        }).then(success, error);

That's it.  Just make sure to set:

	headers: { "Content-type": "application/x-www-form-urlencoded" }

..and you're good to go!

[windows 8]: http://dev.windows.com
[twilio]: http://twilio.com/api
[winjs.xhr]: http://msdn.microsoft.com/en-us/library/windows/apps/br229787.aspx
[xmlhttprequest]: https://developer.mozilla.org/en/XMLHttpRequest
[promises]: http://msdn.microsoft.com/en-us/library/windows/apps/hh464930.aspx
 
