module Jekyll
  class MarginaliaTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
      "<p class='myclass'>#{@text}</p> "
    end
  end
end

Liquid::Template.register_tag('marginalia', Jekyll::MarginaliaTag)