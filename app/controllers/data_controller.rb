class DataController < ApplicationController

  def index
  end

  def show
    # @all_occupancy_data = ActiveRecord::Base.connection.execute("SELECT sample_time AS s, number_occupants::int AS n, room_id::int AS r FROM occupants")
    @all_occupancy_data = ActiveRecord::Base.connection.execute("SELECT sample_time AS s, number_occupants AS n, room_id AS r FROM occupants")
    render json: @all_occupancy_data
  end

end
