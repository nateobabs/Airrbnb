class HomeController < ApplicationController
  def index
  end

  def search
    @location = params[:location]
    @checkin = params[:checkin]
    @checkout = params[:checkout]
    @guests = params[:guests]
    @stays = Room.search(@location)
    if @stays.blank?
      @rooms = Room.all
    end
    if !@stays.blank?
      @result = Geocoder.search(@stays.first.city)
    else
      @result = Geocoder.search(@rooms.first.city)
    end
  end
end
