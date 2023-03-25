# README

# Dependency
install rbenv
install docker / docker-compose
install bundler
install yarn

# Setup
`bundle install`
`yarn install`

# Create database and seed
`bin/rails db:drop db:create db:migrate db:seed`

# Run server
`./start-server.sh`

# Auto documentation
`annotate --models`

# Linter
`yarn lint`
`rubocop`