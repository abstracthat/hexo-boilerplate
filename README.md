# Hexo Site Boilerplate

**Note**: this [Hexo](https://github.com/tommy351/hexo) boilerplate is currently under active development and may contain incomplete templates.

- Fast syntax using Jade & Stylus with support for Coffeescript & plain JS
- Content as flat files: markdown or HTML
- Configure sites with minimal YAML
- One command to generate, optimize, and deploy

> Modular, organized code structure. Style without too much.

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

```
# install node on mac with brew
brew install node
```

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

### Even Better: Generate, Optimize, Deploy with 6 letters
To generate static files, optimize, and [deploy](http://hexo.io/docs/deployment.html) (rsync/ssh, github pages, heroku, etc.) based on project config settings.

```
hexo optimize -d
## or the shortcut...
hexo od
````

## Contributing Templates
Pull requests are welcome.

### Useful Hexo Template Helpers
- Hexo helpers: http://zespia.tw/hexo/docs/helpers.html
- Hexo variables: http://hexo.io/docs/variables.html
