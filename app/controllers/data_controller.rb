class DataController < ApplicationController

  def index
    @buildings = Building.all
  end

  def show
    @all_occupancy_data = ActiveRecord::Base.connection.execute("SELECT sample_time AS s, number_occupants AS n, room_id AS r FROM occupants")
    # @courses_data = ActiveRecord::Base.connection.execute("SELECT room_id, number_occupants, daysmet, start_time, end_time, start_date, end_date, sec_enr_tot, capacity, short_title FROM courses")
    # render json: {occupancy_data: @all_occupancy_data, courses_data: @courses_data}
    render json: @all_occupancy_data
  end

end
