require 'json'

class OverviewsController < ApplicationController

  def index
    # #Selecting a range
    # startDate = "2016-04-16 22:27:56"
    # endDate = "2016-04-17 02:32:56"
    # testDate = "2016-04-16 23:57:56"
    # @test_occupants = Populate.where(date_time: startDate..testDate)

    # #creating arrays to use in json
    # data = [] 
    # xaxis = [] 

    # #looping through the occupants
    # @test_occupants.each do |occupant|
    #   data << occupant.occupants
    #   xaxis << occupant.date_time
    # end
    # puts xaxis
    # @series = 
    # {
    #   'data' => data,
    #   'xaxis' => xaxis
    # }
    # @series = @series.to_json
  end

  def show
    @chart = Occupant.all
    render json: @chart
  end

end