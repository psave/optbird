class Occupant < ActiveRecord::Base

  belongs_to :room

  validates :sample_time, uniqueness: {scope: :room_id}
  
end
