import { k as createVNode, F as Fragment } from './astro.15e84d49.mjs';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'html-escaper';
import 'string-width';

const html = "<blockquote class=\"twitter-tweet\" data-lang=\"en\"><p lang=\"en\" dir=\"ltr\">Today I &#x3C;Say>Goodbye&#x3C;/Say> to <a href=\"https://twitter.com/twilio\">@Twilio</a>. It's been an honor to work with such 💯 people and to serve developers. Keep building awesome stuff! 🙌</p>— Carter Rabasa (@crtr0) <a href=\"https://twitter.com/crtr0/status/877915429473198081\">June 22, 2017</a></blockquote>\n<script async src=\"//platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>";

				const frontmatter = {"title":"Leaving Twilio","type":"tweet","tags":["twilio","evangelism","product"],"pubDate":"Jun 22 2017"};
				const file = "/Users/crabasa/Code/carter.rabasa.com/src/content/blog/2017-06-22-leaving-twilio.md";
				const url = undefined;
				function rawContent() {
					return "\n<blockquote class=\"twitter-tweet\" data-lang=\"en\"><p lang=\"en\" dir=\"ltr\">Today I &lt;Say&gt;Goodbye&lt;/Say&gt; to <a href=\"https://twitter.com/twilio\">@Twilio</a>. It&#39;s been an honor to work with such 💯 people and to serve developers. Keep building awesome stuff! 🙌</p>&mdash; Carter Rabasa (@crtr0) <a href=\"https://twitter.com/crtr0/status/877915429473198081\">June 22, 2017</a></blockquote>\n<script async src=\"//platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n";
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
