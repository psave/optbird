require 'json'

class ChartsController < ApplicationController

  def show
    @chart = Occupants.all
    render json: @chart
  end

end
