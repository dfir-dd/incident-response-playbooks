# Incident Response Playbooks Collection

This collection aims to help organizations and individuals by preparing or handling certain known types of security incidents. All playbooks will follow the same structure which will be outline below. Feel free to use, modify and share this work as well as help increase and enhance it. Every support is welcome!

## Structure 
All playbooks follow this structure. Please always bear in mind that this is not necessary in a chronological order. More often steps have to be done in parallel to react accordingly. Always use the information shared only as a baseline and tweak your response plan accordingly.

* **Metadata**
This section will include all necessary metadata fields to map and classify the playbook.

| | |
|-|-|
| **ID**            | IR-`language code>`-`<incrementing ID>` |
| **Title**         | Title of the playbook                 |
| **Last Modified** | Date                                  |
| **Status**        | Placeholder/Draft/Final               |
| **Created**       | Date                                  |

* **Description**
Short description of the attack type and common information that is good to know.

* **Safeguards**
This step will contain measures to prevent or slow the attack which need to be implemented beforehand

* **Preparation**
This step will include all necessary actions that help to prepare or even defend against a certain incident. Including preventive tasks, best practices, log sources, documentation and much more. This information will be specific to the described incident case and will not include general tasks like building your incident team etc. since this will be equal in every incident case.

* **Detection / Discovery**
The detection step describes known hard indicators to verify the incident and give it the proper attention. This includes actions to verify the scope of the incident.

* **Containment / Mitigation**
Containment is about reducing the scope or impact of the security incident as an immediate action while preserving information that may be needed later on during investigation of the incident or legislative steps.

* **Analysis**
The analysis step focuses on actions to investigate the incident and better understand the overall impact, the attack chain and other crucial information needed for proper remediation efforts. These steps will often require properly trained personnel that might even need to be pulled in from a third party.

* **Remediation**
While remediation the aim is to remove the incident causing circumstances and implement measures to decrease the overall residual risk for the society and the organization.

* **Recovery**
During recovery all efforts will be summed up to re-create the original state of the affected systems and data and to re-enable the critical business path as well as regular business in corresponding time frames.

* **Post Morten**
This step includes tips to learn and improve the incident handling process for the future.

## Formats
It is planned to design the playbooks according to multiple standards and formats wherefore the structure may be changed to match the target framework. (E.g. Hive templates). Anyway will the structure  be used throughout every human-readable format.

Focus lays in PDF and Markdown Playbooks but other sources may be included.

Currently planned:
* PDF
* Markdown
* Hive Template
* COPS
