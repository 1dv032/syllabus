<!-- Content -->
## Content
* DevOps
  * What?
  * Why?
  * You and DevOps...


---
## Conway´s law (1967)
"Organizations which design systems ... are constrained to produce designs which are copies of the communication structures of these organizations."
<!-- {_class="fragment"} -->

![Yoda](./images/yoda.gif)
<!-- {_class="fragment"} -->


---
## Building and delivering software
* From idea to production
  * package software
  * Web-based software/service
* The need of fast, stabile and safe flow

<img src="./images/agile.png" width="40%" />



--
<!-- DevOps -->
## The problem with delivering software

<!-- {_style="font-size: 140%"} -->
* People<!-- {_class="fragment"} -->
  * Communication, working in silos with different goals
  * Developers creating a feature may have a dependency in other an other team (ops, database administrator etc.)
* Technology<!-- {_class="fragment"} -->
  * Drifting servers, "it worked on my machine", slow delivery, blame game
* Processes<!-- {_class="fragment"} -->
  * Unable to handle changeability, manual workflows, bottlenecks
  * <img src="./images/changing-the-wheels.png">


---
<!-- DevOps -->
### The problem with silos
<img src="./images/devops1.png" style="float: left" width="30%" />

* Developers (Devs)
  * Rewarded for changeability
   * Devs know the code, the internal structure, knowledge about the platform (languages, compilers and so on) and have their own tools
* Operations (Ops)
  * Rewarded for stability and uptime
    * Ops now the underlying system, operating system, hardware, patches, network, logs and so on.
* Customer/Client (+ management, sales, customers, QA, testers...) want both<!-- {_class="fragment"} -->
  * For the client the problem of a service concerns both ops and dev.



--
## Case
Some days after our release the web server(s) experience high load and the service get slow...who to blame!?

<img src="./images/devops-fire.jpeg" style="float: left margin: 10px" width="30%"  /><!-- {_class="fragment"} -->

<ul><!-- {_class="fragment"} -->
  <li>Developers - The code works on my machine!</li>
  <li>Ops - The server is working - The code is the problem!</li>
</ul>


--
## DevOps  is a reaction!
* Breaking down silos
* Removing bottlenecks
* Creating a a value stream with faster flow for getting ideas to production
  * Building automated pipelines
* Continuous improvement
* Using tools for automated support the above


--
## DevOps
* The initiative mainly from sysadmins/ops
  * Dev - Agile and LEAN Processes
  * Ops - Still waterfall?
  * Web companies/services assume higher availability, more frequent updates
* Devopsday, 2009, Ghent, Belgium <!-- {_class="fragment"} -->
  * "Agile system administrators"
* The need for deep understanding between old silos Dev and Ops <!-- {_class="fragment"} -->
  * Ops using techniques from developers
  * Developers getting greater understanding for operations and deployment - Develop for the production environment
  * Provide both changeability and stability
  * CAMS (https://blog.chef.io/2010/07/16/what-devops-means-to-me)
    * Culture, Automation, Measurement, Sharing
    * Relationships, Integration, Automation, Continuous improvement (from the book)


--


### Culture - That is what DevOps is about
* Engage early - burst silos!
 * Ops and devs in same team (product specific?)
* Be open
 * Visualize what is happening
* Don´t blame
 * Be constructive, Prepare for failure and learn from failure!
* Communications and involvement in every step
 * Conway's Law

![teamwork](./images/teamwork.gif)


--
## It's about Automation
* If you can script it - script it!
* Consistence and stability using scripts
* Create fast and automated workflows!
  * Never pass defects, smaller batches are better
* Use tools to help 
  * There is nothing like a devops-tool, more how you use them


--
## It's about Measurement
* Capture and learn!
  * Devs have their metrics, Ops have their
* Improve feedback, shorten feedback loops, amplify
* Adjust your understanding based on what you learned
* Measure "everything" - Continuous monitoring

<img src="./images/monitoring.png" width="60%" />



--
## It's about Sharing
* Share ideas, experience, metrics through the organization
  * co-ownership
* "Intern open source"
  * Innovation days, daily stand-ups
  * Stand-up meeting, postmortems (all together)
  * Same development and Operations tool chain
    * Bug-tracking system
* Experimentation, allocate time to improve the system/flow


--
## The need to evolve

![table](./images/table.png)


---
## So just implementing it...?
* Changing cultures is hard!
  * Do all have the same understanding of DevOps?
    * "Legacy projects"
  * Just using tools in not enough!
  * DevOps is not just developers and operations
* Are all projects suitable for the "DevOps" mindset?
  * High risk applications?



---
## ...and so on
* DevSecOps/DevOpsSec...
  * "Everyone is responsible for security"
  * Security is a roadblock (waterfall syndrome)
  * Building security into each step of the flow
  * http://www.devsecops.org



---
## Will I work as a DevOps?
* The DevOps Role - Existing?
  * "DevOps Engineer"
  * Site-reliability engineering (SRE)
  * Developer, System administrator, software architect...
    * Through the whole organization
* The mindset (hopefully) influence our courses in UDM


---
## Reading
* In "The practice of cloud system administration"
  * Chapter 8 (three way of devops)
* [The phoenix project](https://www.amazon.com/Phoenix-Project-DevOps-Helping-Business/dp/0988262592)
* [The DevOps handbook](https://www.amazon.com/DevOps-Handbook-World-Class-Reliability-Organizations/dp/1942788002/)
