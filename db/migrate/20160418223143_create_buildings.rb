class CreateBuildings < ActiveRecord::Migration
  def change
    create_table :buildings do |t|
      t.integer :building_number
      t.string :building_name

      t.timestamps
    end
  end
end
