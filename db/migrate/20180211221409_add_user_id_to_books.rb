class AddUserIdToBooks < ActiveRecord::Migration[5.1]
  def change
    add_reference :books, :user
  end
end
