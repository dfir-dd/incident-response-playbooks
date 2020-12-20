# Incident Response Playbook - Ransomware Infection

## Metadata

| | |
|-|-|
| **ID**            | IR-EN-001     |
| **Title**         | Incident Response Playbook - Ransomware Infection |
| **Last Modified** | 2020-12-20    |
| **Status**        | Draft         |
| **Created**       | 2020-12-20    |

## Preparation

* Backup Strategy
* Save Logs from destruction
* Central Logging
* Restrict Admin Accounts
* Patch Management
* Firewall / VLAN

## Detection / Discovery

* Unusual High CPU load 
* Unusual High Disk usage 
* Unusual High read/write access
* Creation of new files with unknown file marker/format
* Encrypted Files
* Newly Created Files with Ransom information
* AV Events

## Containment / Mitigation

* Encapsulation of infected subnets
* Pause of infected or potential infected VMs
* Shutdown of infected or potential infected Systems (Non-VM)
* Restrict or disable internet connection for infected segments
* Check Back-Up availability

## Analysis

* Determine Ransom Type (link to id ransom etc)
* Determine attack vector and lateral movement techniques
* Check for backdoors
* Check for exposure/disclosure of PII and other Data

## Remediation

* Close attack vector
* Patch Systems 
*
* Adjust Firewall / IDS / AV

## Recovery

* Rebuild or cleanse (note in most cases high residual risk) infected systems 
* Recover data from known good backups
* Pay the ransom if no other way can be found using xxx vendor

## Post Morten
