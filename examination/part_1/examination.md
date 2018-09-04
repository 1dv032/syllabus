## Examination 1 - Repetition and Cloud Computing

For this examination you are expected to produce a written report of between 800-1000 words. Report should be delivered to the course email address, 1dv032@lnu.se, as a **PDF, see the planing for exact date and time**.
Please note that the report should be written in Swedish or English. The report will go through a peer-review after finishing. This means you also should do a review of a other students paper. **Again, the report must be in pdf-format**

## Purpose of the report
The writing of this report aims to give knowledge of finding and analyzing services in one or more cloud service providers. In the report you will try to act as some kind of cloud advisor and try to analyze some scenarios and determine which kind of services will fit and motivate and explain your choices. The idea is not to get down to technical details rather to give an overview and explore the services that are available. There will be no direct and "correct" answers to this assignment but we are expecting that you do the job as good as you can and show us that you have put effort into your report.


### The scenario
You have been asked by a young software company to investigate their possibilities to bring their software into the cloud. Today they operate the application in a private datacenter where the configure up a couple of different servers. The software the company have develop is a software that will try to learn their customers speak and understand different languages through [gamification](https://en.wikipedia.org/wiki/Gamification). They have developed a web-based software for this purpose. The software includes not just the web site but also servers that handles calculation, static resources, caching and so on. The following image describes the system and how it looks today:

[Insert IMAGE HERE]

1. The service have a simple load balancer (today this a nginx) with a round-robin algorithm.
2. Today there are two frontend-servers running LTS node.js. Their job is to redirect requests to the right services and then put together the responses and send them back to the client.
3. The web site. This is the part that handles all the visual part of the software. This is a monolith written in the python framework Django, using the 3.7 version of python.
4. Database for the website, PostgreSQL version 10.5
5. The Auth microservice. This microservice support the authentication, the handling of user credentials
6. Database storing the user credentials, PostgreSQL version 10.5
7. Microservices that handles the service logs, both system logs and meta data from the users that will be used for analyzing there learning and calculating point in the gamification system.
8. Databases for the log data. One for system logs, one for metadata. PostgreSQL version 10.5
9. The calculation microservice. This part draws data from the logs and make some calculations every night. The results is stored in a database
10. The database where calculated data is stored and used by the web site, PostgreSQL version 10.5

The problem is that the system have problem have scalability problem. The service has been popular and the last moth the users has doubled many times. This has lead to that the servers been overloaded some times. The company have taken the decision to investigate how to solve this problem. One direction is to outsource the operations of servers and infrastructure to the cloud. There are plans of building a private cloud but they also want to investigate the public cloud sphare. This is where you come in.

## The assignment
You should write a report where you have investigated the possibility to move the described software to the cloud and using one of the big IaaS; AWS, Microsoft Azure or/and Google Cloud Platform. You can choose one or compare two depending on your ambition. The here follows a description of the mission from the company.

We want to handle the scalability problem. We don´t want a technical report how to scale the application but more an overview what possibilities and services that is available and an estimation of the cost of the different services we needed. We also want references back to where you find your information so we can track it back. 
We will estimate our traffic will be 50 hits per second normally but during some points of the day or when we do some campaign it could in extreme cases be up to 2500 hits per second.

* Ofcourse we want a loadbalansing mechanism in-font of our front-end servers. What available services are there and what is the cost. 
* We want to have the ability to scale our front-end servers and microservices, hopefully in a elastic and cost-effective way
* We want backup of and be able to have redundant data
* The calculating microservice will calculate a lot of data and it will need to have some calculating power when they do their job
* We want to be sure of that we owns our data and that the IaaS won´t be able to take our intellectual property or miss-abuse our clients thrust.
* We want to know if we can be sure that when we delete some data (for example a user) the data can´t be reproduced. How about data migration?
* We want to know how the IaaS handle metadata (our interaction with the IaaS-services).
* We are interesting in storage of static files 
* How is the up-time for the services
* Are there some easy way to run health check?
* We are interesting to implement a more fine-grade monitoring system for our application. Are the any services for this?

### Structure of the report

You are pretty free to structure your report. We assume you have the knowledge of how to present written text in a structure way that makes it easy for the reader to understand. Here are some "must-have":

* The document must have your name, student-id in the first page.
* The report must include a description of the IaaS you may choose
* Each, by you, investigated service the IaaS provide must be described, motivated from our point of view and some kind of estimated monthly cost


## Some tips
Spell check! Grammar check! Bad written reports will be failed!
Read it out loud. If it is hard for you to read, it is probably hard for someone else.
Let some else read it and get their feedback on the content, the language and the narrative.
Keep within the limits!

Make sure to make references to the course literature and any other articles that is relevant for your topic.

## The peer-review instructions
In this course we will use so-called peer-review, the Swedish also called "referensgranskning". This means in short that you will study an other student´s written reports. The idea of the step is to demonstrate your knowledge by analyzing and providing feedback on other student's assignments and hopefully also get great feedback on your own. This dose not mean that you should grade each other rather push and give each other good feedback. In addition, it is important to be able to rise from your own bubble and reflect on the work of others.

After the submission deadline, 25/9 0800, you will get an e-mail with another students report.
Read and analyze the report and give feedback, no more then 300 words
Send your feedback to the course email address and a copy to the student who wrote the report, no later than **27/9 08:00**.
