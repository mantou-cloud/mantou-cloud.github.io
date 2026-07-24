# frozen_string_literal: true

module PiggySearch
  SCRIPT_TAG = '<script src="/assets/js/piggy-search.js" defer></script>'

  def self.inject_script(document)
    return unless document.output_ext == '.html'
    return unless document.output.include?('</body>')
    return if document.output.include?('/assets/js/piggy-search.js')

    document.output = document.output.sub('</body>', "  #{SCRIPT_TAG}\n</body>")
  end
end

Jekyll::Hooks.register :pages, :post_render do |page|
  PiggySearch.inject_script(page)
end

Jekyll::Hooks.register :documents, :post_render do |document|
  PiggySearch.inject_script(document)
end
