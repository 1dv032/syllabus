<!-- Start -->
## Today's lecture

* Definition of "Cloud"
    * Characteristics
    * History
    * Basic concepts and terminology
* Cloud Services
    * Cases
* Deploy models
* Business drivers
* Challenges


--- 
### The cloud?
![The cloud](images/cloud-1.png)

<!-- {_class="center"} -->

<!--Cloud computing? {_style="text-align: center; font-size:55%"} -->


Note:
Osäkert vad själva ordet/begreppet kommer ifrån. Bild på moln för att beskriva helhet utan att gå in i detaljer. Nätverksschema förr ritade servrar som cirklar => serverkluster => såg ut som ett moln.<br>
Hur vi kommer i kontakt med molntjänster idag?<br>
Bygga system. Webbhotel vs. VPS, virtualisering. Förtsättning från förra veckan
Turn hardware and networking into software
Scaling


---
## Some historical stuff...
* Main frame computing 1950s
  * Multiple users working against a central computer
* Around 1970, concept of virtual machines (VMs)
  * One or more OS in one physical hardware
* Virtualized private network
  * Offered same service as P2P connections, lower cost


--

## Definition
> Cloud computing is a model for enabling ubiquitous, convenient, *on-demand* network access to a *shared pool* of configurable computing resources (e.g., networks, servers, storage, applications, and services) that can be rapidly provisioned and released with minimal management effort or service provider interaction. This cloud model is composed of five essential characteristics, three service models, and four deployment models.

Source - [NIST (National Institute of Standards and Technology) [Definition](http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf)] - Mell and Grance

<!-- {_style="text-align: center; font-size:40%"} -->



--
## Characteristics
* On-demand self-service
  * A customer can get computing capabilities (server time, network storage) automatically without human interaction with the service provider.
* Broad network access<!-- {_class="fragment"} -->
  * The services are available over the network and accessed through standard mechanisms (thin or thick client)
  * Programmable API
* Resource pooling<!-- {_class="fragment"} -->
  * Pooled to serve multiple consumers using a multi-tenant model, with different physical and virtual resources dynamically assigned and reassigned according to the consumers demand


--
## Characteristics
* Rapid elasticity
  * Resources can be rapidly and elastically created. They can automatically scale in and out.
* Measured service<!-- {_class="fragment"} -->
  * Cloud systems can automatically control and optimize resources by using a metering capability. Measuring storage, processing, bandwidth...


---
## Service models (the big three)
* SaaS
  * Software as a Service
  * Consumers uses the providers web-accessible applications
    * Google docs, Github...
* PaaS<!-- {_class="fragment"} -->
  * Platform as a Service
  * The consumer can deploy their own applications into the vendor-provided framework
    * Google App Engine, [Heroku](https://www.heroku.com)
      * charge of CPU time, bandwidth, storage, offer elastic scaling
* IaaS<!-- {_class="fragment"} -->
  * Infrastructure as a Service
  * The consumer can use processing, storage, network and other fundamental computing resources. The consumer can create servers and run there own applications in the cloud.
    * Windows Azure, AWS, Digital Ocean, Google Cloud 
      * charge for compute time, storage, network traffic


--

![ias](images/iaas.png)

<!-- {_class="center"} -->


--
### FaaS
* Function as a service
* Runs functionalities of an application
* One way of achieving a "serverless" architecture
  * AWS Lambda, Google cloud functions, MS Azure functions...
* Charge by execution time

<div>
### KAAS 
* Kubernetes as a Service
  * Running your docker containers
  * More about that later...
</div><!-- {_class="fragment"} -->


---
### Deployment models (resource sharing)

* Public cloud
  * The cloud infrastructure is made available to the general public or a large group of **cloud consumers** and is owned by a **cloud provider** selling cloud services.
* Private cloud<!-- {_class="fragment"} -->
    * The cloud is used and maintained by only one organization
* Community cloud<!-- {_class="fragment"} -->
  * The cloud infrastructure is shared between several organizations that has shared concerns.
  * Government, health care, companies with needs of same applications
  * [Report about Swedish government cloud](http://www.statenssc.se/omstatensservicecenter/publikationer/rapporter/arkiv/engemensamstatligmolntjanstformyndigheternasitdrift.2106.html)
* Hybrid cloud<!-- {_class="fragment"} -->
  * The cloud infrastructure is a composition of two or more clouds (private, public or community). 
    * Cost, performance, security
    * Avoid vendor lock-ins, easier through containerization?



---

### Choosing Deployment models
* Compliance (sv: överensstämmelse)
  * Regulations depending on business, size, locations
* Privacy
  * Data leakage, accidental exposure
* Cost
  * Total cost of ownership (TCO), Return of Investment (ROI)
  * Using long term or short term
* Control
  * Private give more control, hardware, technologies, data
  * Require more knowledge 


--
# Overview
![overview](./images/overview.png)


--
### Some kind of cloud...defined with squares
<img src="./images/cloud_overview.jpg" width="80%" />


--
### Cloud resources services
* Compute
  * Mainly server instances - Create and restore VMs, container management
    * Scaling, Serverless applications...
* Storage Resources<!-- {_class="fragment"} -->
  * Block Storage
    * local disk drive but are often allocated from the network ( = there will be latency)
    * Ex. [Amazon EBS](https://aws.amazon.com/ebs/), [OpenStack Cinder](https://wiki.openstack.org/wiki/Cinder)
  * Object Storage
    * Files can be stored and accessed from different parts of the infrastructure or publicly
    * Designed for long-term storage often accessed from different servers (CDN)
      * [Amazon S3](https://aws.amazon.com/s3/), [Openstack Swift](https://wiki.openstack.org/wiki/Swift)
  * Hot & Cold storage (performance, latency etc.)
* Network Resources<!-- {_class="fragment"} -->
  * Manage connectivity between its own elements and with external networks
    * Internal routing, load balancing, Gateways, Scalable DNS...
* Analytics, Migration, Databases, Development tools, Machine learning....<!-- {_class="fragment"} -->



---
* Amazon Web Service ([https://aws.amazon.com/](https://aws.amazon.com/))
  * 2002 - to market 2006
  * IaaS, PaaS, SaaS, FaaS...
  * 19 geographical regions (eu-north-1 --> Stockholm)
    * Each region has multiple "Availability Zones"
    * Each region is completely independent. Each Availability Zone is isolated
    * Availability Zones in a region are connected through low-latency links.


![AWS regions](images/aws_regions.png)


--
* Microsoft Azure ([https://azure.microsoft.com](https://azure.microsoft.com))
  * 2010
  * IaaS, PaaS, SaaS, FaaS...
  * 54 geographical regions
    * Some regions has multiple "Availability Zones"
* Google Cloud ([https://cloud.google.com/](https://cloud.google.com/))
* IBM Cloud ([https://www.ibm.com/cloud/](https://www.ibm.com/cloud/))
* ...





---
## Why using Cloud?
* Cost effective?<!-- {_class="fragment"} -->
  * Pay-as-you-go
  * Someone else is taking care of stuff
    * Avoiding overheads, licensing...
* Flexibility - better use of resources<!-- {_class="fragment"} -->
  * Support new business models
* Service availability<!-- {_class="fragment"} -->
* Data<!-- {_class="fragment"} -->
  * Storage infrastructure, backups, recovery
  * Data migration
* Environmentally friendly?<!-- {_class="fragment"} -->
  * Power, cooling, leading to new energy solutions


--

## Challenges!
* Legal and constraints on hosting location
  * Sensitive data, personal integrity, legal issues
  * What happen when our PaaS is acquired?
* When I delete data is it deleted?
  * Transparency how data is handle
* SaaS is often free....or?
  * Is Google Docs free? Is Facebook/Messenger free?
* Portability
  * Vendor lock-in, What if the provider will shut down?
* ...


