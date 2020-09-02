## Petty

This application is an awesome helper for entire pets, using this app you can find out your lost or meet a new loyal friend by adopting one! 🐶


## Technology 

Here are the technologies used in this project.

#### Front-end
* Typescript version  ~4.0.2
* React version ^16.13.1



#### Back-end
* Ruby version 2.7.1
* Rails version >= 6.0.3.2


## Javascript libs

* axios
* react-router-dom
* react-leaflet
* styled-components
* styled-icons
* react-image-gallery

## Ruby gems

* carrierwave
* jbuilder
* rack-cors
* mini-magick
* will_paginate
* pry-rails
* factory_bot_rails
* ffaker
* amazing_print


## Getting started

* Download project
>    $ git clone https://github.com/lucasgrocha/petty.git

### Front-end setup
* Change directory:
>    $ cd web
* Install the libs:
>    $ yarn install
* Run the project:
>    $ yarn start

Note: Both rails and react uses the same port and one of them will fail the server starting, to solve It you should create an .env file in root of react project containing:
  > PORT=3006

### Back-end setup
* Change directory:
>    $ cd server
* Install the bundler
>     $ gem install bundler -v 2.1.4
* Install the gems:
>    $ bundle install
* Create database and run migrations:
>    $ rails db:create db:migrate
* Populate database:
>    $ rails db:seed
* Run the project:
>    $ rails server

## Links

- Link of deployed application: ----
- Repository: https://github.com/lucasgrocha/petty


## Author

* **Lucas G Rocha**: @lucasgrocha (https://github.com/lucasgrocha)
