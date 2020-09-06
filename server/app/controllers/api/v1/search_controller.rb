class Api::V1::SearchController < ApplicationController
  before_action :get_params

  def index
    @pets = Pet
            .select(:id,
                    :age,
                    :pet_name,
                    :address,
                    :pictures,
                    :status).where("#{@search_type} = ?", @search_term)
  end

  private

  def get_params
    @search_term = params[:search_term]
    @search_type = params[:search_type]
  end
end
