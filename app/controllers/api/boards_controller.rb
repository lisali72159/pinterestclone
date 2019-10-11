class Api::BoardsController < ApplicationController

  

  def create
    @board = Board.new(board_params)
    @board.author_id = current_user.id
    if @board.save
      render '/api/boards/show'
    else
      render json: @board.errors.full_messages, status: 401
    end
  end

  def index
    @boards = current_user.authored_boards
    render '/api/boards/index'
  end

  def update
    @board = current_user.authored_boards.find(params[:id])
    if @board.update(board_params)
        render 'api/boards/show'
    else
        render json: @board.errors.full_messages, status: 422
    end  
  end

  def destroy
    @board = current_user.authored_boards.find_by(id:params[:id])
    @board.destroy
    render 'api/boards/show'
  end

  private

  def board_params
    params.require(:board).permit(:author_id, :name)
  end

end