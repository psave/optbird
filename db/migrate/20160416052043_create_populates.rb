class CreatePopulates < ActiveRecord::Migration
  def change
    create_table :populates do |t|
      t.string :date_time
      t.integer :occupants
      t.timestamps
    end
  end
end
