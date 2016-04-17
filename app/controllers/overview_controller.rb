require 'json'

class OverviewController < ApplicationController

  def index
    #Selecting a range
    startDate = "2016-04-16 22:27:56"
    endDate = "2016-04-17 02:32:56"
    testDate = "2016-04-16 23:57:56"
    @test_occupants = Populate.where(date_time: startDate..testDate)

    #creating arrays to use in json
    data = [] 
    xaxis = [] 

    #looping through the occupants
    @test_occupants.each do |occupant|
      data << occupant.occupants
      xaxis << occupant.date_time
    end
    puts xaxis
    @series = 
    {
      'data' => data,
      'xaxis' => xaxis
    }
    @series = @series.to_json
    
  end

  # def index
  #   #Select a range
  #   startDate = "2016-04-16 22:27:56"
  #   endDate = "2016-04-17 02:32:56"
  #   testDate = "2016-04-16 23:57:56"
  #   #choosing range of data to obtain
  #   @occupants = Populate.first(20)
  #   #creating arrays to use in json
  #   data = [] 
  #   xaxis = []

  #   #looping through the occupants
  #   @occupants.each do |occupant|
  #     data << occupant.occupants
  #     xaxis << occupant.date_time
  #   end
  #   puts xaxis
  #   @series = 
  #   {
  #     'data' => data,
  #     'xaxis' => xaxis
  #   }
  #   @series = @series.to_json
    
  # end


end


# class OverviewController < ApplicationController

#   def index
#     #choosing range of data to obtain
#     @occupants = Occupant.first(20)
#     #creating arrays to use in json
#     data = [] 
#     date_or_time = []

#     #looping through the occupants
#     @occupants.each do |occupant|
#       data << occupant.number_occupants
#       date_or_time << occupant.time
#     end
#     puts date_or_time
#     @series = 
#     {
#       'data' => data,
#       'date_or_time' => date_or_time
#     }
#     @series = @series.to_json
   
  
    
#   end