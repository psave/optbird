# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(name: "UBC", password: "operation_tbird")


class Dummy

  def self.populate(n)
    timer = Time.now
    counter = 1
    n.times do
      date_time = timer + (5*60)*counter
      occupants = Random.new.rand(50)
      counter+= 1

      Populate.create(date_time: date_time, occupants: occupants) 
    end
  end

end

Dummy.populate(50)