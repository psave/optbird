require 'json'

class RealgraphsController < ApplicationController

  # this returns everything in the occupants table
  # TODO: get data into the database
  def show
    @all_occupancy_data = Occupant.all
    render json: @all_occupancy_data
  end

end
