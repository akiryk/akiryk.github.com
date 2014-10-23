---
layout: post
title: The Best Pledge Experience Ever, Part 2
teaser: In my last post about the donation experience, I gave a variety of examples of best and worst practices. In this post, I’d like to sketch out an example site that pulls all the best practices together. It’s just an example, so I’m going to invent a classical-music format public radio station and pretend they’re amenable to my recommendations. However, this being public radio, I’ll work within some constraints that would be silly to ignore.
hero: hero
assets: "9-2014-pledge2"
category: blog
tags : [ux, design, nonprofits, npr]
---

In my [last post](/blog/2014/09/16/pledge-part-1/) about the donation experience, I gave a variety of examples of best and worst practices. In this post, I’d like to sketch out an example site that pulls all the best practices together. It’s just an example, so I’m going to invent a classical-music format public radio station and pretend they’re amenable to my recommendations. However, this being public radio, I’ll work within some constraints that would be silly to ignore.

First, I’ll assume this station wants to give thank-you gifts (you know, those mugs and tote-bags). It makes the experience more complicated and it isn't really that common among other non-profit organizations, but it’s in the public radio DNA. It needs to be there. In any case, I’ll keep the gift selection process simple, as it should be — this station won’t offer 30+ gift options like some I can think of. (See [part 3](/blog/2014/10/07/pledge-part-3/) for more on this).

Next, I’ll assume there are multiple ways to give support. You can give money, sure, but you can also give real-estate, stocks, an old car — or you could volunteer time. I’ll have to find a way to let users find these various ways without distracting from the primary goal of getting cash donations. 

Okay, let’s start with how users get to the form. There should be a prominent button somewhere in the header that says “donate” or, if not that, something clear and explicit. If an organization has a clean and open header, it might be possible to include “other ways to give” as a discrete link beside the button that can drive to a page that covers the full gamut of options. 

{% assign photo="donate-button" %}
{% assign caption ="Here's a wireframe showing one way to make it possible for users to find other ways to give support. Donate is primary, but other ways to give are findable."; %}
{% include custom/pic_normal %}

However, I think a better solution would be to have an item in the navigation called something like “Ways to Give.” It could be a drop down menu that contained links to specific things: Donate your car, Volunteer, Give stock, whatever. I prefer this because it allows each type of support to get its own dedicated place. For example, if a user clicked “volunteer,” we could take them to a page where they could enter times and dates when they were available to help.

{% assign photo="drawing" %}
{% assign caption ="In addition to the donate button, provide an item in nav-bar that says 'Ways to give.' On click, reveal a dropdown menu with various choices (donate, volunteer, give your car, etc), each one going to a dedicated page."; %}
{% include custom/pic_normal %}

This makes sense, because the things we want many people to do most often (donating) should be highly discoverable, whereas things that fewer people do with less frequency should take some searching to find (paraphrased from Microinteractions, p30). Trying to make everything highly discoverable is self-defeating because it only creates clutter and confusion. Focus, man!

Great, so a user clicks on the donate button and goes straight to a page where they can donate. This page should have certain characteristics. 

* It should be free of clutter and distractions
* It should require the user to do as little work as possible
* It should be easy to use on a smartphone or tablet
* It should reinforce the user’s desire to give, if it doesn’t interfere with the other three goals

Below are a couple of snapshots illustrating a two-step process — choose a donation level and then enter payment details. Starting at the top, there’s a logo and a tagline, but no navigation or other links. This is by design: we want to reduce distractions and keep people on this page. We need the logo to give supporters a sense of place, to let them know they’re giving money to the group they intend to support. The tagline we could possibly do without, but it’s understated, and it contributes to objective #4 in that it reminds users of why they support this station. 

{% assign photo="two-panes" %}
{% assign caption ="Here are the two views — first a user selects an amount to donate, then they enter payment details."; %}
{% include custom/pic_large %}

As mentioned, we’re offering thank-you gifts, and they add some inevitable complexity to the interaction. At the very least, we have to explain what they are — a cd or tickets to a performance. We may also have to provide users with a chance to opt-out — no perk for me, thanks. We probably also have to explain the gifts in a more general sense: we aren’t selling them, they’re little perks or rewards for our supporters.

Given these challenges, the form is about as simple and frictionless as it gets. To start, we only ask supporters a single question — how much do you want to give? Actually, we make it even easier by defaulting to an amount we believe most users will select, in this case $100.

Explaining the nature of the thank-you gifts is handled with the heading, “Donate and get a gift.” It’s brief and clear, and means we don’t need to put an additional label above the column of gifts or next to each item. Further, these gifts aren’t just random tote bags and tee-shirts. If this is a classical music station, let’s give rewards that enhance our brand — things related to music, like a cd, performance tickets, or fancy headphones. And we can always send a mug or tote-bag (with branding!) for the smaller donations.

{% assign photo="no-gift" %}
{% assign caption ="Notice how 'No gift, thank you' gets displayed once the $100 amount is selected."; %}
{% include custom/gif_normal %}

Note the micro interaction, in which clicking on an amount reveals an otherwise hidden option not to receive the gift. One might argue this belongs at the top of the page just below the heading, but placing it there would create a minor speed bump I’d rather avoid, a tiny decision we’d be asking every supporter to make before even looking at the gift options. 

Handling payment details requires at least a few inputs, so let’s make sure we only ask supporters for information we really need. Rather than separate fields for first and last name, one field gets it all. Rather than asking for credit card brand, we can figure it out based on the number. Rather than making users scroll through an endless drop down menu of countries, we can provide a smart default and radio buttons for the most common ones based on our target audience (clicking “other" might expose a drop down menu). Rather than making everyone fill out all fields of the address, we can hit the google maps API and pre-populate city, state, and zip code based on street address. 

Is it better to divide the flow into two parts, as I’ve done here? That's a reasonable question — certainly, breaking a long form into too many little pieces can be frustrating for users. However, in this case I see a couple of advantages. First, if the supporter opts not to receive a thank-you gift, we don’t really need to ask for shipping details and could simply remove that part of the second page. Second, it lets us chunk the form into easily digestible pieces. A common criticism of multipart form is that users don’t get a sense of how much they still have to complete. In this case, there are only two parts and there’s an easy-to-find back button, so I don’t believe it’s a problem. 

{% assign photo="monthly-anim" %}
{% assign caption ="The button text changes as a user toggles between monthly and one-time payments."; %}
{% include custom/gif_normal %}

Finally, the donate button (above) is specific and helpful. And for users who’d like to pay monthly, we’ve done the math for them.

{% assign photo="mobile" %}
{% assign caption =""; %}
{% include custom/pic_pull %}

I won’t say too much about designing for mobile, since I covered most of what should be done in my [last post](/blog/2014/09/16/pledge-part-1/). The form should be responsive and take advantage of html5 input types. At large screen sizes, it might make sense to use imagery to make an emotional connection with supporters and reinforce their intent to give. This is a hard one, since radio isn’t a particularly visual medium — it’s not like an anti-hunger charity that could show a child receiving food. But it’s worth exploring, perhaps showing classical music imagery for a classical station like in this example. 

There you have it. A streamlined donation experience complete with various ways to give, gift premiums, and a payment form. The emphasis is on giving, as it should be, but I can imagine some stations would prefer offering more gifts in the hope of up-selling supporters on a larger donation. Does that work? I have some doubts, and I’ll explore them in a next post about how to handle a more robust set of premiums.

{% assign photo="desktop" %}
{% include custom/pic_large %}

