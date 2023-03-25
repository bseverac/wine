# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :wine_bottles, only: %i[index]
    end
  end

  root 'react#index'
  get '*path', to: 'react#index', constraints: lambda { |request|
                                                 !request.xhr? && request.format.html?
                                               }
end
