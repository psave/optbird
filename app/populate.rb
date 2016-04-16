class Occupant
# time-date
# number of occupants
def self.populate(n)
  timer = Time.now
  counter = 1
  n.times do
    date_time = timer + (5*60)*counter
    occupants = Random.new.rand(50)
    counter+= 1
  end

  Occupant.create(date_time: date_time, occupants: occupants) 

end

Occupant.populate(50);