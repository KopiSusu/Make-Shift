class CreateJoinGuides < ActiveRecord::Migration
  def change
    create_table :join_guides do |t|
      t.belongs_to :guide
      t.belongs_to :project
      t.timestamps
  end
end
