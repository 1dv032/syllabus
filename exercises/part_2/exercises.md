## Setup a Ruby on Rails application with Vagrant for development
In this exercise you should create a vagrant-file where you set up a new Ruby on Rails application. All the steps should be defined in scripts and should be executed when running the `vagrant up`-command. The script should:

* Defining a [Ubuntu 14.04 LTS as base image](https://atlas.hashicorp.com/ubuntu)
* Install ruby version 2.3.1
* Install rails version 4.1.x
* Create a [new rails project ](http://guides.rubyonrails.org/command_line.html#rails-new)
* Bundle all the gems
* Generate [a scaffold application](http://guides.rubyonrails.org/command_line.html#rails-generate)
* Create and migrate the database (use the default sqlite3 configuration)
* Start the server and make the application visible through http://localhost:8080


### How to do this?
First of all go through the ["getting started" from vagrants documentation](https://www.vagrantup.com/docs/getting-started/). This will get you up to speed with how vagrant is working. Read through our Ruby on Rails text to get a grip of how a Ruby on Rails application works. How to install ruby and rails? Use a search engine to find inspiration. Github have a good one for this.

## Containerization of an application

### To Be
Using docker/docker-compose to set up a rails application with a postgreSQL...

## Moving to staging/production

### To Be
Running the rails application in production...

## Testing the application

### To Be
Create containers if test successful...

## Setting up monitoring

### To Be
