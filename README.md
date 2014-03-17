# Hexo Site Boilerplate

**Note**: this boilerplate is currently under active development and may contain incomplete templates.

[Hexo](https://github.com/tommy351/hexo) boilerplate using, Jade, Sass (with mixin libraries), Coffeescript, and optimized for deployment. If you need to get a site with some custom design out the door **FAST** then this is your best starting point. It's optimized to deploy anything from a single-page marketing site to a full-blown blog with categories, tags, and archives or anything in between.

Fast syntax with Jade and indented .sass with support for Coffeescript (or JS) and content pages as markdown + configuration as YAML. And LiveReload of course.

### Mixins
[Foundation](http://foundation.zurb.com/docs/components/grid.html) (mostly for grids), [Bourbon](http://bourbon.io/docs/), [Compass](http://compass-style.org/reference/compass/), [Scut](http://davidtheclark.github.io/scut/), [Color Schemer](https://github.com/Team-Sass/color-schemer), plus some custom variables and mixins.

### Dependencies
You need [node.js](http://nodejs.org/download/), [hexo](https://github.com/tommy351/hexo), [bower](http://bower.io/), [ruby](https://www.ruby-lang.org/), [sass 3.3](http://sass-lang.com/install), [Compass](http://compass-style.org/install/), and the [LiveReload browser extension](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions). 

Yeah, it's a lot of stuff, but maybe you already have node and ruby in which case the rest is easy to get running.

### How to Use

The following will grab the project, install local dependencies and start the server so you can develop and preview changes with LiveReload.

```
git clone git@github.com:abstracthat/hexo-boilerplate.git
cd hexo-boilerplate
npm install
cd themes/jade
bower install
cd ../..
hexo s
```

To [generate](http://hexo.io/docs/generating.html) static files and [optimize](https://github.com/abstracthat/hexo-generator-optimize) (concat/css-min/uglifyJS/image-min/htmlmin/gzip)...

```
hexo optimize
## or use the alias
hexo o
```

To generate static files, optimize, and [deploy](http://hexo.io/docs/deployment.html) (rsync/ssh, github pages, heroku, etc.) based on project config settings.

```
hexo optimize -d
## or use the alias
hexo od
````

### Useful...
- Hexo helpers: http://zespia.tw/hexo/docs/helpers.html
- Hexo variables: http://hexo.io/docs/variables.html