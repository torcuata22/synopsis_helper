require "test_helper"

class SynopsisControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get synopsis_index_url
    assert_response :success
  end
end
