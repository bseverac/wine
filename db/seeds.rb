# frozen_string_literal: true

require 'faker'

def create_wine_bottle(num)
  num.times do |_i|
    WineBottle.create(
      name: "#{Faker::App.unique.name} #{Faker::Address.unique.state}",
      year: rand(1900..2021).to_i,
      rate: rand(1..5).to_i,
      price: rand(1..100),
      color: WineBottle::WINE_COLORS.sample
    )
  end
end

puts 'Creating wine bottle ...'

create_wine_bottle(50)
