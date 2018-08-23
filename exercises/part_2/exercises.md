## 1. Setup a Ruby on Rails application with Vagrant for development
In this exercise you should create a vagrant-file where you set up a new Ruby on Rails application. All the steps should be defined in scripts and should be executed when running the `vagrant up`-command. The script should:

* Defining a [Ubuntu LTS as base image](https://atlas.hashicorp.com/ubuntu)
* Install ruby latest version
* Install rails latest version
* Create a [new rails project ](http://guides.rubyonrails.org/command_line.html#rails-new)
* Bundle all the gems
* Generate [a scaffold application](http://guides.rubyonrails.org/command_line.html#rails-generate)
* Create and migrate the database (use the default sqlite3 configuration)
* The developer should only run `vagrant up` then `vagrant ssh` and start the rails server


### How to do this?
First of all go through the ["getting started" from vagrants documentation](https://www.vagrantup.com/docs/getting-started/). This will get you up to speed with how vagrant is working. Read through our Ruby on Rails text to get a grip of how a Ruby on Rails application works. How to install ruby and rails? Use a search engine to find inspiration. Github have a good one for this.

### Solution proposal
https://github.com/1dv032/exercise-vagrant-ror
**OBS!** This is an old solution and some versions of OS and software can be utdated

## 2. Containerization of an node.js dev setup
You will find this exercise and its instruction (the readme-file) in an own repo: https://github.com/1dv032/exercise-docker-nodejs-dev

### Solution proposal
https://github.com/1dv032/solution-exercise-docker-nodejs-dev

## 3. Docker compose with and RoR application
You will find this exercise and its instruction (the readme-file) in an own repo: https://github.com/1dv032/exercise-docker-compose-ror-dev

### Solution proposal
https://github.com/1dv032/solution-exercise-docker-compose-ror-dev

## 4. Moving to staging/production - node.js and a reversed proxy 
You will find this exercise and its instruction (the readme-file) in an own repo: https://github.com/1dv032/exercise-docker-nodejs-prod

### Solution proposal
https://github.com/1dv032/solution-exercise-docker-nodejs-prod

