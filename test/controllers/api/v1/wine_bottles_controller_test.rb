# frozen_string_literal: true

require 'test_helper'

module Api
  module V1
    class WineBottlesControllerTest < ActionDispatch::IntegrationTest
      should 'get exports index' do
        get api_v1_wine_bottles_url
        assert_response :success
        assert_equal '[]', @response.body
      end
    end
  end
end
