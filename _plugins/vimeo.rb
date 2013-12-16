# A plugin for embedding videos from Vimeo using a simple Liquid tag, ie: {% vimeo 12345678 %}.
# Based of the Youtube plugin from http://www.portwaypoint.co.uk/jekyll-youtube-liquid-template-tag-gist/

module Jekyll
  class Vimeo < Liquid::Tag

    def initialize(name, markup, tokens)
      if markup =~ /(?:(?:https?:\/\/)?(?:www.vimeo.com\/(?:embed\/|watch\?v=)|youtu.be\/)?(\S+)(?:\?rel=\d)?)(?:\s+(\d+)\s(\d+))?/i
        @id = $1
        @width = $2 || "480"
        @height = $3 || "360"
      end
      super
    end

    def render(context)
      output = super
      if @id
        intrinsic = ((@height.to_f / @width.to_f) * 100)
        padding_bottom = ("%.2f" % intrinsic).to_s  + "%"
        # remove/comment the next line and adjust the class name on the following line if you already have CSS for responsive video
        # video = "<style>.bt-video-container iframe,.bt-video-container object,.bt-video-container embed{position:absolute;top:0;left:0;width:100%;height:100%;margin-top:0}</style>\n"
        video = %Q{<div class="bt-video-container" style="position:relative;padding-bottom:#{padding_bottom};padding-top:30px;height:0;overflow:hidden"><iframe width="#{@width}" height="#{@height}" src="http://player.vimeo.com/video/#{@id}?rel=0&amp;title=0&amp;byline=0&amp;portrait=0" frameborder="0" allowfullscreen></iframe></div>}
      else
        # error msg
      end
    end
  end
end

Liquid::Template.register_tag('vimeo', Jekyll::Vimeo)