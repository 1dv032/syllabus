<!-- Start -->
# Today's lecture <!-- {_style="font-size:140%"} -->
* Virtualization

Note:
These are the topics for todays lecture.


--
# Containers
Containers are another virtualization technique. They provide isolation at the pro- cess level instead of the machine level. While a VM is a machine that shares physical hardware with other VMs, each container is a group of processes that run in iso- lation on the same machine. All of the containers run under the same operating system, but each container is self-contained as far as the  les it uses. Therefore there is no dependency hell.
Containers are much lighter weight and permit more services to be packed on fewer machines. Docker, Mesos, and Kubernetes are popular systems for man- aging large numbers of containers. They all use the same container format, which means once a container is created, it can be used on a desktop, server, or huge farm of servers.

Pros and cons of virtualization and containerization, as well as technical details of how they work, can be be found in Volume 2, Chapter 3, “Selecting a Service Platform,” of this book series.
Self-service container administration is made possible by Kubernetes and other container management systems. Customers provide the container speci-  cation and the management system  nds an available machine and spins up the container.
One bad situation people get into with containers is a lack of reproducibil- ity. After using the system for a while, there comes a day when a container needs to be rebuilt from scratch to upgrade a library or other  le. Suddenly the team

realizes no one is around who remembers how the container was made. The way to prevent this is to make the container’s creation similar to compiling software: A written description of what is to be in the container is passed through automation that reads the description and outputs the container. The description is tracked in source code control like any other source code. Containers should be built using whatever continuous integration (CI) system is used for building other software in your organization.
