# Incident Response Playbook - Ransomware Infection

## Metadata

| | |
|-|-|
| **ID**            | IR-EN-001     |
| **Title**         | Incident Response Playbook - Ransomware Infection |
| **Last Modified** | 2020-12-20    |
| **Status**        | Draft         |
| **Created**       | 2020-12-20    |

## Description

Ransomware attacks can be characterized by infecting large segments of an existing network and encrypting data on server and client systems without the possibility for the legitimate users to get access to this data. The decryption key/mechanism will then be presented to the legitimate user by the attacker in exchange for a more or less reasonable amount of money, most likely in the form of digital currency like bitcoin. The attacker will leave information on the encrypted system on how to contact them for payment and retrieving the decryption methods.
Ransomware became one of the most lucrative cyberattacks in the recent years and is often spread with phishing campaigns against end users or by exploiting unpatched vulnerabilities in external facing systems. Most times the attackers have had deep system access for a long time before the actual encryption of data
In the event of a ransomware-attack fast response is critical since this could stop ongoing encryption and lateral movement. Most times a hard organization-wide shutdown can't be avoided but the recovery time can highly depend upon the maturity of the incident response program of the organization. 
Ransomware events are most likely only the end of an ongoing infiltration of a network. In many cases the attackers will already mapped your network and gathered credentials long before. Even the extortion of data over a long time span is not uncommon nowadays.
Ransomware in particular is still mostly focused on Windows based systems and domains. The recommendations in this playbook aim to be universal but may sometimes be specific to Windows systems.

## Safeguards

These Safeguards are designed to limit the spread and/or impact of a potential ransomware infection. Since ransomware infections often come with wide-spread network compromise the safeguards are also focused on this part. 

* **Mature Patch Management:**
   When preparing for cyber attacks in general it is highly advised to implement available patches in a safe and fast manner. This way known vulnerabilities can be tackled and the exploitation of these can be stopped. 
   It is important to keep in mind that not only all available components including network components (routers, switches, etc), servers, endpoints and appliances including security appliances need to be in focus. Also patches need to be tested for the internal use and then applied to the systems in focus within a reasonable time frame depending on the criticality of the issues being fixed. 
   Components that are not longer supported by the vendor or an active community should not be used or only used with great care and additional and appropriate safeguards. 

* **Endpoint Protection:**
   Endpoint protection is about blocking unauthorized changes to a system and to stop the execution of malicious code. 
   This is normally done with (next-gen) anti-virus software that should always be kept up to date. For systems without support for such software application and execution whitelist could be used. 
   Endpoint protection need to span on server and client systems and should be configured to alert in a centralized and immediate manner. 

* **Network segmentation:**
   Network segmentation is about separating the network in multiple network zones that house systems of similar use. A very basic separation could be a three tier network architecture with Client-Zone, Server-Zone and DMZ for Server with external accessibility (internet). 
   The aim of network segmentation is to limit, control and log the the network traffic between the different network zones. to stay with the former example it could be possible to limit the access from the Client-Zone to the Server-Zone to the necessary ports (Web, Mail, ERP... ) and block all other access.
   The more granular and restrictive a network segmentation is built the better but it also gets more troubling to manage. A good configuration management is key to achieve this. 
   Network segmentation can for example be achieved with multiple firewall-interfaces, other means of V-Lans or ACLs on managed switches. When creating a network segmentation the Differenz network segments should be throughly planned and involve all available systems (including Virtual Machines and Networks). 

* **Backup Strategy:**
   Once any malware has successfully rendered data or systems unusable the most common approach to recovery would be replaying the systems or information from a valid backup.
   The backup should follow some criteria to ensure usablitiy in the case of an incident:
   * Backups should be regulary stored off-site or at least offline to ensure that they can't be reached by a potential attacker that has infiltrated the network
   * Backup-Server should not be included in the domain and use dedicated accounts to hinder attackers that have acquired a valid domain admin account. 
   * Backups should be done on a regular basis according to the criticality of the data to the business. For some data it may be required to only loose some minutes or hours in the event of data loss and for other information days or weeks may be fine. 
   * Replaying backups should be testes from time to time to ensure that the process is working and that data can be restored within a reasonable time frame. 
 
* **Restrict Admin Accounts:**
   

* **Security Appliances - Firewalls / IDS / Mail Security:**
mail spam / mail attachement filter


* **Endpoint Hardeing:**
Smbv1
Old systems
Windows script host
Disable makros

* **Web-Proxy:**


* **VPN:**
MFA
Monitor and log logins


## Preparation

* Orchestration tools (rollout for updates, software etc)
* Network segmentation
* netwokr quarantine measures
* Traffic Logging
* Cyber insurance
* Ransom payment
* decisions
* Save Logs from destruction
* Central Logging
* end user /  support awareness
* technology to scan network and hosts for iocs

## Detection / Discovery

Detecting Ransomware is normally quite easy since it is a "loud" attack event in its nature. Ransomware events that were successful can most times be identified by:
* **Ransomware notes:**
Ransomware notes often come in the form of human-readable text files that include information about what happened (encryption) and how to retrieve the original files (payment). Sometimes also screen backgrounds are changed or new programs are deployed that open up automatically and inform about the ransom.
* **Encrypted Files:**
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
