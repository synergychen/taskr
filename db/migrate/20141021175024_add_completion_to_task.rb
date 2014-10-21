class AddCompletionToTask < ActiveRecord::Migration
  def change
    add_column :tasks, :completion, :boolean, null: false, default: false
  end
end
