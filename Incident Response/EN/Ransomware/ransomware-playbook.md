# Incident Response Playbook - Ransomware Infection

## Metadata

| | |
|-|-|
| **ID**            | IR-EN-001     |
| **Title**         | Incident Response Playbook - Ransomware Infection |
| **Last Modified** | 2020-12-31    |
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
 
* **Restrict Administrative Accounts:**
   Before actually deploying ransomware attackers often try to scope and move through the infected network to increase the potential damage that could be done. For this domain-wide administrative accounts are a lucrative target. Make sure that all administrators have a low privileged user account for theire daily tasks and only switch to theire administrative account when absolutely necessary. Administrative accounts should also follow the least-privilege principle and domain administrators should be used even more limited. Another point to remember is to use dedicated accounts for services and not use administrative accounts when possible. 

* **Security Appliances - Firewalls / IDS / Mail Security:**
The market offers a huge amount of security appliances for each and every need out theire. To protect from ransomware the following are the most crucial:
   * Firewall / IDS: Firewalls and IDS have the possibility to block communication to C&C servers and potential downloads of Malware. 
   * E-Mail Security: Mails including malicious attachments or links are a common tool for attackers. Make sure to have a proper configured spam filter in place and block incoming mails with executable attachments including office documents and content of archive files. Links within mails should be checked as well. 
   * Managed Endpoint Protection: The endpoint protection solution should be central managed to have a unified view on alerts and the possibility to rollout measures to all devices simultaneously. 
   * Web-Proxy: Implementing a web-proxy for all connections terminating outside of the organizational network can help to monitor and restrict outgoing traffic. Furthermore Malware which is not proxy-aware could be hindered. For servers internet connectivity should be monitored and restricted even more and a custom proxy could be used. 

* **Endpoint Hardeing:**
   Malware infections often start from one host and later spread through the network. Therefore the protection of all endpoints is crucial. Make sure to limit access and available services to reduce the attack surface. 
   * Use endpoint hardening checklists offered by the CIS or other organizations to reduce the attack surface
   * Remove old and unpatched systems from the network
   * Disable SMBv1, Disable SNMP version 1 and 2, disable Windows script host, disable office makros or restrict them further if disabling is not an option
   * Restrict internet access where possible. Servers should not have internet access in general. If they need to reach certain services only enable these by means of static IPS or other similar means. Clients in general require internet access but mostly only for a few services (Mail, HTTP). Other services can often be restricted. (Like FTP, SSH, RPC... )

* **VPN:**
   VPN when not properly secured offer an easy way for an attacker to infiltrate a network. Make sure to protect your VPN with current encryption methods, client-certificates and multi-factor authentication. Make as many services available through the VPN but not the internet to reduce your external perimiter. For Site2Site VPNs with third parties make sure that they only reach the needed targets and always configure with least privileges principle in mind. 
   Also make sure to properly monitor and log authentication requests to find anomalies. 

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

* **Unusual high performance statistics:**
When the encryption is ongoing the system may see unusual high load. For example with high CPU usage, high Disk(I/O) usage and unusual many file and folder access calls. This can be monitored through many different tools and should be investigated further. 

* **Anti-virus or IDS Events:**
Events of your security appliances should be throughly monitored and investigated. For ransomware events look out for privilege escalation attempts, wide spread use of one account through many systems, unusual administrative account usage (shell usage, WMI, etc. ) and blocked execution of unknown software that occurs on multiple systems. 

* **Beacon file monitoring:** 
Many security appliances nowadays use custom deployed beacon files to watch whether they get accessed or changed later on and alert in this case. When such an event occurred on a single system make sure to investigate the access and see whether this was unintentional user behavior or something malicious. When such alerting occures in a short time span on multiple systems this is nearly always a good indicator for a ransomware infection. 

* **User reports:**
In most cases the users will be the first to notice the impact of a successful ransomware infection. In these cases some systems may not be working as expected or information can no longer be retrieved. When such user reports come in make sure to investigate them and look for other indicators of ransomware. Therefore it is important to properly train your first level support desk to handle these reports and first hand investigation in a safe and timely manner. 

* **Network traffic:**
When searching for hints to ransomware infection one normally does not have to rely on network traffic since other indicators may be more present. When searching through traffic logs make sure to watch out for unusual DNS Traffic, direct connections to IP-addresses and not domains, unusual protocols and unusual ports as well as combinations of those. Also look out for internal connections originating from few systems to many others and clarify that these do not present a "normal" behavior like administrative tasks. 

* **Documentation:**
Starting with the discovery phase it is crucial to create and continue a documentation of the planned and carried out actions as well as additional informations and sightings belonging to the case. This way it is easily possible to on-board new members to the case, hand over to third parties and will be from great value for potential later involvement of authorities. Furthermore this way improvement to the incident response processes and infrastructure can be easily derived later on. 

## Containment / Mitigation

* Encapsulation of infected subnets
  * quarantine systems / users / shares / databases / backups / archives 
* Pause of infected or potential infected VMs
* Shutdown of infected or potential infected Systems (Non-VM)
* Restrict or disable internet connection for infected segments
* restrict or disable internal routing for infected segments
* Check Back-Up availability
* Communication internal and external
* documentation

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
