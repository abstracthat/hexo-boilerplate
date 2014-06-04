title: A/B Test A Headline For The Page Here
subheading: The Subheading Goes Here — A Good Place to Split Test Some Copy
video: tntOCGkgt98
button: Call To Action
button_link: http://secured-link.com/
layout: page
---

This note demonstrates some of what [Markdown][1] is capable of doing.

<!-- more -->

## Basic formatting

Paragraphs can be written like so. A paragraph is the basic block of Markdown. A paragraph is what text will turn into when there is no reason it should become anything else.

Paragraphs must be separated by a blank line. Basic formatting of *italics* and **bold** is supported. This *can be **nested** like* so.

## Lists

### Ordered list

1. Item 1
2. A second item
3. Number 3
4. Ⅳ

*Note: the fourth item uses the Unicode character for [Roman numeral four][2].*

### Unordered list

* An item
* Another item
* Yet another item
* And there's more...

## Code Blocks & Inline Code

Fenced code blocks are very useful for developers. As you can see, it uses a fixed-width font.

```
git init --bare site
cd site
npm install

# If you have a longer line in a code block it will wrap but not hyphenate. It could happen in the middle of a word.
```

You can also make `inline code` to add code into other things.

## Quotes

Want to quote someone? Try a blockquote. Unfortunately you have to add the semantically correct `<cite>` as html. Don't forget to close the tag `</cite>`.

> Every interaction is both precious and an opportunity to delight.
> -- <cite>[Seth Godin](http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html)</cite>

## Headings

There are six levels of headings. They correspond with the six levels of HTML headings. You've probably noticed them already in the page. Each level down uses one more hash character.

### Headings *can* also contain **formatting**

Of course, demonstrating what headings look like messes up the structure of the page. Mostly you can stick with h1, h2, or h3.

## URLs

URLs can be made in a handful of ways:

* A named link to [MarkItDown][3]. The easiest way to do these is to select what you want to make a link and hit `Ctrl+L`.
* Another named link to [MarkItDown](http://www.markitdown.net/)
* Sometimes you just want a URL like <http://www.markitdown.net/>.

## Horizontal rule
A horizontal rule is a line that goes across the middle of the page.

***

It's sometimes handy for breaking things up.

## Images

Markdown can also contain images.
![Barn](/assets/barn.jpg "It is a barn")

## Finally
***
There's actually a lot more to Markdown than this. See the official [introduction][4] and [syntax][5] for more information. However, be aware that this is not using the official implementation, and this might work subtly differently in some of the little things.


  [1]: http://daringfireball.net/projects/markdown/
  [2]: http://www.fileformat.info/info/unicode/char/2163/index.htm
  [3]: http://www.markitdown.net/
  [4]: http://daringfireball.net/projects/markdown/basics
  [5]: http://daringfireball.net/projects/markdown/syntax
