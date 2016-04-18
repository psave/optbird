class DropPopulatesTable < ActiveRecord::Migration
  def down
    drop_table :populates
  end
end
