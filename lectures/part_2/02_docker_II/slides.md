<!-- Start -->
## Today's lecture

* Docker Compose
  - 
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