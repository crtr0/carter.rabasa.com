---
layout: default
title: Home
---

<script src="http://widgets.twimg.com/j/2/widget.js"></script>
<script>
new TWTR.Widget({
  version: 2,
  type: 'profile',
  rpp: 6,
  interval: 30000,
  width: 'auto',
  height: 500,
  theme: {
    shell: {
      background: '#333333',
      color: '#9cc8e6'
    },
    tweets: {
      background: '#e3e0e3',
      color: '#333333',
      links: '#3354e8'
    }
  },
  features: {
    scrollbar: false,
    loop: false,
    live: false,
    behavior: 'all'
  }
}).render().setUser('CarterRabasa').start();
</script>
