/*global hexo, require */

var _ = require('lodash'),
    fs = require('fs'),
    marked = require('marked'),
    path = require('path'),
    html_truncate = require('html-truncate');

function escape_regex(str) {
    // http://stackoverflow.com/a/6969486
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
};

function tag_to_class(tag_name) {
    return 'tag-' + tag_name.replace(/\s/g, '-');
}

hexo.extend.helper.register('tag_to_class', tag_to_class);

hexo.extend.helper.register('tags_to_class', function(tags){
    var cls = '';
    tags.each(function(tag) {
        cls += tag_to_class(tag.name) + ' ';
    });
    return cls;
});

hexo.extend.helper.register('category_tags', function(category) {
    var tags = [];
    var cat = Category.findOne({name: category}).populate('posts');
    cat.posts.each(function(post) {
        tags = _.union(tags, post.tags);
    });
    tags = Tag.find({_id: {$in: tags}}).toArray();
    return tags;
});

hexo.extend.helper.register('is_active_category', function(category_name) {
    if (this.page.category !== undefined)
        return this.page.category === category_name;
    if (this.page.categories) {
        var match = false;
        this.page.categories.each(function (category) {
            if (category.name === category_name) {
                match = true;
            }
        });
        return match;
    }
    return false;
});

hexo.extend.helper.register('category_content', function(category) {
    var content = "";
    var cat = Category.findOne({name: category});
    if (cat){
        var category_path = path.join(hexo.source_dir, '_categories', cat.slug + '.md');
        if (fs.existsSync(category_path)) {
            var r = new marked.Renderer();
            marked.setOptions({
                renderer: r,
                langPrefix: '',
                highlight: function(code, lang){
                    return hexo.util.highlight(code, {lang: lang, gutter: false, wrap: false});
                }
            });
            var text = fs.readFileSync(category_path, {encoding: 'utf8'});
            content =  marked(text, _.extend({
                gfm: true,
                pedantic: false,
                sanitize: false,
                tables: true,
                breaks: true,
                smartLists: true,
                smartypants: true
            }, hexo.config.marked));
        }
    }
    return content;
});

hexo.extend.helper.register('is_index', function() {

    // the same as is_home but also consider index.html

    var config = this.config || hexo.config,
        path = this.path,
        r = new RegExp('^' + escape_regex(config.pagination_dir) + '\\/\\d+\\/');

    if (path.indexOf('index.html', path.length - 'index.html'.length) !== -1) {
        path = path.slice(0, path.length - 'index.html'.length);
    }

    return path === '' || r.test(path);
});

hexo.extend.helper.register('html_truncate', html_truncate);
