class UsersController < ApplicationController

  def index
  end

  protected

  def user_params
    params.require(:user).permit(:name, :password)
  end

end
