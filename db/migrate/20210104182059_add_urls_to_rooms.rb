class AddUrlsToRooms < ActiveRecord::Migration[6.0]
  def change
    add_column :rooms, :urls, :string, array: true, default: []
  end
end
