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
* Layer 3 and 4 Load balancers
  * Layer 3 - IP, Layer 4 TCP/UDP
  * L3 load balancers track sessions by using destination and source IP 
    * All traffic from a computer guarantees that the same replica server gets the request
  * L4 load balancers also adds port information
* Simple and fast
* If a replica goes down the LB redirects to another replica

* Layer 7 Load balancers
  * Analyze the application layer
  * Look inside HTTP packets (cookies, header...)


--
## Load balancing methods
* Round robin (RR)
* Weighted RR
* Least Loaded (LL)
* Least loaded - slow start
* Utilization limit
* Latency
* Cascade


--
## How to handle the state
* Log in on replica 3, next request goes to replica 1
* Sticky connections
* Shared state
* Hybrid


--
# Global Load Balancer (GBL)

* A DNS that redirects traffic to nearest data center
* Examines the IP by geolocation of the source IP
  * Nearest
  * Nearest with limits
    * Is the nearest full? go to nest (slow start)
* Nearest by other metrics
  * latency or cost for instance

