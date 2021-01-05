class RemoveTable < ActiveRecord::Migration[6.0]
  def change
    remove_foreign_key :active_storage_attachments, column: :blob_id
  end
end
