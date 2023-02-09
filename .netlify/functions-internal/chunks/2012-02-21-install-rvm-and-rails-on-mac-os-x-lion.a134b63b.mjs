import { k as createVNode, F as Fragment } from './astro.15e84d49.mjs';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'html-escaper';
import 'string-width';

const html = "<p>You know that new-car smell a computer has when it’s just been unboxed and you’re booting it up for the first time? That smell always make me think: <em>it’s time to set-up development environments!</em></p>\n<p>Here’s a simple script I put together to install <a href=\"http://www.rubyonrails.org\">Ruby on Rails</a> on Mac OS X Lion based on instructions that Alain Beauvois <a href=\"http://stackoverflow.com/a/8464619\">posted</a> to Stack Overflow. It requires that you’ve already installed <a href=\"http://itunes.apple.com/fr/app/xcode/id448457090?mt=12\">Xcode</a>. Hope you find this helpful!</p>\n<script src=\"https://gist.github.com/1877914.js?file=install_rvm_rails.sh\"></script>";

				const frontmatter = {"title":"How to Install Rails on Mac OS X Lion","tags":["ruby","rails","macosx","rvm","devenv"],"published":true,"pubDate":"Feb 21 2012"};
				const file = "/Users/crabasa/Code/carter.rabasa.com/src/content/blog/2012-02-21-install-rvm-and-rails-on-mac-os-x-lion.md";
				const url = undefined;
				function rawContent() {
					return "\nYou know that new-car smell a computer has when it's just been unboxed and you're booting it up for the first time? That smell always make me think: _it's time to set-up development environments!_\n\nHere's a simple script I put together to install [Ruby on Rails][] on Mac OS X Lion based on instructions that Alain Beauvois [posted][] to Stack Overflow. It requires that you've already installed [Xcode][]. Hope you find this helpful!\n\n<script src=\"https://gist.github.com/1877914.js?file=install_rvm_rails.sh\"></script>\n\n[ruby on rails]: http://www.rubyonrails.org\n[posted]: http://stackoverflow.com/a/8464619\n[xcode]: http://itunes.apple.com/fr/app/xcode/id448457090?mt=12\n";
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
