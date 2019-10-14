# Monitoring
* Overview
* Core concepts
* Tools


---
## Monitoring - Overview
> You can observe a lot by just watching<br/>
-Yogi Berra<!-- {_style="text-align: right;font-size:80%"} -->

* Gain visibility onto our system
* Both in long- and short-term for decision making
* Detect precursor of outages
* Detect actual outages


--
## Monitoring - Overview
Monitoring is difficult, especially in distributed systems

* monitor the wrong things
* not monitoring the important things
* the perfect monitoring system should make us:
  - omniscient - all knowing
  - omnipresent - everywhere all the time

> Monitoring is not just a system that wakes you up at night when a
service or site is down. <br />Ideally, that should never happen.
<!-- {_style="font-size:80%"} -->

Source: The Practice of Cloud System Administration

<!-- {_style="text-align: right; font-size:60%"} -->


---
## Core concepts
Terms to Know

* **Server** - software running to provide a function/API
* **Service** - user-visible system or product composed of many servers
* **Machine** - virtual or physical machine
* **QPS** - Queries per second
* **Measurement** - refers to a single point of data
* **Metric** -  measurement with a name and timestamp
  - `dataprocessing:server2.acme.com:total-request-count@20170930T111900Z = 12465`

Note:
**dataprocessing** = server <br />
**server2.acme.com** = machine <br />
**total-request-count** = measurement <br />
**20170930T111900Z** = timestamp <br />
**12465** = measurement value <br />


--
## Core concepts - Metric
**What** do we monitor - what is a Metric? <br />

**_Named_** **_value_** at some **_time_**<br />

* Metric identity/name
  ``` 
  www-1.na-east.example.com,  httpd(3321),  foo.example.com,  200-ok-count
  hostname,                   process,      vhost,            name
  ```
* Metric values (overlapping)
  - Counters, Gauges, Percentiles, Nominal, Ordinal, Interval, Ratio...
* Timestamped

```
httpd:www-1.na-east.example.com:200-ok-count@20131005T142155.867Z = 850593
```


--
## Core concepts - Metric
**How** do we monitor - what is a Metric? <br />

* Resolution 
  - how frequently the metric is collected
  - 5 minute, 1 hour, every second... 
* Latency 
  - after reading, how long before we act on them?
  - Seconds, Minutes, Hours?
* Diversity 
  - describes how many metrics are being collected
  - 10, 25, 50, 100, 10K, 1M

Source: Dickson model (2013)

<!-- {_style="text-align: right; font-size:60%"} -->


--
## Core concepts - Metric
**Why** do we monitor? <br />
* Operational Health/Response (R+,L+,D+) 
  - High Resolution, Low Latency, High Diversity
* Quality Assurance/SLA (R+,L-,D+)
  - High Resolution, High Latency, High Diversity
* Capacity Planning (R-,L-,D+)
  - Low Resolution, High Latency, High Diversity
* Product Management (R-,L-,D-)
  - Low Resolution, High Latency, Low Diversity

Source: Dickson model (2013)

<!-- {_style="text-align: right; font-size:60%"} -->



--
## Core concepts
The components of a monitoring system
![The components of a monitoring system](../images/l05-components-of-a-monitoring-system.png)

Source: Dickson model (2013)

<!-- {_style="text-align: right; font-size:60%"} -->


--
![The components of a monitoring system](../images/l05-components-of-a-monitoring-system-sensing.png)
<!-- {_style="position: absolute; top: 20px; right: 0px; width:25%;"} -->
## Core concepts - Sensing
Sensing and Measurement

* The creation of metrics
  - Generally raw counters plus some attributes
* Different systems gather data at different speeds
  - top/ps/netstat are very immediate
  - sar somewhat less so
  - nagios much less so.
* Different systems have different concepts of an individual unit for metric identity
* **No consistent interface**


Source: Dickson model (2013)

<!-- {_style="text-align: right; font-size:60%"} -->


--
![The components of a monitoring system](../images/l05-components-of-a-monitoring-system-sensing.png)
<!-- {_style="position: absolute; top: 20px; right: 0px; width:25%;"} -->
## Core concepts - Sensing
Sensing and Measurement

* Blackbox vs. Whitebox Monitoring
* Direct vs. Synthesized Measurements
* Rate vs. Capability Monitoring
* Gauges vs. Counters


Source: The Practice of Cloud System Administration

<!-- {_style="text-align: right; font-size:60%"} -->

Note:
**Blackbox** monitoring means that measurements try to emulate a user.<br/>
**Whitebox** measurement has the benefit of internal knowledge because it is a lower level of abstraction<br/>
**Synthesized metric** collects info every x minutes<br>
**Rate metrics** are more important when event frequency is high and there are smooth<br>
**Gauge** (mätare) value is an amount that varies<br>
**Counter** (räknare) is a measurement that only increases


--
![The components of a monitoring system](../images/l05-components-of-a-monitoring-system-collection.png)
<!-- {_style="position: absolute; top: 20px; right: 0px; width:25%;"} -->
## Core concepts
Collection

* Bringing together  individual metrics in one place
* Metric identity needs to remain meaningful after aggregation
* Push vs. Pull
* Server Component vs. Agent vs. Poller

Note:
**Push** means the sensor that took the measurement transmits it to the collection mechanism. <br>
**Pull** means an agent polls the object being monitored and requests the data and stores it. <br>
Collectors can work in several different ways.


--
![The components of a monitoring system](../images/l05-components-of-a-monitoring-system-analysis.png)
<!-- {_style="position: absolute; top: 20px; right: 0px; width:25%;"} -->
## Core concepts
Analysis and Computation

* Real-time
* Short-term
* Long-term
* Anomaly detection

Source: The Practice of Cloud System Administration

<!-- {_style="text-align: right; font-size:60%"} -->

Note:
**Real-time**: computationally expensive analysis and is reserved for critical tasks<br />
**Short-term**: examines data that was collected in the last day, week<br />
**Long-term**: generating and storing summaries of data (averages, aggregates). analysis requires a large amount of processing<br />
**Anomaly detection**: determination that a specific measurement is not within expectations<br />


--
![The components of a monitoring system](../images/l05-components-of-a-monitoring-system-alerting.png)
<!-- {_style="position: absolute; top: 20px; right: 0px; width:25%;"} -->
## Core concepts
Alerting and Escalation

* get the attention of the right person
* communicate specific information to that person
  - Failure Condition
  - Business Impact
  - Escalation Chain
  - Suggested Resolution
* Acknowledgments
* Silence vs. Inhibit

Source: The Practice of Cloud System Administration

<!-- {_style="text-align: right; font-size:60%"} -->

Note:
Scheduled maintenance<br>
**Silence** alerts still trigger but no action is taken<br>
**Inhibit** the alert does not trigger and as a result no alerts are sent.<br>


--
![The components of a monitoring system](../images/l05-components-of-a-monitoring-system-visualization.png)
<!-- {_style="position: absolute; top: 20px; right: 0px; width:25%;"} -->
## Core concepts
Visualization

* meaningful visualization of the raw data
* viewing more than 3 dimensions can be problematic for those of us who are still human.
* goal-oriented

Source: The Practice of Cloud System Administration

<!-- {_style="text-align: right; font-size:60%"} -->


--
![The components of a monitoring system](../images/l05-components-of-a-monitoring-system-storage.png)
<!-- {_style="position: absolute; top: 20px; right: 0px; width:25%;"} -->
## Core concepts
Storage

* holds the metrics collected
* makes metrics accessible by the other modules
* architecturally demanding
  - new metrics arrive in high speed
  - alerting requires fast, real-time, read access
  - analysis requires iterations over large ranges
* real-time data and long-term storage
  - many storage systems can't handle both or can’t do both at large scale
  - timeseries databases

Source: The Practice of Cloud System Administration

<!-- {_style="text-align: right; font-size:60%"} -->


--
![The components of a monitoring system](../images/l05-components-of-a-monitoring-system-configuration.png)
<!-- {_style="position: absolute; top: 20px; right: 0px; width:25%;"} -->
## Core concepts
Configuration

* Affects every layer
* Needs configuration management
* Complicates distributed systems


---
## Tools for monitoring

* What tools exit?
  - top
  - sar
  - mrtg
  - Nagios
  - Cacti
  - Sensu
  - Logstash
  - OpenTSDB
  - Graphite
  - Shinken
  - “Cloud Monitoring”
* How do they fit in the Dickson model?


--
![The components of a monitoring system](../images/l05-components-of-a-monitoring-system-top.png)
<!-- {_style="position: absolute; top: 20px; right: 0px; width:25%;"} -->
![top](../images/l05-top.png)
<!-- {_style="position: fixed;right:0;bottom:0; width:70%;"} -->
## top
* **Sensing**: /proc, /sys, syscalls(1) 
* **Analysis**: 
  - summing
  - sorting
* **Visualization**: 
  - ordered lists
  - dynamic sorting 


--
![The components of a monitoring system](../images/l05-components-of-a-monitoring-system-sar.png)
<!-- {_style="position: absolute; top: 20px; right: 0px; width:25%;"} -->
![sar](../images/l05-sar.png)
<!-- {_style="position: fixed;right:0;bottom:0; width:60%;"} -->
## [sar](http://www.thegeekstuff.com/2011/03/sar-examples)
sar is part of the sysstat package
* **Sensing**: CPU, Memory, I/O
* **Collection**: logs timeseries 
* **Visualization**: Lists
* **Storage**: stores to file


--
![The components of a monitoring system](../images/l05-components-of-a-monitoring-system-mrtg.png)
<!-- {_style="position: absolute; top: 20px; right: 0px; width:25%;"} -->
![mrtg](../images/l05-mrtg.png)
<!-- {_style="position: fixed;right:0;bottom:0; width:37%;"} -->
## [mrtg](https://oss.oetiker.ch/mrtg/)
Multi Router Traffic Grapher
* **Sensing**: SNMP and subprocess
* **Collection**:
  - Centralized scraping over SMTP
  - Local processes
* **Visualization**: 
  - day/week/month/year graphs 
  - 2 variables
* **Storage**: file 


--
![The components of a monitoring system](../images/l05-components-of-a-monitoring-system-nagios.png)
<!-- {_style="position: absolute; top: 20px; right: 0px; width:25%;"} -->
![Nagios](../images/l05-nagios.png)
<!-- {_style="position: fixed;right:0;bottom:0; width:50%;"} -->
## [Nagios](https://www.nagios.org)
* **Sensing**: 
  - Subprocesses
  - plugins     
* **Collection**: 
  - Centralized scraping
  - Support for forwarding metrics
* **Analysis**: At sensing time
* **Alerting**: Configurable alarms
* **Visualization**: 
  - Basic graphs of check results 
  - Dependency chains



--
![The components of a monitoring system](../images/l05-components-of-a-monitoring-system-cacti.png)
<!-- {_style="position: absolute; top: 20px; right: 0px; width:25%;"} -->
![Cacti](../images/l05-cacti.png)
<!-- {_style="position: fixed;right:0;bottom:0; width:40%;"} -->
## Cacti
* **Sensing**: Poller, cron based
* **Collection**: Primarily SNMP
* **Analysis**: Basic summing
* **Visualization**: Static graphs
* **Storage**: rrdtool, MySQL 


--
![The components of a monitoring system](../images/l05-components-of-a-monitoring-system-sensu.png)
<!-- {_style="position: absolute; top: 20px; right: 0px; width:25%;"} -->
![Sensu](../images/l05-sensu.png)
<!-- {_style="position: fixed;right:0;bottom:0; width:70%;"} -->
## Sensu
* **Sensing**: JSON emitters “Checkers”
* **Collection**: RabbitMQ JSON event bus
* **Analysis**: Handlers
* **Alerting**: Handlers 


--
![The components of a monitoring system](../images/l05-components-of-a-monitoring-system-logstash.png)
<!-- {_style="position: absolute; top: 20px; right: 0px; width:25%;"} -->
![Logstash](../images/l05-logstash.png)
<!-- {_style="position: fixed;right:0;bottom:0; width:60%;"} -->
## Logstash
* **Sensing**: Logs
* **Collection**: MQ (Redis)
* **Analysis**: Indexer
* **Visualization**: Kibana
* **Storage**: ElasticSearch 


--
![The components of a monitoring system](../images/l05-components-of-a-monitoring-system-opentsdb.png)
<!-- {_style="position: absolute; top: 20px; right: 0px; width:25%;"} -->
![OpenTSDB](../images/l05-opentsdb.png)
<!-- {_style="position: fixed;right:0;bottom:0; width:50%;"} -->
## [OpenTSDB](http://opentsdb.net)
* **Sensing**: Custom clients
* **Collection**: TSD RPC
* **Analysis**: External
* **Storage**: Complete storage layer 


--
![The components of a monitoring system](../images/l05-components-of-a-monitoring-system-graphite.png)
<!-- {_style="position: absolute; top: 20px; right: 0px; width:25%;"} -->
![Graphite](../images/l05-graphite.png)
<!-- {_style="position: fixed;right:0;bottom:0; width:60%;"} -->
## [Graphite](https://graphiteapp.org)
* **Sensing**: DIY, name+value
* **Collection**: Custom messaging protocol
* **Visualization**: Static config of complex graphs
* **Storage**:
  - Carbon+Whisper
  - file-per-metric


--
![The components of a monitoring system](../images/l05-components-of-a-monitoring-system-shinken.png)
<!-- {_style="position: absolute; top: 20px; right: 0px; width:25%;"} -->

## Shinken
Nagios + Graphite + CM
* **Sensing**: Nagios plugins/Receiver
* **Collection**: Scheduler/Poller/Receiver
* **Analysis**: Reactioner/Broker
* **Alerting**: Reactioner 
* **Visualization**: Graphite
* **Storage**: RRDtool 
* **Configuration**: yes


--
## Cloul Monitoring
* Lots and lots of vendors
  - AlertSite, Bijk, CopperEgg, Dotcom Monitor, GFI Cloud, Kaseya, LogicMonitor, Monitis, MonitorGrid, Nimsoft, ManageEngine, Panopta, Pingdom, Scout, ServerDensity, Shalb SPAE, CloudTes
* MaaS more like SaaS
* Remote collection, local agents, push and pull


--
## How to choose?
* what are your needs?
* in the real world
  - Nagios + Graphite + Sensu + Logstash