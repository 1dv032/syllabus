This text describes the third examination part of the course 1dv032


## Oral hearing
The examination will be divided in two parts: **First part will be an oral theoretical examination with questions related to the course material in this course.** 

## Practical assignment
The second part is a practical examination. You will set up a new development and production environment suited for a specific application. You are given a minimal microservice application. This application should be able to run both locally on you machine and in an "production" environment using docker and Kubernetes.

### The goal of the practical assignment
* The student will get experience of working with Docker
  * creating images for development and production
  * running containers
  * using docker-compose
* The student will get experience of working with kubernetes
  * running docker containers in production mode
  * configuring kubernetes cluster
  * installing and configuring an image registry
* The student will get some experience in working with a microservice architecture


### The problem to solve
In this assignment you will get access to some public Github repositories holding different services that together will form a very simple microservice architecture. Your task is to dockerize these code projects.

The different services are using different platforms meaning that you must build images for different languages or services including Node.js, Go, Python(flask framework) etc. Here follows a short description of each service or part of the microservice application.

* frontend
  * This is a simple SPA used for testing purposes. It should be placed on some kind of web server so it could be accessed by a web browser. It uses AJAX for calling the API-gateway
  * Github repository:
* API-gateway
  * This is a simple API-gateway/proxy solution written in Node.js with the express framework. It just takes requests and routes them to the right service
  * Github repository:
* go
  * This is a very simple web-api written in the go language. It just answers at the root URL and sends a small JSON-object back. Like a "helle world"-service
  * Github repository: 

#### Part 1 - Development environment with docker-compose
In the first part you will build a development environment that runs all services on a local machine. You will start with trying to build docker images to all the different service. Then you will create a docker-compose-file that will create containers from the images and run the whole solution when the "developer" runs the command "docker-compose up".



#### Part 2 - Production environment with Kubernetes



### Your assignment

You are the first employee in the newly created development team, your colleagues will begin in 5 weeks. Your assignment is to get the RedMine system working in development and pre-production environments before the rest of the team starts. The assignment is divided into 2 parts:

1. **Docker Development version** -
  In this step you should dockerize the RedMine application. The setup should fit the developers in the team so don't focus on production yet even if we want the two setups look the same in the end.
  You should analyze the application and see what part will go into the different containers. The solution should be a couple of containers defined in docker files and put together in a docker-compose-file. This version should be used to continue development of Redmine source-code for Sirius Cybernetics needs so you can't use the official Redmine repos for the source code. Instead you should clone or fork the official Redmine into your own repository and use that one when you build the application container.

  The following requirements is wanted:
    * The application should use an Ruby-alpine base image suitable for the Redmine application
    * The latest stable version of RedMine should be used but from a clone/forked version
    * The application should use the latest available (that RedMine support) versions of Ruby and Rails
    * The application should use a dedicated database server. MySQL or Postgree DB.
    * The application should be able to connect to through http://localhost:8080 on the host system
    * The Dockerfile and docker-compose file should have comments to describe how it works
    * You should provide documentation for the user of your docker solution. Which commandos to use and so on...
    * After you run `docker-compose up` you should be able to continue development of the Redmine application and see changes without restarting the containers
    * Validate your solution by make some small code changes (change HTML-content in a template - in the app/view is enough)
3. **Production version** -
  In this last step you should try to take the dockerized RedMine Application to production. The application should have the same requirements as the Development version but should also include the following requirements:
    * The production infrastructure are utilizing an Kubernetes environment (will be provided for you)
    * An container registry should store all docker images/versions, the registry will be provided for you
    * All container images should be pre built for the specific version and pushed to the container registry
    * The whole application should have a Nginx reversed proxy in-front that forces the users to run through HTTPS. If the user visits the site through **port 80** a redirect to port 443 should be done. 
    * The application should run in production mode meaning that the rails environment should be production, including setting the required for running a rails application in production. For more information about this you can red this resource [Rails in production](https://github.com/1dv032/syllabus/blob/master/resources/part_2/rubyonrails_production.md)
    * You should create all the necessary Kubernetes configurations files needed to deploy the application to production

  Following point is not mandatory but *could* affect the grades on this examination if implemented (some or all):
    * Don´t use the rails frameworks built in web server - Use a app server like passenger, unicorn, puma…
    * Implement a system for handling log volumes through docker.
    * Configure support for Redis which should be used for caching.
    * Let your reverse proxy handle all the static resources so that request to these don´t goes through the rails framework.
    * Monitoring
    * Load balancing

## Must read
http://www.redmine.org/projects/redmine/wiki/RedmineInstall#Installation-procedure
https://github.com/1dv032/syllabus/blob/master/resources/part_2/rubyonrails.md
