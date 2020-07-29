class AddFieldsInUser < ActiveRecord::Migration[6.0]
  def change
    add_column(:rooms, :city, :string, null: false, default: '')
    add_column(:rooms, :state, :string, null: false, default: '')
  end
end
