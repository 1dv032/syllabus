This text describes the third examination part of the course 1dv032


## Oral hearing
The examination will be divided in two parts: **First part will be an oral theoretical examination with questions related to the course material in this course.** This document will describe the second part, the practical assignment.

## Practical assignment
The second part is a practical examination. You will set up a new development and production environment suited for a specific application. You are given a minimal microservice application. This application should be able to run both locally on you machine and in an "production" environment using docker and Kubernetes.

### The goal of the practical assignment
* The student will get experience of working with Docker
  * creating images for development and production
  * running containers
  * using docker-compose to set up a developer environment
* The student will get experience of working with Kubernetes
  * running docker containers in production mode
  * configuring Kubernetes cluster
  * installing and configuring an image registry
* The student will get some experience in working with a microservice architecture


## The problem to solve
In this assignment you will get access to some public Github repositories holding different services that together will form a very simplified microservice architecture. Your task is to dockerize these code projects. An overview of the simplified microservice look like this:

<img src="https://github.com/1dv032/syllabus/raw/master/examination/part_2/ms-overview.png" width="600px">


The different services are using different platforms (as their name suggests) meaning that you must build images for different languages or services including Node.js, Go, Python(flask framework) etc. Here follows a short description of each service or part of the microservice application.

* Frontend
  * This is a simple SPA used for testing purposes. It should be placed on some kind of web server so it could be accessed by a web browser. It uses AJAX for calling the API-gateway. You are free to change code in this part if you want.
  * Github repository: to come...
* API-gateway
  * This is a simple API-gateway/proxy solution written in Node.js with the express framework. It just takes requests and routes them to the right service
  * Github repository: to come...
* Go
  * This is a very simple web-api written in the go language. It just answers at the root URL and sends a small JSON-object back. Like a "hello world"-service
  * Github repository: to come...
* Flask
  * This is a code project done in the flask web framework running on python. The service is just a dummy "Hello world"-service thet sends a simple JSON-message back on a request to its root.
  * GitHub repository: to come...
* Node
  * This is a node.js-service. The service should have a database (redis) attached from where it reads the message the service response with on request to its root-url. For this assignment part1 (creating a docker-compose solution) you should also set up this service so you could work on it locally. Think of it as you are part of the team responsible for this service
  * GitHub repository: to come...

<br>
### Part 1 - Development environment with docker-compose
In the first part you will build a development environment that runs all services on a local machine. You will start with trying to build docker images to all the different service. Then you will create a docker-compose-file that will create containers from the images and run the whole solution when the "developer" runs the command "docker-compose up". The goal will be to run the frontend-application, press all the buttons that will connect through the API-gateway to the different services.

To show the examiner your solutions you, continuous, push all files needed to your examination repository on Github. The files should be pushed to a part1-folder in your examination repo (make it easy for the examiner to find). Write a readme-file with instructions how to try your solution. Of course we should use as few commands as possible when running the solution.



### Part 2 - Production environment with Kubernetes
In this part ju should try to put the microservice in production on a Kubernetes cluster (will be provided for you). This part should be divided into three parts:

1. Create production ready docker images (the images could differs from your images used by docker-compose in part 1)
2. Create a private docker image repository on your cscloud-project from which you will pull the images
3. Run the production the microservice in the Kubernetes cluster.

<br>
More information to come....<br>
Information about your Kubernetes cluster account goes here...<br>

All your files should be pushed to a part2-folder in your examination repo (make it easy for the examiner to find). The README.md of this folder should have a URL where the micoservice could be tested.

## Examination of the practical part
All files you have created to solve the problem must be in your private examination repo by deadline. Be sure to follow the above instructions so that the examiner easy could try our solution.

## Help
The course have several tutoring passes scheduled. Be sure to use them to ask questions.