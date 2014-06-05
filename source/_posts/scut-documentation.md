title: Introducing The Scut Sass Mixin Library
date: 2014-04-26 13:53:31
category: Documentation
tags: 
  - SASS
---

I think David's new Sass library "Scut" is pretty interesting. It's like a design utility library, which is distinct from a design pattern library in that it enforces no particular structure or visual design. 
<!--more-->

I've always found this kind of thing fascinating, largely because I've never been able to pull it off in a way that feels good to me. I always end up leaning too far into visual design, or too abstract to the point of it not being all that useful. I think David just might be on the right track here. I'll let him explain in detail.

I've started an open-source Sass utility library with a straightforward mission: to ease and improve our implementations of common style-code patterns. I'm calling it Scut.

[Scut][2] is a collection of Sass mixins, placeholders, functions, and variables that are generic enough to be widely reusable — within any project, any design — and easy to integrate into diverse workflows and coding conventions. Every Scut utility is an effort to reduce repetition, increase organization, and encourage the reuse and sharing of style code.

Scut is not a frontend framework, and offers no default styling: it does not concern itself with the gradients on your buttons, the padding of your boxes, the font-size of your headers, or the color of your skin. And it won't provide your vendor-prefixes: Scut's unique focus differentiates it from other preprocessor libraries. It should help you build websites — especially if you, like me, work on a lot of sites, rather than a single large app — but it doesn't do everything. It is a companion to, not a replacement for, other popular tools and practices.

I've written this article to explain my motivation, intention, and method in starting Scut, and, most of all, to seek your collaborative input.

So as you read, please keep in mind that Scut is in its infancy, and that you, dear reader, have the power to alter and improve it, whether by adding and upgrading utilities or by clarifying the principles behind them. If at any point you decide that you're ready to try it out or throw in some ideas, please head to [Scut's documentation][2] or the [repository on Github][3].

### How We Share Style-Code Now, and Why There's Room for Scut

#### Reusable Components: Insert Pretty Button Here

Consider [Bootstrap][4], [Foundation][5], [PureCSS][6], etc. — whether we call them frontend frameworks, UI kits, design systems, or whatever else, their purpose is clear: to help developers build functional, attractive, reliable interfaces, quickly and easily, from pre-crafted components.

Even if we don't use these frameworks often, we should recognize their value and learn from them. Above all, they demonstrate the virtues of a systematic approach to site design. Mark Otto's exhortation to ["Build your own Bootstrap"][7] and Brad Frost's description of ["Atomic Design"][8] remind us that if we don't want to adopt someone else's reusable components, we should build our own bits and pieces to be equally systematic, equally reusable. [Mailchimp's Pattern Library][9] and [Mapbox's Base][10] serve as large-scale examples of that approach.

This variety of style-code sharing and reuse — the component collection, the design system — has garnered a lot of attention, and that's a good thing. But it is not the only variety; and I write all this in order say that Scut is different.

A good frontend framework helps us in many ways, but the scope of its reusability across diverse projects and designs is limited. Scut aims at a broader, more rudimentary kind of reuse — reuse not of polished components, but of the abstract, generic patterns and practices that underlie those components. (At least, those patterns and practices that are not clear and simple in vanilla CSS.)

#### Abstract, Generic Patterns and Practices: "Unfinished" Styling

Another way to share and reuse style code — Scut's way — involves the transmission of useful maneuvers, clever tricks, and best practices, but not finished components.

Here's the basic idea: Create and share modules that are as generic, flexible, naked as possible, so they can be used in any project to implement a useful pattern, without demanding or determining a particular environment for it.

This kind of sharing happens in two ways: tutorials and utility libraries.

##### Tutorials

For a paradigmatic example of The Tutorial, I refer you to this very blog, CSS-Tricks, where the eminent Chris Coyier explains and exemplifies patterns we can all apply in our own work. Then there are other blogs, books, articles, Stack Overflow answers, resources divers and sundry — more tutorials on this Internet then we know what to do with.

The writing and reading and sharing of tutorials is an indispensable practice, especially excellent because tutorials teach while they share. However, they provide practices we can reproduce rather than tools we can reuse: they disseminate knowledge, not utilities.

##### Utilities

The Reusable Generic Utility, Scut's ideal constituent, is a kind of extension of The Tutorial. It turns out that many (if not most) of the styling tricks, tips, and best practices we read or write about can be abstracted into reusable utilities.

For a fine model of what I mean by "utility," consider the many functions of [Underscore][11], the JavaScript "utility-belt" — and its offspring [Lodash][12], of course (for this article, please just assume that "Underscore" = "Underscore or Lodash, whatever you prefer"). Let me explain: I've been reading [Eloquent Javascript, by Marijn Haverbeke][13], and the other night I encountered a common, useful pattern called the "reduce" or "fold" function. In the tutorial tradition, Haverbeke explains what a "reduce" function does and shows me how to make one. So I could write my own — we could all write our own ... But Underscore already has [a "reduce" function that we can all use][14] — and since Underscore's function has run the open-source gauntlet, it's going to be better than whatever I might produce on my own (though I can't speak for you, in all your wisdom). As much as I benefit from the knowledge gained, I often gain even more by pairing that knowledge with an open-source utility.

In the world of style code, the best way to collaboratively create a similar utility collection is with a preprocessor library. (Two significant advantages of preprocessor tools over class collections are (1) that they have variability built in, and (2) that they only impact your final stylesheet, what's served to the client, when they are actually used.) So: enter Scut.

Let's parallel the JavaScript "reduce" example above with some style code. On CSS-Tricks, there's an immensely useful article, ["Centering in the Unknown,"][15] about centering elements with indeterminate dimensions. The trickiest part is the vertical centering. After reading this article, I know about the method of setting `display: table;` on the parent element and `display: table-cell; vertical-align: middle;` on the to-be-centered child. And that's fantastic: it's a valuable trick to learn. But let's not stop there. To extend that tutorial and create a reusable, shareable utility, I can write a Sass mixin — something like this:


    @mixin vertically-center ($child: ".vcentered") {
      display: table;
      &amp; &gt; #{$child} {
        display: table-cell;
        vertical-align: middle;
      }
    }

Apply this mixin to the parent; pass the to-be-centered child's selector as the argument (or give that child the default class `vcentered`); and you have achieved vertical centering — and done so by creating a tool that can be reused and shared.

Essentially, we're doing the same thing with CSS (by way of Sass) that Underscore does with JavaScript. Put together a bunch of these utilities, expose them to the open-source community, and you should end up with a helpful library.

(By the way, Scut provides [three different methods of vertical centering][16], each one fitted for different contexts.)

I'll explain more about the methodology of Scut's utilities below; but first, you may be asking ...

##### What About Existing Preprocessor Libraries?

If you're a regular reader of CSS-Tricks, you've probably heard of [Compass][17] and [Bourbon][18]. There are other Sass libraries, and LESS and Stylus have spawned their own. These libraries exist already, bolstered by strong communities, and work splendidly; they do offer "abstract, generic patterns and practices" — so why build another? Because, from what I've seen, the existing preprocessor libraries have focused heavily on vendor-prefixing and legacy-browser support, without offering many reusable style patterns. (Some, yes, but not many.) Valuable as they are, they are also, like all things under the sun, limited.

Their limitations jumped out at me when I started using [Autoprefixer][19]. (If you haven't done so already, I suggest reading [Andrey Sitnik's guest post on CSS-Tricks][20].) I had tried Compass and was using Bourbon regularly; but with my vendor-prefixing taken care of by Autoprefixer, Compass and Bourbon no longer seemed very useful. They offered a few helpers that I would invoke now and again, but not regularly.

I started to wonder what else a preprocessor library might be good for. And that led to the idea behind Scut — a preprocessor library that ignores vendor-prefixing in order to focus exclusively on abstract styling patterns.

### The Principles and Purposes of Scut

#### What Problems do Scut Utilities Solve?

Scut utilities should epitomize the key benefits of CSS preprocessors. I'll list my favorites:

The Key Benefits of The CSS Preprocessor — which are also The Key Benefits of The Scut Utility:

* It helps me avoid repetition. Instead of typing the same code in various places, I use a mixin, extend, function, or variable, and my code becomes less annoying to type; more accurate — less vulnerable to typos and inadvertent variations; and easier to change and maintain — since each important part resides in one place only.
* It helps me organize code, by grouping associated rules into named patterns — so instead of tangled lists of various rules contributing in various ways to a component's appearance, I see which rules relate to which specific effects.
* It helps me reuse code (as explained above).

Additionally, the pattern that a Scut utility implements should suffer from one or more of the following problems — and the utility should, of course, solve that problem:

##### 1\. The pattern is non-intuitive

The CSS rules required don't explain themselves. There's some kind of trick involved: you must have been initiated to decipher the code. Also, because there's a trick, the pattern is hard to remember. Unless you've executed the operation a hundred times already, you probably have to look up instructions on somebody's blog; and even then, you'll need to do some thinking, experimenting, and tweaking to get it right again.

To illustrate: You may want to create an element of fluid dimensions with a fixed aspect ratio — let's say 16/9. After some searching, you've found a method that works — but you may not see why just by looking at the CSS:


    .parent-element {
      overflow: hidden;
      position: relative;
    }
    .parent-element:before {
      content: "";
      display: block;
      height: 0; /* Huh? */
      padding-top: 56.25%; /* Wha? */
    }
    .parent-element &gt; .child-element {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%; /* Filling a container with zero height? */
    }

Use a Scut mixin, instead, and a glance at your code will make sense:


    .parent-element {
      @include scut-ratio-box(16/9, ".child-element");
    }

The mixin organizes and names the pattern — and also, of course, saves you from repeating the complicated mess if you need a different ratio-box elsewhere.

For another example, consider the renowned CSS triangle. Without some explanation, the required style code is obscure. To make a blue right-pointing triangle 50px tall and 50px wide:


    .triangle-right {
      width: 0;
      height: 0; /* A shape with no dimensions? */
      border-top: 25px solid transparent; /* Why 25px here? */
      border-bottom: 25px solid transparent; /* Who needs invisible borders? */
      border-left: 50px solid blue; /* My right-pointing triangle is a left border? */
    }

The trick is ancient and venerable, and well documented in tutorials around the web. (Chris Coyier recently produced [a clever animation to explain how and why it works at all][21].) So maybe you've read some things, you get it, you pull it off yourself. Still, despite your magnificence, the benefit of a good mixin should be clear, to transform the code above into a single intelligible line:


    .triangle-right {
      @include scut-triangle(right, 50px, blue);
    }

And what if you want to build a more complex shape that involves multiple triangles — triangles that are themselves a little more complicated? Then the mixin becomes even more valuable:

##### 2\. The pattern deserves a shorthand

The pattern may be easy enough to write yourself — not complicated, plenty intuitive — but it consists of a set of rules that can be usefully and regularly grouped into a named shorthand.

(Of course, vanilla CSS already incorporates some shorthands. Scut just adds more.)

For example, Scut includes some positioning mixins: instead of —


    position: absolute;
    top: 1em;
    right: 2em;
    bottom: 3em;
    left: 4em;

— you can use `scut-absolute` and write —


    @mixin scut-absolute(1em 2em 3em 4em)

##### 3\. The pattern involves some important best practices

You may think you know how to do it yourself — but unless you're In The Know and have read all the right things, you may not be doing it the best way. And even if you knew the best way once, in your heyday, you may have since forgotten or missed some game-changing innovations.

There's nothing like an open-source library to take care of this problem. In fact, best practices is one of the areas where existing preprocessor libraries are pretty strong. So Scut's best-practice utilities — like `[scut-font-face`][22], `[scut-clearfix`][23], and `[scut-hd-bp`][24] (for resolution-based media queries) — resemble some mixins you'll find in Bourbon and Compass.

##### 4\. The pattern is extremely common and a little annoying

You use the pattern consistently — every project, usually multiple times per project. And every time, something in your mind mutters "Again?" and a dark psychic cloud passes over your psychic sun, a transient awareness that you're a few keystrokes closer to death.

If I had a dime for every time I nullified `margin`, `padding`, and `list-style-type` on an unstyled-list — O! the sandwiches I could buy —— So some of Scut's first utilities were `[scut-list-unstyled`][25] and its common variations, `[scut-list-inline`][26] and `[scut-list-floated`][27], exemplified below (with various "skins" applied, to demonstrate how an abstract utility should be able to apply in all kinds of design situations):

#### How Do You Make a Scut Utility?

In short: maximize reusability. Reusability is what distinguishes a library-ready utility from a project-specific one.

Include sufficient detail to implement the pattern, but no more. The utility alone should not produce a passable component. Again, Scut isn't about passing around well-constructed, finished designs: it's about facilitating the construction and finishing of unique designs.

Use arguments to allow for typical variations on the theme. Whenever reasonable, include conservative default values for those arguments — so users may not have to enter every argument every time — and arrange those arguments according to the order in which they're likely to be changed. Additionally, use `[@content` blocks][28], when they make sense, if you expect regular customizations that won't fit into arguments.

Namespace, to prevent conflicts with other libraries and project-specific code. Scut adds a `scut-` prefix to all its pieces. That way, we can include a "clearfix" utility in Scut without worrying that it will conflict with Bourbon or Compass clearfixes (which aren't namespaced). And we can use generic utility names like "size" (`[scut-size`][29]), generic variable names like "circle" (`[scut-circle`][30]), without disturbing the natural balance.

Lastly: document thoroughly, document well. I'm trying hard to do that with [Scut's docs][31] — and I would, of course, appreciate your input and advice. We've all been frustrated by documentation — we've all known that pain — so we all recognize that the effective reusability of a tool directly relates to the quality of its documentation.

### Now To Address Some Reservations

#### I don't use Sass

Whatever your workflow, whatever choices you've made, good or bad, Scut can probably help, at least a little. If you don't use Sass, you might still look into the open-source code and either port it (to your preprocessor-of-choice) or read it, along with Scut's documentation, as a series of mini-tutorials, a kind of style-pattern reference.

#### I Love OOCSS and Cannot Serve Two Masters

Object-Oriented CSS (OOCSS) and Scut address similar problems with similar solutions: namely, extendable patterns (or "objects"). But they are by no means the same. Perhaps you're an OOCSS aficionado, and you consider all these mixins and extends to be inefficient nonsense. You want a "clearfix" class, not a mixin that will duplicate code, or a bunch of `@extend` directives that will clutter your compiled CSS. You want to make your triangles with classlists like `triangle triangle-large triangle-down triangle-red`, not one triangle mixin invoked multiple times with different arguments.

Well, that's OK. There's no need to argue here over the virtues of preprocessors versus those of class-heavy coding conventions, semantic versus presentational classnames, etc., because Scut doesn't preclude OOCSS-style coding, or any other style: simply summon Scut's utilities as needed to help create the classes for your objects and their extensions.

#### I Don't Like Some of Scut's Utilities

Let me know what needs to change (file an issue on Github), and we can work together to build a better Scut.

Keep in mind, also, that some of the current utilities are more experimental than others. As Scut stumbles through its unstable youth (v0.x.x), I'm looking for collaborators who are interested in figuring out what works and what doesn't, which utilities will improve a project's codebase and which might make it more cryptic and harder to maintain.

#### I Think This Whole Idea Is Stupid

Again, you're welcome to tell me what you would do differently. Show me how it's done. Or else you can go your separate way, do something you enjoy to cheer yourself up again — eat some pie, ride a bicycle — and forget you ever read this.

### Curious? Convinced? Confused? Try Using and Contributing to Scut

I hope I've said enough, by now, to convince you to look into Scut, maybe tinker with it a little — or even, dare I wish, contribute.

If you're ready for a trial run, [Scut's documentation][2] will tell you how to install and apply the library. (Basically, use [Bower][32] or download [the latest release on Github][33], then `@import` into your Sass. Easy as can be.)

And if you're thinking you may want to donate some modicum of your own brilliance to the project, please don't hesitate. Go for it. Scut is a simple library, an easy open-source contribution — which could be especially nice for those of us who work primarily in HTML and CSS and feel wary of wading into other Github projects. Scut is all about making your work, my work, and the work of other developers easier, maybe even a little bit better; extending tutorials into reusable utilities; encouraging best practices; and sharing good ideas — goals we can agree on. I hope you'll find it a worthy experiment.

##### Share On

[Twitter][34] [Facebook][35] [Google+][36]

[1]: http://twitter.com/sorrywretch
[2]: http://davidtheclark.github.io/scut/
[3]: https://github.com/davidtheclark/scut
[4]: http://getbootstrap.com/
[5]: http://foundation.zurb.com/
[6]: http://purecss.io/
[7]: https://speakerdeck.com/mdo/build-your-own-bootstrap
[8]: http://bradfrostweb.com/blog/post/atomic-web-design/
[9]: http://ux.mailchimp.com/patterns
[10]: https://www.mapbox.com/base/
[11]: http://underscorejs.org/
[12]: http://lodash.com/
[13]: http://eloquentjavascript.net/
[14]: http://underscorejs.org/#reduce
[15]: http://css-tricks.com/centering-in-the-unknown/
[16]: http://davidtheclark.github.io/scut/#vertically_center
[17]: http://compass-style.org/
[18]: http://bourbon.io/
[19]: https://github.com/ai/autoprefixer
[20]: http://css-tricks.com/autoprefixer/
[21]: http://css-tricks.com/animation-css-triangles-work/
[22]: http://davidtheclark.github.io/scut/#font-face
[23]: http://davidtheclark.github.io/scut/#clearfix
[24]: http://davidtheclark.github.io/scut/#hd_breakpoint
[25]: http://davidtheclark.github.io/scut/#list_unstyled
[26]: http://davidtheclark.github.io/scut/#list_inline
[27]: http://davidtheclark.github.io/scut/#list_floated
[28]: http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixin-content
[29]: http://davidtheclark.github.io/scut/#size
[30]: http://davidtheclark.github.io/scut/#circle
[31]: http://davidtheclark.github.io/scut
[32]: http://bower.io/
[33]: https://github.com/davidtheclark/scut/releases
[34]: https://twitter.com/intent/tweet?text=Introducing Scut, a new Sass utility library&amp;url=http://css-tricks.com/introducing-scut-new-sass-utility-library/&amp;via=real_css_tricks
[35]: https://www.facebook.com/sharer/sharer.php?u=http://css-tricks.com/introducing-scut-new-sass-utility-library/
[36]: https://plus.google.com/share?url=http://css-tricks.com/introducing-scut-new-sass-utility-library/
  