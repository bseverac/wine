class Api::V1::WineBottlesController < ApplicationController
  def index
    wine_bottles = WineBottle.in_price_range(params[:min_price], params[:max_price])
      .order(rate: :desc).limit(10)

    render json: wine_bottles
  end
end
