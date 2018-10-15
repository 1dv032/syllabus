In this examination assignment You should set up a new development and production environment suited for a specific situation. You are given a job description of a fictitious company (Sirius Cybernetics Corporation) who need help with setting up an open source application. This application should be able to run both locally on you machine and in an "production" environment.

## Examination

The examination will be divided in two parts: **First part will be an oral theoretical examination with questions related to the course material in this course.** 
The second part is more practical examination. To assist you and the examiner, you should provide a general documentation where you can quickly get en overview of your solution **but also a recorded video where you demonstrate that your solution fulfills the requirements.**

### Documentation

Your documentation should be done in the Wiki that comes with your examination GitHub repo.
It should, at least, contain the following parts:

1. **Work Diary** - What have you done today? Which problems did you try to solve and how did you solve them. Every day that you have worked with the assignment should have an entry in the diary, it should also include how much time was spent on the specific task and also a summarize time report telling the total time spending on solving this assignment.
2. **How to test your solution** - The assignment is divided into two different part and you need to document how we can try these different parts. The examiner should be able to test each solution with minimal effort, preferable just one command.
3. As said above - A video should be recorded demonstrating your solution

## Sirius Cybernetics Corporation - Mission Statement

Sirius Cybernetics Corporation is a company that is responsible for the design and creation of a wide range of robots and labour-saving devices, such as lifts, automatic doors, ventilation systems, and the infamous Nutrimatic Drinks Despenser.

Sirius Cybernetics Corp. have no project management system today but have lately realized the need for such system.
After searching for the perfect solution they come the the conclusion that it did not exist. So they decides to look for an open source project that they could start from and then hire some developers to implement the missing features. Sirius Cybernetics choose [RedMine](http://www.redmine.org/) as the open source project and you just got hired to get it up and running.

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
