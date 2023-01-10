import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Home`}
      description="Shared Wiki for IT-Forensics and Incident Response">
      <HomepageHeader />
      <main>
        <div class="container mt-5">
          <div>
            <h2>Welcome</h2>
            <h2>Content</h2>
            We are currently serving three main topics:
            <ul>
              <li><a href="/docs/wiki"><strong>Wiki</strong></a>: The main wiki holding information about Methods, Specifications, Formats etc.</li>
              <li><a href="/docs/tools"><strong>Tools</strong></a>: A comprehensive list of tools referenced in the Wiki</li>
              <li><a href="/docs/playbooks"><strong>IR Playbooks</strong></a>: A list of Incident Response Playbooks for different scenarios</li>
            </ul>
          </div>
        </div>
        <div class="container mt-5">
          <div class="row mb-3">
            <div class="col">
              <div class="card">
                <div class="card-header text-center"><a href="/docs/wiki"><strong>Wiki</strong></a></div>
                <div class="card-body p-2">
                  <p class="card-text">The DFIR Wiki aims to document methods and steps regarding Data Gathering, Data Analysis and Reporting as well as overall Incident Response procedures and actions.
                    <br />The current strcuture emphasises on OS/System Type and process steps:
                    <br /><br />
                    <ul>
                      <li><a href="/docs/wiki/processes">Overall Forensic Processes</a></li>
                      <li><a href="/docs/wiki/datagathering">Data Gathering techniques</a></li>
                      <li><a href="/docs/wiki/windows">Analysis of Windows Systems</a></li>
                      <li><a href="/docs/wiki/nix">Analysis of *nix Systems</a></li>
                      <li><a href="/docs/wiki/cloud">Analysis of Cloud Environments</a></li>
                      <li><a href="/docs/wiki/malware">Malware Analysis/ Reverse Engineering</a></li>
                    </ul></p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="card-header text-center"><a href="/docs/tools"><strong>Tools</strong></a></div>
                <div class="card-body p-2">
                  <p class="card-text">In the tools section you will find a curated list of all tools mentioned in the wiki and some more examples to tackle your daily tasks.
                  <br /><br />
                  <ul>
                    <li><a href="/docs/tools/utility">Utility-Tools to speed up daily tasks</a></li>
                    <li><a href="/docs/tools/suites">Fully fleged Forensic Analysis Suites</a></li>
                    <li><a href="/docs/tools/datagathering">Tools for Data Gathering</a></li>
                    <li><a href="/docs/tools/windows">Tools for Windows Artefacts</a></li>
                    <li><a href="/docs/tools/nix">Tools for *nix Artefacts</a></li>
                    <li><a href="/docs/tools/malware">Tools for Malware Analysis/ Reverse Engineering</a></li>
                  </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-5">
            <div class="col">
              <div class="card p-2">
                <div class="card-header text-center"><a href="/docs/playbooks"><strong>IR Playbooks</strong></a></div>
                <div class="card-body">
                  <p class="card-text">Incident Response is a though topic mainly derived from experiences made in the field. To help guide new personelle we*ve written some basic guides to follow along and to get inspiration for your handling current incidents.
                    <br /> Currently the only guide available is for <a href="/docs/playbooks/ransomware">Ransomware</a> Incidents.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container mt-5">
          <div>
            <h2>Contributions</h2>
          </div>
        </div>
      </main>
    </Layout >
  );
}
