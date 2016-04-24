require 'json'

class ChartsController < ApplicationController

  def index
    @buildings = Building.all
    # @rooms = Room.all
  end

  def rooms
    render json: Room.where(building_id: params[:id])
  end

end
