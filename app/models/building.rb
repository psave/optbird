class Building < ActiveRecord::Base

  has_many :rooms

  validates :building_number, uniqueness: true

end
