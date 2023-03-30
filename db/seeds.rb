# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Category.create([
                  { name: 'Unknown', description: 'This includes any other expenses that do not fall into the above categories, such as fees, taxes, and unexpected expenses.' },
                  { name: 'Housing', description: 'This includes rent or mortgage payments, home insurance, property taxes, and utilities.' },
                  { name: 'Transportation', description: 'This includes car payments, gas, maintenance, and insurance.' },
                  { name: 'groceries', description: 'This includes food, dining out, and snacks.' },
                  { name: 'Insurance', description: 'This includes health insurance, life insurance, and disability insurance.' },
                  { name: 'Debt', description: 'This includes credit card debt, student loans, and personal loans.' },
                  { name: 'Entertainment', description: 'This includes movies, concerts, and other leisure activities.' },
                  { name: 'Personal care', description: 'This includes expenses related to grooming, beauty, and personal hygiene.' },
                  { name: 'Savings', description: 'This includes contributions to savings accounts, retirement accounts, and investment accounts.' },
                  { name: 'Gifts and donations', description: 'This includes money spent on gifts for others or donations to charitable causes.' },
                ])
