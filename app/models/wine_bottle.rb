# == Schema Information
#
# Table name: wine_bottles
#
#  id         :uuid             not null, primary key
#  name       :string(200)      not null
#  year       :integer
#  color      :string
#  rate       :integer
#  price      :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class WineBottle < ApplicationRecord
  WINE_COLORS = %w[red white rose].freeze

  validates :name, presence: true, length: { maximum: 200 }
  validates :year, numericality: { only_integer: true }, allow_nil: true
  validates :color, inclusion: { in: WINE_COLORS }, allow_nil: true
  validates :rate, inclusion: { in: 0..5 }, allow_nil: true
  validates :price, numericality: { only_integer: true, greater_than: 0 }, allow_nil: true

  # handle the case when min_price or max_price is nil

  scope :in_price_range, ->(min_price = 0, max_price = Float::INFINITY) {
          where(price: (min_price..max_price))
        }
end
