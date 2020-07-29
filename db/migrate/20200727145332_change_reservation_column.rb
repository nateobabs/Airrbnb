class ChangeReservationColumn < ActiveRecord::Migration[6.0]
  def change
    change_column :reservations, :start_date, :string
    change_column :reservations, :end_date, :string
  end
end
