class Api::V1::PetsController < ApplicationController
  before_action :set_pet, only: %i[show update destroy]
  before_action :validate_status_param, only: %i[index]

  # GET /pets
  def index
    # expires_in 15.seconds, public: true #-> caching strategy
    @pets = Pet.where(status: params[:status]).last(9).reverse
  end

  # GET /pets/1
  def show
    @pet
  end

  # POST /pets
  def create
    @pet = Pet.new(pet_params)

    if @pet.save
      render json: @pet, status: :created, location: @pet
    else
      render json: @pet.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /pets/1
  def update
    if @pet.update(pet_params)
      render json: @pet
    else
      render json: @pet.errors, status: :unprocessable_entity
    end
  end

  # DELETE /pets/1
  def destroy
    @pet.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_pet
    @pet = Pet.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def pet_params
    params.require(:pet).permit(:owner_name, :pet_name, :description, :age, :location, :contact_id)
  end

  def validate_status_param
    pet_statuses = Pet.statuses.keys

    unless pet_statuses.include?(params[:status])
      render json: {
        status: 422,
        message: 'Invalid status',
        available_statuses: pet_statuses
      }, status: :unprocessable_entity
    end
  end
end
