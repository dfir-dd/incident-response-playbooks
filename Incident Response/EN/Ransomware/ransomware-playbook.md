# Incident Response Playbook - Ransomware Infection

Ransomware attacks can be characterized by infecting large segments of an existing network and encrypting data on server and client systems without the possibility for the legitimate users to get access to this data. The decryption key/mechanism will then be presented to the legitimate user by the attacker in exchange for a more or less reasonable amount of money, most likely in the form of digital currency like bitcoin. The attacker will leave information on the encrypted system on how to contact them for payment and retrieving the decryption methods.

Ransomware became one of the most lucrative cyberattacks in the recent years and is often spread with phishing campaigns against end users or by exploiting unpatched vulnerabilities in external facing systems. Most times the attackers have had deep system access for a long time before the actual encryption of data

In the event of a ransomware-attack fast response is critical since this could stop ongoing encryption and lateral movement. Most times a hard organization-wide shutdown can't be avoided but the recovery time can highly depend upon the maturity of the incident response program of the organization. 

Ransomware events are most likely only the end of an ongoing infiltration of a network. In many cases the attackers will already mapped your network and gathered credentials long before. Even the extortion of data over a long time span is not uncommon nowadays.

Ransomware in particular is still mostly focused on Windows based systems and domains. The recommendations in this playbook aim to be universal but may sometimes be specific to Windows systems.

## Metadata

| | |
|-|-|
| **ID**            | IR-EN-001     |
| **Title**         | Incident Response Playbook - Ransomware Infection |
| **Last Modified** | 2020-12-20    |
| **Status**        | Draft         |
| **Created**       | 2020-12-20    |

## Preparation

* Patch
* Endpoint Protection
* Orchestration tools (rollout for updates, software etc)
* Network segmentation
* netwokr quarantine measures
* Traffic Logging
* Cyber insurance
* Ransom payment
* decisions
* Backup Strategy (remove from domain)
* Save Logs from destruction
* Central Logging
* Restrict Admin Accounts
* Patch Management
* Firewall / VLAN also for VMs  / IDS
* hardening
* remove old systems / smbv1
* proxy
* vpn
* end user /  support awareness
* mail spam / mail attachement filter
* disable makros and makro documents
* software whitelists
* Disable Windows Script Host
* technology to scan network and hosts for iocs

## Detection / Discovery

Detection of Ransomware is normally quite easy since it is a "loud" attack event in its nature. Ransomware events that were successful can most times be identified by:
* *Ransomware notes:*
Ransomware notes often come in the form of human-readable text files that include information about what happened (encryption) and how to retrieve the original files (payment). Sometimes also screen backgrounds are changed or new programs are deployed that open up automatically and inform about the ransom.
* *Encrypted Files:*
When successful ransomware attacks will encrypt many files on the infected systems, overwriting the original files. The encryption focuses on data that has value speaking of databases and documents and not log files or executables. The encrypted files can be identified by their new file ending which is most likely cryptic or because the file can't be opened and read as normal as before.

* Unusual High CPU load 
* Unusual High Disk usage 
* Unusual High read/write access
* AV Events
* IDS events
* Beacon file monitoring (file share etc.)
* user reports
* dns traffic
* traffic
* document actions

## Containment / Mitigation

* Encapsulation of infected subnets
  * quarantine systems / users / shares / databases / backups / archives 
* Pause of infected or potential infected VMs
* Shutdown of infected or potential infected Systems (Non-VM)
* Restrict or disable internet connection for infected segments
* restrict or disable internal routing for infected segments
* Check Back-Up availability
* Communication internal and external
* document actions

## Analysis

* gather iocs from the attack
* locate executable code belonging to the attack
* Determine Ransom Type (link to id ransom etc)
  * information files of the ransomware (sometimes open itself)(html, txt ...)
  * wallpaper changes
  * e-mail in file ending
  * file ending
  -->  https://www.nomoreransom.org/crypto-sheriff.php , https://id-ransomware.malwarehunterteam.com/
  gather information about:
  * decryption possibilities
  * decrpytion experience
  * file corruption vs file encryption
  * known iocs
* Determine attack vector and lateral movement techniques
  * mail / attachements
  * vulnerabilities in external facing systems
    * vpn
    * firewall
    * mail
    * application server
    * pbx
  * removable media
  * loss of devices
* Check for backdoors
* Check for exposure/disclosure of PII and other Data
* determine the scope of the attack
  * what systems were affected
  * scan for iocs in the network
  * what data is affected
* determine the impact of the attack
  * what loss is expected
  * what is the loss when the backups are corrput
  * was sensitive data breached (PII)
  * was data stolen
* document actions

## Remediation

* Close attack vector
* Patch Systems 
* inspect all assetf for iocs
* remove all binaries and leftovers (spam mails etc) from the systems
* Adjust Firewall / IDS / AV
* update endpoint protection
* document actions

## Recovery

* Rebuild or cleanse (note in most cases high residual risk) infected systems 
* Recover data from known good backups
* Pay the ransom if no other way can be found using xxx vendor
* address colleteral damage
* document actions

## Post Morten

* Review the Response Process in a whole and enhance 
* Discuss security enhancements
* External review of the network (Audit, Pentest etc...)

//TODO: Write full text from bulletin
