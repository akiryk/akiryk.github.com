This is a jekyll blog website for Adam Kiryk

###The Theme
I'm currently using a custom theme called none. It is literally an undesigned theme; totally spare. Find the pieces in themes/none. To update, I could change the theme, or more likely change to a different theme by changing the theme in _layouts files. 

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

