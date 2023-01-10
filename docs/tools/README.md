---
id: tools
title: Overview
tags:
  - Tools
  - Startpage
sidebar_position: 1
---

# Tools

:::warning This page is currently under construction
This page will be a reference to all the tools listed in this wiki
:::

:::tip
Curated lists of forensic tools are also available from the SANS Institute, the Awesome Forensics GitHub List or in the Forensic Wiki.
- [SANS Cyber Security Tools - DFIR](https://www.sans.org/tools/?focus-area=digital-forensics&msc=dfir-lp)
- [Awesome Forensics GitHub](https://github.com/cugu/awesome-forensics)
- [Forensics Wiki - Tools](https://forensicswiki.xyz/wiki/index.php?title=Category:Tools)
::: 

## Malware Analysis

### Malware Sandboxes

:::danger
Be careful when uploading malware samples from active cases to public cloud systems as you may not want to let the attacker know you found some binaries from him. Use Hash-Search options first.
:::

| Tool                    | Description                                                                                                                                                 | Platform         | Link                                                                 |
|-------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|----------------------------------------------------------------------|
| AnyRun                  | Malware Sandbox with windows machines. Only Win7 and public analysis in free tier.                                                                          | Cloud            | [https://app.any.run/](https://app.any.run/)                         |
| Cuckoo Sandbox          | Open Source Malware Sandbox supporting all platforms as host-machines. Has to be set-up first.                                                              | Win, Linux, OS X | [https://cuckoosandbox.org/](https://cuckoosandbox.org/)             |
| Intezer Analyzer        | Malware Sandbox. Only limited insights in free tier.                                                                                                        | Cloud            | [https://analyze.intezer.com/](https://analyze.intezer.com/)         |
| Hybrid Analysis Sandbox | Malware Sandbox based on CrowdStrike Falcon. Only limited insights in free tier.                                                                            | Cloud            | [https://www.hybrid-analysis.com/](https://www.hybrid-analysis.com/) |
| JoeSandbox              | Malware Sandbox with support for many different host systems including android but limited extent in the free tier. Can be hosted on premise in paid tiers. | Cloud            | [https://www.joesandbox.com/](https://www.joesandbox.com/)           |
| Cape Sandbox            | Sandbox focused on extracting payloads from known malware families. OpenSource.                                                                             | Cloud            | [https://capesandbox.com/](https://capesandbox.com/])                |
| FileScan                | Not a real sandbox, focused on static analysis                                                                                                              | Cloud            | [https://www.filescan.io/scan](https://www.filescan.io/scan)         |

### Malware Search Engines

:::danger
Be careful when uploading malware samples from active cases to public cloud systems as you may not want to let the attacker know you found some binaries from him. Use Hash-Search options first.
:::

| Tool       | Description                                                                                 | Platform | Link                                                       |
|------------|---------------------------------------------------------------------------------------------|----------|------------------------------------------------------------|
| VirusTotal | Lets you run malware in over 80 different Virus Scan Engines and get their detections back. | Cloud    | [https://www.virustotal.com/](https://www.virustotal.com/) |
| Virusshare | Malware Database. Allows for download of samples and search.                                | Cloud    | [https://virusshare.com/](https://virusshare.com/)         |

### Disassembler

| Tool         | Description                                                             | Platform         | Link                                                                   |
|--------------|-------------------------------------------------------------------------|------------------|------------------------------------------------------------------------|
| IDA Pro      | Disassembler and Debugger for static analysis and reverse engineering   | Win, Linux, OS X | [https://www.hex-rays.com/ida-pro/](https://www.hex-rays.com/ida-pro/) |
| Ghidra       | Disassembler and Debugger for static analysis and reverse engineering   | Java             | [https://ghidra-sre.org/](https://ghidra-sre.org/)                     |
| Binary Ninja | Disassembler and Decompiler for static analysis and reverse engineering | Win, Linux, OS X | [https://binary.ninja/](https://binary.ninja/)                         |
