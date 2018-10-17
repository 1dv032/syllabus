# Demo
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
    * [Pull secret](https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/)
  * Load balancer

