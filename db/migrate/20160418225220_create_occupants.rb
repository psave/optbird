class CreateOccupants < ActiveRecord::Migration
  def change
    create_table :occupants do |t|
      t.string :sample_time
      t.integer :number_occupants
      t.references :room, index: true

      t.timestamps
    end
  end
end
