require 'json'

class RoomController < ApplicationController

  def index
    #choosing range of data to obtain
    @occupants = Occupant.first(20)
    #creating arrays to use in json
    data = [] 
    date_or_time = []

    #looping through the occupants
    @occupants.each do |occupant|
      data << occupant.number_occupants
      date_or_time << occupant.time
    end
    puts date_or_time
    @series = {
      'data' => data,
      'date_or_time' => date_or_time
    }
    @series = @series.to_json
   
  


   #  @series1 = 
   #    {
   #      'name' => "rohit rooom"
   #    }
   # @series1 = @series1.to_json

    # @series = 
    # {
    #   'data' => [90,50,56,34,56,90,23,84,45]
    # }
    # @series = @series.to_json
    #json({contacts: @contacts})
    
  end

  def show
    #Firstly get all the Occupants
  end

end
