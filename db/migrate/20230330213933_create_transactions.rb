class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.string :title
      t.string :description
      t.float :amount
      t.string :currency
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
