class RealgraphsController < ApplicationController

  def show
    @all_occupancy_data = ActiveRecord::Base.connection.execute("SELECT sample_time AS s, number_occupants AS n, room_id AS r FROM occupants")
    render json: @all_occupancy_data
  end

end
