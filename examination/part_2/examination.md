In this examination assignment You should set up a new development and production environment suited for a specific situation. You are given a job description of a fictitious company (Sirius Cybernetics Corporation) who need help with setting up an open source application. this application should be able to run both locally on you machine and in an "production" environment. To help you simulate the production environment we have our cloud (labcloudftk.lnu.se) where you can solve this problem..

## Examination
The examination will be in the form of an oral examination and will be divided in two parts: First part will be a theoretical examination with questions related to the course material. In the second part a more practical examination. During the oral examination, you will get 10 minutes available to explain and defend your solution of the assignment. To assist you and the examiner, you should provide a general documentation where you can quickly get en overview of your solution.

### Documentation
Your documentation should be done in the Wiki that comes with your examination GitHub repo.
In should, at least, contain the following parts:
1. **Work Diary** - What have you done today? Which problems did you try to solve and how did you solve them. Every day that you have worked with the assignment should have an entry in the diary, it should also include how much time was spent on the specific task.
2. **How to test your solution** - The assignment is divided into four different part and you need to document how we can try these different parts.
3. **Time report** - How much time have you spent on solving the assignment, it should be divided in different categories.


## Sirius Cybernetics Corporation - Mission Statement
Sirius Cybernetics Corporation is a company that is responsible for the design and creation of a wide range of robots and labour-saving devices, such as lifts, automatic doors, ventilation systems, and the infamous Nutrimatic Drinks Despenser.

Sirius Cybernetics Corp. have no time management system today but have lately realized the need for such system.
After searching long for the perfect solution they come the the conclusion that it did not exist. So they decides to look for an open source project that they could start from and then hire some developers to implement the missing features. Sirius Cybernetics choose [Hours](https://github.com/DefactoSoftware/Hours) as the open source project and you just got hired to get it up and running.


### Your assignment
You are the first employee in the newly created development team, your colleagues will begin in 5 weeks. Your assignment is to get the Hours system working in development and pre-production environments before the rest of the team starts. The assignment is divided into 3 parts:

1. **Vagrant Demo version** -
  To be able to show of the Hour application the project manager wants an easy way to demo and try the application. This will also be use by your colleagues, when they start, to get to know the application.

  Part 1 requirements:
  * ability to create a working environment of the latest version of Hour
  * using vagrant to provision the required underlaying systems
  * should be created with as little as possible manual work `vagrant up`

2. **Docker Development version** -
  In this step you should dockerize the Hour application. The setup should fit the developers in the team so don't focus on production yet even if we want the two setups look the same in the end.
  You should analyze the application and see what part will go into the different containers. The solution should be a couple of containers defined in dockerfiles and put together in a docker-compose-file.

3. **Docker Production version** -
  In this last step you should try to take the dockerized Hour Application to production. The whole application should have a reversed proxy in-front that forces the users to rung HTTPS. If the user visits the site through port 80 a redirect to port 443 should be done. For now the solution could work with self-signed certificates.

  The application should run in production mode meaning that the rails environment should be production, including setting the required for running a rails application in production. For more information about this you can red this resource [Rails in production](https://github.com/1dv032/syllabus/blob/master/resources/part_2/rubyonrails_production.md).

  Following point is not mandatory but *could* affect the grades on this examination:
  - Configure support for Redis which should be used for caching.
  - Don´t use the rails frameworks built in web server - Use a app server like passenger, unicorn, puma…
  - Let your reverse proxy handle all the static resources so that request to these don´t goes through the rails framework.
  - Implement a system for handling log volumes through docker.
