class Api::V1::SearchController < ApplicationController
  before_action :get_params

  def index
    @pets = Pet
            .select(:id,
                    :age,
                    :pet_name,
                    :address,
                    :pictures,
                    :status)
            .where("#{address_query? ? "lower(#{@search_type}) LIKE " : "#{@search_type} = "} ?",
                   (address_query? ? "%#{@search_term}%" : @search_term).to_s)
  end

  private

  def get_params
    @search_term = params[:search_term].downcase
    @search_type = params[:search_type]
  end

  def address_query?
    @search_type == 'address'
  end
end
