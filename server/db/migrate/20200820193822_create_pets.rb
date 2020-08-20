class CreatePets < ActiveRecord::Migration[6.0]
  def change
    create_table :pets do |t|
      t.string :owner_name
      t.string :pet_name
      t.text :description
      t.integer :age
      t.string :location
      t.references :contact, null: false, foreign_key: true

      t.timestamps
    end
  end
end
