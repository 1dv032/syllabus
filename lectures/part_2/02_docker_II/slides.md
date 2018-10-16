<!-- Start -->
## Today's lecture
* Container Orchestration
* Kubernetes
* Kubernetes demo

Note:
These are the topics for todays lecture.


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
## Kubernetes
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
## Kubernetes - Core components
* Cluster 
  - one or more bare-metal servers or virtual machines (referred to as nodes)
  - providing the resources used by Kubernetes to run one or more applications
* Master
  - responsible for maintaining the desired state for your cluster
  - kubectl
* Node
  - a worker machine, previously known as a minion
  - has the services necessary to run pods
  - managed by the Master-Nodes, you’ll rarely interact with nodes directly


--
## Kubernetes - Basic Objects
* [Pods](https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/)
  - groups of containers and volumes co-located on the same host
  - containers in the same Pod share the same network namespace - `localhost`
  - pods are considered to be ephemeral and are not resurrected
* [Services](https://kubernetes.io/docs/concepts/services-networking/service/)
  - act as basic load balancers and ambassadors for pods
  - exposing them to other pods and the outside world
  - pods targeted by a Service is (usually) determined by a Label Selector


--
## Kubernetes - Basic Objects
* [Volumes](https://kubernetes.io/docs/concepts/storage/volumes/)
  - a volume outlives any Containers that run within the Pod
  - data is preserved across Container restarts
  - when a Pod ceases to exist, the volume will cease to exist too
  - Kubernetes supports many types of volumes
    - awsElasticBlockStore, azureDisk, azureFile, cephfs, configMap, csi, downwardAPI, emptyDir, fc (fibre channel), flocker, gcePersistentDisk, gitRepo (deprecated), glusterfs, hostPath, iscsi, local, nfs, persistentVolumeClaim, projected, portworxVolume, quobyte, rbd, scaleIO, secret, storageos, vsphereVolume <!-- {_style="font-size:60%"} -->
* [Namespace](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/)
  - virtual clusters backed by the same physical cluster
  - a way to divide cluster resources between multiple users
  - names of resources must to be unique within a namespace, but not across namespaces
  - a corresponding DNS entry
    - `<service-name>.<namespace-name>.svc.cluster.local`


--
## Kubernetes - Controllers
Controllers build upon the basic objects.
* [ReplicaSet](https://kubernetes.io/docs/concepts/workloads/controllers/replicaset/)
  - next-generation Replication Controller
  - ensures that a specified number of pod replicas are running at any given time
  - recommended to use Deployments instead
* [Deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/)
  - a higher-level concept that manages ReplicaSets and Pods
  - describes a desired state
  - can handle rolling update, rollback and scaling


--
## Kubernetes - Controllers
* [StatefulSet](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/)
  - for applications that require one or more of the following:
    - stable, unique network identifiers
    - stable, persistent storage
    - ordered, graceful deployment and scaling
    - ordered, automated rolling updates
  - single-node identity is preserved between upgrades, scaling up and down, or recovery
* [DaemonSet](https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/)
  - ensures that all (or some) Nodes run a copy of a Pod
  - intended for helper utilities:  monitoring, log management
* [Job](https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/)
  - run-once or scheduled pods
  - run until “completion”

Note:
stable = persistence across Pod (re)scheduling


--
## Kubernetes - Communication
* ClusterIP
  - exposes the service on a cluster-internal IP
  - only reachable from within the cluster
* NodePort
  - exposes the service on each Node’s IP at a static port
  - external access by <NodeIP>:<NodePort>
* LoadBalancer
  - exposes the service externally using a cloud provider’s load balancer
  - NodePort and ClusterIP services, to which the external load balancer will route, are automatically created.
* Ingress
  - can provide load balancing, SSL termination and name-based virtual hosting
  - requires an Ingress Controller, nginx, HAProxy, Træfik


--
## Kubernetes - Administration
* Kubernetes cluster
  - [Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/) or Cloud Provider 
* Tools
  - kubectl - [Install and Set Up kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
  - definition files in YAML for Pods, Services, Namespace, Deployment...
  - [Web UI](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/) (Dashboard)
    - `kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep admin-user | awk '{print $1}') | grep token: | awk '{print $NF}'`
    - `kubectl proxy`
    - http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/


---
## Kubernetes - Demo
* Set up communication with the kubernetes cluster
  * Describe our environment
* Create a web server with external access
  * Nginx pod
  * Service - NodePort
* App with multiple services
  * Database
    * Persistent storage
  * App with own image
    * Push image to own registry
    * https://docs.docker.com/registry/insecure/
    * Pull secret
  * Load balancer


---
## Good bye
![docker](images/cat-jump-fail.gif)

<!-- {_class="center"} -->
