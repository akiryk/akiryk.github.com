---
layout: post
title: The Best Pledge Experience Ever, Part 3
teaser: I’ve just written a couple of posts about donation forms and the online donation experience, and there’s still a big piece I haven’t explored. Is it possible to prod supporters into giving larger donations by up-selling them more “expensive” premiums — thank-you gifts like concert tickets, hand-crafted tote bags, or cases of wine? 
hero: 
hero-caption: 
assets: "9-2014-pledge3"
category: blog
tags : [ux, design, nonprofits, npr]
---
I’ve just written a couple of posts about the online donation experience — [one](/blog/2014/09/16/pledge-part-1/) about best and worst practices and [another](/blog/2014/09/28/pledge-part-2/) that presents a sample best-case approach. There’s still a big piece I haven’t explored. A particularly thorny problem my team has grappled with at work:  is it possible to prod supporters into giving larger donations by up-selling them more “expensive” premiums — thank-you gifts like concert tickets, hand-crafted tote bags, or cases of wine? 

Or what about up-selling a greater variety of the normal sort of premiums — a black tote bag as well as a cream colored one, perhaps one in organic cotton and the other synthetic? 

And is it possible to do this without making the experience cumbersome and confusing or losing sight of the main objective, which is to collect a donation? 

The short answer is no. The long answer is… well, read on.
<div class="marginator">
  <p>
    In my <a href="/blog/2014/09/28/pledge-part-2/">last post</a>, I proposed solving the question of thank-you gifts by limiting them to just a few simple and brand-appropriate items. In other words, a public radio station could offer $50-donors a mug with the station logo or $100-donors tickets to a station-sponsored concert event — and that’s just fine. It strengthens your brand in the minds of supporters and doesn’t add any real work on their part to complete the donation experience. 
  </p>
  <div class="marginalia">
    <p><span class="margin-heading">The value of premiums </span>Nonprofit consultancy M+R <a href="http://www.mrss.com/lab/the-power-of-the-premium-convincing-prospective-donors-to-give/">studied 4 nonprofits</a>, and found that a small selection of appropriate premiums — like in my earlier post — can help increase donations.
    </p></div>
</div>

• Every thank-you gift has an associated donation requirement (e.g. you have to give at least $50 to get the tote-bag).

• A supporter/shopper can select as many gifts as they’d like.

• For any item, a supporter/shopper can choose from among multiple attributes (color, size, material, etc).

• The donation amount may need to change to reflect the premiums selected. For example, a tee-shirt requires a minimum donation of $50; you selected three; your donation needs to climb to $150.
 
I think this is crazy. 

In this post, I’m going to explore how to provide the best user experience possible for the premiums-situation described above, but first I need to explain why I think this approach to handling premiums is nuts. 

{% assign quote = "Why would you sidetrack would-be donors away from giving and into a bad shopping experience?" %}
{% include custom/pull_quote %}

It’s nuts because it sidetracks would-be donors from making a simple donation and forces them instead into a bad online retail experience. Simple as that. It would be better to thank them with a basic tote and turn them into a regular supporter than to try and compete in the online shopping game.

Do we have to offer a <em>bad</em> online retail experience? Perhaps we can make it good. No. There are laws of retail physics that can’t be broken, and online giving tends to break at least one of them.

Retail physics law #1: a good shopping experience requires that you sell something customers want. Often, this means specializing in a limited category of things — [bicycles](https://www.missionbicycle.com/), say. You attract customers who want to shop for a bicycle. Alternately, you carry a truly wide range of stuff, like Amazon or Target, where shoppers know they’ll find it no matter what it is. Nobody shops at a store carrying a miscellaneous array of mugs, tote-bags, and umbrellas. 

There’s the occasional exception: many museums have successful stores. A good [museum store](http://www.momastore.org/) makes money for the institution by selling a somewhat random selection of things. The difference is a) it’s a very well-curated selection of things; b) each of those things typically has something to do with the focus of the museum; c) it’s a store, and clearly distinct from the institution's donation process — ultimately, you shop there because they have things you want to buy, not because you’re trying to support the museum.

Retail physics law #2: people want to shop first, then pay. Imagine walking into Whole Foods and being told to pay first. How much should you pay? Guess too high and you won’t get your money’s worth. Guess too low and you’ll waste time shopping for things you can’t carry home. You’d never do it. 

When it comes to shopping for premiums, there are a few ways to handle this pay-first situation. Unfortunately, none are very satisfactory.

<h3>Potential Solution 1</h3> 

The most obvious solution would simply be to let supporters shop first and then calculate their donation based on what’s been added to the cart. In other words, turn it into a shopping experience. Add a cd to your cart and your donation climbs to $50. Add a pair of tickets to opening night at the symphony, it grows to $500. It’s fair, it works, and it makes sense. Success!

Wait. Really? We’ve now gone from letting people choose their thank-you gifts to creating a full-on shopping experience. Which misses the point in a major way. We want our supporters to donate, not shop. <em>Our supporters</em> want to donate, not shop. Sure, it’s possible to do what I’ve described, but does your nonprofit really have the expertise, interest, or bandwidth to make it work?

{% assign photo="user-alt" %}
{% assign caption ="Other issues: it's kind of weird to drive users to a shopping site with a call-to-action like 'donate.' Should you say 'shop and donate'? Do you need an additional site dedicated to traditional donations?"; %}
{% include custom/pic_normal %}

And don’t forget about retail law #1 — sell stuff people want. Nobody wants to “shop” at a store offering only random tote-bags and the like. You’d have to think about finding and maintaining inventory that could actually be sold. Ugh. This causes more headaches than it solves.

<h3>Potential Solution 2</h3>
The most user-friendly solution would be to let supporters choose the amount they want to give and then display only the thank-you gifts they can actually “afford.” That is, if I say I want to give $50, you let me choose from a mug or a tote-bag or a bumper-sticker. If I plan to give $100, you add a few more items to the list: a cd, tickets, something else. That works pretty well, and has a precedent in shopping — think of sites where you can filter results and only shop for cameras under $100 or whatever. 

{% assign quote = "This solution is basically sound, except that it kills the chance to up-sell." %}
{% include custom/push_quote %}

This solution is basically sound, except that it kills the chance to up-sell, which is ostensibly the point of offering a large selection of premiums. If your nonprofit isn’t going to benefit from offering a richer selection of premiums, why go to the trouble? And it is trouble. You’ll need staff to maintain a more complex inventory; you’ll need a backend to your website that can handle the variety of choices; and of course there will be more chances to make a mistake — send the wrong thing or forget to order more of something that’s running low. 

There’s another thing. One of our business rules says users should be able to select more than one of an item. We can easily hide $100 thank-you gifts from a $50 donor, but what if that donor wants two of the lower-value gifts? Well, they'd need to give $100, so we have to either show them an error message or increase their donation or both. It’s no longer such a clean operation.  

<h3>Potential Solution 3</h3>
Let our supporters select how much they want to give first, then let them select one or more thank-you gifts from the full collection — enabling the possibility that we up-sell some to a higher level. If you say you want to give $50 and then choose a gift at the $100 level, we’ll increase your donation to $100. Works well for our nonprofit — but risks pissing off supporters.

There’s really only one way to manage this scenario, and that’s to be as transparent as possible. We have to make it clear to our supporters that their donation goes up or down based on the premiums they select. And we have to make it easy for them to remove premiums to reach a comfortable level of giving.

<div class="marginator">
  <p>
    We can do this by interrupting supporters when they’ve gone over their limit — say, with an error message: “hey, we just increased your donation to $75!” If we want to err on the side of ensuring they truly understand, we could force them to say yes or no, as in, “Are you sure you want to give $75 and receive this gift? Yes, No.” 
  </p>
  <div class="marginalia">
    <p><span class="margin-heading">Uber's surge warning </span>To ensure users are aware of price surges, Uber requires that you <a href="http://www.phillymag.com/news/2013/12/18/uber-surge-pricing/">manually key-in the price multiple</a>.
    </p></div>
</div>

{% assign photo="modal" %}
{% assign caption ="This wireframe shows how we could prevent users from continueing without first consenting to the larger donation amount. It's a heavy-handed solution."; %}
{% include custom/pic_normal %}

These methods work okay, but they’re flawed because they make it too easy for users to create errors. We want our supporters to have a smooth and successful giving experience. Cluttering that experience with alerts and warnings doesn’t help. Ideally, we’d make it so that errors weren’t possible. For example, we could hide the high-donation gifts from low-donation supporters as in solution 2 above. Of course, we’ve been through this already, and that won’t work for our requirements. 

Which brings us to our last best hope for a reasonable solution. A way to lead with the donation, let supporters choose whatever gifts they want, and ensure supporters don’t walk away resentful. Here it is. Ahem.

A user, let’s call her Kathy, comes to our donation page. Looking it over, she can see that we’ve already made some guesses about what she’d like to do — we’ve set a default donation of $75, which is indicated in both the form and in a summary panel. That's a little high for her, so she changes to $25. (She may or may not notice the number in upper left corner — I'll call it the summary panel — but that's okay for now). 

{% assign photo="select-amount" %}
{% assign caption ="This wireframe suggests how a summary area could help inform users of any changes to their donation amount."; %}
{% include custom/gif_normal %}

She scrolls down the page a bit, and sees that we offer a variety of thank-you gifts organized by value. They're clearly labeled, so she can tell which are in the $50 category, which are in the $100 category, and which are in the $250 category.

She likes something in the $50 group and clicks ‘add to cart.’ This triggers a change in the summary panel, where the donation climbs to $50 and the shopping cart icon, which until now has been empty, indicates that it contains one item. With a little animation, or a distinct color, or simply the switch from zero to 1, she notices the change. 

{% assign photo="add-gifts" %}
{% assign caption ="This wireframe shows how the donation amount and shopping cart change as a user adds premiums."; %}
{% include custom/gif_normal %}

As with other online shopping sites, she can view her cart to confirm its contents and make changes — or she can continue on her way. Let’s say she does. She sees another gift she likes and adds that. Then another. Her cart changes from 1 to 2 to 3 items and the donation changes to $100 and then $150.

Finally, she’s ready to move on, so she clicks a button marked “check out” and goes to the last part of the form. This displays fields where she can enter payment details — credit card number, expiration date, and so on. But there’s also a table that reviews her gifts and her total donation. She may not have originally intended to give $225, but that’s what she’s giving now and we make it obvious. Given the visual cues of the summary and shopping cart in the first part of the form, she’s probably not surprised, but if she is — or if she changes her mind — it’s easy to remove a gift or two and reduce the total donation. 

{% assign photo="remove-stuff" %}
{% assign caption ="Wireframe. Before gathering payment details — or at least before taking the user's money — we show a summary and enable users to remove items to reduce the donation."; %}
{% include custom/gif_normal %}

I think this solution is the best match for the given business requirements. By leading with the ask, we establish giving as the primary goal. By letting supporters choose freely from the selection of premiums, we create the possibility that at least some might step up their donation. By using a shopping cart icon and language like “add to cart,” we start to feel more and more like a shopping site, which has the advantage of helping supporters form an accurate mental model for how our process works: the more gifts you choose, the more you give.

We know from user-interviews that at least some supporters are bothered by this overt retail experience. My feeling is we can’t have it both ways. If we’re going to let people choose items that we’re assigning a value to, even letting them select color or size or other attributes, we’ve essentially created a retail experience. Pretending otherwise only makes it more confusing. 

In the beginning of this post, I said it’s not possible to up-sell premiums in a way that doesn’t lose site of the main objective or become unwieldy and confusing. I’ve just presented a way that sorta kinda works. But it’s flawed. It’s complicated, requiring the nonprofit to maintain a store-load of inventory (without becoming a store) and supporters to navigate a bunch of items with different values and keep track of a “shopping cart” even though their first objective is to give. 

And do all of these efforts to up-sell even work? Do they work well enough to justify the added trouble and expense? We don’t really know. That’s why I think it’s better to create a simpler and more straightforward experience like I described in my earlier post. Getting people to give is hard. Make it easy, and I think both nonprofits and supporters will be happier. 