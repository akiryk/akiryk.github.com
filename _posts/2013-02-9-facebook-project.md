---
layout: portfolio
title: NPR Stations on Facebook
teaser: With millions of fans, NPR is positioned to drive traffic to public radio member stations like no one else.
micro-teaser: ux + design + front-end
category : portfolio
assets: amplify
hero: facebook-page
tags : [ux, cms, npr, design]
---

<p class="intro">
  In 2012, I helped launch an experiment to leverage NPR's Facebook presence to grow the audience for member stations. NPR has more than three million Facebook followers, but most member stations have far less. By posting member station stories onto NPR's Facebook page, we had an opportunity to expose their content to a much wider group of people. It’s been a <a href="http://www.niemanlab.org/2012/02/how-npr-drove-traffic-to-a-local-station-by-geotargeting-stories-on-facebook/?hq_e=el&hq_m=2040998&hq_l=1&hq_v=437cc910b2">big success.</a> 
</p>

{% assign quote = "NPR depends on member stations to build their own audiences since those audiences give money that ultimately pays for NPR services." %}
{% include custom/push_quote %}

In case you aren't a National Public Radio insider, you may not realize exactly how the organization works. It's non-profit and gets some support from the federal government. But it only gets a fraction of its budget that way (like, around 10%). The rest comes from underwriting, grants, an endowment, and payments from member stations. That last one is pretty important. Member stations pay a fee for NPR programming (and for a bunch of other stuff, too). NPR depends on that money, so it depends on each member station to build a loyal audience who will give to that station, which will in turn be able to pay NPR. NPR can't solicit member donations on its own — that's just part of its charter.

We believed we could drive new potential fans to member stations' web sites if we posted their content to NPR's Facebook page, but we wanted to do it smartly, without weakening NPR's brand in any way. In brand terms, NPR has a particular "voice" that it maintains on Facebook, and watering it down with too many other brand "voices" wouldn't be cool. 

{% assign photo="example-share" %}
{% assign caption="Example of a member station story that's been shared on NPR's Facebook page." %}
{% include custom/pic_normal %}

Solution: we selected a small number of stations and asked them to propose stories, maybe one a day, that would go on NPR's Facebook page. If a story passed muster — if it had qualities that NPR editors believed would drive interest, if it was written in the NPR tone — we'd post it and geotarget it to the member station's area. For example, a story posted by KPLU in Seattle would be geotargetted to the Seattle region; a story from WBUR in Boston would be targetted to Boston. It was a very successful experiment.

>During the first four months of the experiment, we posted about 50 geofocused KPLU links — a fraction of all KPLU content — on NPR’s Facebook page. These posts accounted for 12 percent of KPLU.org’s sitewide visits during this four-month period. The test helped KPLU achieve three milestones: record traffic for a single day (January 19), second-highest traffic for a single month (October 2011) and the highest traffic for a single month (January). — From the [NPR DS blog](http://digitalservices.npr.org/post/how->were-experimenting-member-station-content-nprs-facebook-page).

###An Online Tool To Help With The Process
This was great, but it was somewhat of a hassle to manage day-to-day. Two editors at NPR were spending almost all of their time reading and editing station submissions; going back and forth with station editors about changes; and copying and pasting the actual content into Facebook. Silly. More painful yet, they had to manually enter the geotargeting data for every station every time, carefully identifying the precise town and city names where the post should be seen. 

To improve this situation, we assembled a small team — two backend developers, an editor, and me (UX, design, and front-end) — to build a tool that would make it easier. We created an alpha version of something we're calling Amplify. It's got a minimal but clean design that enables stations to pitch ideas by simply pasting a link to their story.

Here's how it works. Let's say a writer in Seattle wants to drive readers to a story they've just published about a bicycle condom-delivery service (true story). They go to our site, paste the link into a simple form field, and immediately see a how the text will appear on Facebook, more or less (i). Since this format is distinct from the news posts they ordinarily write for their own web site, they may want to edit it — and they can do so inline. When they're happy with the result, they submit the pitch (we called it a pitch because that's really what it is: a proposal to get something published by NPR). 

{% assign photo="amplify1" %}
{% assign caption="Pitch review and submit screen for alpha version." %}
{% include custom/pic_large %}

As soon as the pitch is submitted, the app notifies editors from NPR and other participating member stations, who can see it and add comments or ask questions. Assuming the pitch is good enough, or is modified to become good enough, an NPR editor simply clicks "publish." Rather than having to carefully enter a bunch of geotargetting data every time, they only have to do it once — our tool takes care of it from there. 

Naturally, this has been very popular with member stations. We immediately jumped from having 5 or 6 participants to 40, and 30 more wanted to join. Why so much interest? Stations love having their stories get the massive reach that NPR can provide, so they're eager to get stories accepted. And they want to know what other stations are submitting so they can learn from those stations' successes. We even implemented a small bit of competition by tracking the most viral stories (according to Facebook's algorithm for determining virality). Stations can now see how their stories fare compared to other stations. Actually, this list of top stories has other benefits: if we make it public, it's like a daily rundown of top stories from the NPR universe. 

Check out the videos below that give a better sense of the experience. The first video shows a station editor's view as they look at comments and submit a new pitch. The second shows what NPR editors see — it’s mostly the same as station journalists, but they can choose whether to accept or reject a given pitch.

{% vimeo 61651127 500 313 %}

{% vimeo 61651125 500 313 %}

<p class="notes">
  <span class="counter">i</span> I didn't make the story display exactly as it would look on Facebook for a couple of reasons. First, I knew we probably wouldn't have the resources to maintain this product as much as we'd like, and that it would therefore be hard to keep up with changes Facebook would inevitably make to its own design. We could reflect a true facsimile of how a story would appear <em>now</em>... but in six months? Second, I knew that a long-term goal of the web app was to potentially expand beyond Facebook — for example, to managing submissions to NPR's twitter feed or to an as-yet-uncreated NPR service for sharing content among stations. Tying our visual approach to Facebook seemed shortsited.
</p>



