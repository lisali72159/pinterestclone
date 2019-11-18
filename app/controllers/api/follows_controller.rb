class Api::FollowsController < ApplicationController
    def index
        @follows = Follow.all
        render :index
    end
  
  
    def create
        @follow = Follow.new(follow_params)
        @follow.user_id = current_user.id
        if @follow.save
        render :index
        else
        render json: ["Could not process request"], status: 401
        end
    end

    def destroy
        @follow = Follow.find_by(user_id: follow_params[:user_id], followable_id: follow_params[:followable_id], followable_type: follow_params[:followable_type])
        if @follow
          @follow.destroy
          render :index
        else
          render json: ["Could not process request"], status: 401
        end
    end

  private
  def follow_params
    params.require(:follow).permit(:user_id, :followable_id, :followable_type)
  end
end