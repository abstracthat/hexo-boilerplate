title: Jade Templating Engine Documentation
date: 2014-04-01 13:53:31
category: Documentation
tags: 
  - Jade
---

Welcome to the Jade templating engine. Jade is designed primarily for server side templating in node.js, however it can be used in many other environments.
<!--more-->

### doctype

To add a doctype use `doctype` followed by an optional value (which defaults to `html`). The shorthand `!!!` has been deprecated.

There are shortcuts for commonly used doctypes:

xml
: 

transitional
: 

strict
: 

frameset
: 

1.1
: 

basic
: 

mobile
: 

You can also use your own literal custom doctype:


    doctype html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN"


    

### Tags

By default, text at the start of a line (or after only white space) represents an html tag. Indented tags are nested, creating the tree like structure of html.


    ul
      li Item A
      li Item B
      li Item C


    
      Item A
      Item B
      Item C
    


Jade also knows which elements are self closing:

#### Block Expansion

To save space, jade provides an inline syntax for nested tags.

### Attributes

Tag attributes look similar to html, however their values are just regular JavaScript.


    a(href='google.com') Google
    a(class='button', href='google.com') Google


    Google
    Google


All the normal JavaScript expressions work fine too:


    - var authenticated = true
    body(class=authenticated?'authed':'anon')


    


#### Boolean Attributes

Boolean attributes are mirrored by Jade, and accept bools, aka `true` or `false`. When no value is specified true is assumed.


    input(type='checkbox', checked)
    input(type='checkbox', checked=true)
    input(type='checkbox', checked=false)
    input(type='checkbox', checked=true.toString())


    
    
    
    


If the doctype is `html` jade knows not to mirror the attribute and uses the terse style (understood by all browsers).


    doctype html
    input(type='checkbox', checked)
    input(type='checkbox', checked=true)
    input(type='checkbox', checked=false)
    input(type='checkbox', checked=true &amp;&amp; 'checked')


    
    
    
    
    


#### Class Attributes

The `class` attribute can be a string (like any normal attribute) but it can also be an array of class names, which is handy when generated from JavaScript.


    - var classes = ['foo', 'bar', 'baz']
    a(class=classes)

    a.bing(class=classes class=['bing'])


    
    


#### Class Literal

Classes may be defined using a `.classname` syntax:

Since div's are such a common choice of tag, it is the default if you omit the tag name:


    


#### ID Literal

IDs may be defined using a `#idname` syntax:

Since div's are such a common choice of tag, it is the default if you omit the tag name:

### Plain Text

Jade provides three common ways of getting plain text. They are useful in different situations

#### Piped Text

The simplest way of adding plain text to templates is to prefix the line with a `|` character (pronounced "pipe").


    | Plain text can include html
    p
      | It must always be on its own line


    Plain text can include html
    It must always be on its own line


#### Inline in a Tag

Since it's a common use case, you can put text in a tag just by adding it inline after a space.


    p Plain text can include html


    Plain text can include html


#### Block in a Tag

Often you might want large blocks of text within a tag. A good example is with inline scripts or styles. To do this, just add a `.` after the tag (with no preceding space):


    script.
      if (usingJade)
        console.log('you are awesome')
      else
        console.log('use jade')


    
      if (usingJade)
        console.log('you are awesome')
      else
        console.log('use jade')
    

### Code

Jade makes it possible to write inline JavaScript code in your templates. There are three types of code.

#### Unbuffered Code

Unbuffered code starts with `-` does not add any output directly, e.g.


    - for (var x = 0; x &lt; 3; x++)
      li item


    item
    item
    item


#### Buffered Code

Buffered code starts with `=` and outputs the result of evaluating the JavaScript expression in the template. For security, it is first HTML escaped:


    p
      = 'This code is !'


    This code is &lt;escaped&gt;!


It can also be written inline with attributes, and supports the full range of JavaScript expressions:


    p= 'This code is' + ' !'


    This code is &lt;escaped&gt;!


#### Unescaped Buffered Code

Unescaped buffered code starts with `!=` and outputs the result of evaluating the JavaScript expression in the template. This does not do any escaping, so is not safe for user input:


    p
      != 'This code is not escaped!'


    This code is not escaped!


It can also be written inline with attributes, and supports the full range of JavaScript expressions:


    p!= 'This code is not escaped!'


    This code is not escaped!


Single line comments look the same as JavaScript comments and must be placed on their own line:

Jade also supports unbuffered comments, by simply adding a hyphen

A block comment is legal as well:

### Conditionals

Jade's first-class conditional syntax allows for optional parenthesis, and you may now omit the leading `-` otherwise it's identical, still just regular javascript:


    - var user = { description: 'foo bar baz' }
    #user
      if user.description
        h2 Description
        p.description= user.description
      else
        h1 Description
        p.description User has no description


    
      Description
      foo bar baz
    


Jade also provides a negated version `unless` (the following are therefore equivalent):


    unless user.isAnonymous
      p You're logged in as #{user.name}


    if !user.isAnonymous
      p You're logged in as #{user.name}

### Iteration

Jade's first-class iteration syntax makes it easier to iterate over arrays and objects within a template:


    ul
      each val in [1, 2, 3, 4, 5]
        li= val


    
      1
      2
      3
      4
      5
    


You can also get the index as you iterate:


    ul
      each val, index in ['zero', 'one', 'two']
        li= index + ': ' + val


    
      0: zero
      1: one
      2: two
    


Jade also lets you iterate over the keys in an object:


    ul
      each val, index in {1:'one',2:'two',3:'three'}
        li= index + ': ' + val


    
      1: one
      2: two
      3: three
    


The object or array to iterate over is just plain JavaScript so it can be a variable or the result of a function call as well.

### Case

The case statement is a shorthand for JavaScript's `switch` statement and takes the following form:


    - var friends = 10
    case friends
      when 0
        p you have no friends
      when 1
        p you have a friend
      default
        p you have #{friends} friends


    you have 10 friends


#### Case Fall Through

You can use fall through just like in a select statement in JavaScript


    - var friends = 0
    case friends
      when 0
      when 1
        p you have very few
      default
        p you have #{friends} friends


    you have very few friends


#### Block Expansion

Block expansion may also be used:


    - var friends = 1
    case friends
      when 0: p you have no friends
      when 1: p you have a friend
      default: p you have #{friends} friends

### Filters

Filters let you use other languages within a jade template. They take a block of plain text as an input.


    :markdown


    I often like including markdown documents.
    script
      :coffee
        console.log 'This is coffee script'


    Markdown
    I often like including markdown documents.
    console.log('This is coffee script')

### Mixins

Mixins allow you to create reusable blocks of jade.


    mixin list
      ul
        li foo
        li bar
        li baz

    +list()
    +list()


    
      foo
      bar
      baz
    
    
      foo
      bar
      baz
    


They are compiled to functions and can take arguments:


    mixin pets(pets)
      ul.pets
        - each pet in pets
          li= pet
    +pets(['cat', 'dog', 'pig'])


    
      cat
      dog
      pig
    


Mixins can also take a block of jade to act as the content:


    mixin article(title)
      .article
        .article-wrapper
          h1= title
          if block
            block
          else
            p No content provided

    +article('Hello world')

    +article('Hello world')
      p This is my
      p Amazing article


    
      
        Hello world
        No content provided
      
    

    
      
        Hello world
        This is my
        Amazing article
      
    


Mixins also get an implicit attributes argument taken from the attributes passed to the mixin:


    mixin link(href, name)
      a(class!=attributes.class, href=href)= name

    +link('/foo', 'foo')(class="btn")


    foo

### Includes

Includes allow you to insert the contents of one jade file into another.


    doctype html
    html
      include includes/head
    body
      h1 My Site
      p Welcome to my super lame site.
      include includes/foot


    head
      title My Site
      script(src='/javascripts/jquery.js')
      script(src='/javascripts/app.js')



    #footer
      p Copyright (c) foobar


    
    
      
        My Site
        
        
      
      
        My Site
        Welcome to my super lame site.
        
          Copyright (c) foobar
        
      
      