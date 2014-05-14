# Hexo Site Boilerplate

**Note**: this boilerplate is currently under active development and may contain incomplete templates.

[Hexo](https://github.com/tommy351/hexo) boilerplate. Fast syntax using Jade and indented .sass with support for Coffeescript (or JS). Content from flat files, markdown or html and configuration as YAML.Features asset optimization and deployment. If you need to get a site with some custom design out the door **FAST** then this is your best starting point.

It's optimized to deploy:
- a **single** page site
- a **mini** five page site (to-do)
- or a **big** site with one or more category structures (could be a blog, news, articles, etc) and optionally tags (to-do)

> Modular, organized code structure. Style without too much.

### Mixins
Grid based on [jeet](http://jeet.gs/). [Bourbon](http://bourbon.io/docs/), [Scut](http://davidtheclark.github.io/scut/), plus some custom mixins.

### Dependencies
You need [node.js](http://nodejs.org/download/), [hexo](https://github.com/tommy351/hexo), [bower](http://bower.io/), [ruby](https://www.ruby-lang.org/), [sass 3.3](http://sass-lang.com/install), and the [LiveReload browser extension](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions). 

Yeah, it's a lot of stuff, but maybe you already have node and ruby in which case the rest is easy to get running. Even if you don't it's not so bad. You should probably install ruby with [RVM](http://rvm.io). Once node-sass implements .sass support we can drop ruby and sass.

### Let's Get You Up and Running

The following will grab the project, install local dependencies and start the server so you can develop and preview changes with LiveReload.

```
git clone git@github.com:abstracthat/hexo-boilerplate.git
cd hexo-boilerplate
npm install
bower install
hexo s
```

**IMPORTANT Note** At the moment I'm waiting on .sass support to trickle up to node-sass from libsass. So that means if you are messing with styles (and you probably should), you will need to also run either a GUI thing like CodeKit or Prepros, or you should use Sass watch from your terminal in the root of the project directory.

```
sass -w themes/jade/source/stylesheets/_sass/style.sass:themes/jade/source/stylesheets/style.css
```

### Generate Your Static Site
To [generate](http://hexo.io/docs/generating.html) static files and [optimize](https://github.com/abstracthat/hexo-generator-optimize) (concat/css-min/uglifyJS/image-min/htmlmin/gzip)...

```
hexo optimize
## or use the alias
hexo o
```

### Even Better: Generate, Optimize, Deploy with 6 letters
To generate static files, optimize, and [deploy](http://hexo.io/docs/deployment.html) (rsync/ssh, github pages, heroku, etc.) based on project config settings.

```
hexo optimize -d
## or use the alias
hexo od
````

### Useful Hexo Template Helpers
- Hexo helpers: http://zespia.tw/hexo/docs/helpers.html
- Hexo variables: http://hexo.io/docs/variables.html