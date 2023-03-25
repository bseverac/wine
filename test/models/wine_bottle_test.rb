# frozen_string_literal: true

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
require 'test_helper'

class WineBottleTest < ActiveSupport::TestCase
  should validate_presence_of(:name)
  should validate_length_of(:name).is_at_most(200)
  should validate_numericality_of(:year).only_integer.allow_nil
  should validate_inclusion_of(:color).in_array(WineBottle::WINE_COLORS).allow_nil
  should validate_inclusion_of(:rate).in_range(0..5).allow_nil
  should validate_numericality_of(:price).only_integer.is_greater_than(0).allow_nil

  context 'in_price_range' do
    setup do
      @wine_bottle1 = WineBottle.create!(name: 'wine1', price: 10)
      @wine_bottle2 = WineBottle.create!(name: 'wine2', price: 20)
      @wine_bottle3 = WineBottle.create!(name: 'wine3', price: 30)
    end

    should 'return wine_bottles in price range' do
      assert_equal [@wine_bottle1, @wine_bottle2], WineBottle.in_price_range(10, 20)
    end

    should 'return wine_bottles in price range when min_price is nil' do
      assert_equal [@wine_bottle1, @wine_bottle2, @wine_bottle3], WineBottle.in_price_range(nil, 30)
    end

    should 'return wine_bottles in price range when max_price is nil' do
      assert_equal [@wine_bottle1, @wine_bottle2, @wine_bottle3], WineBottle.in_price_range(10, nil)
    end

    should 'return wine_bottles in price range when min_price and max_price are nil' do
      assert_equal [@wine_bottle1, @wine_bottle2, @wine_bottle3], WineBottle.in_price_range(nil, nil)
    end
  end
end
