require 'test_helper'

class Api::V1::LandingControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_landing_index_url
    assert_response :success
  end

end
