/*global hexo */

var _ = require('lodash');

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
