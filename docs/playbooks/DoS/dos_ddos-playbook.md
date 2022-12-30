# Incident Response Playbook - DoS and DDoS Attacks

## Metadata

| | |
|-|-|
| **ID**            | IR-EN-002     |
| **Title**         | Incident Response Playbook - DoS and DDoS Attacks |
| **Last Modified** | 2021-03-09    |
| **Status**        | Draft         |
| **Created**       | 2021-01-26    |

## Description

DoS stand for "Denial of Service" and categorizes attacks that are meant to limit or completely block the usability and/or functionality of a service or function. This can happen through a multitude of different means and therefore locating the root cause of the DoS scenario is always crucial.

DDoS is a distributed DoS attack which means that a big amount of different systems are involved in executing the attack often making use of existing botnets. DDoS attacks often main to just floot the line with so much traffic that your connection is completly clogged or your network interfaces just can't handle the amount of data anymore but DoS is not limited to that. Even one single attacking system with only a few requests could completly render a webserver unusable if this server provides functions that need heavy computing power on the server side and ar not limited in its execution for example.

(D)DoS attacks are very loud and easy identifiable in the means that you will most likely get to know them the moment they are occuring or only some little time later. Therefore they are also a good tool for an attacker to draw your attention away from other things that they may be trying in the meantine. Keep this in mind when reacting to (D)DoS attacks.



## Safeguards

These Safeguards are designed to limit the impact and/or increase reaction possibilities in the case of DoS and DDoS attacks. 

* **Redundant connections:**
TODO

* **DDoS protection:**
TODO

* **Network component hardening:**
TODO

* **Load testing for applications:**
TODO


## Preparation

When preparing for (D)DoS attacks we mostly focus on the right partners and contact at hand and having enough log information available to fastly get to the rootcause of the DoS scenario.

* **Performance monitoring:**
TODO

* **Get contacts from your ISP regarding DDoS defence:**
TODO

* **Get contacts for your internet facing systems:**
TODO

* **Make upfront decision:**
TODO

## Detection / Discovery
Detecting (D)DoS is normally quite easy since it is a "loud" attack. DoS can be identified by:






## Containment / Mitigation







## Remediation







## Recovery






## Post Morten
Review your created documentation and conduct lessons learned sessions to improve the overall process of incident handling as well as overall IT security.

* **Review the incident response process:**
Enhance the response process for later incidents by collecting what went good and what not. Identify steps that needed more preparation and use the advice that was given by any involved parties throughout the response. 

* **Discuss security enhancements:**
During the investigation of an incident many measures and potentials for enhancement will come to light. Keep track of them through the incident handling process and discuss them afterwards with deciders and colleagues to see which will fit your organization best and provide the most use for your overall IT-Security.

* **Conduct external reviews:**
To help further harden your infrastructure think about external review opportunities like penetration tests or security audits.

* **Determine Incident cost:**
```
\\TODO
```
