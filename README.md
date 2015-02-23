This is a jekyll blog website for Adam Kiryk

###The Theme
I'm using a custom theme that I made called readylab. It's implemented in the way that themes are implemented using Jekyll Bootstrap.

**Responsive Images:**
I'm using the picfill() polyfill from Scott Jehl. 

**Publishing Updates**
Do work in the source branch -- not the master branch. After you've made and committed changes and want to publish, go into command line, go to akiryk.github.com folder and 
    rake publish
This will generate the site and then copy and push the generated site into the master branch. The master branch is what github pages will serve up. 

**Run Locally**
>1. cd to local folder with the jekyll files.
>2. Run <code>jekyll serve --watch</code>
>2. Visit http://localhost:4000/