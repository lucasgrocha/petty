class Api::V1::LandingController < ApplicationController
  before_action :get_limit_param
  before_action :validate_limit_param

  def index
    @pets = Pet.last(@limit).reverse

    render 'api/v1/pets/index.json.jbuilder'
  end

  private

  def get_limit_param
    @limit = params[:limit]
  end

  def validate_limit_param
    if @limit.nil? || @limit.to_i <= 0
      render json:
      { error: 'Invalid :limit param',
        given: params[:limit],
        expected: 'number >= 1' }, status: :unprocessable_entity
    end
  end
end
