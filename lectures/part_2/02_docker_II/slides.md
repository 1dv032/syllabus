<!-- Start -->
## Today's lecture
* Docker demo
* Docker Compose
* Docker Compose demo
* Container Orchestration

Note:
These are the topics for todays lecture.


---
## Docker - Example
[Excercise docker nodejs dev](https://github.com/1dv032/exercise-docker-compose-ror-dev)
> Write a Dockerfile that will build a development template for a node.js developer

* The Dockerfile should use the node:latest as a base image.
* The Dockerfile should take this repos node project-template and copy the files into the container at creation.
* The container should expose port 8080 as the port for the node.js web application.


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
  - one or more bare-metal servers or virtual machines (referred to as nodes)
  - providing the resources used by Kubernetes to run one or more applications
* Node
  - a worker machine, previously known as a minion
  - has the services necessary to run pods
  - managed by the Master-Nodes
* Pods 
  - groups of containers and volumes co-located on the same host
  - containers in the same Pod share the same network namespace - `localhost`
  - pods are considered to be ephemeral


--
## Container Orchestration
Kubernetes core components:
* Labels 
  - tags assigned to entities such as containers
  - allow them to be managed as a group
  - e.g.
    - `"release" : "stable", "release" : "canary"`
    - `"environment" : "dev", "environment" : "qa", "environment" : "production"`
* Replication Controller
  - ensures that a specified number of pod replicas are running at any one time
* Services
  - act as basic load balancers and ambassadors for pods
  - exposing them to the outside world
  - pods targeted by a Service is (usually) determined by a Label Selector 


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
  - Rolling updatess

Note:
**Cluster management integrated with Docker Engine**: Use the Docker Engine CLI to create a swarm of Docker Engines where you can deploy application services. You don’t need additional orchestration software to create or manage a swarm.<br/>
**Decentralized design**: Instead of handling differentiation between node roles at deployment time, the Docker Engine handles any specialization at runtime. You can deploy both kinds of nodes, managers and workers, using the Docker Engine. This means you can build an entire swarm from a single disk image.<br/>
**Declarative service model**: Docker Engine uses a declarative approach to let you define the desired state of the various services in your application stack. For example, you might describe an application comprised of a web front end service with message queueing services and a database backend.<br/>
**Scaling**: For each service, you can declare the number of tasks you want to run. When you scale up or down, the swarm manager automatically adapts by adding or removing tasks to maintain the desired state.<br/>
**Desired state reconciliation**: The swarm manager node constantly monitors the cluster state and reconciles any differences between the actual state and your expressed desired state. For example, if you set up a service to run 10 replicas of a container, and a worker machine hosting two of those replicas crashes, the manager will create two new replicas to replace the replicas that crashed. The swarm manager assigns the new replicas to workers that are running and available.<br/>
**Multi-host networking**: You can specify an overlay network for your services. The swarm manager automatically assigns addresses to the containers on the overlay network when it initializes or updates the application.<br/>
**Service discovery**: Swarm manager nodes assign each service in the swarm a unique DNS name and load balances running containers. You can query every container running in the swarm through a DNS server embedded in the swarm.<br/>
**Load balancing**: You can expose the ports for services to an external load balancer. Internally, the swarm lets you specify how to distribute service containers between nodes.<br/>
**Secure by default**: Each node in the swarm enforces TLS mutual authentication and encryption to secure communications between itself and all other nodes. You have the option to use self-signed root certificates or certificates from a custom root CA.<br/>
**Rolling updates**: At rollout time you can apply service updates to nodes incrementally. The swarm manager lets you control the delay between service deployment to different sets of nodes. If anything goes wrong, you can roll-back a task to a previous version of the service.<br/>


--
## Container Orchestration
Swarm mode key concepts:
* Swarm
  - a cluster of Docker engines, or nodes, where you deploy services
* Node
  - an instance of the Docker engine participating in the swarm
  - manager nodes also perform the orchestration and cluster management
  - worker nodes receive and execute tasks dispatched from manager nodes
* Services and tasks
  - definition of the tasks to execute on the manager or worker nodes
  - specify a container image and which commands to execute inside the container
  - replicated services model
* Load balancing