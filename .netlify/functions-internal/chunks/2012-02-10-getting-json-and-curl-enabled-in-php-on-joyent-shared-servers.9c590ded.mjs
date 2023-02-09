import { k as createVNode, F as Fragment } from './astro.15e84d49.mjs';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'html-escaper';
import 'string-width';

const html = "<p>After starting at Twilio, I wanted to get a bunch of development environments set up where it would be easy to hack around with the API and put together demos quickly. One of my hosts is <a href=\"http://www.joyentcloud.com\">Joyent</a>, whom I love. I’ve been using them since they were TextDrive and have never had any problems that weren’t self-inflicted. I have about a dozen domains set-up on their shared hosting service and got to work downloading the <a href=\"http://www.twilio.com/docs/libraries\">Twilio PHP helper library</a> and creating a simple app to use Twilio’s <a href=\"http://www.twilio.com/docs/api/rest\">REST API</a> to send a text message.</p>\n<p>This is the point at which my productivity came to a screeching halt and I confronted the dreaded <a href=\"http://drupal.org/node/158043\">white screen of death</a>. PHP was (silently) telling me that something was wrong. In order to get back on track, I needed to configure PHP to show the errors it was encountering. Luckily, this was pretty simple. I just logged-in to my host and tracked down the PHP initialization file for the domain I was working with.</p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #0d1117; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #c9d1d9\">[platt:~] crabasa$ cd domains/rabasa.com</span></span>\n<span class=\"line\"><span style=\"color: #c9d1d9\">[platt:~/domains/rabasa.com] crabasa$ vi etc/php5/php.ini</span></span></code></pre>\n<p>Then I looked for the property that control the display of errors and made sure it was set to “On”:</p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #0d1117; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #c9d1d9\">display_errors = On</span></span></code></pre>\n<p>Awesome, now it’s time to hit “reload” and see what’s going on. PHP is quick to tell me:</p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #0d1117; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #c9d1d9\">Fatal error: Call to undefined function curl_init() in /users/home/crabasa/software/twilio-php/Services/Twilio/TinyHttp.php on line 61</span></span></code></pre>\n<p>It seems that the PHP helper library has dependencies, in this case cURL. The <a href=\"http://php.net/manual/en/book.curl.php\">cURL module</a> is neccessary to make the HTTP calls to the Twilio REST API. This is an easy fix, I just need to edit my php.ini and un-comment the line that includes the cURL extension:</p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #0d1117; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #c9d1d9\">extension=curl.so</span></span></code></pre>\n<p>Woo hoo! I’m home free, right? Wrong:</p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #0d1117; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #c9d1d9\">Fatal error: Call to undefined function json_decode() in /users/home/crabasa/software/twilio-php/Services/Twilio.php on line 148</span></span></code></pre>\n<p>Looks like there’s another dependency, this time on JSON. The <a href=\"http://php.net/manual/en/book.json.php\">JSON module</a> allows us to deserialize the JSON data we get back from the API. Let’s include the JSON extension as well:</p>\n<pre is:raw=\"\" class=\"astro-code\" style=\"background-color: #0d1117; overflow-x: auto;\"><code><span class=\"line\"><span style=\"color: #c9d1d9\">extension=json.so</span></span></code></pre>\n<p>That’s it! With a couple of tweaks I am now ready to start hitting web service APIs using PHP. W00t!</p>";

				const frontmatter = {"title":"How to Enable JSON and cURL in PHP on Joyent Shared Servers","tags":["joyent","php","json","curl","devenv"],"published":true,"pubDate":"Feb 02 2012"};
				const file = "/Users/crabasa/Code/carter.rabasa.com/src/content/blog/2012-02-10-getting-json-and-curl-enabled-in-php-on-joyent-shared-servers.md";
				const url = undefined;
				function rawContent() {
					return "\nAfter starting at Twilio, I wanted to get a bunch of development environments set up where it would be easy to hack around with the API and put together demos quickly. One of my hosts is [Joyent][], whom I love. I've been using them since they were TextDrive and have never had any problems that weren't self-inflicted. I have about a dozen domains set-up on their shared hosting service and got to work downloading the [Twilio PHP helper library][] and creating a simple app to use Twilio's [REST API][] to send a text message.\n\nThis is the point at which my productivity came to a screeching halt and I confronted the dreaded [white screen of death][]. PHP was (silently) telling me that something was wrong. In order to get back on track, I needed to configure PHP to show the errors it was encountering. Luckily, this was pretty simple. I just logged-in to my host and tracked down the PHP initialization file for the domain I was working with.\n\n    [platt:~] crabasa$ cd domains/rabasa.com\n    [platt:~/domains/rabasa.com] crabasa$ vi etc/php5/php.ini\n\nThen I looked for the property that control the display of errors and made sure it was set to \"On\":\n\n    display_errors = On\n\nAwesome, now it's time to hit \"reload\" and see what's going on. PHP is quick to tell me:\n\n    Fatal error: Call to undefined function curl_init() in /users/home/crabasa/software/twilio-php/Services/Twilio/TinyHttp.php on line 61\n\nIt seems that the PHP helper library has dependencies, in this case cURL. The [cURL module][] is neccessary to make the HTTP calls to the Twilio REST API. This is an easy fix, I just need to edit my php.ini and un-comment the line that includes the cURL extension:\n\n    extension=curl.so\n\nWoo hoo! I'm home free, right? Wrong:\n\n    Fatal error: Call to undefined function json_decode() in /users/home/crabasa/software/twilio-php/Services/Twilio.php on line 148\n\nLooks like there's another dependency, this time on JSON. The [JSON module][] allows us to deserialize the JSON data we get back from the API. Let's include the JSON extension as well:\n\n    extension=json.so\n\nThat's it! With a couple of tweaks I am now ready to start hitting web service APIs using PHP. W00t!\n\n[twilio php helper library]: http://www.twilio.com/docs/libraries\n[rest api]: http://www.twilio.com/docs/api/rest\n[curl module]: http://php.net/manual/en/book.curl.php\n[json module]: http://php.net/manual/en/book.json.php\n[joyent]: http://www.joyentcloud.com\n[white screen of death]: http://drupal.org/node/158043\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
