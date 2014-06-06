title: Stylus CSS Super-Hero
layout: page
description: This is the meta description for the page that will be picked up by search engines and displayed in results. You get roughly 160 characters.
date: 2014-04-06 13:53:31
category: Documentation
tags: 
  - Stylus
---
 Stylus is a revolutionary new language, providing an efficient, dynamic, and expressive way to generate CSS. Supporting both an indented syntax and regular CSS style.
<!--more-->

## Installation

```bash
$ npm install stylus -g
```

### Example

```
border-radius()
  -webkit-border-radius: arguments
  -moz-border-radius: arguments
  border-radius: arguments

body a
  font: 12px/1.4 "Lucida Grande", Arial, sans-serif
  background: black
  color: #ccc

form input
  padding: 5px
  border: 1px solid
  border-radius: 5px
```

compiles to:

```css
body a {
  font: 12px/1.4 "Lucida Grande", Arial, sans-serif;
  background: #000;
  color: #ccc;
}
form input {
  padding: 5px;
  border: 1px solid;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}
```

the following is equivalent to the indented version of Stylus source, using the CSS syntax instead:

```
border-radius() {
  -webkit-border-radius: arguments
  -moz-border-radius: arguments
  border-radius: arguments
}

body a {
  font: 12px/1.4 "Lucida Grande", Arial, sans-serif;
  background: black;
  color: #ccc;
}

form input {
  padding: 5px;
  border: 1px solid;
  border-radius: 5px;
}
```

### Features

 Stylus has _many_ features.  Detailed documentation links follow:

  - [css syntax](docs/css-style.md) support
  - [mixins](docs/mixins.md)
  - [keyword arguments](docs/kwargs.md)
  - [variables](docs/variables.md)
  - [interpolation](docs/interpolation.md)
  - arithmetic, logical, and equality [operators](docs/operators.md)
  - [importing](docs/import.md) of other stylus sheets
  - [introspection api](docs/introspection.md)
  - type coercion
  - [@extend](docs/extend.md)
  - [conditionals](docs/conditionals.md)
  - [iteration](docs/iteration.md)
  - nested [selectors](docs/selectors.md)
  - parent reference
  - in-language [functions](docs/functions.md)
  - [variable arguments](docs/vargs.md)
  - built-in [functions](docs/bifs.md) (over 60)
  - optional [image inlining](docs/functions.url.md)
  - optional compression
  - JavaScript [API](docs/js.md)
  - extremely terse syntax
  - stylus [executable](docs/executable.md)
  - [error reporting](docs/error-reporting.md)
  - single-line and multi-line [comments](docs/comments.md)
  - css [literal](docs/literal.md)
  - character [escaping](docs/escape.md)
  - [@keyframes](docs/keyframes.md) support & expansion
  - [@font-face](docs/font-face.md) support
  - [@media](docs/media.md) support
  - Connect [Middleware](docs/middleware.md)
  - TextMate [bundle](docs/textmate.md)
  - Coda/SubEtha Edit [Syntax mode](https://github.com/atljeremy/Stylus.mode)
  - gedit [language-spec](docs/gedit.md)
  - VIM [Syntax](https://github.com/wavded/vim-stylus)
  - [Firebug extension](docs/firebug.md)
  - heroku [web service](http://styl.heroku.com) for compiling stylus
  - [style guide](https://github.com/lepture/ganam) parser and generator
  - transparent vendor-specific function expansion