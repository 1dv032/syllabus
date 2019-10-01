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
  * This is a simple SPA used for testing purposes. It should be placed on some kind of web server so it could be accessed by a web browser. It uses AJAX for calling the API-gateway. You are free to change code in this part if you want.
  * Github repository:
* API-gateway
  * This is a simple API-gateway/proxy solution written in Node.js with the express framework. It just takes requests and routes them to the right service
  * Github repository:
* go
  * This is a very simple web-api written in the go language. It just answers at the root URL and sends a small JSON-object back. Like a "hello world"-service
  * Github repository: 
* flask
  * This is a code project done in the flask web framework running on python. The service is just a dummy "Hello world"-service thet sends a simple JSON-message back on a request to its root.
  * GitHub repository:
* node
  * This is a node.js-service. The service should have a mongodb attached from where it reads the message the service response with on request to its root-url. For this assignment part1 (creating a docker-compose solution) you should also set up this service so you could work on it locally.
  * GitHub repository:

#### Part 1 - Development environment with docker-compose
In the first part you will build a development environment that runs all services on a local machine. You will start with trying to build docker images to all the different service. Then you will create a docker-compose-file that will create containers from the images and run the whole solution when the "developer" runs the command "docker-compose up".

All your files should be pushed to a part1-folder in your examination repo (make it easy for the examiner to find). Your solution should be able to run with just one or two commands which you show in the folders README.md



#### Part 2 - Production environment with Kubernetes
In this part ju should try to put the microservice in production on a Kubernetes cluster (will be provided for you). This part should be divided into three parts:

1. Create production ready docker images (the images could differs from your images used by docker-compose in part 1)
2. Create a private docker image repository on your cscloud-project from which you will pull the images
3. Run the production the microservice in the Kubernetes cluster.

More information to come....

All your files should be pushed to a part2-folder in your examination repo (make it easy for the examiner to find). The README.md of this folder should have a URL where the micoservice could be tested.

## Examination of the practical part
All files you have created to solve the problem must be in your private examination repo by deadline. Be sure to follow the above instructions so that the examiner easy could try our solution.

## Help
The course have several tutoring passes scheduled. Be sure to use them to ask questions.