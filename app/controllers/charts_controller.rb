require 'json'

class ChartsController < ApplicationController

  before_action :restrict_access

  def index
    @buildings = Building.all
    # @rooms = Room.all
  end

  def rooms
    render json: Room.where(building_id: params[:id])
  end

end
