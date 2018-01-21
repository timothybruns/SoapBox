class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    drop_table :users # devise created a table, let's make our own instead
    create_table :users do |t|
      t.string :email
      t.string :password
    end
  end
end
