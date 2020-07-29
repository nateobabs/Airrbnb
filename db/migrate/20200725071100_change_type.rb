class ChangeType < ActiveRecord::Migration[6.0]
  def change
    change_column :reservations, :total, :integer
  end
end
