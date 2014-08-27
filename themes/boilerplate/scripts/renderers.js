var stylus = require('stylus'),
  nib = require('nib'),
  axis = require('axis'),
  jeet = require('jeet'),
  rupture = require('rupture'),
  autoprefixer = require('autoprefixer-stylus');

var stylus_renderer = function(data, options, callback){
  var stylus_config = hexo.config.stylus || {};

  stylus(data.text)
    .use(nib())
    .use(axis())
    .use(jeet())
    .use(rupture())
    .use(autoprefixer())
    .set('filename', data.path)
    .set('sourcemap', options)
    .set('compress', stylus_config.compress)
    .set('include css', true)
    .render(callback);
};

hexo.extend.renderer.register('styl', 'css', stylus_renderer);
hexo.extend.renderer.register('stylus', 'css', stylus_renderer);
