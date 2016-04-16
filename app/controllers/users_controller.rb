class UsersController < ApplicationController

  # def new
  #   @user = User.new
  # end

  # def create
  #   @user = User.new(user_params)
  # end

  protected

  def user_params
    params.require(:user).permit(:name, :password)
  end

end
