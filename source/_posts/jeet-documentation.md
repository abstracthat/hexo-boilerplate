layout: page
title: Jeet Grid System
description: This is the meta description for the page that will be picked up by search engines and displayed in results. You get roughly 160 characters.
date: 2014-05-12 13:53:31
category: Documentation
tags: 
  - Stylus
---
Jeet is a grid system most similar to the Sass library Neat (from the Bourbon team). You can specify any ratio you want and the gutters are based on a percentage of the window instead of being fixed.
<!--more-->

## Mixin Overview
Here's an overview of the mixins.

### edit()
Visualize the structure of your site. Edit mode assigns a light gray, semi-transparent, background to every element on the page.

### center()

```
center(max-width, pad)
// defaults max-width = 1410px, pad = 0
```

This is a shortcut to easily center containers. The pad variable sets padding on the left and right.

### column() or col()

```
column(ratios, offset, cycle, uncycle, gutter)
column() //uses default ratio=1
```

Specify an initial **ratio**, either as fractions or decimals, then pass the parent container's context ratio to maintain consistent gutters as you nest. Like for a col(1/4) in a col(1/3) in a col(1/2) you would do `column: 1/4 1/3 1/2`. It's like walking up the stairs.

Specify a ratio to make your **offset** have a margin-left. Make it negative to give it a margin-right instead. E.g. `column(1/4, offset: 1/4)` would create a column the quarter of the size of it's container and push it to the right a quarter.

**Cycle** create rows of block grids (like a gallery). If you are changing the cycle length in a media query then don't forget to **uncycle**. 

Adjust your **gutter** percentage if you don't want to use the default in settings.

### span()

```
span(ratio, offset, cycle, uncycle)
```

Same as column but no gutter. Just pass a single ratio for the size of the span.

### shift()

```
shift(ratios, col_or_span, gutter)
// defaults ratios = 0, col_or_span = column, gutter = jeet.gutter
```

Specify if this is a **column** or **span** shift to include gutters or not. This works similar to `offset` in that it can accept negative values to shift the other direction. 

Can accept multiple context ratios to maintain perfect sizing. Also accepts custom gutter sizing, just make sure your gutter sizes match the gutter sizes of your original elements.

Use **unshift()** to disable whatever source ordering you've done to an element.

### stack()

```
stack(pad, align)
// defaults pad = 0, align = false
stack()
```

A helper mixin to "stack" elements on top of each other. Useful for mobile views. Accepts padding and/or text alignment. **unstack()** cancels that `stack()`. This won't revert back to your `column()` calls. For that, manually call your `column()` method again.

### align()

```
align(direction)
// direction can be horizontal (alias h), or vertical (alias v), or both (default)
align()
```

Aligning blocks relative to their container with `position: absolute` and fancy positioning and transform.
