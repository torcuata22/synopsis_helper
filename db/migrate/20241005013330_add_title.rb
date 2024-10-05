class AddTitle < ActiveRecord::Migration[7.1]
  def change
    add_column :synopses, :title, :string
  end
end
