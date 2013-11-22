This is a jekyll blog website for Adam Kiryk

###The Theme
I'm currently using a custom theme called Algis. 

###Next Steps
I need to refactor the css to be cleaner and easier to maintain. 
Problem: right now there are too many different specific classes that inter-relate. I'd like to fix the header on the portfolio page, but this will cause unintended problems elsehwere. 
Here is my plan:

1. Simplify my templates. This means reducing them. There should be one template for aggregation pages, one for post pages, and one for Page pages. It may be necessary to have an additional template for portfolio post pages. If so, it should reuse as much from Post as possible by using an 'include' statement. Same goes for agg pages. There can be one generic agg page template that both portfolio and blog template can 'include'. 

2. Standardize css class naming conventions. Get rid of media--text and media--image style naming. Use instead a system in which more meaningful, content-oriented names are used. That is, call something .portfolio not .media. Or .card not .island. The most general type is listed first followed by more specific names. Example: Cards are used as a pattern throughout the site. There are blog cards, portfolio cards, and secondary "Next" and "Previous" cards. All of these should have the .card class. Blog cards get .blog-card; portfolio cards get .portfolio-card; and secondary get .continue-card in addition. The .card class might provide a width and padding whereas .portfolio-card would have a background color.

3. Simplify media queries. Right now, there are too many and they are used inconsistently. Explore using the Chris Coyier method of including media queries inside of mixins. Ideally, I'd say something like
    .river-wrapper {
        @include centered-content();
    }
    @mixin centered-content() {
        media screen and min-width(640px) {
          .centered-content { ... }
        }
        media screen and min-width(1020px) {
          .centered-content { ... }
      }
    }

4. Use includes for posts wherever possible. This is a workaround -- it would be better to have plugins that did what I wnated in a simpler way, but this enables me to ensure consistency. For example, if I create 50 posts and all have pull quotes, I want the pull quotes to always use an h2 tag. If I use an 'include' I can have one (1) file that sets the template, ensuring consistency and ease of maintainability.

5. Fix margin/line-height issues in all H1, H2, etc tags so that there's the right amount at all screen sizes. 

6. Better hover states. 

7. Clean up all the background colors. Headings are bg white; wrappers are white; cards are white...

8. Better picture-polyfill settings. This is done. There are 4 sizes of images. 
For hero images (at top of page)
The largest is 1020px wide by 400px tall (16x9 ratio). This should be used for all viewports larger than 800px or 50em. 
The next size is medium; it is also 16x9 although the salient width is 799px. Display this image for all viewports larger than 690px. Note: this image will be used for portfolio cards at all sizes but the smallest. Put another way, this image size will display  whenever viewport is smaller than 800 all the way down to 690.
The next size is small. Use at all sizes larger than 420px (and smaller than 690). 
Final size is mini; use smaller than 420px.

For post images (images inside of posts), there are a few options.

Large images and full size images follow this pattern:
large: use 1060px wide image for viewports min-size of 1060px wide
medium: use 640 pix wide image for view ports from approx 400 to 1059px
small: use 340px wide image all the way down.

Outset images:
use 340px wide image when viewport min size is 
use 224px wide image for smaller viewports

###Publishing Updates
Do work in the source branch -- not the master branch. After you've made and committed changes and want to publish, go into command line, go to akiryk.github.com folder and 
    rake publish
This will generate the site and then copy and push the generated site into the master branch. The master branch is what github pages will serve up. 

###Plugins
Plugins won't work on github pages and I'd like to use github pages, at least for now. In order to get them to work, you need to put the generated site files in the top level directory (rather than having github run jekyll on the out-of-the-box directory structure). I followed a tutorial here: http://ixti.net/software/2013/01/28/using-jekyll-plugins-on-github-pages.html. Basically, I made a directory called _rake and put a file in it called publish.rake. Then I copied the appropriate code from tutorial above into that file. This enables me to run rake publish from the command line.
Note: I was having trouble getting plugins to work (I kept getting maruku errors), so I installed a couple of other markdown interpreters and discovered that this made a difference. To do this, install the right gem:

    gem install redcarpet

Once installed, change the config file markdown (default is maruku).

    markdown: redcarpet

I tried rdiscount, but my plugins showed minor inconsistencies (e.g. the youtube embedding plugin didn't responsively resize as advertised). With redcarpet, everything *seems* to work well.

###Blog vs. Portfolio
Every post, whether a portfolio piece or a blog item, is created in the same way and is stored in the same place — _posts. The difference is that portfolio items have YAML front-matter that says "category: portfolio". Non-portfolio items have "category: post" or possibly something else.  Index.md loops through all posts but only displays those without a category of "portfolio." Portfolio.html loops through all posts but only displays those with a category of "portfolio." *Note about pagination:* Pagination won't work with this setup. Pagination looks at all posts regardless of category, so it will paginate, but it might behave poorly (e.g. instead of displaying 10 things on a page, it might display 4, because the other 6 things are from the wrong category; they won't display, but they'll be counted as part of pagination).

###Primary Navigation
The navigation is being set by a file called pages_list in _includes/custom. This page is currently a manually ordered list of nav items. A next step will be to turn this into a loop that automatically checks for whether an item is currently active or not. 

###Navigation through Categories and Tags
See _includes/custom/tags_list and _includes/custom/categories_list

