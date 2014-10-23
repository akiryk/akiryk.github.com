---
layout: post
title: The Best Pledge Experience Ever, Part 1
teaser: I’ve been designing the online donation framework for public radio stations, and I think I've learned a few things worth sharing. It's challenging to create a system that will meet the needs of every station because they each have their own priorities and assumptions. However, using the ideas I'll discuss here, it should be possible to create an excellent user experience for both stations and donors.
hero: pledge1-hero
hero-caption: Sketches
assets: "pledge"
category: blog
tags : [ux, design, nonprofits, npr]
---
I’ve been designing the online donation framework for public radio stations, and I think I've learned a few things worth sharing. It's challenging to create a system that will meet the needs of every station because they each have their own priorities and assumptions. However, using the ideas I'll discuss here, it should be possible to create an excellent user experience for both stations and donors.

In this post, I’m going to review best practices, highlight some common mistakes, and show real-world examples of both. In [a followup post](/blog/2014/09/28/pledge-part-2/), I’ll show mock-ups for a best-case scenario. I’ll also do a post about [how to handle premiums](/blog/2014/10/07/pledge-part-3/) (those tote-bags and other gifts we send supporters), which are common, yet complicated enough to warrant special attention.

So, what are the ingredients of a great donation form?

<h4>1. Make it easy to find.</h4> 

When a supporter clicks on a "donate" button, follows a link from an email, or goes directly to your site's donate page, they should be able to donate. Sounds obvious, but it’s surprisingly common for organizations to put speed-bumps or even roadblocks along the way.  

For example, clicking <em>donate now</em> on the Motor Neurone Disease Association's site takes users to a landing page jam-packed with calls-to-action. Not good:

{% assign photo="mnd-steps" %} {% assign caption="Common anti-pattern: clicking on 'donate' button takes users to a cluttered landing page. There are more than 50 buttons and links here — way too much distraction." %} {% include custom/pic_large %}

<div class="marginator">
  <p>
    Options can be a good thing but too many become overwhelming and counter-productive. At the very least, they make it harder for users to accomplish their goal (giving to your organization). 
  </p>
  <div class="marginalia">
    <p><span class="margin-heading">Paradox of Choice </span>Too many choices can make it <a href="http://www.ted.com/talks/barry_schwartz_on_the_paradox_of_choice?language=en">harder to make a choice.</a> Make it easy for your supporters wherever you can.
    </p></div>
</div>

Of course, the absense of options can also be a problem. For example, if the only way to donate is to create an account and login first, supporters may just walk away. 

{% assign photo="church-login" %} {% assign caption="I found plenty of examples like this at the sites of several megachurches. It's not like they're required to do it and it's not a good idea." %} {% include custom/pic_normal %}

Requiring login isn't common for public media, but I've accross it several times in my research — like on this church donation page (above). If you want my money, then let me make a donation. “Login to Give” is a terrible call to action. 

I understand why these kinds of problems come about. In public radio we have the same pressures. We want to add members, we offer diverse ways to give, and we don't want to miss an opportunity to draw people in. 

{% assign quote = "When a user clicks the donate button, take them — in one step — to a place where they can enter payment details." %}
{% include custom/pull_quote %}

Solution: Start with a reasonably prominent call to action that says “donate.” I like it better than “support” because it says what it means. Make it look clickable, like a button. When a user clicks it, take them — in one step — to a place where they can enter payment details and donate. 

If you have other ways for people to support your organization — like the Motor Neurone Disease Association — that’s fine, but don’t disrupt the donation experience to tout it. One possibility: place a link saying "other ways to support" discretely at the top of your donation page. 

If you want to build your membership list, include an address field in the donation form. You don't need a separate registration proceedure to do it.

The folks at [water.org](http://www.water.org) do a nice job of this. The donate button seems a bit unnecessarily large, but that's quibbling. It seems like the main reason you’d come to a site like this would be to give money, so go ahead, make it large. More importantly, when you click that big button, you go straight to a clean page that's exclusively designed for taking donations. No competing calls to action. No clutter.

{% assign photo="water-steps" %}
{% assign caption ="Water.org gets users to the donation form in one step."; %}
{% include custom/pic_large %}

<hr>
<h4>2. Make it easy to use. </h4> 

{% assign photo="anchor-amount" %}
{% assign caption ="Part of Livestrong Foundation's form. Setting a default donation can make it easier on supporters."; %}
{% include custom/pic_normal %} 

<div class="marginator">
  <p>
    Once someone gets to the form — after one click (see above) — it should be as easy to get through as possible. Start by showing me a few gift amounts and defaulting to one. This helps by simplifying my decision making process, letting me move forward to the next part of the form without having to worry over the right amount. In addition, think hard about what data you need to gather so you can remove unnecessary fields and keep the form short. If possible, auto fill input fields where appropriate. The idea is to help people get to your submit button.
  </p>
  <div class="marginalia">
    <p><span class="margin-heading">Cognitive bias</span> A default amount also sets the user's expectation about what a "normal" donation should be. This is called "anchoring," a cognitive bias that says people have a tendency to put more importance on the first piece of information they get. 
    </p></div>
</div> 

The Girl Scouts of America [donation page](https://donate.girlscouts.org/give) demonstrates many common problems: it’s really long with a number of unnecessary fields, the labels aren't super clear, and it’s awkwardly designed. If they only fixed one thing, however, I'd suggest they get rid of the capcha they've placed at the end of the form. It stops people just before they can give. It feels impersonal and mistrustful. Find another way of handling robot-entries — if they're even really such a concern (I haven't found a single other nonprofit that uses capchas like this).

{% assign photo="girlscouts-options" %} {% assign caption="" %} {% include custom/pic_normal %}

{% assign photo="capcha" %} {% assign caption="Girl Scouts: do what you need to do to get rid of the capcha. I haven’t found any other nonprofit that uses one in this way." %} {% include custom/pic_normal %} 

[Charity: Water](https://www.charitywater.org/donate/) (not the same as water.org, above) is a good example of an organization that makes its donation form easy to complete, even on mobile. To minimize the number of fields supporters have to click through, they require just a single “name” field rather than firstname, lastname, and salutation. Smart. 

{% assign photo="charity-water" %}
{% assign caption ="Nice and easy"; %}
{% include custom/pic_large %}

They’ve eliminated all labels in favor of hints, which makes for an exceptionally clean design. [Hints in text boxes can cause confusion](http://www.uxmatters.com/mt/archives/2013/02/dont-put-labels-inside-text-boxes-unless-youre-luke-w.php) (e.g. a user might not enter anything into a field because it already appears completed), but in this case I suspect that's not a problem because the form is so simple. 

The credit card information is easy, just three fields, and the submit button is extremely clear. Saying "Give $30" is great because it does two things really well — acting as both submit button and summary.

{% assign photo="autofill" %} {% assign caption="Charity: Water completes your address for you." %} {% include custom/gif_normal %} 

Further, they’ve used  smart defaults, like putting the United States in the country field. Even better, they’ve connected with a map API, so when I type the first part of my address, 22 Fresh..., it suggests addresses that match (e.g. 22 Fresh Street, Arlington; 22 Fresh Pond Lane, Cambridge, etc). Also very cool: the form autocompletes town and zip code based on the street, so as soon as I select 22 Fresh Pond Lane I don’t need to fill out the other fields.

<h4>Create urgency for your campaign in a meaningful way</h4>

Probably half the time I discuss donation forms with a station, they raise the question of displaying a fund-drive thermometer. If it actually helps, I'd love to see some data, but I'm skeptical.

{% assign photo="thermo" %}
{% assign caption ="Cliché"; %}
{% include custom/pic_push %}

I don’t think you create much urgency with a fundraising thermometer. They're overused to the point of being clichéd — and, as with all clichés, are easy to tune out. Even if you don’t tune them out, what do they really say about the nature of the nonprofit organization or why you’d want to support it? Anyway, most people who give do it because they believe in an organization’s mission, not because the organization is almost done with its fundraising drive.

If you want to create urgency, do it in a way that’s related to your mission. Charity Water does it with imagery and a meaningful challenge: someone is matching all donations up to a million dollars to bring water to a specific place. The fact that it's tied to something specific (the Sahel) helps drive home the point.

{% assign photo="sahel" %}
{% assign caption =""; %}
{% include custom/gif_normal %}

<h4>Reinforce the supporter’s good intentions</h4>

The Water Project (not the same as water.org or Charity: Water) also has a nice way of handling this by telling supporters what their gift can be used for. By the way, what is up with all the water organizations having good donation UIs?

{% assign photo="make-a-difference" %}
{% assign caption ="The Water Project gives some context for each donation amount."; %}
{% include custom/gif_normal %} 

<h4>Handle premiums wisely</h4>

{% assign photo="mug" %}
{% assign caption ="The classic public radio premium."; %}
{% include custom/pic_pull %} 

Being in public radio, I’m familiar with the use of thank-you gifts — we call them premiums. We give supporters station-branded mugs, tote bags, calendars, and it’s generally all well and good. It seems like supporters enjoy getting these items, and it helps the station's brand to get their name and logo out into the world. At the very least, something like a branded mug keeps the station in-mind — if not top-of-mind — for supporters who use them.

However, beyond a certain point, managing gift selection becomes a real drag. It adds complexity for stations, who have to maintain inventory and shopping cart functionality. It adds complexity for supporters, who have to make more decisions and complete more form fields.

Wanna donate? No problem, just choose a premium (below). Kill me now.

{% assign photo="gbh-gifts" %}
{% assign caption ="This isn't even all of the gift premiums that a donor can choose."; %}
{% include custom/pic_large %} 

How to handle premiums is a complicated enough topic that I've written about it in [a different post](/blog/2014/10/07/pledge-part-3/). For now, I'll leave it at this: keep premiums simple and remember that people give because they want to give. If they want to shop, they'll likely go elsewhere — to an online retailer.

<h5>Make it work well on mobile</h5>

{% assign photo="number-pad" %}
{% assign caption ="Set the input type in a way that will display a minimal number keypad when handling phone numbers or credit cards."; %}
{% include custom/pic_push %}

Other than making the donation page responsive, there are a number of optimizations you should make to the form. First, make sure the form is as simple and minimal as possible without compromising clarity and without giving up on collecting information that you need.  

Next, ensure each input works easily from a smartphone or tablet by taking advantage of HTML5 input types or finding alternatives when they don’t work well. For instance, when asking for a credit card number, use <code>input type="number" pattern="[0-9]*"</code> for a simple number keypad [(more on this).](http://bradfrostweb.com/blog/mobile/better-numerical-inputs-for-mobile-forms/) For email addresses, set type=“email” and the smartphone will correctly show an email-optimized keypad. 

<h4>Monthly giving</h4>

It's generally considered a best practice to [encourage monthly giving](http://nonprofit.about.com/od/onlinefundraising/a/Why-Your-Charity-Should-Have-A-Monthly-Giving-Program.htm). It makes sense, from the organization’s point of view, in that they get a stream of income and build a relationship that remains constant. 

On the other hand, it wouldn’t be my first choice as a donor. It seems like there’s an ever-growing number of subscription services that lock you into monthly credit card payments, and the idea of adding yet another is a bit of a turn-off. It also adds one more task for our supporters to complete — and one more chance to potentially add some confusion. 

If it’s important to receive payments in a regular and predictable way, the nonprofit could do the necessary accounting on their own end. Take my $120 and give yourself $10 a month — fine with me. 

Oh well, it may be that the benefit to the nonprofit outweighs the potential hassle for the supporter. And, of course, many supporters would happily pay by whatever method is most helpful. So include an easy way to make the donation monthly, just be transparent about how you handle the recurring part, because sometimes it isn't clear. For example, if I check next to the $50 donation amount and then check "give monthly," am I giving $50 monthly or will my $50 be divided over 12 months? I've seen both methods used. 

Autism Speaks has a nice way to reassure users that the monthly gift will be no more than they expect. Checking the monthly payment box changes the gift amount to a field where users can set whatever number they’d like.

{% assign photo="monthly-animation" %} {% assign caption="Monthly gift selection for Autism Speaks" %} {% include custom/gif_normal %} 
