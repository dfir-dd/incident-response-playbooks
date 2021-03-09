# Incident Response Playbook Short - Ransomware Infection

## Metadata

| | |
|-|-|
| **ID**            | IR-EN-001     |
| **Title**         | Incident Response Playbook Short - Ransomware Infection |
| **Last Modified** | 2021-01-22    |
| **Status**        | Draft         |
| **Created**       | 2021-01-19    |

## Safeguards

* Patch Management
* Endpoint Protection
* Network segmentation
* Backup Strategy
   * Off-Site/ Offline
   * Backup-Server not in domain
   * Regulary (grandfather-father-son)
   * Test from time to time
* Restrict administrative accounts
* Security Appliances in place
   * Firewall
   * IDS
   * Mail Security
   * Managed Endpoint Protection
   * Web-Proxy
* Endpoint Hardening
   * hardening checklists (CIS)
   * Remove old and unpatched systems 
   * Disable SMBv1, Disable SNMP version 1 and 2, disable Windows script host, disable office makros
   * Restrict internet access for all systems
* Secure VPN-Access
   * Certificates
   * MFA

## Preparation

* Network orchestration tools
  * Hardware inventory
  * Software inventory
  * Software rollout
  * Patch orchestration
* IoC Scanning possibilities
  * netflow logs
  * Endpoint Protection, THOR, YARA, etc..
* Network segmentation
* Central log storage
* Enhanced network and systems logging
* Upfront decisions
   * When to pull the plug
   * Critical business path and invlolved systems
   * Who can make which decisions
   * insurance
   * 3rd party support at hand for forensic analysis, IT support (rebuilding systems and networks), public communication,  legal advice... 
   * **If and when to pay a ransom**
* User and service desk awareness

## Detection / Discovery

* Ransomware notes
* Encrypted Files
* Unusual high load
* Anti-virus or IDS Events
* Beacon file monitoring 
* User reports
* Documentation

## Containment / Mitigation

* Secure uninfected systems
* Encapsulation of infected subnets/systems
* Pausing of infected or potential infected VMs
* Shutdown of infected or potential infected Systems (Non-VM)
* Restrict or disable internet connection for infected segments
* Check Back-Up availability
* Reset or lock compromised accounts
* Secure needed data
* Communication internal and external
* Documentation

## Analysis

* Determine the Ransomware/Malware type
  * Ransom notes
  * Changed Background images
  * file endings
  * signiture bits in encrypted files
  * use specialized webservices like NoMoreRansom (https://www.nomoreransom.org/crypto-sheriff.php) or ID-Ransomware (https://id-ransomware.malwarehunterteam.com/)
  * if nothing helps (https://www.bleepingcomputer.com/forums/f/239/ransomware-help-tech-support/)
  * get a sample from the malware
  * determine decrpytion possibilities
  * determine common Indicators of compromise
* Determine the attack vector
  * Phishing Mails
  * Attached removable devices
  * Vulnerable systems
  * Unusual events in general
  * Open networks
  * Social engineering
* Gather information about the malware that was deployed and theire damage potential
  * get a sample and analyze it
  * learn from earlier analysis of the same malware family
* Determine the scope of the attack
  * Scan network for IoCs (identification of infected systems)
  * Identifiy breached data
  * Indentify exposure of PII
  * Check backups
* Check for backdoors
* Documentation

## Remediation

* Close the attack vector
* Patching
* IoC search the whole infrastructure
* Remove backdoors and other malware from the systems
* Adjust Firewall / IDS / AV
* Documentation

## Recovery

* Rebuild or cleanse infected systems in a new network zone
* rebuild the domain
* Recover data from known good backups
* Pay the ransom (if no other way can be found)
* Address colleteral damage
* Documentation

## Post Morten

* Review the incident response process 
* Discuss security enhancements
* Conduct external reviews
