class Api::UsersController < ApplicationController
  def index
    
    @users = User.all 
  end

  def create
    @user = User.new(user_params)
    @user.set_username
    if @user.save
      login(@user)
      render '/api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = current_user
    if @user.update(user_params) 
        render 'api/users/show'
    else
        render json: @user.errors.full_messages, status: 422
    end  
  end


  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :location, :age, :description, :email, :password)
  end
end