require "test_helper"

class Api::V1::WineBottlesControllerTest < ActionDispatch::IntegrationTest
  should "get exports index" do
    get api_v1_wine_bottles_url
    assert_response :success
    assert_equal "[]", @response.body
  end
end
