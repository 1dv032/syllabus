## Examination 2 - Cloud computing services

For this examination you are expected to produce a written report (**In pdf-format**). The report will go through a peer-review after finishing. This means you also should do a review of a other students paper as part of the assignment. **Again, the report must be in pdf-format**

## Purpose of the report
The writing of this report aims to give experience and knowledge of finding and analyzing services hosted by cloud service providers. In the report you will try to act as some kind of cloud advisor and try to analyze some scenarios and determine which kind of services will fit and motivate and explain your choices for the (fictional) customer. The idea is not to get down to much technical details rather to learn about and explore the services that are available. There may be no "direct and correct" answers in this assignment but we are expecting that you do the job as good as you can to get reasonable answers and show us that you have put effort into your report.

### The scenario
You have been asked by a relatively new started software company to investigate the possibilities to bring their software into the cloud. Today their software is operated in a private data center where they configure up a couple of different servers supporting their infrastructure. The company have develop a web-based software that learns users to speak and understand different languages with a [gamification system](https://en.wikipedia.org/wiki/Gamification). The software includes not just the web site but also servers that handles calculation, logging, data management and so on. The following image describes the system and how it looks today:

![Image over the application](https://github.com/1dv032/syllabus/raw/master/examination/part_1/app_image.png)

1. The service have a simple load balancer With a round-robin algorithm.
2. Two frontend-servers running node.js LTS. Their job is to redirect requests to the right service and then put together the responses and send them back to the client.
3. The web site. This is the part that handles all the visual part of the software. This is a monolith written in the python framework Django, using the 3.7 version of python.
4. Database for the website, PostgreSQL version 9.4 (RDBS)
5. The Auth microservice. This microservice support the authentication, the handling of user credentials
6. Database storing the user credentials, PostgreSQL version 9.4
7. Microservices that handles the service logs, both system logs and meta data from the users that will be used for analyzing their learning and calculating point in the gamification system.
8. Database for logging data and interaction. Mainly for metadata. This is a noSQL database. 
9. The calculation microservice. This part draws data from the logs and make some calculations every night. The results is stored in the log database.
10. The database where calculated data is stored and used by the web site, PostgreSQL version 9.4 (RDBS)

The biggest issue today is that the service have is the fear of getting scalability problems. The service has been popular and the last month the users has doubled many times. One possible way is to move the operations of servers and infrastructure to the cloud. This is where you come in.

## The assignment
You should write a report where you have investigated the possibility to move the described software to the cloud and using one of the big IaaS; AWS, Microsoft Azure or Google Cloud Platform. Here follows a description of the mission from the company.

"We do not want a technical report how to set up the infrastructure but more **an overview what possibilities and services that is available and an estimation of the cost of the different services we needed.** We also want references back to where you find your information so we can track it back. 
We will estimate our traffic will be 50 QPS normally but during some points of the day or when we do some campaign it could in extreme cases be up to 2500 QPS. At the moment we have MAU-number of 15.000. 

We want you to investigate one cloud provider to find suitible services the cloud provider offer, explain them to us and try to estimate a monthly cost if we try to move our infrastructure to the cloud"

Here are some direct questions you should answer about your chosen IaaS:

* We want a up-time of at least 98%. What will happen if the cloud provider do not live up to this?
* Is there any kind of load balancing service for our front-end servers?
* If our traffic and number of users grow. Is there any way to dynamic scale our instances behind the load balancer?
* We want to be sure of that we owns our data and that the IaaS are able to take our intellectual property or miss-abuse our clients thrust.
* We want to know if that when we delete some data (for example a user) the data can not be reproduced in some way. 
* We are interesting in storage of static files. In the future we may want to store more data like video. Is there services available for this and how will it affect the cost? We estimate it to be about 1000 hours of 1080p videos.
* We are interesting to implement a more fine-grained monitoring system for our application. Are the any specific services for this?
* How much will our current infrastructure cost in the cloud each month (tips - most cloud providers have some kind of calculator-application)?


### Some data of our current infrastructure
| Description | Numbers of| CPU  | RAM  | Storage  | Other  |
| ------------- |:-------------:|:-----:|:-----:|:-----:|:-----:|
| Load balancer | 1 | - | - | - | 50 - 2500 QPS, HTTP messages|
| Front-end server | 2 | 1 | 2 GB | 1 GB | - |
| Web site/microservices | 3 | 1 | 2 GB | 1 GB | - |
| Calculation service | 1 | 4 | 16 GB | 1 GB | - |
| PostgreSQL RDBS | 3 | 2 | 1 GB | 10 - 1000 GB | The log service use 1000 GB, the other RDBS use 10 GB each  |
| noSQL | 1 | - | - | 300 GB | - |

### Structure of the report

You are pretty free to structure your report. We assume you have the knowledge of how to present written text in a structure way that makes it easy for the reader to understand. Here are some "must-have":

* The document must have your name, student-id in the first page. OBS! You do not need to do this when sending in the report for the peer-review (see below) only when you send in the the final version to the examiner.
* The report must include a short description of the IaaS you choose
* Again, the report mus be in PDF-format.


## Some tips
Spell check! Grammar check! Bad written reports will be failed!
Read it out loud. If it is hard for you to read, it is probably hard for someone else.
Let some else read it and get their feedback on the content, the language and the narrative.

Make sure to make references to the course literature and any other articles that is relevant for your topic.

## The peer-review instructions
In this course we will use so-called peer-review, the Swedish also called "referensgranskning". This means in short that you will study an other student´s written reports. The idea of the step is to demonstrate your knowledge by analyzing and providing feedback on other student's assignments and hopefully also get great feedback on your own. This does not mean that you should grade each other but instead push and give each other good feedback. In addition, it is important to be able to rise from your own bubble and reflect on the work of others.

## Deadlines
* Hand-in for peer-instruction - **Send in your report to 1dv032@lnu.se no later then 4 October 08:00**
* During that day you will get an email with a report to review and further instructions.
* You then **send in your peer-review no later then 8 October 08:00**. Instructions in the e-mail.
* The final hand-in is then no later then **10 October 12:00 - This time you send it to the e-mail: john.haggerud.LNU@analys.urkund.se**
* The report is hopefully examined with-in two weeks of the final hand-in.

