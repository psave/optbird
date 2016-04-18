class CreateOccupants < ActiveRecord::Migration
  def change
    create_table :occupants do |t|
      t.datetime :sampletime #added for testing.
      t.integer :building_number
      t.string :building_name
      t.string :room_number
      t.integer :number_occupants

      t.timestamps
    end
  end
end