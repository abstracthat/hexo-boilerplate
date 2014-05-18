/*global hexo */

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
