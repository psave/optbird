require 'json'

class ChartsController < ApplicationController

  def index
    @buildings = Building.all
    # @rooms = Room.all
  end

  def rooms
    render json: Room.where(building_id: params[:id])
  end

  def courses
    render json: Course.where(room_id: params[:room_id])
  end

end
