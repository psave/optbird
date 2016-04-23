class RealgraphsController < ApplicationController

  # this returns everything in the occupants table
  # TODO: get data into the database

  def index

  end

  def show
    # @all_occupancy_data = Occupant.all
    @all_occupancy_data = ActiveRecord::Base.connection.execute("SELECT sample_time AS s, number_occupants::int AS n, room_id::int AS r FROM occupants")
    render json: @all_occupancy_data
  end

end
