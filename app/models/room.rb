class Room < ActiveRecord::Base

  belongs_to :building
  has_many :occupants
  has_many :courses
  
  validates :room_code, uniqueness: true

end
