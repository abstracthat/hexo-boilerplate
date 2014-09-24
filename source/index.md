layout: page
article_feature: true
title: Introducing The Easiest Way to Launch a Website
subheading: The Quickest Way to Go From An Idea To An Optimized & Deployed Site
video: s39mNwFuQDQ
button: Check It Out on GitHub
button_link: http://github.com/abstracthat/hexo-boilerplate/
social:
  # use all lowercase, options are: twitter, facebook, pinterest, tumblr, googleplus
  - facebook
  - twitter
---

Using the Node static site generator, [Hexo](https://github.com/tommy351/hexo), this boilerplate gets your site off the ground and onto the web fast!

<div class="note"><p>**Note**: this boilerplate is currently under active development and may contain incomplete templates.</p></div>

Terse syntax using [Jade](jade-lang.com/reference/) templates and [Stylus](http://learnboost.github.io/stylus/) with support for [Coffeescript](http://coffeescript.org/) (or plain JS). Content from flat files, markdown or html and configuration as YAML. One command to generate, optimize files, and deploy.

## Site Types
- a **single** page site with terms of use and privacy pages
- a **mini** five page site
- or a **big** site with one or more category structures (could be Blog, News, Articles, Topic One, Topic Two, etc) and optional tags.

### Mixins
Grid based on [jeet](http://jeet.gs/). We have Root's [Axis CSS Library](http://roots.cx/axis) for lots of fun defaults and shortcuts. Normalize, typography, gradients, transitions, animations, buttons, forms, lists, positioning, and more.

```
html
  gradient: white - 11% white - 17%
  background-attachment: fixed

body
  center: desktop-cutoff

[role="main"]
  background: content-bg-color
  center(desktop-cutoff, pad: 1rem)

article
  padding-bottom: 2rem
  +from(3)
    column(4/5, offset: 1/10)
  +desktop()
    column(2/3, offset: 1/6)
```

[Rupture](https://github.com/jenius/rupture) for breakpoints.

```
+mobile()
+tablet()
+desktop()
+from(mobile-cutoff)
+to(700px)
```

### Dependencies
You need [node.js](http://nodejs.org/download/), [hexo](https://github.com/tommy351/hexo), and the [LiveReload browser extension](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions).

1. Install Node http://nodejs.org/download/ On a mac you can just run `brew install node`.
1. Install Hexo with NPM `npm install -g hexo`
1. Install LiveReload browser extension: http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions

### Let's Get You Up and Running
The following will grab the project, install local dependencies and start the server so you can develop and preview changes with LiveReload.

```
git clone git@github.com:abstracthat/hexo-boilerplate.git
cd hexo-boilerplate
npm install
hexo s
```

### Generate Your Static Site
To [generate](http://hexo.io/docs/generating.html) static files and [optimize](https://github.com/abstracthat/hexo-generator-optimize) (concat/css-min/uglifyJS/image-min/htmlmin/gzip)...

```
hexo optimize
# or use the alias
hexo o
# to just generate without optimizing
hexo generate
# or..
hexo g
```

### Generate, Optimize, & Deploy With 6 Letters
To generate static files, optimize, and [deploy](http://hexo.io/docs/deployment.html) (rsync/ssh, github pages, heroku, etc.) based on project config settings.

```
hexo optimize -d
## or the shortcut...
hexo od
```

## Contributing Templates
Pull requests are welcome.

### Useful Hexo Template Helpers
- Hexo helpers: http://zespia.tw/hexo/docs/helpers.html
- Hexo variables: http://hexo.io/docs/variables.html

## Quotes

Want to quote someone? Try a blockquote. Unfortunately you have to add the semantically correct `<cite>` as html. Don't forget to close the tag `</cite>`.

> It is spectacular. From about five minutes in, when we knew for sure that we were going to have the weather to go, the smile on my face just got bigger and bigger, and I was just beaming through the whole launch. I mean, it is just an amazing ride.
><cite>[Chris Hadfield](http://www.brainyquote.com/quotes/keywords/launch.html#mbkKeBWCGfDhH1Zd.99)</cite>

***

Horizontal rules are easy in markdown and sometimes handy for breaking things up.

## Images

Markdown can also contain images. Here's a big pretty one.

![Launch](/assets/launch.jpg "Launch it!")

And that's about all there is to it. Read the [Documentation](/documentation) to learn more.
