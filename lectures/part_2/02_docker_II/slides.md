<!-- Start -->
## Today's lecture

* Docker Compose
* Docker examples
* Container Orchestration

Note:
These are the topics for todays lecture.


---
# Docker Compose
* defining and running multi-container
* connecting all services your application needs in one file
* multi-environments: production, staging, development, testing
* steps to create
  1. `Dockerfil` - app environment definition
  2. `docker-compose.yml` - definition of all services needed
  3. run `docker-compose up`


--
## Docker Compose
### Features
* Multiple isolated environments on a single host
* Preserve volume data
* Only recreate containers that have changed
* Variables

Note:
Compose uses a project name to isolate environments from each other. <br />
  **on a dev host**, to create multiple copies of a single environment (e.g., you want to run a stable copy for each feature branch of a project)<br />
  **on a CI server**, to keep builds from interfering with each other, you can set the project name to a unique build number<br />
  **on a shared host or dev host**, to prevent different projects, which may use the same service names, from interfering with each other<br />
<br />
Compose supports **variables** in the Compose file. You can use these variables to **customize your composition for different environments**, or different users  


--
## Docker Compose
### When should you use it?
* Development environments
* Automated testing environments
* Single host deployments


---
## Docker - Example
[Excercise docker nodejs dev](https://github.com/1dv032/exercise-docker-compose-ror-dev)
> Write a Dockerfile that will build a development template for a node.js developer

* The Dockerfile should use the node:latest as a base image.
* The Dockerfile should take this repos node project-template and copy the files into the container at creation.
* The container should expose port 8080 as the port for the node.js web application.


--
## Docker Compose - Example
[Excercise docker compse ror dev](https://github.com/1dv032/exercise-docker-compose-ror-dev)

* Create a docker-compose.yml file that defines the following containers:
  - Database
  - Redis
  - The application


---
## Container Orchestration
Orchestration includes a number of features:
* Provisioning hosts
* Instantiating a set of containers
* Rescheduling failed containers
* Linking containers together through agreed interfaces
* Exposing services to machines outside of the cluster
* Scaling out or down the cluster by adding or removing containers
* Load balancing


--
## Container Orchestration
Kubernetes
* created by Google 
* one of the most feature-rich and widely used orchestration frameworks
* key features include:
  - Automated deployment and replication of containers
  - Online scale-in or scale-out of container clusters
  - Load balancing over groups of containers
  - Rolling upgrades of application containers
  - Resilience, with automated rescheduling of failed containers
  - Controlled exposure of network ports to systems outside of the cluster 


--
## Container Orchestration
Kubernetes core components:

* Cluster 
  - is a collection of one or more bare-metal servers or virtual machines (referred to as nodes) providing the resources used by Kubernetes to run one or more applications.
* Pods 
  - groups of containers and volumes co-located on the same host. Containers in the same Pod share the same network namespace and can communicate with each other using `localhost`. Pods are considered to be ephemeral, rather than durable entities, and are the basic scheduling unit.
* Labels 
  - tags assigned to entities such as containers that allow them to be managed as a group – e.g., to be exposed as a service to the outside world.
* Services
  - act as basic load balancers and ambassadors for other containers, exposing them to the outside world.
* Replication Controller 
  - handles the scheduling of pods across the cluster.


--
## Container Orchestration
Docker Swarm
* key features include:
  - Cluster management integrated with Docker Engine
  - Decentralized design
  - Declarative service model
  - Scaling
  - Desired state reconciliation
  - Multi-host networking
  - Service discovery
  - Load balancing
  - Secure by default
  - Rolling updates


--
## Container Orchestration
Swarm mode key concepts:
* Swarm
* Node
* Services and tasks
* Load balancing