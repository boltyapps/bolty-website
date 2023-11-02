// astro.config.mjs
import { defineConfig } from 'astro/config'
import fuse from 'astro-fuse'

export default defineConfig({
  integrations: [fuse()],
})
fuse({ keys: ['frontmatter.title'] });
fuse({
  basedOn: 'output',
  filter: path => /^\/blog\/g.test(path), 
});
fuse({
  extractContentFromHTML: 'article' ;
  extractContentFromHTML: $ => $('div#content') ;
})

fuse({
  keys: ['content', 'frontmatter.title'],
  basedOn: 'output',
  extractFrontmatterFromHTML: ($) => {
    // read that element value. $ is cheerio instance.
    const el = $('[data-frontmatter]')

    if (el.length) {
      return JSON.parse(el.first().val())
    }

    return { title: $('h1').first().text() }
  },
})