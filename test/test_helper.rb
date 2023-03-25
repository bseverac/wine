# frozen_string_literal: true

ENV["RAILS_ENV"] ||= "test"
require_relative "../config/environment"
require "rails/test_help"

module FixtureFileHelpers
  def add_file(entity, filename, metadata = nil)
    filename = Rails.root.join("test", "fixtures", "files", filename)
    entity.attach(io: File.open(filename), filename: filename,
                  metadata: metadata)
  end
end

ActiveRecord::FixtureSet.context_class.include FixtureFileHelpers

class ActiveSupport::TestCase
  fixtures :all
end

Shoulda::Matchers.configure do |config|
  config.integrate do |with|
    with.test_framework :minitest
    with.library :rails
  end
end
require "mocha/minitest"
