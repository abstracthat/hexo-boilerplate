title: Hexo Variables
layout: page
description: This is the meta description for the page that will be picked up by search engines and displayed in results. You get roughly 160 characters.
date: 2014-05-06 13:53:31
category: Documentation
image: /assets/hexo.png
tags:
  - Hexo
  - Jade
---
Hexo is an open-source Node.js based static site generator. It is a mature platform with an easily extendable infrastructure. Our boilerplate uses some custom JS helpers to render the structure the way we want it.
<!--more-->

### Global Variables

Variable Description

`site`
Sitewide information.

`page`
Page specific information and custom variables set in front-matter.

`config`
Site configuration

`theme`
Theme configuration. Inherits from site configuration.

`_` (single underscore)
[Lodash][1] library

`__` (double underscores)
Internationalization (i18n) utility. See below for detail.

`path`
Path of current page

`url`
Full URL of current page

&gt; Custom Variables
&gt;
&gt; You can also use front-matter in layouts just like writing posts!

### Site Variables

All of the following variables are [Data Model].

Variable Description

`site.posts`
All posts

`site.pages`
All pages

`site.categories`
All categories

`site.tags`
All tags

### Page Vairables

Article (post, page, …)

Variable Description

`page.title`
Article title

`page.date`
Article created date ([Moment.js][2] object)

`page.updated`
Article last updated date ([Moment.js][2] object)

`page.categories`
All categories of the article

`page.tags`
All tags of the article

`page.comments`
Comment enabled or not

`page.layout`
Layout name.

`page.content`
The full processed content of the article

`page.excerpt`
The processed excerpt of the article

`page.source`
The path of the source file

`page.full_source`
Full path of the source file

`page.path`
The URL of the article without root URL. We usually use `config.root + page.path` in theme.

`page.permalink`
Full URL of the article

`page.prev`
The previous post. `null` if the post is the first post.

`page.next`
The next post. `null` if the post is the last post.

`page.raw`
The raw data of the article

`page.photos`
The photos of the article (Used in gallery posts)

`page.link`
The external link of the article (Used in link posts)

&gt; Custom front-matter
&gt;
&gt; The front-matter in posts will be available in `page`.

Home (index)

Variable Description

`page.per_page`
Posts displayed per page

`page.total`
Total number of posts

`page.current`
Current page number

`page.current_url`
The URL of current page

`page.posts`
Posts in this page ([Data Model])

`page.prev`
Previous page number. `0` if the current page is the first.

`page.prev_link`
The URL of previous page. `''` if the current page is the first.

`page.next`
Next page number. `0` if the current page is the last.

`page.next_link`
The URL of next page. `''` if the current page is the first.

`page.path`
The URL of current page without root URL. We usually use `config.root + page.path` in theme.

Archive (archive): Same as `index` layout but add the following variables.

Variable Description

`archive`
Equals `true`

`year`
Archive year (4-digit)

`month`
Archive month (2-digit without leading zeros)

Category (category): Same as `index` layout but add the following variables.

Variable Description

`category`
Category name

Tag (tag): Same as `index` layout but add the following variables.

Variable Description

`tag`
Tag name

[1]: http://lodash.com/
[2]: http://momentjs.com/
  