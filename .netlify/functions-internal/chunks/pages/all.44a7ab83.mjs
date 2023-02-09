import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, s as spreadAttributes, d as renderSlot, e as renderComponent, f as renderHead, g as createCollectionToGlobResultMap, h as createGetCollection } from '../astro.15e84d49.mjs';
/* empty css                           */import rss from '@astrojs/rss';
/* empty css                               *//* empty css                               */
const $$Astro$7 = createAstro("https://carter.rabasa.com");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/placeholder-social.jpg" } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="icon" type="image/svg+xml" href="/favicon.ico">
<meta name="generator"${addAttribute(Astro2.generator, "content")}>

<!-- Canonical URL -->
<link rel="canonical"${addAttribute(canonicalURL, "href")}>

<!-- Primary Meta Tags -->
<title>${title}</title>
<meta name="title"${addAttribute(title, "content")}>
<meta name="description"${addAttribute(description, "content")}>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url"${addAttribute(Astro2.url, "content")}>
<meta property="og:title"${addAttribute(title, "content")}>
<meta property="og:description"${addAttribute(description, "content")}>
<meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}>

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url"${addAttribute(Astro2.url, "content")}>
<meta property="twitter:title"${addAttribute(title, "content")}>
<meta property="twitter:description"${addAttribute(description, "content")}>
<meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "/Users/crabasa/Code/carter.rabasa.com/src/components/BaseHead.astro");

const $$Astro$6 = createAstro("https://carter.rabasa.com");
const $$HeaderLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")}${addAttribute([[className, { active: isActive }], "astro-EIMMU3LG"], "class:list")}${spreadAttributes(props)}>
	${renderSlot($$result, $$slots["default"])}
</a>`;
}, "/Users/crabasa/Code/carter.rabasa.com/src/components/HeaderLink.astro");

const SITE_TITLE = "CarterRabasa.com";
const SITE_DESCRIPTION = "Welcome to the website for Carter Rabasa";
function buildParams(post) {
  let tokens = post.slug.split("-");
  let year = tokens.shift();
  let month = tokens.shift();
  let day = tokens.shift();
  let slug = tokens.join("-");
  return {
    params: { year, month, day, slug },
    props: post
  };
}

const $$Astro$5 = createAstro("https://carter.rabasa.com");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<header class="astro-3EF6KSR2">
  <h2 class="astro-3EF6KSR2">
    ${SITE_TITLE}
  </h2>
  <nav class="astro-3EF6KSR2">
    ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/", "class": "astro-3EF6KSR2" }, { "default": ($$result2) => renderTemplate`Home` })}
    ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/archive", "class": "astro-3EF6KSR2" }, { "default": ($$result2) => renderTemplate`Archive` })}
  </nav>
</header>`;
}, "/Users/crabasa/Code/carter.rabasa.com/src/components/Header.astro");

const $$Astro$4 = createAstro("https://carter.rabasa.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = new Date();
  return renderTemplate`${maybeRenderHead($$result)}<footer class="astro-SZ7XMLTE">
  &copy; ${today.getFullYear()} Carter Michael Rabasa. All rights reserved.
</footer>`;
}, "/Users/crabasa/Code/carter.rabasa.com/src/components/Footer.astro");

const $$Astro$3 = createAstro("https://carter.rabasa.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`<html lang="en">
  <head>
    ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}
  ${renderHead($$result)}</head>
  <body>
    ${renderComponent($$result, "Header", $$Header, { "title": SITE_TITLE })}
    <main>
      <h1>Hi there 👋</h1>
      <p>Some words</p>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </main>
    ${renderComponent($$result, "Footer", $$Footer, {})}
  </body></html>`;
}, "/Users/crabasa/Code/carter.rabasa.com/src/pages/index.astro");

const $$file$2 = "/Users/crabasa/Code/carter.rabasa.com/src/pages/index.astro";
const $$url$2 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

// astro-head-inject

const contentDir = '/src/content/';

const entryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/2012-01-09-new-year-fresh-start.md": () => import('../2012-01-09-new-year-fresh-start.22f351d2.mjs'),"/src/content/blog/2012-01-24-planet-twilion.md": () => import('../2012-01-24-planet-twilion.573546d6.mjs'),"/src/content/blog/2012-02-10-getting-json-and-curl-enabled-in-php-on-joyent-shared-servers.md": () => import('../2012-02-10-getting-json-and-curl-enabled-in-php-on-joyent-shared-servers.88ca2c78.mjs'),"/src/content/blog/2012-02-21-install-rvm-and-rails-on-mac-os-x-lion.md": () => import('../2012-02-21-install-rvm-and-rails-on-mac-os-x-lion.204494aa.mjs'),"/src/content/blog/2012-03-05-using-winjs-xhr-to-post.md": () => import('../2012-03-05-using-winjs-xhr-to-post.e79d3f05.mjs'),"/src/content/blog/2012-07-17-how-to-balance-hustling-and-family.md": () => import('../2012-07-17-how-to-balance-hustling-and-family.33e87756.mjs'),"/src/content/blog/2015-03-11-serving-developers-in-a-new-way.md": () => import('../2015-03-11-serving-developers-in-a-new-way.c04e0f60.mjs'),"/src/content/blog/2017-06-22-leaving-twilio.md": () => import('../2017-06-22-leaving-twilio.e608e094.mjs')

});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: entryGlob,
	contentDir,
});

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog/2012-01-09-new-year-fresh-start.md": () => import('../2012-01-09-new-year-fresh-start.fe608cef.mjs'),"/src/content/blog/2012-01-24-planet-twilion.md": () => import('../2012-01-24-planet-twilion.684216e6.mjs'),"/src/content/blog/2012-02-10-getting-json-and-curl-enabled-in-php-on-joyent-shared-servers.md": () => import('../2012-02-10-getting-json-and-curl-enabled-in-php-on-joyent-shared-servers.dda90929.mjs'),"/src/content/blog/2012-02-21-install-rvm-and-rails-on-mac-os-x-lion.md": () => import('../2012-02-21-install-rvm-and-rails-on-mac-os-x-lion.5c65f20c.mjs'),"/src/content/blog/2012-03-05-using-winjs-xhr-to-post.md": () => import('../2012-03-05-using-winjs-xhr-to-post.225be505.mjs'),"/src/content/blog/2012-07-17-how-to-balance-hustling-and-family.md": () => import('../2012-07-17-how-to-balance-hustling-and-family.c376f8fd.mjs'),"/src/content/blog/2015-03-11-serving-developers-in-a-new-way.md": () => import('../2015-03-11-serving-developers-in-a-new-way.7f95a903.mjs'),"/src/content/blog/2017-06-22-leaving-twilio.md": () => import('../2017-06-22-leaving-twilio.3dc12502.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	collectionToEntryMap,
	collectionToRenderEntryMap,
});

const $$Astro$2 = createAstro("https://carter.rabasa.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await getCollection("blog")).map(buildParams).sort(
    (a, b) => a.props.data.pubDate.valueOf() - b.props.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en" class="astro-37X2UNNO">
  <head>
    ${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "class": "astro-37X2UNNO" })}
    
  ${renderHead($$result)}</head>
  <body class="astro-37X2UNNO">
    ${renderComponent($$result, "Header", $$Header, { "class": "astro-37X2UNNO" })}
    <main class="astro-37X2UNNO">
      <section class="astro-37X2UNNO">
        <ul class="astro-37X2UNNO">
          ${posts.map((post) => renderTemplate`<li class="astro-37X2UNNO">
                <time${addAttribute(post.props.data.pubDate.toISOString(), "datetime")} class="astro-37X2UNNO">
                  ${post.props.data.pubDate.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })}
                </time>
                <a${addAttribute(`/${post.params.year}/${post.params.month}/${post.params.day}/${post.params.slug}/`, "href")} class="astro-37X2UNNO">
                  ${post.props.data.title}
                </a>
              </li>`)}
        </ul>
      </section>
    </main>
    ${renderComponent($$result, "Footer", $$Footer, { "class": "astro-37X2UNNO" })}
  </body></html>`;
}, "/Users/crabasa/Code/carter.rabasa.com/src/pages/archive/index.astro");

const $$file$1 = "/Users/crabasa/Code/carter.rabasa.com/src/pages/archive/index.astro";
const $$url$1 = "/archive";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

async function get(context) {
  const posts = await getCollection("blog");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
    })),
  });
}

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://carter.rabasa.com");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  return renderTemplate`<html lang="en" class="astro-BVZIHDZO">
	<head>
		${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "class": "astro-BVZIHDZO" })}
		
	${renderHead($$result)}</head>

	<body class="astro-BVZIHDZO">
		${renderComponent($$result, "Header", $$Header, { "class": "astro-BVZIHDZO" })}
		<main class="astro-BVZIHDZO">
			<article class="astro-BVZIHDZO">
				${heroImage && renderTemplate`<img${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(heroImage, "src")} alt="" class="astro-BVZIHDZO">`}
				<h1 class="title astro-BVZIHDZO">${title}</h1>
				${pubDate && renderTemplate`<time class="astro-BVZIHDZO">${pubDate}</time>`}
				${updatedDate && renderTemplate`<div class="astro-BVZIHDZO">
							Last updated on <time class="astro-BVZIHDZO">${updatedDate}</time>
						</div>`}
				<hr class="astro-BVZIHDZO">
				${renderSlot($$result, $$slots["default"])}
			</article>
		</main>
		${renderComponent($$result, "Footer", $$Footer, { "class": "astro-BVZIHDZO" })}
	</body></html>`;
}, "/Users/crabasa/Code/carter.rabasa.com/src/layouts/BlogPost.astro");

const $$Astro = createAstro("https://carter.rabasa.com");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map(buildParams);
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<h1>${post.data.title}</h1>${renderComponent($$result2, "Content", Content, {})}` })}`;
}, "/Users/crabasa/Code/carter.rabasa.com/src/pages/[year]/[month]/[day]/[...slug].astro");

const $$file = "/Users/crabasa/Code/carter.rabasa.com/src/pages/[year]/[month]/[day]/[...slug].astro";
const $$url = "/[year]/[month]/[day]/[...slug]";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b, _page3 as c };
