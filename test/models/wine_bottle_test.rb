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
require "test_helper"

class WineBottleTest < ActiveSupport::TestCase
  should validate_presence_of(:name)
  should validate_length_of(:name).is_at_most(200)
  should validate_numericality_of(:year).only_integer.allow_nil
  should validate_inclusion_of(:color).in_array(WineBottle::WINE_COLORS).allow_nil
  should validate_inclusion_of(:rate).in_range(0..5).allow_nil
  should validate_numericality_of(:price).only_integer.is_greater_than(0).allow_nil
end
