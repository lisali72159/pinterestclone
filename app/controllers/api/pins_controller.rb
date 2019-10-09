class Api::PinsController < ApplicationController
  def create
    # debugger
    @pin = Pin.new(pin_params)
    @pin.author_id = current_user.id
    debugger
    if @pin.save
      # debugger
      render json {message: "Successfully uploaded!"}
      # render '/api/pins/index'
    else
      # debugger
      render json: @pin.errors.full_messages, status: 401
    end
  end

  def show
    @pin = Pin.find(params[:id])
  end

  def index
    @pins = Pin.all.includes(:author)
    # debugger
    render '/api/pins/index'
  end

  def update
    if @board.update(pin_params)
        render 'api/pins/index'
    else
        render json: @pin.errors.full_messages, status: 422
    end  
  end

  def destroy
    pin = current_user.pins.find_by(id:params[:id])
    pin.destroy
    render 'api/pins/index'
  end

  private

  def pin_params
    params.require(:pin).permit(:author_id, :board_id, :title, :link, :description, :photo)
  end

end