title: Bourbon Mixin Library
date: 2014-04-06 13:53:31
category: Documentation
tags: 
  - SASS
---

## Animation

[View source][1] [View spec][2]

The animation mixin supports comma separated lists of values, which allows different transitions for individual properties to be described in a single style rule. Each value in the list corresponds to the value at that same position in the other properties.


    box:hover {
      // Animation shorthand works the same as the CSS3 animation shorthand
      @include animation(scale 1.0s ease-in, slide 2.0s ease);

      // The above outputs the same CSS as using independent, granular mixins.
      @include animation-name(scale, slide);
      @include animation-duration(2s);
      @include animation-timing-function(ease);
      @include animation-iteration-count(infinite);
    }


### Demo

## Animation-delay

[View source][1] [View spec][3]

The `animation-delay` property specifies when an animation should start.


      @include animation-delay(2s);


## Animation-direction

[View source][1] [View spec][4]

The `animation-direction` property indicates whether the animation should play in reverse on alternate cycles.


      @include animation-direction(alternate-reverse);


## Animation-duration

[View source][1] [View spec][5]

The `animation-duration` property specifies the length of time that an animation should take to complete one cycle.


      @include animation-duration(2s);


## Animation-fill-mode

[View source][1] [View spec][6]

The `animation-fill-mode` property specifies how a CSS animation should apply styles to its target before and after it is executing.


      @include animation-fill-mode(backwards);


## Animation-iteration-count

[View source][1] [View spec][7]

The `animation-iteration-count` property defines the number of times an animation cycle should be played before stopping.


      @include animation-iteration-count(infinite);


## Animation-name

[View source][1] [View spec][8]

The `animation-name` property specifies a list of animations that should be applied to the selected element.


      @include animation-name(scale, slide);


## Animation-play-state

[View source][1] [View spec][9]

The `animation-play-state` property determines whether an animation is running or paused.


      @include animation-play-state(paused);


## Animation-timing-function

[View source][1] [View spec][10]

The `animation-timing-function` property specifies how a CSS animation should progress over the duration of each cycle.


      @include animation-timing-function(ease);


## Appearance

[View source][11] [View spec][12]

The `appearance` CSS property is used to display an element using a platform-native styling based on the operating system's theme.


    @include appearance(none);


## Backface-visibility

[View source][13] [View spec][14]

The CSS backface-visibility property determines whether or not the back face of the element is visible when facing the user. The back face of an element always is a transparent background, letting, when visible, a mirror image of the front face be displayed.


    @include backface-visibility(visible);


## Background

[View source][15] [View spec][16]

The `background` mixin is used for adding multiple backgrounds using shorthand notation.


    @include background(linear-gradient(red, green) left repeat);
    @include background(linear-gradient(red, green) left repeat, radial-gradient(red, orange) left repeat);
    @include background(url("/images/a.png"), linear-gradient(red, green), center no-repeat orange scroll);


## Background-image

[View source][17] [View spec][18]

The background-image mixin is helpful for chaining multiple comma delimited background images and/or linear/radial-gradients into one background-image property. The Background-image mixin supports up to 10 background-images.

Use in combination with the [linear-gradient function][19] and the [radial-gradient function][20].


    // Image asset with a linear-gradient
    @include background-image(url("/images/a.png"), linear-gradient(white 0, yellow 50%, transparent 50%));

    // Multiple linear-gradients - Demo
    @include background-image(linear-gradient(hsla(0, 100%, 100%, 0.25) 0%, hsla(0, 100%, 100%, 0.08) 50%, transparent 50%),
                               linear-gradient(#4e7ba3, darken(#4e7ba4, 10%)));

    // NOT SUPPORTED
    @include background-image(url("/images/a.png") center no-repeat, url("images/b.png") left repeat);

    // Background-image is not a shorthand property, therefore this doesn't make sense.


### Demo

### Note about shorthand notation

All CSS background properties support comma delimited values. For multiple background images you can specify the background properties like position, repeat, etc. for each image. For example:


    @include background-image(url("/images/a.png"), url("images/b.png"));
    background-position: center top, center;
    background-repeat: no-repeat, repeat-x;


## Border-image

[View source][21] [View spec][22]

Border-image supports short-hand notation.


    @include border-image(url(/images/border.png) 27 repeat);


### Demo

## Border-radius

[View source][23] [View spec][24]

The border-radius helper mixins provide shortcuts for targeting sides. These mixins are supported in Bourbon v3.0+


    @include border-top-radius(5px);
    @include border-bottom-radius(5px);
    @include border-left-radius(5px);
    @include border-right-radius(5px);


Deprecation Warning: The official border-radius mixin was deprecated and removed in Bourbon 3.0. [Here's why.][25]

## Box-sizing

[View source][26] [View spec][27]

Box-sizing will change the box-model of the element it is applied to.


    @include box-sizing(border-box);


## Calc

[View source][28] [View spec][29]

A mixin for vendor-prefixing the CSS3 calc function. It accepts a property and a value.


    @include calc(width, '100% - 80px');


Note: You must use interpolation to pass in a variable—#{ }.


    $width: 100%;

    @include calc(width, '#{$width} - 80px');


## Columns

[View source][30] [View spec][31]

All current CSS3 column properties are supported. See the [complete list of mixins][32] for more info.


    @include columns(12 8em);
    @include column-rule(1px solid green);


## Filter

[View source][33] [View spec][34]

A mixin for generating clean, vendor-prefixed CSS3 filters.


    @include filter(grayscale(50%));


## Flexbox

[View source][35] [View spec][36]

The flexbox mixins are up to date with the [2014 W3C spec][37]. The mixins also include fallbacks for the [2009 spec][38].

[View all flexbox mixins][35]


    div.parent {
      @include display(flex);
      @include align-items(stretch);
      @include flex-direction(row);
      @include justify-content(flex-start);
    }

    div.parent &gt; div.child {
      @include flex(1);
    }


## Font-face

[View source][39] [View spec][40]

A simple `@font-face` mixin allowing easier custom fonts integration, like so:

The mixin also takes an optional `$asset-pipeline: true` argument for use with the Rails asset pipeline.


    @include font-face(SourceSansPro, '/fonts/Source_Sans_Pro/SourceSansPro-Regular');
    @include font-face(SourceSansPro, '/fonts/Source_Sans_Pro/SourceSansPro-Bold', bold);
    @include font-face(SourceSansPro, '/fonts/Source_Sans_Pro/SourceSansPro-Italic', normal, italic);

    // Rails asset-pipeline - place fonts in app/assets/fonts/
    @include font-face(SourceSansPro, 'Source_Sans_Pro/SourceSansPro-Regular', normal, $asset-pipeline: true);


## Font-feature-settings

[View source][41] [View spec][42]

The font-feature-settings mixin is helpful for using the advanced typographic features included in some OpenType fonts.


    // Use ligatures if the typeface and font file include them
    @include font-feature-settings("liga");

    // Use proportional numbers, but not automatic kerning
    @include font-feature-settings("pnum", "kern" false);


## HIDPI-media-query

[View source][43] [View spec][44]

The HIDPI Meda Query will allow you to generate a media query that targes HIDPI devices. It accepts an optional ratio argument, default ratio is 1.3. [Find my device pixel ratio.][45]


    @include hidpi(1.5) {
      width: 260px;
    }


### CSS Output


    @media only screen and (-webkit-min-device-pixel-ratio: 1.5),
    only screen and (min--moz-device-pixel-ratio: 1.5),
    only screen and (-o-min-device-pixel-ratio: 1.5/1),
    only screen and (min-resolution: 144dpi),
    only screen and (min-resolution: 1.5dppx) {
      width: 260px;
    }


## Hyphens

[View source][46] [View spec][47]

The `hyphens` property tells the browser how to split words when wrapping lines. The mixin accepts either `none`, `manual`, or `auto`, and defaults to `none` if left blank.


    @include hyphens(manual);


## Image-rendering

[View source][48] [View spec][49]

The `image-rendering` property provides a hint to the user agent about how to handle its image rendering.


    @include image-rendering(optimizeSpeed);


## Keyframes

[View source][50] [View spec][51]

A mixin for generating clean vendor-prefixed keyframes.


    @include keyframes(fadeIn) {
      from {
        @include transform(scale(0));
      }
      to {
        @include transform(scale(1));
      }
    }


### CSS Output


    @-webkit-keyframes fadeIn {
      from {
        -webkit-transform: scale(0); }

      to {
        -webkit-transform: scale(1); } }

    @-moz-keyframes fadeIn {
      from {
        -moz-transform: scale(0); }

      to {
        -moz-transform: scale(1); } }

    @-o-keyframes fadeIn {
      from {
        -o-transform: scale(0); }

      to {
        -o-transform: scale(1); } }

    @keyframes fadeIn {
      from {
        transform: scale(0); }

      to {
        transform: scale(1); } }


## Linear-gradient

[View source][52] [View spec][53]

Gradient Position is optional. Position can be a degree (`90deg`). Mixin supports up to 10 color-stops.

This mixin will output a fallback `background-color: #first-color;` declaration. A `$fallback` argument can be passed to change the fallback color.


    @include linear-gradient(#1e5799, #2989d8);
    @include linear-gradient(to top, #8fdce5, #3dc3d1);
    @include linear-gradient(to top, #8fdce5, #3dc3d1, $fallback: red);
    @include linear-gradient(50deg, #1e5799 0%, #2989d8 50%, #207cca 51%, #7db9e8 100%);


### Demo

## Perspective

[View source][54] [View spec][55]

The `perspective` CSS property determines the distance between the z=0 plane and the user in order to give to the 3D-positioned element some perspective.

The `perspective-origin` CSS property determines the position the viewer is looking at. It is used as the vanishing point by the `perspective` property.


    @include perspective(300px);
    @include perspective-origin(30% 30%);


### Demo

## Placeholder

[View source][56] [View spec][57]

Outputs vendor-prefixed placeholders for styling. Must be nested in a rule-set.


    input {
      width: 300px;

      @include placeholder {
        color: red;
      }
    }


### CSS Output


    input {
      width: 300px;
    }

    input::-webkit-input-placeholder {
      color: red;
    }
    input:-moz-placeholder {
      color: red;
    }
    input::-moz-placeholder {
      color: red;
    }
    input:-ms-input-placeholder {
      color: red;
    }


## Radial-gradient

[View source][58] [View spec][59]

Takes up to 10 gradients. See also the [background-image mixin][60].

This mixin will output a fallback `background-color: #first-color;` declaration. A `$fallback` argument can be passed to change the fallback color.


    @include radial-gradient(#1e5799, #3dc3d1);
    @include radial-gradient(#1e5799, #3dc3d1, $fallback: red);
    @include radial-gradient(circle at 50% 50%, #eee 10%, #1e5799 30%, #efefef);


### Demo

## Transform

[View source][61] [View spec][62]

The CSS `transform` property lets you modify the coordinate space of the CSS visual formatting model. Using it, elements can be translated, rotated, scaled, and skewed according to the values set

The `transform-origin` CSS property lets you modify the origin for transformations of an element.

The `transform-style` CSS property determines if the children of the element are positioned in the 3D-space or are flattened in the plane of the element.


    @include transform(translateY(50px));

    @include transform-origin(center top);

    @include transform-style(preserve-3d);


## Transition

[View source][63] [View spec][64]

The shorthand mixin supports multiple transition.


    @include transition (all 2.0s ease-in-out);
    @include transition (opacity 1.0s ease-in 0s, width 2.0s ease-in 2s);


To transition specific vendor-prefixed properties (`-webkit-transform, -moz-transform, ...`), do not use the shorthand mixin. Use the individual transition mixins.


    @include transition-property (transform);
    @include transition-duration(1.0s);
    @include transition-timing-function(ease-in);
    @include transition-delay(0.5s);


## User-select

[View source][65] [View spec][66]

Controls the appearance (only) of selection. This does not have any affect on actual selection operation.


    @include user-select(none);


## Flex-grid

[View source][67]

Use this mixin to easily create a flexible-grid layout.

The `$fg-column`, `$fg-gutter` and `$fg-max-columns` variables must be defined in your base stylesheet to properly use the flex-grid function.

This function takes the fluid grid equation (target / context = result) and uses columns to help define each.


    $fg-column: 60px;             // Column Width
    $fg-gutter: 25px;             // Gutter Width
    $fg-max-columns: 12;          // Total Columns For Main Container

    div {
      width: flex-grid(4);        // returns (315px / 1020px) = 30.882353%;
      margin-left: flex-gutter(); // returns (25px / 1020px) = 2.45098%;

      p {
        width: flex-grid(2, 4);   // returns (145px / 315px) = 46.031746%;
        float: left;
        margin: flex-gutter(4);   // returns (25px / 315px) = 7.936508%;
      }

      blockquote {
        float: left;
        width: flex-grid(2, 4);   // returns (145px / 315px) = 46.031746%;
      }
    }


## Golden-ratio

[View Source][68]

Returns the golden ratio of a given number. Must provide a pixel or em value for the first argument. Also takes a required integer for an increment value: ...-3, -2, -1, 0, 1, 2, 3...

Note: The golden-ratio function can be wrapped in sass's `abs()`, `floor()`, or `ceil()` functions to get the absolute value, round down, or round up respectively.


    // Positive number will increment up the golden-ratio
    font-size: golden-ratio(14px,  1);
    // returns: 22.652px

    // Negative number will increment down the golden-ratio
    font-size: golden-ratio(14px, -1);
    // returns: 8.653px


Resources: [modularscale.com][69]

## Grid-width

[View source][70]

Easily setup and follow a grid based design. Check out [gridulator.com][71]

The `$gw-column` and `$gw-gutter` variables must be defined in your base stylesheet to properly use the grid-width function.


    $gw-column: 100px;          // Column Width
    $gw-gutter: 40px;           // Gutter Width

    div {
      width: grid-width(4);     // returns 520px;
      margin-left: $gw-gutter;  // returns 40px;
    }


## Linear-gradient

[View source][72]

Outputs a linear-gradient. Use in conjunction with the [background-image mixin.][60] The function takes the same arguments as the [linear-gradient mixin][73].


    @include background-image(linear-gradient(white 0, yellow 50%, transparent 50%));


### Demo

## Modular-scale

[View Source][68]

Returns the modular scale of a given number. Must provide a number value for the first argument. The second argument is a required integer for an increment value: ...-3, -2, -1, 0, 1, 2, 3... The third value is the ratio number.

Note: The function can be wrapped in sass's `abs()`, `floor()`, or `ceil()` functions to get the absolute value, round down, or round up respectively.


    div {
     // Increment Up GR with positive value
     font-size:        modular-scale(14px,   1, 1.618); // returns: 22.652px

     // Increment Down GR with negative value
     font-size:        modular-scale(14px,  -1, 1.618); // returns: 8.653px

     // Can be used with ceil(round up) or floor(round down)
     font-size: floor( modular-scale(14px, 1, 1.618) ); // returns: 22px
     font-size:  ceil( modular-scale(14px, 1, 1.618) ); // returns: 23px
    }


Resources: [modularscale.com][69] &amp; [goldenrationcalculator.com][74]

## Em

[View source][75]

Convert pixels to ems.

For a relational value, the input is calculated based on a parent value. The default parent is 16px.
The parent can be changed by passing an optional second value.


    font-size: em(12);
    font-size: em(12, 24);


### CSS Output


    font-size: 0.75em;
    font-size: 0.5em;


## Rem

[View source][76]

Convert pixels to rems.

This assumes 1rem is 16px. You can override this by defining a new size for the `$em-base`.

### CSS Output

## Radial-gradient

[View source][77]

Outputs a radial-gradient. Use in conjunction with the [background-image mixin.][60] The function takes the same arguments as the [radial-gradient mixin][78].


    @include background-image( radial-gradient(#1e5799, #3dc3d1) );
    @include background-image( radial-gradient(50% 50%, circle cover, #1e5799, #3dc3d1) );
    @include background-image( radial-gradient(50% 50%, circle cover, #eee 10%, #1e5799 30%, #efefef) );


### Demo

## Strip-units

[View source][79]

This strips the units from a value. It's used as a helper in the [Pixel to Ems][80] and [Pixel to Rems][81] functions.


    $dimension: strip-units(12px);


### CSS Output

## Tint &amp; Shade

[View source][82]

Tint and Shade are different from `lighten()` and `darken()` functions that are built into sass.

Tint is a mix of color with white.
Shade is a mix of color with black.
Both take a color and a percent argument.


    background: tint(red, 40%);
    background: shade(blue, 60%);


## Unpack

[View source][83]

This is a shorthand for converting one to three dimensions into their four-value syntax. It's used in the [position][84] mixin.

### CSS Output

## Border-color

[View source][85]

The border-color mixin accepts up to four values, including `null`, and uses the [directional-property][86] mixin to map them to their respective directions.


    @include border-color(red green null blue);


### CSS Output


    border-top-color: red;
    border-right-color: green;
    border-left-color: blue;


## Border-style

[View source][85]

The border-style mixin accepts up to four values, including `null`, and uses the [directional-property][86] mixin to map them to their respective directions.


    @include border-style(dashed null solid);


### CSS Output


    border-top-style: dashed;
    border-bottom-style: solid;


## Border-width

[View source][85]

The border-width mixin accepts up to four widths, including `null`, and uses the [directional-property][86] mixin to map them to their respective directions.


    @include border-width(1em 20px null 100%);


### CSS Output


    border-top-width: 1em;
    border-right-width: 20px;
    border-left-width: 100%;


## Button

[View source][87]

The button add-on provides well-designed buttons with a single line in your CSS.

The mixin supports a style parameter and an optional color argument. The available button styles are:

* `simple` (default)
* `shiny`
* `pill`

### Simple Button Style

The mixin can be called with no arguments, which will render a blue button with the `simple` style.


    button {
      @include button;
    }


Simple button

### Pill Button Style


    button {
      @include button(pill);
    }


Pill Button

### Shiny Button Style

Create beautiful buttons by defining a style and color argument; using a single color, the mixin calculates the gradient, borders, box shadow, text shadow and text color of the button. The mixin will change the text to be light when on a dark background, and dark when on a light background.


    button {
      @include button(shiny, #ff0000);
    }


Shiny Button

## Clearfix

[View source][88]

This mixin will output a clearfix to the selector where the mixin is declared.

This clearfix uses Nicolas Gallagher's [Micro Clearfix][89].


    div {
      @include clearfix;
    }


## Directional-property

[View source][85]

A helper mixin enabling short-hand notation for directional properties. It accepts a prefix, suffix, and array of up to four values that map to top, right, bottom, and left, respectively. You can optionally pass in `null` for the suffix argument to ignore it. You can optionally pass a `null` argument for a directional value to ignore it.

This mixin is mostly used as a helper for others. See [border-color][90], [border-style][91], [border-width][92], [margin][93], and [padding][94].


    @include directional-property(border, width, 10px null 4px 3px);


### CSS Output


    border-top-width: 10px;
    border-bottom-width: 4px;
    border-left-width: 3px;


## Ellipsis

[View source][95]

This mixin will truncate text, adding an ellipsis to represent overflow. It accepts an optional max-width argument, default max-width is 100%.


    div {
      @include ellipsis(50%);
    }


## Font-family

[View source][96]

Bourbon defines default font-families as variables for the sake of convenience:


    font-family: $helvetica;
    font-family: $georgia;
    font-family: $lucida-grande;
    font-family: $monospace;
    font-family: $verdana;


### CSS Output


    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-family: Georgia, Cambria, "Times New Roman", Times, serif;
    font-family: "Lucida Grande", Tahoma, Verdana, Arial, sans-serif;
    font-family: "Bitstream Vera Sans Mono", Consolas, Courier, monospace;
    font-family: Verdana, Geneva, sans-serif;


## Hide-text

[View Source][97]

Hide-text is an image replacement mixin. It is based off the [HTML5-Boilerplate image-replacement][98].

This image replacement technique is an alternative to the text-indent technique, which has [performance and other benefits][99].


    div {
      @include hide-text;
      background-image: url(logo.png);
    }


## HTML5 Input Types

[View source][100]

This addon provides you with three variables which each contain a list of all html5 input types that render as text-based inputs, excluding textarea. In other words, it allows for easy targeting of all inputs that mimic `input[type="text"]`.

Note: You must use interpolation with the variable—`#{ }`.


    #{$all-text-inputs} {
      border: 1px solid green;
    }

    #{$all-text-inputs-hover} { // Target the :hover pseudo-class
      background: yellow;
    }

    #{$all-text-inputs-focus} { // Target the :focus pseudo-class
      background: white;
    }


### CSS Output


    input[type="email"], input[type="number"],   input[type="password"], input[type="search"],
    input[type="tel"],   input[type="text"],     input[type="url"],      input[type="color"],
    input[type="date"],  input[type="datetime"], input[type="datetime-local"],
    input[type="month"], input[type="time"],     input[type="week"] {
      border: 1px solid green;
    }

    input[type="email"]:hover, input[type="number"]:hover,   input[type="password"]:hover, input[type="search"]:hover,
    input[type="tel"]:hover,   input[type="text"]:hover,     input[type="url"]:hover,      input[type="color"]:hover,
    input[type="date"]:hover,  input[type="datetime"]:hover, input[type="datetime-local"]:hover,
    input[type="month"]:hover, input[type="time"]:hover,     input[type="week"]:hover {
      background: yellow;
    }

    input[type="email"]:focus, input[type="number"]:focus,   input[type="password"]:focus, input[type="search"]:focus,
    input[type="tel"]:focus,   input[type="text"]:focus,     input[type="url"]:focus,      input[type="color"]:focus,
    input[type="date"]:focus,  input[type="datetime"]:focus, input[type="datetime-local"]:focus,
    input[type="month"]:focus, input[type="time"]:focus,     input[type="week"]:focus {
      background: white;
    }


## Inline-block

[View source][101]

Deprecation Warning: The inline-block mixin has been deprecated and will be removed in the next major version release. Bourbon will no longer support IE8 or lower.

The inline-block mixin provides support for the inline-block property in IE6 and IE7.

## Margin

[View source][85]

The margin mixin accepts up to four values, including `null`, and uses the [directional-property][86] mixin to map them to their respective directions.


    @include margin(null 10px 3em 20vh);


### CSS Output


    margin-right: 10px;
    margin-bottom: 3em;
    margin-left: 20vh;


## Padding

[View source][85]

The padding mixin accepts up to four values, including `null`, and uses the [directional-property][86] mixin to map them to their respective directions.


    @include padding(20vh null 10px 3em);


### CSS Output


    padding-top: 20vh;
    padding-bottom: 10px;
    padding-left: 3em;


## Position

[View source][102]

Shorthand notation for setting the position of elements in your page.

The first parameter is optional, with a default value of relative. The second parameter is a space delimited list of values that follow the standard CSS shorthand notation.

Note: null values will be ignored. In the example below, this means that selectors will not be generated for the right and bottom positions, while the top position is set to 0px.

Instead of writing:


    position: relative;
    top: 0px;
    left: 100px;


Your can write:


    @include position(relative, 0px null null 100px);


## Prefixer Settings

[View source][103]

By default, Bourbon outputs all vendor-prefixes specified by each mixin. You can optionally overwrite these global defaults by setting any of these variables to `false` at the top of your stylesheet.


    $prefix-for-webkit:    true;
    $prefix-for-mozilla:   true;
    $prefix-for-microsoft: true;
    $prefix-for-opera:     true;
    $prefix-for-spec:      true;


## Prefixer

[View source][103]

The prefixer is for generating vendor prefixed declarations. The prefixer accepts the following prefixes: `webkit` `moz` `ms` `o` `spec`.


    @mixin box-sizing($box) {
      @include prefixer(box-sizing, $box, webkit moz spec);
    }


### CSS Output


    -webkit-box-sizing: $box;
       -moz-box-sizing: $box;
            box-sizing: $box;


## Retina-image

[View source][104]

The mixin is a helper to generate a retina background-image and non-retina background-image. The retina background-image will output to a hidpi media-query.

The mixin uses a `_2x.png` retina filename by default.
For rails, you can use the asset-pipeline by passing `true` to the argument.

`@ retina-image($filename, $background-size, $extension*, $retina-filename*, $asset-pipeline*)
* = optional`

Argument Defaults

* `$extension: png`
* `$retina-filename: null`
* `$asset-pipeline: false`


    span {
      @include retina-image(home-icon, 32px 20px)
    }


### CSS Output


    span {
      background-image: url(home-icon.png);
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 1.3 / 1), only screen and (min-resolution: 125dpi), only screen and (min-resolution: 1.3dppx) {
      span {
        background-image: url(home-icon_2x.png);
        background-size: 32px 20px; }
    }


## Size

[View source][105]

Width × Height. Accepts all units. Unitless values default to px.


    @include size(25);        // width: 25px; height: 25px;
    @include size(30px 70px); // width: 30px; height: 70px;
    @include size(auto 80px); // width: auto; height: 80px;


## Timing-functions

[View source][106]

These CSS cubic-bezier timing functions are variables that can be used with CSS3 animations and transitions. The provided timing functions are the same as the jQuery UI demo: [easing functions][107].


    @include transition(all 5s $ease-in-circ);


### Demo

* `$ease-in-quad`
* `$ease-out-quad`
* `$ease-in-out-quad`
* `$ease-in-cubic`
* `$ease-out-cubic`
* `$ease-in-out-cubic`
* `$ease-in-quart`
* `$ease-out-quart`
* `$ease-in-out-quart`
* `$ease-in-quint`
* `$ease-out-quint`
* `$ease-in-out-quint`
* `$ease-in-sine`
* `$ease-out-sine`
* `$ease-in-out-sine`
* `$ease-in-expo`
* `$ease-out-expo`
* `$ease-in-out-expo`
* `$ease-in-circ`
* `$ease-out-circ`
* `$ease-in-out-circ`
* `$ease-in-back`
* `$ease-out-back`
* `$ease-in-out-back`

## Triangle

[View source][108]

Creates a visual triangle. Mixin takes `($size, $color, $direction)`

The `$size` argument can take one or two values—`width height`.

The `$color` argument can take one or two values—`foreground-color background-color`.

`$direction: up, down, left, right, up-right, up-left, down-right, down-left`


    @include triangle(12px, gray, down);
    @include triangle(12px 6px, gray lavender, up-left);


### Demo

## Word-wrap

[View Source][109]

The word-wrap mixin makes it easy to force long text (like URLs) to wrap instead of breaking your layout.

It uses the `($word-wrap)`argument, with a default value of `break-word`.


    @include word-wrap;
    @include word-wrap(normal);


[1]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/css3/_animation.scss
[2]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation
[3]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay
[4]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction
[5]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration
[6]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode
[7]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count
[8]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name
[9]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state
[10]: https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function
[11]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/css3/_appearance.scss
[12]: https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-appearance
[13]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/css3/_backface-visibility.scss
[14]: https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility
[15]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/css3/_background.scss
[16]: https://developer.mozilla.org/en-US/docs/Web/CSS/background
[17]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/css3/_background-image.scss
[18]: https://developer.mozilla.org/en-US/docs/Web/CSS/background-image
[19]: http://bourbon.io#linear-gradient-function
[20]: http://bourbon.io#radial-gradient-function
[21]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/css3/_border-image.scss
[22]: https://developer.mozilla.org/en-US/docs/Web/CSS/border-image
[23]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/css3/_border-radius.scss
[24]: https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
[25]: https://github.com/thoughtbot/bourbon/pull/95
[26]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/css3/_box-sizing.scss
[27]: https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
[28]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/css3/_calc.scss
[29]: https://developer.mozilla.org/en-US/docs/Web/CSS/calc
[30]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/css3/_columns.scss
[31]: https://developer.mozilla.org/en-US/docs/Web/CSS/columns
[32]: http://bourbon.io#complete-list-mixins
[33]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/css3/_filter.scss
[34]: https://developer.mozilla.org/en-US/docs/Web/CSS/filter
[35]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/css3/_flex-box.scss
[36]: https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Flexible_boxes
[37]: http://www.w3.org/TR/2014/WD-css-flexbox-1-20140325/
[38]: http://www.w3.org/TR/2009/WD-css3-flexbox-20090723/
[39]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/css3/_font-face.scss
[40]: https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face
[41]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/css3/_font-feature-settings.scss
[42]: https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings
[43]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/css3/_hidpi-media-query.scss
[44]: https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries#resolution
[45]: http://bjango.com/articles/min-device-pixel-ratio/
[46]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/css3/_hyphens.scss
[47]: https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens
[48]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/css3/_image-rendering.scss
[49]: https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering
[50]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/css3/_keyframes.scss
[51]: https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes
[52]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/css3/_linear-gradient.scss
[53]: https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient
[54]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/css3/_perspective.scss
[55]: https://developer.mozilla.org/en-US/docs/Web/CSS/perspective
[56]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/css3/_placeholder.scss
[57]: https://developer.mozilla.org/en-US/docs/Web/CSS/::-moz-placeholder
[58]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/css3/_radial-gradient.scss
[59]: https://developer.mozilla.org/en-US/docs/Web/CSS/radial-gradient
[60]: http://bourbon.io#background-image
[61]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/css3/_transform.scss
[62]: https://developer.mozilla.org/en-US/docs/Web/CSS/transform
[63]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/css3/_transition.scss
[64]: https://developer.mozilla.org/en-US/docs/Web/CSS/transition
[65]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/css3/_user-select.scss
[66]: https://developer.mozilla.org/en-US/docs/Web/CSS/user-select
[67]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/functions/_flex-grid.scss
[68]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/functions/_modular-scale.scss
[69]: http://modularscale.com/
[70]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/functions/_grid-width.scss
[71]: http://gridulator.com/
[72]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/functions/_linear-gradient.scss
[73]: http://bourbon.io#linear-gradient
[74]: http://goldenratiocalculator.com/
[75]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/functions/_px-to-em.scss
[76]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/functions/_px-to-rem.scss
[77]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/functions/_radial-gradient.scss
[78]: http://bourbon.io#radial-gradient
[79]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/functions/_strip-units.scss
[80]: http://bourbon.io#px-to-em
[81]: http://bourbon.io#px-to-rem
[82]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/functions/_tint-shade.scss
[83]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/functions/_unpack.scss
[84]: http://bourbon.io#position
[85]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/addons/_directional-values.scss
[86]: http://bourbon.io#directional-property
[87]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/addons/_button.scss
[88]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/addons/_clearfix.scss
[89]: http://nicolasgallagher.com/micro-clearfix-hack/
[90]: http://bourbon.io#border-color
[91]: http://bourbon.io#border-style
[92]: http://bourbon.io#border-width
[93]: http://bourbon.io#margin
[94]: http://bourbon.io#padding
[95]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/addons/_ellipsis.scss
[96]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/addons/_font-family.scss
[97]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/addons/_hide-text.scss
[98]: https://github.com/h5bp/html5-boilerplate/commit/aa0396eae757c9e03dda4e463fb0d4db5a5f82d7
[99]: http://nicolasgallagher.com/another-css-image-replacement-technique/
[100]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/addons/_html5-input-types.scss
[101]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/css3/_inline-block.scss
[102]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/addons/_position.scss
[103]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/addons/_prefixer.scss
[104]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/addons/_retina-image.scss
[105]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/addons/_size.scss
[106]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/addons/_timing-functions.scss
[107]: http://jqueryui.com/resources/demos/effect/easing.html
[108]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/addons/_triangle.scss
[109]: https://github.com/thoughtbot/bourbon/blob/master/app/assets/stylesheets/addons/_word-wrap.scss
  