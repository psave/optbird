require 'json'

class ChartsController < ApplicationController

  def index

  end

  def show
    @chart = Populate.all
    render json: @chart
  end

end
