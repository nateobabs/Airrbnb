class ReservationsController < ApplicationController
  before_action :authenticate_user!

  def index
    @reservations = current_user.reservations.all
  end

  def new
  end

  def create 
    @room = Room.find(params[:room_id])
    @reservation = current_user.reservations.build(reservation_params)
    @nights = params[:nights]
    if @reservation.save
      render 'payment'
    else
      flash[:alert] = "Something went wrong!!"
      redirect_to room_path(@room)
    end
  end

  def payment
  end

  def checkout
    @room = Room.find(params[:room_id])
    @reservation = @room.reservations.find(params[:reservation_id]);
    begin
      @amount = params[:price]
      customer = Stripe::Customer.create({
        email: current_user.email,
        source: params[:stripeToken],
      })

      charge = Stripe::Charge.create({
        customer: customer.id,
        amount: @amount.to_i * 100,
        description: 'Airrbnb customer',
        currency: 'inr',
      })

    rescue Stripe::CardError => e
      charge_error = e.message
    end

    if charge_error
      @reservation.destroy
      flash[:alert] = charge_error
      redirect_to room_path(@room)
    else
      flash[:notice] = "Your space was booked successfully."
      redirect_to trips_path
    end

  end

  def destroy
    @room = Room.find(params[:room_id])
    @reservation = @room.reservations.find(params[:id])
    @reservation.destroy
    flash[:alert] = "Bookin was cancelled successfully! Refund will be initiated soon"
    redirect_to trips_path
  end


  private
    def reservation_params
      params.require(:reservation).permit(:start_date, :end_date, :price, :total, :room_id, :nights)
    end
end
