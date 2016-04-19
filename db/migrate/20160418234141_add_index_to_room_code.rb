class AddIndexToRoomCode < ActiveRecord::Migration
  def change
    add_index :rooms, :room_code
  end
end
