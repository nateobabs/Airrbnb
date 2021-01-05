class RoomsController < ApplicationController
  before_action :set_room, only: [:show, :edit, :destroy, :update]
  before_action :authenticate_user!, except: [:index]
  
  def index
    @rooms = current_user.rooms.all
  end

  def new
    @room = current_user.rooms.build
  end

  def create
    @room = current_user.rooms.build(room_params)
    if @room.save
      flash[:notice] = "Your place was successfully created"
      redirect_to root_path
    else
      render 'new'
    end
  end

  def show
  end

  def edit
    if current_user.id != @room.user.id
      redirect_to root_path 
      flash[:alert] = "You don't have permission"
    end
  end

  def update
    urls = JSON.parse params[:room][:urls]
    urls.each do |url|
      if !@room.urls.include?(url)
        @room.urls << url
      end
    end
    if @room.update(room_params)
      redirect_to edit_room_path(@room)
      flash[:notice] = "Your space was updated successfully..."
    else
      render 'edit'
    end
  end

  def destroy
    @room.destroy
    flash[:notice] = "Your space was removed successfully"
    redirect_to rooms_path
  end

  def delete_images
    @room = Room.find(params[:room_id])
    if current_user.id == @room.user.id
      index = params[:image_id]
      @room.urls.delete_at(index.to_i)
      @room.save
      respond_to :js
    else
      flash[:alert] = "You don't have permission"
      redirect_to root_path
    end
  end

  private
    def set_room
      @room = Room.find(params[:id])
    end

    def room_params
      params[:room][:urls] ||= []
      params.require(:room).permit(
        :home_type, :room_type, :accomdate,
        :bedroom, :bathroom, :listing_name,:city, 
        :state, :summary, :address, :is_tv, :is_kitchen,
        :is_air, :is_heating, :is_internet, :price, urls: []
      )
    end
  
  
end
