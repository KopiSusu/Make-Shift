class CreateGuides < ActiveRecord::Migration
  def change
    create_table :guides do |t|
      t.integer :project_id
      t.integer :step
      t.string :instructions
      t.timestamps
    end
  end
end
