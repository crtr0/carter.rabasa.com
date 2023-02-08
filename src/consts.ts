// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'CarterRabasa.com';
export const SITE_DESCRIPTION = 'Welcome to the website for Carter Rabasa';

export function buildParams(post) {
    let tokens = post.slug.split("-");
    //console.log(tokens);
    let year = tokens.shift();
    let month = tokens.shift();
    let day = tokens.shift();
    let slug = tokens.join("-");
    //console.log(year, month, day, slug);
    return {
      params: { year, month, day, slug },
      props: post,
    };
  }