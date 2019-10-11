class Api::PinsController < ApplicationController
  def create
    @pin = Pin.new(pin_params)
    @pin.author_id = current_user.id
    if @pin.save
      # render json message: "Successfully uploaded!"
      render '/api/pins/show'
    else
      render json: @pin.errors.full_messages, status: 401
    end
  end

  def show
    @pin = Pin.find(params[:id])
  end

  def index
    @pins = Pin.all.includes(:author)
    render '/api/pins/index'
  end

  def update
    @pin = Pin.find(params[:id])
    if @pin.update(pin_params)
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