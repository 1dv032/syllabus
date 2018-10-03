<!-- Start -->
## Today's lecture
* Applications architecture
  * Web-based viewpoint
    * Dynamic data
* Scaling patterns
* When thing go bad

Note:
These are the topics for todays lecture.


---
## Single-machine Web Server

* Web app, database, static/dynamic content on same server
  * Monolithic code base
* Good fit for smaller applications
* Problems with
  * many simultaneous user
  * maintenance
  * optimizing for a specific service (like web, db)
    * buffer thrashing
* Scale by adding more memory, more disk, more CPU (to some point)
  * Horizontal scaling


--
## Three-tier Web Service
* Design in layers
  * Load balancer layer
  * Web server layer (application layer)
  * Data service layer  
* Scale by adding more instances
  * Vertical scaling

[image here]


--
## Four-tier Web Service
* Adding a front-end layer
  * The front-end servers and applications servers run on different machines
  * Decouples responsibility from the application 
    * Protocol, Encryption, compression, session handling
    * Minimizing attack vectors
  * Front-end handles stuff common to all applications in a service
  * Optimize for high network through-put, minimize storage
  * Reverse proxy service
* Application servers and data layer servers optimizes

[image here]


---
## Load balancers
* DNS Round robin
* Layer 3 and 4 Load balancers
* Layer 7 Load balancers


https://codeburst.io/scaling-out-with-docker-and-nginx-8eda9fb1654c
