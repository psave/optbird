require 'json'

class ChartsController < ApplicationController

  def show
    @chart = Populate.all
    render json: @chart
  end

end
