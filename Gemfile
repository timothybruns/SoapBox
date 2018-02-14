source 'https://rubygems.org'

ruby '2.3.4'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.4'
# Use postgresql as the database for Active Record
group :production do
  gem 'pg', '~> 0.18'
end

gem 'listen', '~> 3.1.5'

# gem 'dotenv-rails', groups: [:development, :test]
# gem 'faker', '~> 1.7.2'
# gem 'active_model_serializers', '~> 0.10.0'
gem 'knock', '~> 2.0'


# group :development, :test do
# Use Puma as the app server
gem 'puma', '~> 3.7'
# Build JSON APIs with easex. Read more: https://github.com/rails/jbuilder
# gem 'jbuilder', '~> 2.5'
# Use ActiveModel has_secure_password
 gem 'bcrypt', '~> 3.1.7'
 gem 'activerecord-session_store', github: 'rails/activerecord-session_store'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
gem 'rack-cors'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
  # gem 'pg'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
