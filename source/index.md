layout: page
title: Website Headline Coming Soon
# subheading:  
# video: 
# button: 
# button_link: http://github.com/abstracthat/hexo-boilerplate/
# social:
#  - facebook
#  - twitter
#  - googleplus
#  - pinterest
#  - tumblr
---

First you need to add some content here in index.md or make a new `index.jade` file if you want to do something fancy on the home page.

## Add Some Pages
You don't have to but if you want you can add some top level pages. These are meant to be pages that have no sub-pages under them. Something like an "About" page or a couple of keywords if this is going to be a mini-site.

1. Add the name and slug to `_config.yml` under `menu`.
2. Run `hexo new page "Title of The Page"` to create a folder with an index.md file ready to go.

## Add Some Posts
Next, you should add some posts. You can run `hexo new "Title of My  Post"` and you'll get a markdown file in the `/source/_posts` directory with the front-matter ready for you to fill in. Don't forget to include a **description** as this is used for the meta tag that will show up in the google results.

### Post Categories
The category you specify will create the category index page and a link to the category in the main menu. **Use only one category per post!**

Presently we render all of the posts for each category on the category page with no pagination. You don't have thousands of posts, right?

### Post Tags
Use one or more tags to allow sorting of the category content. Typically long-tail keywords are good here.

### Extra Category Content
Category index pages can have some content at the top of them. Just make `/source/_categories/category-name.md` and it will be added automagically to the category index page. This is good for SEO as it is adding more unique content to the page.

### Remember to Use More
Use the `<!--more-->` tag before you hit 250 characters so that we don't have to auto-truncate your post on the category index page.

### Images
Images go in `/source/assets`. Since you probably forgot the markdown formatting for images is `![Alt text](/assets/img.jpg "Optional title")`.

## Ready to Publish?
Commit your changes and push to deploy. The end.