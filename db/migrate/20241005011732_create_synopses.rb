class CreateSynopses < ActiveRecord::Migration[7.1]
  def change
    create_table :synopses do |t|
      t.text :characters
      t.text :main_conflict
      t.text :paragraph1
      t.text :paragraph2
      t.text :paragraph3
      t.string :email

      t.timestamps
    end
  end
end
