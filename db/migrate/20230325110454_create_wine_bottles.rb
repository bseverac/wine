class CreateWineBottles < ActiveRecord::Migration[7.0]
  def change
    create_table :wine_bottles, id: :uuid do |t|
      t.string :name, null: false, limit: 200
      t.integer :year
      t.string :color
      t.integer :rate
      t.integer :price 
      t.timestamps
    end
     add_index :wine_bottles, :rate
     add_index :wine_bottles, :price
  end
end
