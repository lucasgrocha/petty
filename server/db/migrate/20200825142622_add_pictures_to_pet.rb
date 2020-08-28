class AddPicturesToPet < ActiveRecord::Migration[6.0]
  def change
    add_column :pets, :pictures, :json
  end
end
