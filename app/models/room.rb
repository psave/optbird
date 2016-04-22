class Room < ActiveRecord::Base

  belongs_to :building
  has_many :occupants
  has_many :courses
  
end
