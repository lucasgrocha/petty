class Api::V1::SearchController < ApplicationController
  def index
    @pets = SearchPets.new(Pet
            .select(:id, :age,
                    :pet_name,
                    :address,
                    :pictures,
                    :status)).call(search_params)
  end

  private

  def search_params
    params.permit(:search_term, :search_type, :format)
  end
end
