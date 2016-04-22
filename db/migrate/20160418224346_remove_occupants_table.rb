class RemoveOccupantsTable < ActiveRecord::Migration
  def down
    drop_table :occupants
  end
end
