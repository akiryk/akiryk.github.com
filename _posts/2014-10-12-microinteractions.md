---
layout: post
title: Bus Ride Reads — Microinteractions
teaser: Bus ride reads is an occasional series in which I discuss a design or ux book I've been reading on my commute. In this post, I'll talk about Microinteractions, a book by Dan Saffer about little details that play an outsized role.
hero: hero
hero-caption: Book cover detail
assets: "9-14-microinteractions"
category: blog
tags : [bus-ride-reads, UX]
---
<p style="font-style: italic;"><a href="/tag/bus-ride-reads/">Bus ride reads</a> is an occasional series in which I discuss a design or ux book I've been reading on my commute. More recap than review, my goal is to capture the key ideas that stand out for me, and to explore how those ideas relate to my own work whenever possible. </p>

Microinteractions, by Dan Saffer, is about little details that make a huge difference. If you’ve ever looked through the tumblr [Little Big Details](http://littlebigdetails.com/), you have a decent idea of the kind of thing it covers — and the book is full of examples from that site. But whereas Little Big Details typically celebrates unexpected moments of delight or humor, Microinteractions stresses the role small things play in the overall success of a technology. 

First, as the name implies, a microinteraction is a little bitty thing, usually — but not always — part of a larger feature. From the book: "A music player is a feature; adjusting the volume is a microinteraction.” Because such interactions are small and highly focused, they can and should be at the pinnacle of simplicity and ease-of-use. The book’s thesis is that well-polished micro interactions not only help make products great, but can become “signature” moments in their own right — key elements in making something truly stand out. 

There are four parts of a micro interaction. The trigger, rules, feedback, and loops and modes. 

The trigger is fairly self-explanatory. It could be a button that says “log in” or it could be a camera icon that opens a smartphone camera. Triggers can be super obvious, like the public transit kiosks with a giant “touch me” call-to-action, or they can be hidden, like with Google Maps for iOS, where shaking the phone is a invisible trigger for giving feedback. As a designer, you have to strike a balance where the interface is clean and simple and scannable enough that users can easily do the main tasks they want to do, yet not so minimal that the key functionality is  lost. How to determine when to be self-evident and when to be subtle is obviously a trick. Saffer quotes what he calls a golden rule:

<blockquote>Microinteractions that most people do, most often, should be highly discoverable.<br/><br/>
Microinteractions that some people do, somewhat often, should be easily discoverable.<br/><br/>
Microinteractions that few people do, infrequently, should take some searching to find.</blockquote>

This seems hard to argue with, although sometimes designers have to guess about what things people will do most often, or even about what counts as highly discoverable. I love the way we’ve handled the scrubber on our NPR One app. It doesn’t need a giant trigger because it’s infrequently used. But for those people who do want to scrub, it’s a little small for easy handling. The solution is to toggle between minimized and maximized states — as soon as you tap it, the scrubber expands and becomes much easier to use widget. It’s the best of both worlds, because we keep the interface uncluttered yet still make it highly findable. 

Saffer has several principles of good trigger design. I won’t list them all, but a couple seem worth noting.

The trigger should initiate the same action every time. Apparently, the Galaxy S Note has icons that display different menus  depending on when you click on them, which is confusing and counterproductive because it prevents users from developing an accurate mental model of how the micro interaction works.

Not to harp on iPhoto too much, but they suffer from this problem as well. Clicking on the “Share” item in the upper-left set of options displays a sub-menu with Facebook, Flickr, and the like. 

{% assign photo="share1" %}
{% assign caption ="iPhoto has two share triggers, but they don't do the same thing."; %}
{% include custom/pic_normal %}

Clicking on the “Share” item in the lower right set of options displays a sub-menu with the same options but also others, including buttons to create a book, order prints, or make an album. If a user has learned that “share” means share on social media, how likely is it they’ll click the share button when trying to create a book? 

{% assign photo="share2" %}
{% assign caption ="Unlike 'share' above, this one enables user to make books, cards, and other assets."; %}
{% include custom/pic_normal %}

The trigger should bring the data forward. This is a cool idea and worth aiming to do when it makes sense, as in a notifications badge that is first a trigger to view messages and second an indicator of how many messages you have. This can also work really well with button labels, as in a donate button that says  “Donate $200” or “Donate $16.66 per month” depending on what the user has selected.

As a counter-example, Dropbox does not bring data forward in its trigger for viewing a folder — you just see a plain folder icon. This can be kind of frustrating because it suggests there’s contents that doesn't actually exist, as in the Bully From Space folder, which is empty. In the image below, I’ve contrasted the default display with a simple variation that brings some data forward, in this case data about the contents of the directory.

{% assign photo="dropbox" %}
{% assign caption ="In this animated gif, notice how we can improve Dropbox's design by bringing data forward. Adding nothing more than a number to the folder icon enables us to see that one folder is empty and the other has content. "; %}
{% include custom/gif_normal %}

<strong>Rules</strong>
Every micro interaction has to have rules. Some are very simple: only show the login button if a user isn’t already logged in. Some are more complex: only show the option to translate a web page if it's in a language other than the user’s default. Saffer’s general advice is to limit options so that the rules stay simple. The whole idea of a micro interaction is to do one small thing really well, so you want to be careful of trying to do to much. 

In my Gronster drawing game, I built some shortcuts for changing the color and size of the brush, but I didn’t want to over-complicate the experience by making everyone read through a paragraph of help text. Instead, I created a rule that says: if a user changes the size of their brush more than two times, show them a little help tip explaining the shortcut. 

{% assign photo="gronster" %}
{% assign caption ="Not all users will want to be bothered by remembering  keyboard shortcuts, so Gronster doesn't display them. On the other hand, users who change colors regularly are more likely to benefit. There's a rule for that."; %}
{% include custom/pic_normal %}

<strong>An ounce of prevention...</strong>
In interactions that user-input, there’s the possibility of errors. Certainly, one can always fall back on the old error message — in many cases, they’re unavoidable. But it’s better to eliminate the chance of errors if at all possible. For example, when pasting a url into a field in this internal NPR app, we don’t give an error if the user forgets to add the ‘http://' part, we do it for them. 

<strong>Absorb complexity</strong> Basically, if the computer can help out users by making a calculation or identifying a reasonable default, do it. 

<strong>Controls and User Input</strong>
I found Saffer’s discussion of operational simplicity vs. perceived simplicity to be a bit confusing, but I think I can explain what he means. In this image of two blenders, the old one with all the buttons would be considered operationally simple because it gives every command its own control. The Vitamix would have perceived simplicity because a single control (the middle dial) enables several actions. It’s hard to think of many examples of operational simplicity being preferable in the type of digital interfaces I’m involved in designing, but I can think of at least one: the NPR One app.

{% assign photo="npr-2-phone" %}
{% assign caption ="NPR One features operational simplicity — a single button for skipping back and another for skipping ahead."; %}
{% include custom/pic_push %}

The NPR One app contains a single button for jumping back 15 seconds and another button for skipping ahead to the next story. We at NPR could have done this differently — say, providing a single scrubber representing a full hour of programming, and letting users drag the playhead forward or back as they saw fit. But, of course, that would have actually been much less easy for users and would have missed the point of a simple and elegant micro interaction. 

How to decide when to go for operational simplicity or perceived simplicity? Saffer says:

For micro interactions that will be done repeatedly, err on the side of perceived simplicity, unless it is an action that needs to be done quickly and with no chance of error — for example, the Mute button on a conference phone; combing it with the Make Quieter action would probably be a disaster. For micro interactions that will only be done once or occasionally, err on the side of operational simplicity; display all the options so that little to no foreknowledge is required.

I think this makes sense. With NPR One, most people just listen and don’t skip ahead or rewind very often; however, when you need to do one of those things, we’ve reduced or eliminated the amount of necessary foreknowledge.

<strong>Feedback</strong> We need to provide feedback to our users that their action has had an effect. Sometimes this is embedded in the micro-interaction and no additional feedback is necessary — for example, if I click “pause” on Spotify, the music stops. I don’t need it to tell me, “Hey, we’ve stopped the music.” On the other hand, many interactions aren’t so clearcut. If I click on an Add to Cart button on a shopping experience, I’ll need some kind of feedback that my action was successful. 

{% assign photo="shopping-cart" %}
{% assign caption ="Saffer cautions against using animations to communicate feedback unless the information is critical. Debatable in this case, but it's not a bad implementation."; %}
{% include custom/gif_normal %}

Two ideas stand out to me from this section. 1. With feedback, less is often more. Giving users too much information at the wrong time can be confusing, so aim to provide the least amount of feedback necessary to communicate what’s going on. Simply showing a little cart icon with a number 1 in it might be all you need to do to indicate success rather than an actual animation.

2. “Use the overlooked as a means of message delivery.” I’d love to see more of this, and there are probably a variety of ways to do this in projects I’m currently working on. For example, a ‘loading’ screen could be  a place to add some useful information. A simple spinner indicates that something is happening, but what? Perhaps show progress in a meaningful way or at least explain what is happening. 

The last section of the book is about loops and modes. Loops are all the micro interactions that occur in some kind of repeating way — an alarm, say. Modes are different states of an interface — like normal vs edit. Saffer cautions that modes can cause confusion, because the same or similar triggers can behave in new ways. For example, in the Stitcher podcast app, the normal behavior for clicking on a podcast is to display options related to that podcast — save for later, view all, etc. But in the edit mode, clicking on a podcast does nothing. I think Stitcher does a reasonably good job with this, because they make it really clear when you’re in edit mode, but it’s a worthwhile thinking hard about how best to handle modes. 

The book covers a lot more than what I’ve mentioned here, but these are the things that stood out most to me. It’s important to design triggers carefully, to use them consistently, and to make give them the right degree of discoverability. Every micro interaction has rules, and they can quickly become difficult to manage, so it’s important to keep them simple whenever possible. Think creatively about how to give feedback, using overlooked design elements or moments of down-time to convey the right amount of information.   