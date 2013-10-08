This is a jekyll blog website for Adam Kiryk

###The Theme
I'm currently using a custom theme called none. It is literally an undesigned theme; totally spare. Find the pieces in themes/none. To update, I could change the theme, or more likely change to a different theme by changing the theme in _layouts files. 

###Blog vs. Portfolio
Every post, whether a portfolio piece or a blog item, is created in the same way and is stored in the same place — _posts. The difference is that portfolio items have YAML front-matter that says "category: portfolio". Non-portfolio items have "category: post" or possibly something else.  Index.md loops through all posts but only displays those without a category of "portfolio." Portfolio.html loops through all posts but only displays those with a category of "portfolio." *Note about pagination:* Pagination won't work with this setup. Pagination looks at all posts regardless of category, so it will paginate, but it might behave poorly (e.g. instead of displaying 10 things on a page, it might display 4, because the other 6 things are from the wrong category; they won't display, but they'll be counted as part of pagination).

###Primary Navigation
The navigation is being set by a file called pages_list in _includes/custom. This page is currently a manually ordered list of nav items. A next step will be to turn this into a loop that automatically checks for whether an item is currently active or not. 

###Navigation through Categories and Tags
See _includes/custom/tags_list and _includes/custom/categories_list

