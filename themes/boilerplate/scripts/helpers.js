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
