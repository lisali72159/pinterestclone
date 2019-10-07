class Api::BoardsController < ApplicationController

  

  def create
    @board = Board.new(board_params)
    if @board.save
      render '/api/boards/show'
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def index
    @boards = Board.all.includes(:author)
    render :index
  end

  def update
     @user = current_user
    if @user.update(user_params)
        render 'api/boards/show'
    else
        render json: @board.errors.full_messages, status: 422
    end  
  end

  def destroy
    board = current_user.authored_boards.find_by(id:params[:id])
    board.destroy
    render 'api/boards/show'
  end

  private

  def user_params
    params.require(:board).permit(:author_id, :name)
  end

end