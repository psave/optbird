class CreateRooms < ActiveRecord::Migration
  def change
    create_table :rooms do |t|
      t.references :building, index: true
      t.integer :floor
      t.string :room
      t.string :room_code

      t.timestamps
    end
  end
end
