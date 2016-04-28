class DataController < ApplicationController

  def index
    @buildings = Building.all
  end

  def show
    @occupancy_data = ActiveRecord::Base.connection.execute("SELECT sample_time AS s, number_occupants AS n, room_id AS r FROM occupants")
    @courses_data = ActiveRecord::Base.connection.execute("SELECT room_id, daysmet, start_time, end_time, start_date, end_date, sec_enr_tot, capacity, short_title FROM courses WHERE room_id IS NOT NULL")
    render json: {occupancy_data: @occupancy_data, courses_data: @courses_data}
  end

end
