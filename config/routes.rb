Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
    end
  end

  root "react#index"
  get "*path", to: "react#index", constraints: ->(request) do
                 !request.xhr? && request.format.html?
               end
end
